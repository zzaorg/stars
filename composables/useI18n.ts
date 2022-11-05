export const useI18n = () => {
    const route = useRoute()
    const isRTL = computed(() => !route.fullPath.match(/\/en(\/|$)/))
    const lang = ref<'en' | 'fa'>(isRTL.value ? 'fa' : 'en')
    const direction = computed(() => isRTL.value ? 'rtl' : 'ltr')
    const dateFormatterFa = new Intl.DateTimeFormat('fa-IR', { month: 'long', day: 'numeric', year: 'numeric' })
    const dateFormatterEn = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

    const t = (key: string) => {
        return texts[lang.value][key] || key
    }
    const date = (date: Date | string, language?: 'fa' | 'en') => {
        language = language || lang.value
        if (!date) return ''
        if (language === 'fa') return dateFormatterFa.format(new Date(date))
        return dateFormatterEn.format(new Date(date))
    }
    return {
        lang,
        direction,
        $t: t,
        $date: date
    }
  }
  
  const texts: Record<'fa' | 'en', any> = {
   fa: {
    Birth: 'تولد',
    Death: 'فوت',
    Age: 'سن',
    Gallery: 'گالری',
    Years: 'سال',
    'Filtered by': 'فیلتر شده بر اساس',
    'Back To List': 'بازگشت به لیست',
    'Search here': 'اینجا سرچ کنید',
    person: 'نفر',
  
    // Cities
    Zahedan: 'زاهدان',
    Kerman: 'کرمان',
    Tehran: 'تهران',
    Mashhad: 'مشهد',
    Shiraz: 'شیراز',
    Isfahan: 'اصفهان',
    Tabriz: 'تبریز',
    Qom: 'قم',
    Rasht: 'رشت',
    Karaj: 'کرج',
    Kermanshah: 'کرمانشاه',
    Ahvaz: 'اهواز',
    Arak: 'اراک',
    Qazvin: 'قزوین',
    Hamadan: 'همدان',
    Khorramabad: 'خرم‌آباد',
    Sanandaj: 'سنندج',
    Birjand: 'بیرجند',
    Yazd: 'یزد',
    Zanjan: 'زنجان',
    Nowshahr: 'نوشهر',
    BandarAbbas: 'بندرعباس',
    Sari: 'ساری',
    Khorramshahr: 'خرمشهر',
    Urmia: 'ارومیه',
    Kish: 'کیش',
    Qeshm: 'قشم',
    Qaemshahr: 'قائم‌شهر',
    Baneh: 'بانه',
    Lahijan: 'لاهیجان',
    Piranshahr: 'پیرانشهر',
    Mahabad: 'مهاباد',
    Qasreshirin: 'قصرشیرین',
    Parand: 'پرند',
    Dezful: 'دزفول',
    Janatabad: 'جنت‌آباد',
    Bukan: 'بوکان',
    'Salas-e Babajani': 'سلاس باباجانی',
    Saqez: 'سقز',
    Salmas: 'سلماس',
    Marivan: 'مریوان',
    Talish: 'تالش',
    Pakdasht: 'پاکدشت',
    Garmsar: 'گرمسار',
    'Bandar Anzali': 'بندر انزلی',
    Fuladshahr: 'فولاد شهر',
    Dehdasht: 'دهدشت',
    'Eslamabad-e Gharb': 'اسلام‌آبادغرب',
    Langarud: 'لنگرود',
    Quchan: 'قوچان',
    Oshnavieh: 'اشنویه',
    Balo: 'بالو',
    Shahriar: 'شهریار',
    Amol: 'آمل',
    Divandarreh: 'دیواندره',
    Rezvanshahr: 'رضوانشهر',
    Zarinshahr: 'زرین‌شهر',
    Babol: 'بابل',
    'Shahr-e Rey': 'شهرری',
    Ilam: 'ایلام',
    Hashtrud: 'هشترود',
    Hashtgerd: 'هشتگرد',
    Saravan: 'سراوان',
    Hamedan: 'همدان',
    Chaldoran: 'چالدران',
    Khash: 'خاش',
  
  
    // Provinces
    'Sistan and Baluchestan': 'سیستان و بلوچستان',
    'West Azerbaijan': 'آذربایجان غربی',
    'East Azerbaijan': 'آذربایجان شرقی',
    Ardabil: 'اردبیل',
    'Gilan': 'گیلان',
    Mazandaran: 'مازندران',
    Markazi: 'مرکزی',
    'Hormozgan': 'هرمزگان',
    'Kohgiluyeh and Boyer-Ahmad': 'کهگیلویه و بویراحمد',
    'Khuzestan': 'خوزستان',
    Alborz: 'البرز',
    Kurdistan: 'کردستان',
    'Razavi Khorasan': 'خراسان رضوی',
    'North Khorasan': 'خراسان شمالی',
    'South Khorasan': 'خراسان جنوبی',
   },
   en: {}
  }