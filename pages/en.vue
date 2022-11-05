<template>
  <div class="flex p-4">
    <div class="w-64 px-4" v-if="false">
      <div class="sticky top-0">
        <div class="mb-2">
          <h2>City</h2>
          <select
            v-model="city"
            class="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Choose</option>
            <option v-for="(count, item) in groupByLocation" :key="item" :value="item">
              {{item}} ({{count}})
            </option>
          </select>
        </div>
        <!-- Date -->
        <div class="mb-2">
          <h2>Date</h2>
          <select
            v-model="date"
            class="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Choose</option>
            <option v-for="(count, item) in groupByDate" :key="item" :value="item">
              {{ dateFormatterEn.format(new Date(item)) }} ({{count}})
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="flex-1">
      <div class="pt-6 pb-3 mb-3 sticky top-0 bg-white z-20 flex gap-x-3">
        <input
          v-model="filter"
          placeholder="Filter"
          class="flex-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <div class="flex">
          <button @click="layout = 'grid'" class="w-10 flex justify-center items-center flex-none border border-gray-300 rounded-md rounded-r-none shadow-sm py-1 px-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <svg data-testid="geist-icon" fill="none" height="18" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="18" style="color: currentcolor; vertical-align: text-top;"><path d="M3 3h7v7H3z"></path><path d="M14 3h7v7h-7z"></path><path d="M14 14h7v7h-7z"></path><path d="M3 14h7v7H3z"></path></svg>
          </button>
          <button @click="layout = 'list'" class="w-10 flex justify-center items-center flex-none border border-l-0 border-gray-300 rounded-md rounded-l-none shadow-sm py-1 px-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3.71 16.29a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21a1 1 0 0 0-.21.33a1 1 0 0 0 .21 1.09a1.15 1.15 0 0 0 .33.21a.94.94 0 0 0 .76 0a1.15 1.15 0 0 0 .33-.21a1 1 0 0 0 .21-1.09a1 1 0 0 0-.21-.33ZM7 8h14a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2Zm-3.29 3.29a1 1 0 0 0-1.09-.21a1.15 1.15 0 0 0-.33.21a1 1 0 0 0-.21.33a.94.94 0 0 0 0 .76a1.15 1.15 0 0 0 .21.33a1.15 1.15 0 0 0 .33.21a.94.94 0 0 0 .76 0a1.15 1.15 0 0 0 .33-.21a1.15 1.15 0 0 0 .21-.33a.94.94 0 0 0 0-.76a1 1 0 0 0-.21-.33ZM21 11H7a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM3.71 6.29a1 1 0 0 0-.33-.21a1 1 0 0 0-1.09.21a1.15 1.15 0 0 0-.21.33a.94.94 0 0 0 0 .76a1.15 1.15 0 0 0 .21.33a1.15 1.15 0 0 0 .33.21a1 1 0 0 0 1.09-.21a1.15 1.15 0 0 0 .21-.33a.94.94 0 0 0 0-.76a1.15 1.15 0 0 0-.21-.33ZM21 16H7a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2Z"/></svg>
          </button>
        </div>
      </div>
      <div v-if="layout === 'grid'" class="grid grid-cols-1 gap-y-5 gap-x-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <article v-for="item in filteredData" :key="item._path" :href="item._path" >
          <div class="flex items-start border rounded-md">
            <img
              :src="item._path + '/' + item.images?.[0]"
              :alt="item.name"
              width="120"
              height="176"
              class="flex-none rounded-md bg-slate-100 object-cover w-[120px] h-[176px]"
              loading="lazy"
            />
            <div class="min-w-0 relative flex-auto px-4 py-2">
              <h2 class="font-semibold text-slate-900 truncate">{{ item.name }}</h2>
              <h2 class="font-semibold text-slate-900 truncate">{{ item.nameFa }}</h2>
              <dl class="mt-2 flex flex-wrap text-sm leading-6 font-medium">
                <div @click.prevent="city = item.death?.location">
                  <dt class="sr-only">Location</dt>
                  <dd class="px-1.5 ring-1 ring-slate-200 rounded">{{ item.death?.location }}</dd>
                </div>

                <div class="flex-none w-full mt-2 font-normal">
                  <dt class="sr-only">Cast</dt>
                  <dd class="text-slate-400">{{ item.death?.date && dateFormatterEn.format(new Date(item.death.date)) }}</dd>
                </div>
              </dl>
            </div>
          </div>
        </article>
      </div>
      <AppTable :rows="filteredData" v-else />
    </div>
  </div>
</template>

<script setup>
const dateFormatterEn = new Intl.DateTimeFormat('en-GB', { dateStyle: 'long' })

const { data } = await useAsyncData(() => queryContent().without(['body', 'excerpt', '_file']).sort({'death.date': -1 }).find(), {
  transform: data => data
    .map(item => ({
      ...item, text: `${item.name} ${item.death?.location || ''} ${item.death?.date || ''} ${item.nameFa}`.toLocaleLowerCase(),
      death: {
        ...item.death,
        dateEn: item.death?.date && dateFormatterEn.format(new Date(item.death.date))
      }
    }))
})

const layout = ref('grid')
const filter = ref('')
const city = ref('')
const date = ref('')

const filteredData = computed(() => {
  let result = data.value

  if (city.value) {
    result = result.filter(item => item.death?.location === city.value)
  }

  if (date.value) {
    result = result.filter(item => item.death?.date === date.value)
  }

  if (!filter.value) {
    return result
  }

  const filterValue = filter.value.toLowerCase()
  return result.filter(item => item.text.includes(filterValue))
})

const groupByLocation = computed(() => {
  return data.value.reduce((acc, item) => {
    const location = item.death?.location
    if (!acc[location]) {
      acc[location] = 0
    }
    acc[location] += 1
    return acc
  }, {})
})

const groupByDate = computed(() => {
  return data.value.reduce((acc, item) => {
    const date = item.death?.date || 'Unknown'
    if (!acc[date]) {
      acc[date] = 0
    }
    acc[date] += 1
    return acc
  }, {})
})
</script>