<template>
  <div>
    <!-- hero -->
    <div class="relative">
      <picture class="absolute inset-0 -mt-16 -z-10 flex">
        <source srcset="~/assets/img/banner-2xl.webp" media="(min-width: 1536px)"/>
        <source srcset="~/assets/img/banner-lg.webp" media="(min-width: 1024px)"/>
        <img src="~/assets/img/banner-sm.webp" class="w-full object-cover" alt="decorative hero image"/>
      </picture>
      <div class="container h-[800px] flex justify-end items-center text-right">
        <h1 class="text-6xl leading-relaxed text-white">
          Data enables <span class="text-orange-600">science</span>.<br />
          We enable <span class="text-orange-600">data</span>.
        </h1>
      </div>
    </div>

    <div class="container py-16 text-center">
      <h2 class="text-2xl mb-4">What we do</h2>
      <p class="mx-auto prose">
        Digitalization is about people. So UniteLabs connects everyone in the
        laboratory for collaboration. Use our cloud platform to design
        protocols, simulate experiment execution, and share results with
        colleagues. While you're in the lab, the human & machine-readable
        protocol will either guide you every step of the way or automate your
        work altogether. Either way, all actions in the labs are traced and
        results automatically uploaded to the cloud making lost data a thing of
        the past - even the one that you didn't know you needed. Based on our
        next-gen device integration & driver platform, adding a device is as
        easy as clicking a button, saving countless hours and money on
        integration projects. When you're back at the desk, everything you did
        is documented and it is up to you to connect the dots with the help of
        our smart data visualisation. You want to analyze that data in that AI
        tool you like? No problem: UniteLabs effortlessly connects to every
        software in the lab and beyond. We provide the digital infrastructure
        for the lab of the future.
      </p>
      <p class="mx-auto prose">
        UniteLabs will help you reduce menial tasks, eliminate errors, and focus
        on the things that really matter to you. Your time is valuable. Don't
        waste it. Contact us to find out how you can increase your scientific
        output today!
      </p>
    </div>
  </div>
</template>
