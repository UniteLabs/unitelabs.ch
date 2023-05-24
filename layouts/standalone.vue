<template>
  <div class="app">
    <div class="flex min-w-app">
      <div class="flex-auto flex flex-col min-h-screen max-w-full relative">
        <!-- header -->
        <nav class="h-16 border-b">
          <div class="container flex justify-between">
            <img src="/images/future-labs-live/sila-logo.svg" class="p-4 h-16" />
            <img src="/images/future-labs-live/future-labs-logo.png" class="p-4 h-16" />
          </div>
        </nav>

        <!-- main -->
        <main id="main" class="flex-1">
          <slot></slot>
        </main>
      </div>
    </div>
  </div>
</template>
