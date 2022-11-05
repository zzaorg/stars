<template>
  <div class="relative min-h-screen" :dir="$direction">
    <NuxtPage/>
    <div class="h-16" />
    <footer class="absolute left-0 right-0 bottom-0 text-xs text-gray-500">
      <ul class="mx-auto mt-16 max-w-2xl block flex justify-center p-1">
        <li>
          <NuxtLink href="https://irfont.ir/fonts/%d8%af%d8%a7%d9%86%d9%84%d9%88%d8%af-%d9%82%d9%84%d9%85-%d9%81%d8%a7%d8%b1%d8%b3%db%8c-%da%af%d9%86%d8%af%d9%85-gandom-font/">
            قلم فارسی گندم
          </NuxtLink>
        </li>
      </ul>
    </footer>
  </div>
</template>

<style>
@font-face {
  font-family: Gandom;
  src: url('/fonts/Gandom.eot');
  src: url('/fonts/Gandom.eot?#iefix') format('embedded-opentype'),
       url('/fonts/Gandom.woff') format('woff'),
       url('/fonts/Gandom.ttf') format('truetype');
  font-weight: normal;
}

body {
  font-family: Gandom;
  direction: rtl;
  text-align: right;
}
body * {
  font-family: Gandom;
}
</style>