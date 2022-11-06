<template>
  <div class="flex">
    <div class="w-64 px-4" v-if="false">
      <div class="sticky top-[1rem]">
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
      <p v-if="lang === 'fa'" class="p-4 pt-6 bg-yellow-500 text-xs text-center">
        این لیست کامل نبوده و تعداد عزیزانی که دیگر در میان ما نیستد بیشتر از تعداد نمایش داده شده در این لیست است.<br>
        اگر از نام فردی که در این لیست نیست را می‌دانید یا اطلاعات تکمیلی در مورد هرکدام عزیزان دارید لطفا به ما اطلاع دهید.
      </p>
      <div class="p-4 pb-3 mb-3 sticky top-0 bg-white z-20">
        <div class="flex gap-x-3">
          <input
            v-model="filter"
            :placeholder="$t('Search here')"
            class="flex-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        <!-- <div class="flex" dir="ltr">
          <button @click="layout = 'grid'" class="w-10 flex justify-center items-center flex-none border border-gray-300 rounded-md rounded-r-none shadow-sm py-1 px-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <svg data-testid="geist-icon" fill="none" height="18" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="18" style="color: currentcolor; vertical-align: text-top;"><path d="M3 3h7v7H3z"></path><path d="M14 3h7v7h-7z"></path><path d="M14 14h7v7h-7z"></path><path d="M3 14h7v7H3z"></path></svg>
          </button>
          <button @click="layout = 'list'" class="w-10 flex justify-center items-center flex-none border border-l-0 border-gray-300 rounded-md rounded-l-none shadow-sm py-1 px-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3.71 16.29a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21a1 1 0 0 0-.21.33a1 1 0 0 0 .21 1.09a1.15 1.15 0 0 0 .33.21a.94.94 0 0 0 .76 0a1.15 1.15 0 0 0 .33-.21a1 1 0 0 0 .21-1.09a1 1 0 0 0-.21-.33ZM7 8h14a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2Zm-3.29 3.29a1 1 0 0 0-1.09-.21a1.15 1.15 0 0 0-.33.21a1 1 0 0 0-.21.33a.94.94 0 0 0 0 .76a1.15 1.15 0 0 0 .21.33a1.15 1.15 0 0 0 .33.21a.94.94 0 0 0 .76 0a1.15 1.15 0 0 0 .33-.21a1.15 1.15 0 0 0 .21-.33a.94.94 0 0 0 0-.76a1 1 0 0 0-.21-.33ZM21 11H7a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM3.71 6.29a1 1 0 0 0-.33-.21a1 1 0 0 0-1.09.21a1.15 1.15 0 0 0-.21.33a.94.94 0 0 0 0 .76a1.15 1.15 0 0 0 .21.33a1.15 1.15 0 0 0 .33.21a1 1 0 0 0 1.09-.21a1.15 1.15 0 0 0 .21-.33a.94.94 0 0 0 0-.76a1.15 1.15 0 0 0-.21-.33ZM21 16H7a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2Z"/></svg>
          </button>
        </div> -->

        </div>
        <div class="mt-1">
          <span class="text-gray-500">
            <strong class="text-black">{{ filteredData.length }}</strong> {{ $t('person') }}
          </span>
          <span v-if="city || province || date || ageFilter" class="text-gray-500">
            <span class="mx-2">|</span>
            <span class="text-gray-500 inline-flex gap-2">
              <span>{{ $t('Filtered by')}}:</span>
              <span v-if="city" class="flex items-center justify-center gap-2 text-black cursor-pointer border px-2 rounded text-sm" @click="city = ''">
                <svg class="w-4 h-4" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12L5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
                {{ $t(city) }}
              </span>
              <span v-if="province" class="flex items-center justify-center gap-2 text-black cursor-pointer border px-2 rounded text-sm" @click="province = ''">
                <svg class="w-4 h-4" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12L5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
                {{ $t(province) }}
              </span>
              <span v-if="date" class="flex items-center justify-center gap-2 text-black cursor-pointer border px-2 rounded text-sm" @click="date = ''">
                <svg class="w-4 h-4" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12L5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
                {{ $date(date) }}
              </span>
              <span v-if="ageFilter" class="flex items-center justify-center gap-2 text-black cursor-pointer border px-2 rounded text-sm" @click="ageFilter = ''">
                <svg class="w-4 h-4" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12L5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
                {{ ageFilter }} {{ $t('Years') }}
              </span>
            </span>
          </span>
        </div>
      </div>
      <div class="p-4">
        <div v-if="layout === 'grid'" class="grid grid-cols-1 gap-y-5 gap-x-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <article v-for="item in filteredData" :key="item._path" >
            <div class="flex items-start border rounded-md">
              <NuxtLink
                v-if="item.images && item.images.length"
                :to="join(language, item._path) + '/'"
                class="block w-[120px] h-[176px] flex-none"
              >
                <img
                  :src="withAppBase(item._path, item.images[0])"
                  :alt="item.name"
                  width="120"
                  height="176"
                  class=" rounded-md bg-slate-100 object-cover w-[120px] h-[176px]"
                  loading="lazy"
                />
              </NuxtLink>
              <div class="flex-1 min-w-0 relative flex flex-col flex-auto px-4 py-2  h-[176px]">
                <h2 class="font-semibold text-slate-900 truncate">
                  <NuxtLink :to="join(language, item._path) + '/'">
                    {{ lang === 'en' ? item.name : item.nameFa }}
                  </NuxtLink>
                </h2>
                <dl class="mt-2 flex flex-1 flex-wrap text-sm leading-2 font-medium gap-x-1">
                  <div class="cursor-pointer" @click.prevent="city = item.death?.city">
                    <dt class="sr-only">Location</dt>
                    <dd class="px-1.5 text-sm ring-1 ring-slate-200 rounded">{{ $t(item.death?.city) }}</dd>
                  </div>
                  <div v-if="item.death?.province" class="cursor-pointer" @click.prevent="province = item.death?.province">
                    <dt class="sr-only">Location</dt>
                    <dd class="px-1.5 text-sm ring-1 ring-slate-200 rounded">{{ $t(item.death?.province) }}</dd>
                  </div>

                  <div class="flex-none w-full font-normal">
                    <dt class="sr-only">Cast</dt>
                    <dd class="text-slate-600">
                      <span class="cursor-pointer" @click="date = item.death.date">{{ $date(item.death.date) }} </span>
                      <span v-if="item.death?.age" class="cursor-pointer" @click="ageFilter = item.death.age" > • {{ item.death?.age }} {{ $t('Years') }}</span>
                    </dd>
                  </div>
                </dl>
                <div class="bottom-0" dir="ltr">
                  <a v-if="item.wikipedia" rel="noopener noreferrer" target="_blank" title="wikipedia" :href="item.wikipedia" class="inline-block border border-gray-300 rounded-md shadow-sm py-1 px-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <IconWikipedia class="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
        <AppTable class="text-right" :rows="filteredData" v-else />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { withAppBase, join } = useURL()
const { $t, $date, lang } = useI18n()
const route = useRoute()
const router = useRouter()
const language = computed(() => lang.value === 'fa' ? '' : lang.value)
const { data } = await useAsyncData<any[]>(() => queryContent().without(['body', 'excerpt', '_file']).sort({'death.date': -1 }).find(), {
  transform: data => data
    .map(item => ({
      ...item, text: `${item.name} ${item.death?.city || ''} ${$t(item.death?.city || '')} ${item.death?.province || ''} ${$t(item.death?.province || '')} ${$date(item.death?.date)} ${item.nameFa}`.toLocaleLowerCase()
    }))
})

const description = computed(() => `عزیزانی که در روزهای گذشته از میان ما رفته‌اند.`)
useHead({
  title: 'کشته شدگان اعتراضات سراسری ایران ۱۴۰۱',
  meta: [
    { name: 'description', content: description.value },
    { name: 'og:title', content: 'کشته شدگان اعتراضات سراسری ایران ۱۴۰۱' },
    { name: 'og:description', content: description.value },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'کشته شدگان اعتراضات سراسری ایران ۱۴۰۱' },
    { name: 'twitter:description', content: description.value }
  ],
})

const layout = ref('grid')
const filter = computed({
  get: () => route.query.q as string || '',
  set: (value) => router.replace({
    path: route.path,
    query: { ...route.query, q: value || undefined }
  })
})
const city = computed({
  get: () => route.query.city as string || '',
  set: (value) => router.replace({
    path: route.path,
    query: { ...route.query, city: value || undefined }
  })
})
const province = computed({
  get: () => route.query.province as string || '',
  set: (value) => router.replace({
    path: route.path,
    query: { ...route.query, province: value || undefined }
  })
})
const date = computed({
  get: () => route.query.date as string || '',
  set: (value) => router.replace({
    path: route.path,
    query: { ...route.query, date: value || undefined }
  })
})
const ageFilter = computed({
  get: () => route.query.age,
  set: (value) => router.replace({
    path: route.path,
    query: { ...route.query, age: value || undefined }
  })
})


const filteredData = computed(() => {
  let result = data.value || []

  if (city.value) {
    result = result.filter(item => item.death?.city === city.value)
  }

  if (province.value) {
    result = result.filter(item => item.death?.province === province.value)
  }

  if (date.value) {
    result = result.filter(item => item.death?.date === date.value)
  }

  if (ageFilter.value) {
    if (String(ageFilter.value).startsWith(">")) {
      const age = +ageFilter.value.slice(1)
      result = result.filter(item => item.death?.age > age)
    } else if (String(ageFilter.value).startsWith("<")) {
      const age = +ageFilter.value.slice(1)
      result = result.filter(item => item.death?.age < age)
    } else {
      result = result.filter(item => item.death?.age === ageFilter.value)
    }
  }

  if (!filter.value) {
    return result
  }

  const filterValue = filter.value.toLowerCase()
  return result.filter(item => item.text.includes(filterValue))
})

const groupByLocation = computed(() => {
  return data.value!.reduce((acc, item) => {
    const location = item.death?.city
    if (!acc[location]) {
      acc[location] = 0
    }
    acc[location] += 1
    return acc
  }, {})
})

const groupByDate = computed(() => {
  return data.value!.reduce((acc, item) => {
    const date = item.death?.date || 'Unknown'
    if (!acc[date]) {
      acc[date] = 0
    }
    acc[date] += 1
    return acc
  }, {})
})
</script>