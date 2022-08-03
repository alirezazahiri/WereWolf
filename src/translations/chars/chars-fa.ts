const names = [
  "simple-citizen", // 1
  "armored", // 2
  "detective", // 3
  "doctor", // 4
  "opium", // 5
  "sniper", // 6
  "priest", // 7
  "mayor", // 8
  "hero", // 9
  "judge", // 10
  "cowboy", // 11
  "badass", // 12
  "crooked-hands", // 13
  "revealer", // 14
  "pitman", // 15
  "spectre", // 16
  "contagious", // 17
  "prison-officer", // 18
  "fan", // 19
  "saba", // 20
  "elite", // 21
  "lawyer", // 22
  "spy", // 23
  "baker", // 24
  "nurse", // 25
  "quarantiner", // 26
  "hunter", // 27
  "simin", // 28
  "link", // 29
  "poplar", // 30
  "narrator", // 31
  "hannah", // 32
  "savior", // 33
  "dentist", // 34
  "reporter", // 35

  // ----- Mafia -----

  "simple-mafia", // 36
  "godfather", // 37
  "regicide", // 38
  "sweetheart", // 39
  "psychologist", // 40
  "naughty", // 41
  "slayer", // 42
  "dark-blood", // 43
  "pharmacist", // 44
  "injector", // 45
  "nightmare", // 46
  "night-sleeper", // 47
  "surgeon", // 48
  "guard", // 49
  "double-faced", // 50
  "bomb-maker", // 51
  "charlatan", // 52
  "negotiator", // 53
  "joker", // 54

  // ----- Mid Independents -----

  "malefactor", // 55
  "unknown", // 56
  "twin", // 57
  "sick", // 58
  "dearest", // 59

  // ----- Independents -----

  "thousand-faces", // 60
  "deputy", // 61
  "evil", // 62
  "werewolf", // 63
  "hybrid", // 64
  "sandica", // 65
  "emad", // 66
  "corona", // 67
  "saghar", // 68

   // ------ Updates ------
  "salesman", // 69
  "sleep-walker", // 70
];

const citizens = [
  {
    icon: "user",
    title: "شهروند ساده",
    description: "در پیدا کردن مافیا مشارکت میکند و توانایی ویژه ای ندارد",
    max: 10,
    type: "citizen",
  },
  {
    icon: "shield",
    title: "زره پوش",
    description:
      "با تیر اول و یا رای خروج اول از بازی خارج نمیشود. در صورتی که با رای برود با افشای نقش خود در بازی می نشیند اما با تیر مافیا فقط زره اش را از دست میدهد ولی نقشش افشا نمی شود",
    max: 1,
    type: "citizen",
  },
  {
    icon: "search",
    title: "کارآگاه",
    description:
      "هر شب یک نفر را انتخاب می کند، گرداننده به او می گوید مافیا هست یا نه. (به غیر از رییس مافیا، دورو و بازیکنی که شارلاتان انتخابش کرده است)",
    max: 1,
    type: "citizen",
  },
  {
    icon: "medkit",
    title: "دکتر",
    description:
      "هر شب یک نفر را از حمله مرگبار نجات می دهد. فقط یک شب در طول بازی می تواند خودش را انتخاب کند و نجات دهد",
    max: 1,
    type: "citizen",
  },
  {
    icon: "fire",
    title: "افیون",
    description:
      "یک بار در شب می تواند کارش را انجام دهد و آن شب هیچ شخصیت غیر شهروندی بیدار نمی شود. خود افیون هم صبح فردای آن روز از بازی حذف خواهد شد",
    max: 1,
    type: "citizen",
  },
  {
    icon: "crosshairs",
    title: "اسنایپر",
    description:
      "هر شب در طول بازی اگر بخواهد می تواند یک نفر را انتخاب کند. اگر آن شخص مافیا باشد، کشته می شود و اگر شهروند باشد فقط اسنایپر می میرد. اگر شخصیت مستقل باشد، هیچ اتفاقی نمی افتد",
    max: 1,
    type: "citizen",
  },
  {
    icon: "leaf",
    title: "کشیش",
    description:
      "اولین شبی که مورد حمله قرار گیرد، توسط گرداننده نجات پیدا می کند . جادوگر نمی تواند او را جادو کند. هر سه شب در طول بازی یک نفر را انتخاب می کند، اگر گرگ نما باشد، آن شخص به یک شهروند ساده تبدیل می شود",
    max: 1,
    type: "citizen",
  },
  {
    icon: "building-o",
    title: "شهردار",
    description:
      "یک روز در طول بازی در مرحله دوم رای گیری می تواند رای گیری را ملغی کند. در شب معارفه دست دکتر و دکتر لِکتر را می بیند",
    max: 1,
    type: "citizen",
  },
  {
    icon: "bolt",
    title: "قهرمان",
    description:
      "هر دو شب در طول بازی یک نفر را انتخاب می کند. آن شخص به مدت 24 ساعت از هر اتفاقی نجات پیدا می کند، به غیر از حذف با رای گیری. او هرگز نمی تواند خودش را انتخاب کند",
    max: 1,
    type: "citizen",
  },
  {
    icon: "gavel",
    title: "قاضی",
    description:
      "دو بار در طول بازی اگر لازم بداند، در مرحله دوم رای گیری، یکی از متهمان را انتخاب می کند تا آن شخص از بازی خارج شود",
    max: 1,
    type: "citizen",
  },
  {
    icon: "user-times",
    title: "فدایی",
    description:
      "یک روز در طول بازی تا قبل از پایان مرحله اول رای گیری با اعلام کلمه فدایی بلند می شود و با دست به یک نفر اشاره می کند. آن شخص به همراه فدایی از بازی خارج می شوند",
    max: 1,
    type: "citizen",
  },
  {
    icon: "male",
    title: "گردن کلفت",
    description:
      "در اثر حمله بلافاصله کشته نمی شود. در پایان روز، پس از شرکت در رای گیری می میرد",
    max: 1,
    type: "citizen",
  },
  {
    icon: "money",
    title: "دست کج",
    description:
      "یک شب در طول بازی یک نفر را انتخاب می کند . آن شخص قابلیت های خود را از دست می دهد و به یک شهروند یا مافیای ساده تبدیل می شود. حمله او به کاراگاه و شخصیت های مستقل بی اثر است",
    max: 1,
    type: "citizen",
  },
  {
    icon: "bullhorn",
    title: "افشاگر",
    description:
      "دو شب در طول بازی می تواند بازیکنی را انتخاب کند. هروقت آن بازیکن از بازی حذف شود، کارتشان به همه نشان داده خواهد شد. اگر قبل از افشا شدن، افشاگر حذف شود، فقط گروه آن بازیکنان به صورت تصادفی اعلام خواهد شد",
    max: 1,
    type: "citizen",
  },
  {
    icon: "sign-language",
    title: "گورکن",
    description:
      "دو شب در طول بازی به گرداننده اعلام می کند که کارت های خارج شده از بازی را برای همه رو کند",
    max: 1,
    type: "citizen",
  },
  {
    icon: "search-plus",
    title: "کارآگاه ویژه",
    description:
      "هر شب بخواهد می تواند یک نفر را انتخاب کند ، گرداننده به او می گوید که شخصیت مستقل است یا نه. 3 بار استعلام منفی بگیرد، از بازی حذف می شود",
    max: 1,
    type: "citizen",
  },
  {
    icon: "eercast",
    title: "ناقل",
    description:
      "هر شخصی که او را در شب انتخاب کند، آلوده می شود. فرد آلوده در روز اول لال می شود و شب نمی تواند کاری انجام دهد. روز دوم نمی تواند رای دهد و شب دوم می میرد",
    max: 1,
    type: "citizen",
  },
  {
    icon: "lock",
    title: "زندانبان",
    description:
      "دو شب در طول بازی یکی از بازیکنان به جز خودش را به زندان می فرستد. آن شخص به مدت 24 ساعت به عنوان زندانی از بازی خارج می شود",
    max: 1,
    type: "citizen",
  },
  {
    icon: "life-ring",
    title: "هوادار",
    description:
      "هر روز با اولین رای خود در مرحله اول رای گیری، یک بازیکن را انتخاب می کند. پس از پایان شمارش آراء جای آن بازیکن با بازیکن پایینترش جابجا می شود",
    max: 1,
    type: "citizen",
  },
  {
    icon: "exchange",
    title: "صبا",
    description:
      "یک شب در طول بازی می تواند یک بازیکن را انتخاب کند و نقش او را به مدت 24 ساعت تصاحب نماید و باید از قابلیت آن شخص استفاده نماید",
    max: 1,
    type: "citizen",
  },
  {
    icon: "graduation-cap",
    title: "نخبه",
    description:
      "یک بار می تواند نقش یک بازیکن یا بازیکن صاحب یک نقش شهروندی را از گرداننده بپرسد. نخبه دو نفر اولی که او را انتخاب کنند، شناسایی خواهد کرد",
    max: 1,
    type: "citizen",
  },
  {
    icon: "balance-scale",
    title: "وکیل",
    description:
      "یک روز در طول بازی یک نفر را به عنوان موکل انتخاب می کند. موکل تا زمان حضور وکیل در بازی با رای گیری حذف نمی شود، به جز تصمیم قاضی",
    max: 1,
    type: "citizen",
  },
  {
    icon: "user-secret",
    title: "جاسوس",
    description:
      "هر شب با مافیا بیدار می شود اما یک شهروند است. اگر کوچکترین اشاره مستقیم یا غیر مستقیمی به شخصیتش داشته باشد، شهروندان بازنده خواهند شد. اگر شارلاتان او را انتخاب کند، جاسوس از بازی خارج می شود",
    max: 1,
    type: "citizen",
  },
  {
    icon: "user",
    title: "نانوا",
    description:
      "شب اول به هیچ وجه کشته نمی شود. در صورت حذف نانوا، بعد از 5 شبانه روز بازی تمام خواهد شد. گرگ نما برنده می شود و اگر او حذف شده باشد مافیا برنده بازی خواهند بود",
    max: 1,
    type: "citizen",
  },
  {
    icon: "plus-square",
    title: "پرستار",
    description:
      "چهار شب در طول بازی یک نفر را انتخاب می کند. اگر بازیکن منتخب آلوده باشد، دوره بیماری اش بدون علائم خواهد بود و اگر فرد منتخب مورد حمله قرار گیرد و قرار باشد حذف شود، یک روز بیشتر در بازی می ماند",
    max: 1,
    type: "citizen",
  },
  {
    icon: "ambulance",
    title: "قرنطینه چی",
    description:
      "هر شب یک بازیکن را انتخاب می کند و به مدت 24 ساعت، از آن بازیکن در مقابل سرایت و انتقال بیماری محافطت می نماید",
    max: 1,
    type: "citizen",
  },
  {
    icon: "pied-piper-alt",
    title: "شکارچی",
    description:
      "هر دو شب در طول بازی یک نفر را انتخاب می کند. اگر فرد انتخاب شده گرگ نما باشد، آن شخص از بازی خارج می شود. در شب فقط شکارچی می تواند گرگ نما را بکشد",
    max: 1,
    type: "citizen",
  },
  {
    icon: "street-view",
    title: "سیمین",
    description:
      "هر شب یک نفر را انتخاب می کند، گرداننده به او می گوید که گرگ نما هست یا خیر (به غیر از دورگه) یک شب در طول بازی می تواند یکی از گرگ نما ها را بکشد",
    max: 1,
    type: "citizen",
  },
  {
    icon: "link",
    title: "پیوند",
    description:
      "در شب اول دونفر را انتخاب می کند. چنانچه هریک از دو نفر حذف شوند، آن بازیکن دیگر هم حذف خواهد شد",
    max: 1,
    type: "citizen",
  },
  {
    icon: "hourglass-1",
    title: "سپیدار",
    description:
      "تا زمانی که داخل بازی باشد، لشکر سیاه نمی توانند پیروز شوند. قابلیتهای لشکر سیاه تاثیری روی او ندارد",
    max: 1,
    type: "citizen",
  },
  {
    icon: "book",
    title: "راوی",
    description:
      "هرشب،در هرزمان از شب که بخواهد، یک بار دست بلند می کند و آخرین اتفاقی که قبلش افتاده باشد توسط گرداننده یادداشت می شود. بعد مرگ راوی، گرداننده تمام وقایع نوشته شده را میخواند. او فرشته نجات را می شناسد",
    max: 1,
    type: "citizen",
  },
  {
    icon: "female",
    title: "حنا",
    description:
      "هر شب در طول بازی اگر بخواهد می تواند یک نفر را انتخاب کند. اگر آن شخص مستقل باشد، بازیکن مستقل کشته می شود. اگرمستقل نباشد، اتفاقی نمی افتد. اگر 2 بار غیر مستقل انتخاب کند، حنا حذف می شود",
    max: 1,
    type: "citizen",
  },
  {
    icon: "pagelines",
    title: "فرشته نجات",
    description:
      "بازیکنی که در مرحله فرصت آخر قرار می گیرد اگر شخصیت فرشته نجات را درست حدس بزند، از بازی حذف نمی شود و فرشته نجات به شهروند ساده تبدیل می گردد. او هرگز نمی تواند خودش را انتخاب کند",
    max: 1,
    type: "citizen",
  },
  {
    icon: "wrench",
    title: "دندان پزشک",
    description:
      "هر شب یک بازیکن را انتخاب می کند ولی نمی تواند یک بازیکن را بیشتر از یک بار انتخاب نماید. آن شخص به مدت 24 ساعت حق حرف زدن ندارد",
    max: 1,
    type: "citizen",
  },
  {
    icon: "wifi",
    title: "خبرنگار",
    description:
      "نقش مقابل مذاکره کننده است و تلاش بر افشا کردن فرد مذاکره شده دارد",
    max: 1,
    type: "citizen",
  },
];
// ----------------------- MAFIA -------------------------------
const mafias = [
  {
    icon: "user",
    title: "مافیا ساده",
    description:
      "به همراه گروه مافیا سعی در گمراه کردن شهروندان دارد و توانایی ویژه ای ندارد",
    max: 10,
    type: "mafia",
  },
  {
    icon: "black-tie",
    title: "پدر خوانده",
    description:
      "هرشب تصمیم می گیرد چه کسی را بکشند. مافیا به گرگ نما و سندیکا نمی توانند حمله کنند. رییس توسط کاراگاه شناسایی نمی شود",
    max: 1,
    type: "mafia",
  },
  {
    icon: "tint",
    title: "شاه کش",
    description:
      "دوبار در طول شب یا مرحله دوم رای گیری می تواند نقش بازیکنی را حدس بزند. اگر درست حدس زده باشد آن بازیکن از بازی حذف می شود",
    max: 1,
    type: "mafia",
  },
  {
    icon: "heart",
    title: "معشوقه",
    description:
      "با مرگ او مافیا از شدت خشم به دو نفر حمله می کنند. با مرگ رییس مافیا، او جای رییس را می گیرد",
    max: 1,
    type: "mafia",
  },
  {
    icon: "handshake-o",
    title: "روانکاو",
    description:
      "یک شب به جز شب اول بازی، یک نفر را انتخاب می کند. آن شخص با حفظ قابلیت هایش به یک مافیا تبدیل می شود. (به غیر از جانی و شخصیت های مستقل)",
    max: 1,
    type: "mafia",
  },
  {
    icon: "flickr",
    title: "جَلَب",
    description:
      "یک شب در طول بازی یک نفر را انتخاب میکند و رای آن شخص فردا شمرده نمی شود. در مرحله دوم رای گیری، 2 رای به یک نفر یا 1 رای به دو نفر می دهد",
    max: 1,
    type: "mafia",
  },
  {
    icon: "500px",
    title: "قاتل حرفه ای",
    description:
      "یک شب در طول بازی یک نفر را انتخاب می کند. آن شخص 3 روز بعد وسط روز می میرد (تحت هر شرایطی). اگر به گرگ نما یا هزار چهره حمله کند، قاتل از بازی خارج می شود",
    max: 1,
    type: "mafia",
  },
  {
    icon: "drupal",
    title: "سیاه زخم",
    description:
      "یک شب در طول بازی می تواند ناقل را بکشد یا یک بازیکن آلوده را نجات دهد. اگر توسط گرگ نما انتخاب شود، به گرگ نما تبدیل نمی شود و آن گرگ نما می میرد",
    max: 1,
    type: "mafia",
  },
  {
    icon: "flask",
    title: "داروساز",
    description:
      "سه شب در طول بازی یک نفر را انتخاب میکند و به آن ها داروی مخصوص کرونا می دهد. همچنین به اولین نفر (غیر مافیایی) که انتخابش کند در ازای قابلیتش دارو می دهد. دارو باعث می شود بازیکن تا 3 شبانه روز آلوده نشود",
    max: 1,
    type: "mafia",
  },
  {
    icon: "eyedropper",
    title: "آمپول زن",
    description:
      "یک شب در طول بازی یک نفر را انتخاب میکند. گرداننده، هویت بازیکن و کاری که آن شب انجام داده است را به آمپول زن می گوید",
    max: 1,
    type: "mafia",
  },
  {
    icon: "grav",
    title: "کابوس",
    description:
      "هر بازیکنی او را در شب انتخاب کند دچار کابوس می شود. بازیکنی که اسیر می شود باید هرشب بیدار شود و اگر در شبی بیدار نشود، به خواب ابدی فرو میرود و حذف می گردد",
    max: 1,
    type: "mafia",
  },
  {
    icon: "hotel",
    title: "شب خٌسب",
    description:
      "هر شب یک نفر را انتخاب می کند. آن شخص به مدت 24ساعت هر کاری که انجام دهد، به خودش بر می گردد. اگر جادوگر را انتخاب کند، شب خسب از بازی حذف می گردد",
    max: 1,
    type: "mafia",
  },
  {
    icon: "user-md",
    title: "دکتر لِکتر",
    description:
      "هر شب یک نفر را از حمله مرگبار نجات می دهد. فقط یک شب میتواند خودش را انتخاب کند و نجات دهد. در شب معارفه برای گمراه کردن شهردار، همزمان با دکتر دست بلند می کند",
    max: 1,
    type: "mafia",
  },
  {
    icon: "car",
    title: "محافظ",
    description:
      "تا زمانی که در بازی حضور دارد، حمله جانی، گرگ نما، فدایی، دست کج و سندیکا (لیست سیاه) به رئیس مافیا بی اثر است. در صورت حذف رئیس مافیا، محافظ از معشوقه محافظت می کند",
    max: 1,
    type: "mafia",
  },
  {
    icon: "american-sign-language-interpreting",
    title: "دو رو",
    description:
      "تمام افراد مافیا را می شناسد اما آنها او را نمی شناسند. اگر کاراگاه از او استعلام بگیرد، گرداننده می گوید شهروند است. هرگز همراه با مافیا چشم باز نمی کند",
    max: 1,
    type: "mafia",
  },
  {
    icon: "bomb",
    title: "بمب ساز",
    description:
      "یک روز در طول بازی تا قبل از پایان مرحله اول رای گیری با اعلام کلمه بمب ساز بلند می شود. و با نزدیک شدن به یک نفر، او را بصورت انتحاری همراه با خود از بازی خارج می کند",
    max: 1,
    type: "mafia",
  },
  {
    icon: "hand-rock-o",
    title: "شارلاتان",
    description:
      "دو شب در طول بازی، یک نفر را انتخاب می کند. گرداننده شخصیت آن بازیکن را به کاراگاه برعکس می گوید. اگر جاسوس را انتخاب کند، جاسوس حذف می گردد",
    max: 1,
    type: "mafia",
  },
  {
    icon: "refresh",
    title: "مذاکره کننده",
    description:
      "او میتواند در شب با یک شهروند ساده مذاکره کند و او را به یک مافیا تبدیل کند. این عمل فقط روی شهروندان ساده ممکن است و بر شهروندان غیر ساده تاثیری ندارد",
    max: 1,
    type: "mafia",
  },
  {
    icon: "delicious",
    title: "جوکر",
    description:
      "هر شب یک نفر را انتخاب میکند و استعلام آن فرد را برای کارآگاه معکوس میکند. به این صورت که اگر شهروند باشد، مافیا نشان داده میشود و بالعکس. تنها یک بار میتواند از این قابلیت بر روی خودش استفاده کند.",
    max: 1,
    type: "mafia",
  },
];
// ----------------------- MID INDEPENDENTS -------------------------------
const mid_independents = [
  {
    icon: "hand-o-left",
    title: "جانی",
    description:
      "هر دو شب در طول بازی یک نفر را می کشد و در این شب از حمله مافیا در امان است. شرط پیروزی او ابتدا حذف مافیا و شخصیت های مستقل، پس از آن باقی ماندن بین دو نفر آخر است. (در ابتدا با شهروندان است، در انتها مستقل)",
    max: 1,
    type: "mid-independent",
  },
  {
    icon: "question",
    title: "مجهول",
    description:
      "در ابتدای بازی متعلق به هیچ گروهی نیست. اولین بار که توسط شخصی انتخاب شود، اتفاقی برایش نمی افتد و با آن شخص هم گروه می شود، اما قابلیت خاصی ندارد",
    max: 1,
    type: "mid-independent",
  },
  {
    icon: "slideshare",
    title: "همزاد",
    description:
      "در ابتدای بازی متعلق به هیچ گروهی نیست. هرشب که بخواهد یک نفر را انتخاب می کند . هر زمان آن بازیکن حذف شود، همزاد جایش را با حفظ تمام قابلیت ها می گیرد و شرط پیروزی او همانند همان بازیکن می شود",
    max: 1,
    type: "mid-independent",
  },
  {
    icon: "snowflake-o",
    title: "مریض",
    description:
      "در ابتدای بازی متعلق به هیچ گروهی نیست. اولین بار که توسط شخصی انتخاب شود، اتفاقی برایش نمی افتد و نقش آن بازیکن را کامل تصاحب می کند. آن بازیکن تبدیل به شخصیت ساده می شود و همچنین آلوده به کرونا شده است",
    max: 1,
    type: "mid-independent",
  },
  {
    icon: "gratipay",
    title: "جانان",
    description:
      "در شب های فرد دو نفر را انتخاب می کند و نقش های آن ها را می فهمد. جانی در شب بعدش باید یکی از این دو نفر را بکشد. شرط پیروزی او ماندن خودش یا جانی بین 2 نفر آخر است",
    max: 1,
    type: "mid-independent",
  },
];
// ----------------------- INDEPENDENTS -------------------------------
const independents = [
  {
    icon: "users",
    title: "هزار چهره",
    description:
      "شخصیت هر بازیکنی که با رای گیری از بازی خارج می شود را به مدت 24 ساعت تصاحب می کند. هر شخصی که کاری روی او انجام دهد، اثر آن کار به خودش بر می گردد (آیینه وار) شرط پیروزی او باقی ماندن بین سه نفر آخر است",
    max: 1,
    type: "independent",
  },
  {
    icon: "odnoklassniki",
    title: "نایب",
    description:
      "تا زمانی که دکتر یا دکتر لِکتر در بازی حضور داشته باشند، در شب کشته نمی شود. شهردار را می شناسد. به عنوان هویت، یک بدل دارد و زمانی که دکتر و دکتر لِکتر از بازی حذف شوند، یک تیر خواهد داشت . شرط پیروزی او، پیروزی هزار چهره است",
    max: 1,
    type: "independent",
  },
  {
    icon: "resistance",
    title: "شیطان صفت",
    description:
      "از شب دوم، هرشب باید به تعداد عدد آن شب از بین بازیکنان افرادی را انتخاب کند. اگر بازیکن ها همرنگ باشند، همگی حذف می شوند. شرط پیروزی او، پیروزی هزار چهره است",
    max: 1,
    type: "independent",
  },
  {
    icon: "gitlab",
    title: "گرگ نما",
    description:
      "هر 3 شب در طول بازی یک نفر را به گرگ نما تبدیل می کند. حمله او به شکارچی و کشیش بی اثر است. در شب فقط شکارچی می تواند گرگ نما را بکشد. شرط پیروزی او به دست آوردن حداقل نصف افراد شهر است",
    max: 1,
    type: "independent",
  },
  {
    icon: "stumbleupon",
    title: "دو رگه",
    description:
      "هر شب یک نفر را انتخاب می کند. گرداننده گرگ نما بودن آن بازیکن را به سیمین برعکس می گوید. گرگ نمایی است که قدرت تکثیر ندارد و توسط سیمین قابل شناسایی نیست. اگر کشیش را انتخاب کند، دورگه حذف می شود",
    max: 1,
    type: "independent",
  },
  {
    icon: "tencent-weibo",
    title: "سندیکا",
    description:
      "مافیا، جاسوس، دکتر، کاراگاه و جانی را می شناسد. از حمله گروهی مافیا و جانی در امان است. با انتخاب در مرحله دوم رای گیری، یک نفر از لیست سیاه کشته می شود. شرط پیروزی او، باقی ماندن بین سه نفر آخر است",
    max: 1,
    type: "independent",
  },
  {
    icon: "usb",
    title: "عماد",
    description:
      "در شب معارفه دو نفر را به عنوان پیش مرگ انتخاب می کند که با حفظ قابلیتشان جزو گروه او می شوند. هر وقت او بخواهد، کار آنها را انجام می دهد و هرکس به عماد حمله کند، آن دو پیش مرگ او می شوند. شرط پیروزی آنها، باقی ماندن عماد بین 3 نفر آخر است",
    max: 1,
    type: "independent",
  },
  {
    icon: "bug",
    title: "کرونا",
    description:
      "در صورت هر نوع تماس با کرونا یا بازیکن آلوده به کرونا، آلوده می شوید. 24 ساعت اول ابتلا، دوره مخفی بیماری است و از روز دوم، علائم بیماری مانند بیمار شدن توسط ناقل خواهد بود اما با قدرت سرایت بیشتر. شرط پیروزی او، حذف شدن تمام بازیکنان است، چه کرونا زنده باشد و چه مرده",
    max: 1,
    type: "independent",
  },
  {
    icon: "bandcamp",
    title: "ساغر",
    description:
      "هرشب میتواند یکی از معجون هایش را استفاده کند. هر معجون به ساغر قابلیت خاص می بخشد. شرط پیروزی او، باقی ماندن بین 3 نفر آخر است",
    html: `
      <div>
        <div>
          <p>او 8 معجون دارد</p> 
          <p>
          <span>مرگ</span>
          </br>
           بازیکن را حذف میکند
          </p>
          <p>
          <span>شهروند کش</span>
          </br>
           گرداننده یک شهروند را به طور تصادفی انتخاب و حذف میکند 
          </p>
          <p>
          <span>مافیا کش</span>
          </br>
           گرداننده یک مافیا را به طور تصادفی انتخاب و حذف میکند
          </p>
          <p>
          <span>افشا</span>
          </br>
           بازیکنی که این معجون به او داده شده است باید نقشش را به طور واضح به همه بگوید
          </p>
          <p>
          <span>بیمار کننده</span>
          </br>
            بازیکنی که این معجون به او داده شده بدون هیچ علامتی بعد از 48 ساعت در وسط روز از بازی حذف میشود(بیماری واگیردار نیست) 
            </p>
          <p>
          <span>جنون آور</span>
          </br>
           با استفاده از این معجون بازیکن نمیتواند از قابلیتش در شب استفاده کند و  به جای آن باید یک نفر را انتخاب کند تا آن شخص از بازی حذف شود و خودش هم به مدت 24 ساعت ساکت می ماند
          </p>
          <p>
          <span>نامیرایی</span>
          </br>
           دو معجون نامیرایی دارد که باعث میشود از بازی حذف نشود (مگر در رای گیری)
          </p>
        </div>
      </div>
      `,
    max: 1,
    type: "independent",
  },
];

const updates = [
  {
    icon: "address-card",
    title: "فروشنده",
    description:
      "یکبار در طول بازی نقش یک بازیکن را (چه شهروند چه مافیا) از او میگیرد و آن بازیکن  تبدیل به یک ساده در ساید خود میشود. (توجه کنید که نقش گرفته شده به خود فروشنده انتقال نمیابد!)",
    max: 1,
    type: "citizen",
  },
  {
    icon: "eye-slash",
    title: "خوابگرد",
    description:
      "هرشب گرداننده قبل از بیدار کردن هر نقش دیگری از او میپرسد که آیا میخواهد از قابلیتش استفاده کند یا خیر. تنها یکبار در طول بازی خوابگردی میکند و جلوی بیدار شدن مافیا را میگیرد و در صبح روز بعد از بازی خارج میشود.",
    max: 1,
    type: "citizen",
  },
];

const characters = [
  ...citizens,
  ...mafias,
  ...mid_independents,
  ...independents,
  ...updates,
];

export const chars_fa = { names, characters };
