<template>
  <div class="app">
    <div class="flex min-w-app">
      <div class="flex-auto flex flex-col min-h-screen max-w-full relative">
        <!-- header -->
        <Header class="bg-teal-900"></Header>

        <!-- main -->
        <main id="main" class="flex-1">
          <div class="container py-16">
            <div class="mx-auto prose text-center">
              <slot></slot>
            </div>
          </div>
        </main>

        <!-- footer -->
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>
