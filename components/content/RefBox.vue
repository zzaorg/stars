<template>
  <div class="border-4 rounded-xl">
    <div class="p-4 pr-8">
      <ContentSlot :use="$slots.default" />
    </div>
    <div class="bg-gray-200 px-4 py-2">
      <a :href="link" target="_blank" rel="noopener noreferrer" class="text-blue-500 block">
        {{ $t('Reference') }}
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
    link: {
        type: String,
        default: ''
    }
})
</script>
