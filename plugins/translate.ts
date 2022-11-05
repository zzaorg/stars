export default defineNuxtPlugin(() => {
  const { $t, $date } = useI18n()
  return {
    provide: {
      t: $t,
      date: $date
    }
  }
})
