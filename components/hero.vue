<template>
  <div class="relative">
    <picture class="absolute inset-0 -mt-16 -z-10 flex">
      <source
        srcset="~/assets/img/banner-2xl.webp"
        media="(min-width: 1536px)"
      />
      <source
        srcset="~/assets/img/banner-lg.webp"
        media="(min-width: 1024px)"
      />
      <img
        src="~/assets/img/banner-sm.webp"
        class="w-full object-cover"
        alt="decorative hero image"
      />
    </picture>
    <div class="container h-[800px] flex justify-end items-center text-right">
      <h1 class="text-6xl leading-relaxed text-white p-4">
        <ContentSlot :use="$slots.default" unwrap="p" />
      </h1>
    </div>
  </div>
</template>
