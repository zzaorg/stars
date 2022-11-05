<template>
  <div class="relative min-h-screen" :class="isRTL ? 'rtl' : 'ltr'">
    <div class="flex justify-center gap-2 fixed top-0 right-0 bg-blue-100 px-2 text-sm rounded-b z-30">
      <NuxtLink :to="withoutBase($route.fullPath, '/en')">
        فارسی
      </NuxtLink>
      |
      <NuxtLink :to="withBase($route.fullPath, '/en')">
        English
      </NuxtLink>
    </div>
    <NuxtPage/>
    <div class="h-16" />
    <footer v-if="isRTL" class="absolute left-0 right-0 bottom-0 text-xs text-gray-500">
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

<script setup>
import { withBase, withoutBase } from 'ufo'

const route = useRoute()
const isRTL = computed(() => !route.fullPath.match(/\/en(\/|$)/))
</script>

<style>
@font-face {
  font-family: Gandom;
  src: url('/fonts/Gandom.eot');
  src: url('/fonts/Gandom.eot?#iefix') format('embedded-opentype'),
       url('/fonts/Gandom.woff') format('woff'),
       url('/fonts/Gandom.ttf') format('truetype');
  font-weight: normal;
}

.rtl {
  direction: rtl; 
  font-family: Gandom;
}
.rtl * {
  font-family: Gandom;
}
</style>