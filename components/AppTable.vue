<template>

<div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 sticky">
            <tr>
                <th scope="col" class="w-10">
                </th>
                <th scope="col" class="py-3 px-6">
                    Name
                </th>
                <th scope="col" class="py-3 px-6">
                    Age
                </th>
                <th scope="col" class="py-3 px-6">
                    Province
                </th>
                <th scope="col" class="py-3 px-6">
                    City
                </th>
                <th scope="col" class="py-3 px-6">
                    Date
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, i) of rows" :key="item._path" class="border-b" :class="{ 'bg-gray-50': i % 2 === 1, 'bg-white': i % 2 === 0 }">
                <td class="w-10">
                  <img :src="item._path + '/' + item.images?.[0]" class="h-12 w-8 object-cover" >
                </td>
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    {{ item.name }}
                </th>
                <td class="py-4 px-6">
                    {{ item.death?.age }}
                </td>
                <td class="py-4 px-6">
                    {{ item.death?.province }}
                </td>
                <td class="py-4 px-6">
                    {{ item.death?.city }}
                </td>
                <td class="py-4 px-6">
                    {{ item.death?.dateEn }}
                </td>
            </tr>
        </tbody>
    </table>
</div>

</template>

<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
  rows: {
    type: Array as PropType<any[]>,
    required: true,
  }
})
</script>