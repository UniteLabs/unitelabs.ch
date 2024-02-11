<template>
  <div class="isolate py-24 sm:py-32">
    <div class="container">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 rounded-2xl ring-1 ring-gray-900/10 overflow-hidden"
      >
        <div
          class="relative px-6 sm:px-16 pt-24 sm:pt-32 pb-20 lg:py-48 ring-1 ring-gray-900/10"
        >
          <div
            class="absolute inset-0 -z-10 w-full overflow-hidden bg-gray-100"
          >
            <svg
              class="absolute inset-0 h-full w-full stroke-gray-200 bg-white mask-gradient-radial-tr from-white to-transparent"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="square"
                  width="200"
                  height="200"
                  x="100%"
                  y="-1"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M120 200V.5M.5 .5H200" fill="none"></path>
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                stroke-width="0"
                fill="url(#square)"
              ></rect>
            </svg>
          </div>
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Let's talk
          </h2>

          <p class="mt-6 text-lg leading-8 text-gray-600">
            To see a demo of how UniteLabs can help with your use case, or just
            to leave a message, please contact us.
          </p>

          <dl class="mt-10 space-y-4 text-base leading-7 text-gray-600">
            <div class="flex gap-4">
              <dt class="flex-none">
                <span class="sr-only">Address</span>
                <BuildingOffice2Icon class="text-gray-400 w-6 h-7" />
              </dt>
              <dd>Solothurnerstrasse 94<br />4053 Basel &centerdot; CH</dd>
            </div>
            <div class="flex gap-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <PhoneIcon class="text-gray-400 w-6 h-7" />
              </dt>
              <dd>+41 78 210 70 33</dd>
            </div>
            <div class="flex gap-4">
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <EnvelopeIcon class="text-gray-400 w-6 h-7" />
              </dt>
              <dd>info@unitelabs.ch</dd>
            </div>
          </dl>
        </div>

        <form
          class="px-6 sm:px-16 pb-24 sm:pb-32 pt-20 lg:py-48 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 bg-white"
        >
          <!-- first name-->
          <div>
            <label
              for="first-name"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div class="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autocomplete="given-name"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <!-- last name-->
          <div>
            <label
              for="last-name"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div class="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autocomplete="family-name"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <!-- email-->
          <div class="sm:col-span-2">
            <label
              for="email"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div class="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <!-- message-->
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div class="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows="4"
                class="resize-none block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>

          <div class="sm:col-span-2 flex gap-x-4">
            <SwitchGroup>
              <div class="flex h-6 items-center">
                <Switch
                  v-model="enabled"
                  name="terms"
                  class="relative flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 ui-checked:bg-teal-600 ui-not-checked:bg-gray-200"
                >
                  <span class="sr-only">Agree to policies</span>
                  <span
                    class="h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transform transition-transform duration-200 ease-in-out ui-checked:translate-x-3.5 ui-not-checked:translate-x-0"
                  />
                </Switch>
              </div>
              <SwitchLabel class="text-sm leading-6 text-gray-600">
                By selecting this, you agree to our privacy policy
              </SwitchLabel>
            </SwitchGroup>
          </div>

          <!-- submit -->
          <div class="sm:col-span-2 flex justify-end">
            <button
              type="submit"
              class="rounded-md bg-teal-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/vue/24/outline";
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";

const enabled = ref(false);
</script>
