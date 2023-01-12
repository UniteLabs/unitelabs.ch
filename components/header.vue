<template>
  <header>
    <a href="#main" class="sr-only">Skip to content</a>
    <div class="container h-16 flex items-center">
      <!-- logo -->
      <NuxtLink to="/" class="h-full flex items-center px-4">
        <Logo class="h-11" />
      </NuxtLink>

      <!-- spacer -->
      <div class="flex-1"></div>

      <!-- navigation -->
      <nav class="h-full">
        <ul class="hidden lg:flex items-center h-full">
          <li class="h-full">
            <NuxtLink class="inline-flex items-center h-full px-8 text-white border-t-4 border-t-transparent" to="/" active-class="border-t-white">
              Home
            </NuxtLink>
          </li>
          <li class="h-full">
            <NuxtLink class="inline-flex items-center h-full px-8 text-white border-t-4 border-t-transparent" to="/company/team" active-class="border-t-white">
              Team
            </NuxtLink>
          </li>
          <li>
            <a
              class="inline-flex items-center mx-4 py-1 px-6 rounded-full no-underline bg-orange-600 text-white"
              href="mailto:info+website@unitelabs.ch"
            >
              Get in Touch
            </a>
          </li>
        </ul>
      </nav>

      <!-- mobile menu -->
      <Popover v-slot="{ open }" class="relative h-full lg:hidden">
        <PopoverButton class="h-full flex items-center px-4 lg:hidden">
          <Icon
            class="text-white w-9 h-9"
            :name="open ? 'xmark' : 'bars-shifted'"
          ></Icon>
        </PopoverButton>

        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="translate-y-1 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="translate-y-1 opacity-0"
        >
          <PopoverPanel class="absolute z-10 right-0 min-w-[288px] bg-white">
            <nav>
              <ul class="flex flex-wrap justify-center items-center h-full text-center">
                <li class="w-full">
                  <NuxtLink class="flex justify-center w-full px-8 py-4" to="/">
                    Home
                  </NuxtLink>
                </li>
                <li class="w-full">
                  <NuxtLink class="flex justify-center w-full px-8 py-4" to="/company/team">
                    Team
                  </NuxtLink>
                </li>
                <li class="border-b border-gray-300 w-[80%]"></li>
                <li class="w-full">
                  <a
                    class="inline-flex items-center mx-4 my-3 py-1 px-6 rounded-full no-underline bg-orange-600 text-white"
                    href="mailto:info+website@unitelabs.ch"
                  >
                    Get in Touch
                  </a>
                </li>
              </ul>
            </nav>
          </PopoverPanel>
        </transition>
      </Popover>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import Logo from "@/assets/img/logo-invert.svg?component";
</script>
