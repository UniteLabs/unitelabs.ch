<template>
  <section class="relative flex flex-col lg:flex-row justify-center bg-gray-50">
    <div ref="slider" class="-mb-[305px] md:-mb-[414px] lg:-mb-0" :style="`opacity: ${Math.abs(ratio % 60 - 30) / 30};`">
      <slot></slot>
    </div>

    <figure
      class="nav sticky bottom-0 top-0 lg:h-screen flex px-4 justify-center items-center overflow-hidden"
    >
      <div
        class="grid gap-3 lg:gap-4 translate-y-1/2 lg:translate-y-0 rotate-0 drop-shadow-lg"
        :style="`--tw-rotate: -${ratio.toPrecision(4)}deg`"
      >
        <svg
          v-for="{ id, icon }, i in meta"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 260"
          class="w-[108px] md:w-[150px] col-span-4 row-span-2 pointer-events-none overflow-visible stroke-white stroke-8 fill-teal-900"
          :class="[positions[i], { 'stroke-orange-600': active === i }]"
        >
          <polygon
            class="pointer-events-auto"
            points="75,0 225,0 300,130 225,260 75,260 0,130"
            @click="handleClick(id)"
          ></polygon>
          <g :transform="`rotate(${i * 60}, 150, 130)`">
            <Icon
              v-if="icon"
              :name="icon"
              width="100"
              x="100"
              class="stroke-white"
              :class="{ 'stroke-orange-600': active === i }"
            ></Icon>
          </g>
        </svg>
      </div>
    </figure>
  </section>
</template>

<script setup lang="ts">
import { type Ref } from 'vue';

const positions = [
  "col-start-4 row-start-1",
  "col-start-7 row-start-2",
  "col-start-7 row-start-4",
  "col-start-4 row-start-5",
  "col-start-1 row-start-4",
  "col-start-1 row-start-2",
];

const slider = ref<HTMLElement | null>(null);
const slides = ref<HTMLElement[]>([]);

const active = ref(0);
const ratio = ref(0);

const slots = useSlots()

const meta = computed(() => {
  return slots.default?.().map(({ props }) => ({
    id: props?.id,
    icon: props?.icon,
  }));
})

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          active.value = Array.prototype.indexOf.call(
            entry.target.parentNode?.children,
            entry.target
          );
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  watch(slides.value, () => {
    slides.value
      .forEach((element) => observer.observe(element));
  });

  document
    .querySelectorAll(".slide")
    .forEach((element) => observer.observe(element));

  const obs = new IntersectionObserver((entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.addEventListener("scroll", handleScroll);
      } else {
        document.removeEventListener("scroll", handleScroll);
      }
    })
  );

  obs.observe(slider.value!);
});

let flag = ref(false);

function handleScroll(event: Event) {
  if (!slider.value) {
    return;
  }
  const rect = slider.value.getBoundingClientRect();
  ratio.value = Math.min(Math.max((360 * -rect.top) / rect.height, 0), 300);

  if (rect.top < 10 && rect.bottom > window.innerHeight) {
    if (!flag.value) {
      flag.value = true;
      startSnap();
    }
  } else {
    if (flag.value) {
      flag.value = false;
      endSnap();
    }
  }
}

function startSnap() {
  document.documentElement.classList.add("snap-y", "snap-mandatory");
}

function endSnap() {
  document.documentElement.classList.remove("snap-y", "snap-mandatory");
}

function handleClick(id: string) {
  const target = document.getElementById(id);
  target?.scrollIntoView({ behavior: "smooth" });
}

provide("SliderContext", {
  slides,
  register(element: Ref<HTMLElement | null>) {
    const el = unref(element);
    if (el && !slides.value.includes(el)) slides.value.push(el);
  }
})
</script>
