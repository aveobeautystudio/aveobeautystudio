/*
  AVEO BEAUTY STUDIO — SCRIPT.JS (MULTILINGUAL + EMAIL)
  Email для заявок: aveoa697@gmail.com
*/

const BOOKING_EMAIL = "aveoa697@gmail.com";

// 1. СЛОВАРЬ ИНТЕРФЕЙСА (BG / EN / RU / UK)
const translations = {
  bg: {
    page_title: "Aveo Beauty Studio — София",
    nav_services: "Услуги и цени",
    nav_about: "За нас",
    nav_reviews: "Отзиви",
    nav_contact: "Контакти",
    nav_book: "Запази час",
    hero_title: "Красотата е<br><em>във всеки детайл.</em>",
    hero_text: "Място за малко време само за теб. Професионална грижа, прецизност и нежно отношение в сърцето на София.",
    hero_cta: "Запази своя час",
    hero_services_link: "Разгледай услугите",
    hero_note: "ТВОЯТ МАЛЪК РИТУАЛ ЗА КРАСОТА",
    trust_rating: "Google рейтинг",
    trust_detail: "Внимание към детайла<br><span>и грижа с отношение</span>",
    trust_location: "Лозенец, София<br><span>ул. „Люботрън“ 5</span>",
    services_title: "Избери своята<br><em>процедура.</em>",
    services_intro: "Разгледай услугите по категории и цени. Избери това, от което имаш нужда, и изпрати заявка за удобен час.",
    price_footnote: "Всички цени са в евро (€). Потвърждението на часа се извършва след връзка с екипа на студиото.",
    about_eyebrow: "ЗА СТУДИОТО",
    about_title: "Красивото усещане<br>започва с <em>грижата.</em>",
    about_text: "В Aveo Beauty Studio вярваме, че всяка процедура заслужава внимание. Създадохме пространство, в което можеш да забавиш темпото, да се отпуснеш и да се погрижиш за себе си.",
    reviews_title: "Думите, които<br><em>ни вдъхновяват.</em>",
    reviews_count: "5 Google отзива",
    review_1_text: "„Много прецизна работа, чистота и приятна атмосфера. Валентина работи с внимание към детайла.“",
    review_2_text: "„Професионализъм, прецизност и отлично отношение към клиента. Благодаря за прекрасната работа!“",
    review_source: "Google review",
    reviews_all_btn: "Виж всички отзиви в Google",
    booking_title: "Готова ли си за<br><em>своето време?</em>",
    booking_text: "Попълни формата и изпрати заявка за час. Ще се свържем с теб, за да потвърдим свободния час.",
    form_heading: "Заяви посещение",
    form_name: "Име и фамилия",
    form_name_ph: "Как да се обръщаме към теб?",
    form_phone: "Телефон",
    form_services_label: "Избери една или повече услуги",
    picker_select_initial: "+ Избери услуги от менюто",
    picker_select_more: "+ Добави още услуга ({n} избрани)",
    picker_search_ph: "Търси процедура (напр. гел лак, вежди, почистване)...",
    picker_empty: "Няма намерени процедури",
    total_count: "Избрани услуги:",
    total_sum: "Ориентировъчна сума:",
    form_date: "Предпочитана дата",
    date_placeholder: "Избери дата",
    form_time: "Предпочитан час",
    time_placeholder: "Избери час",
    form_note: "Допълнителна информация",
    form_note_ph: "Предпочитан специалист или бележка...",
    form_submit: "Изпрати заявка",
    form_disclaimer: "Заявката не е автоматично потвърдена резервация. Ще се свържем с теб за потвърждение.",
    btn_pick: "Избери",
    btn_picked: "Добавено",
    contact_title: "Ще те очакваме<br><em>в Aveo.</em>",
    contact_address_label: "АДРЕС",
    contact_address: "ж.к. Лозенец, ул. „Люботрън“ 5,<br>1407 София, България",
    contact_phone_label: "ТЕЛЕФОН",
    contact_book_label: "ЗАПИСВАНЕ",
    contact_book_link: "Изпрати заявка през сайта ↗",
    footer_top: "Нагоре ↑",
    err_name: "Моля, въведете вашето име.",
    err_phone: "Моля, въведете телефон за връзка.",
    err_service: "Моля, изберете поне една услуга.",
    err_date: "Моля, изберете предпочитана дата.",
    err_time: "Моля, изберете час между 08:00 и 20:00.",
    sending_btn: "Изпращане...",
    sending_status: "Изпращаме вашата заявка...",
    sent_success: "Заявката е изпратена успешно! Ще се свържем с вас скоро за потвърждение.",
    sent_error: "Възникна грешка при изпращането. Моля, опитайте отново или се обадете на +359 88 702 3228.",
    from_prefix: "от ",
    sections: { nails: "нокти", face: "лице", epilation: "епилация", body: "тяло", all: "всички" },
    filter_all: "Всички",
    weekdays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
    months: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
    months_gen: ["януари", "февруари", "март", "април", "май", "юни", "юли", "август", "септември", "октомври", "ноември", "декември"]
  },

  en: {
    page_title: "Aveo Beauty Studio — Sofia",
    nav_services: "Services & Prices",
    nav_about: "About Us",
    nav_reviews: "Reviews",
    nav_contact: "Contact",
    nav_book: "Book Now",
    hero_title: "Beauty lives<br><em>in every detail.</em>",
    hero_text: "A quiet space just for you. Professional care, precision, and a gentle touch in the heart of Sofia.",
    hero_cta: "Book Your Visit",
    hero_services_link: "Explore Services",
    hero_note: "YOUR LITTLE BEAUTY RITUAL",
    trust_rating: "Google Rating",
    trust_detail: "Attention to detail<br><span>and genuine care</span>",
    trust_location: "Lozenets, Sofia<br><span>5 Lyubotran St.</span>",
    services_title: "Choose your<br><em>treatment.</em>",
    services_intro: "Browse our services and prices by category. Select what you need and send a request for a convenient time.",
    price_footnote: "All prices are in Euro (€). Your appointment is confirmed after our studio team contacts you.",
    about_eyebrow: "ABOUT THE STUDIO",
    about_title: "A beautiful feeling<br>begins with <em>care.</em>",
    about_text: "At Aveo Beauty Studio, we believe every treatment deserves undivided attention. We created a calm space where you can slow down, relax, and take care of yourself.",
    reviews_title: "Words that<br><em>inspire us.</em>",
    reviews_count: "5 Google reviews",
    review_1_text: "“Very precise work, spotless cleanliness, and a pleasant atmosphere. Valentina works with great attention to detail.”",
    review_2_text: "“Professionalism, precision, and wonderful attitude toward the client. Thank you for the amazing work!”",
    review_source: "Google review",
    reviews_all_btn: "View all reviews on Google",
    booking_title: "Ready for<br><em>your me-time?</em>",
    booking_text: "Fill out the form and send an appointment request. We will get in touch to confirm your preferred slot.",
    form_heading: "Request an Appointment",
    form_name: "Full Name",
    form_name_ph: "How should we address you?",
    form_phone: "Phone Number",
    form_services_label: "Select one or more services",
    picker_select_initial: "+ Choose services from the menu",
    picker_select_more: "+ Add another service ({n} selected)",
    picker_search_ph: "Search treatment (e.g. gel polish, brows, facial)...",
    picker_empty: "No treatments found",
    total_count: "Selected services:",
    total_sum: "Estimated total:",
    form_date: "Preferred Date",
    date_placeholder: "Choose date",
    form_time: "Preferred Time",
    time_placeholder: "Choose time",
    form_note: "Additional Notes",
    form_note_ph: "Preferred specialist or any notes...",
    form_submit: "Send Request",
    form_disclaimer: "Submitting this form is not an instant confirmation. We will contact you to confirm.",
    btn_pick: "Select",
    btn_picked: "Added",
    contact_title: "We await you<br><em>at Aveo.</em>",
    contact_address_label: "ADDRESS",
    contact_address: "Lozenets, 5 Lyubotran St.,<br>1407 Sofia, Bulgaria",
    contact_phone_label: "PHONE",
    contact_book_label: "BOOKING",
    contact_book_link: "Send a request via website ↗",
    footer_top: "Back to top ↑",
    err_name: "Please enter your name.",
    err_phone: "Please enter your phone number.",
    err_service: "Please select at least one service.",
    err_date: "Please choose a preferred date.",
    err_time: "Please choose a time between 08:00 and 20:00.",
    sending_btn: "Sending...",
    sending_status: "Sending your booking request...",
    sent_success: "Request sent successfully! We will contact you shortly to confirm.",
    sent_error: "Something went wrong. Please try again or call +359 88 702 3228.",
    from_prefix: "from ",
    sections: { nails: "nails", face: "face", epilation: "waxing", body: "body", all: "all" },
    filter_all: "All",
    weekdays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    months_gen: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  },

  ru: {
    page_title: "Aveo Beauty Studio — София",
    nav_services: "Услуги и цены",
    nav_about: "О нас",
    nav_reviews: "Отзывы",
    nav_contact: "Контакты",
    nav_book: "Записаться",
    hero_title: "Красота —<br><em>в каждой детали.</em>",
    hero_text: "Место для времени только для тебя. Профессиональный уход, точность и бережное отношение в самом сердце Софии.",
    hero_cta: "Записаться на визит",
    hero_services_link: "Смотреть услуги",
    hero_note: "ТВОЙ МАЛЕНЬКИЙ РИТУАЛ КРАСОТЫ",
    trust_rating: "Рейтинг Google",
    trust_detail: "Внимание к деталям<br><span>и забота с душой</span>",
    trust_location: "Лозенец, София<br><span>ул. «Люботрын» 5</span>",
    services_title: "Выбери свою<br><em>процедуру.</em>",
    services_intro: "Ознакомься с услугами и ценами по категориям. Выбери нужные процедуры и отправь заявку на удобное время.",
    price_footnote: "Все цены указаны в евро (€). Подтверждение записи происходит после связи с администратором студии.",
    about_eyebrow: "О СТУДИИ",
    about_title: "Прекрасное ощущение<br>начинается с <em>заботы.</em>",
    about_text: "В Aveo Beauty Studio мы верим, что каждая процедура заслуживает внимания. Мы создали пространство, где можно замедлить темп, расслабиться и позаботиться о себе.",
    reviews_title: "Слова, которые<br><em>нас вдохновляют.</em>",
    reviews_count: "5 отзывов в Google",
    review_1_text: "«Очень аккуратная работа, чистота и приятная атмосфера. Валентина работает с большим вниманием к деталям».",
    review_2_text: "«Профессионализм, точность и прекрасное отношение к клиенту. Спасибо за великолепную работу!»",
    review_source: "Google review",
    reviews_all_btn: "Посмотреть все отзывы в Google",
    booking_title: "Готова посвятить<br><em>время себе?</em>",
    booking_text: "Заполни форму и отправь заявку. Мы свяжемся с тобой, чтобы подтвердить свободное время.",
    form_heading: "Заявка на визит",
    form_name: "Имя и фамилия",
    form_name_ph: "Как к вам обращаться?",
    form_phone: "Телефон",
    form_services_label: "Выберите одну или несколько услуг",
    picker_select_initial: "+ Выбрать услуги из меню",
    picker_select_more: "+ Добавить ещё услугу (выбрано: {n})",
    picker_search_ph: "Поиск процедуры (напр. гель-лак, брови, чистка)...",
    picker_empty: "Процедуры не найдены",
    total_count: "Выбрано услуг:",
    total_sum: "Ориентировочная сумма:",
    form_date: "Предпочитаемая дата",
    date_placeholder: "Выбрать дату",
    form_time: "Предпочитаемое время",
    time_placeholder: "Выбрать время",
    form_note: "Дополнительная информация",
    form_note_ph: "Предпочитаемый мастер или пожелания...",
    form_submit: "Отправить заявку",
    form_disclaimer: "Заявка не является автоматическим подтверждением записи. Мы свяжемся с вами для подтверждения.",
    btn_pick: "Выбрать",
    btn_picked: "Добавлено",
    contact_title: "Будем рады видеть<br><em>вас в Aveo.</em>",
    contact_address_label: "АДРЕС",
    contact_address: "ж.к. Лозенец, ул. «Люботрын» 5,<br>1407 София, Болгария",
    contact_phone_label: "ТЕЛЕФОН",
    contact_book_label: "ЗАПИСЬ",
    contact_book_link: "Отправить заявку через сайт ↗",
    footer_top: "Наверх ↑",
    err_name: "Пожалуйста, введите ваше имя.",
    err_phone: "Пожалуйста, введите телефон для связи.",
    err_service: "Пожалуйста, выберите хотя бы одну услугу.",
    err_date: "Пожалуйста, выберите дату.",
    err_time: "Пожалуйста, выберите время с 08:00 до 20:00.",
    sending_btn: "Отправка...",
    sending_status: "Отправляем вашу заявку...",
    sent_success: "Заявка успешно отправлена! Мы скоро свяжемся с вами для подтверждения.",
    sent_error: "Ошибка при отправке. Попробуйте ещё раз или позвоните по номеру +359 88 702 3228.",
    from_prefix: "от ",
    sections: { nails: "ногти", face: "лицо", epilation: "депиляция", body: "тело", all: "все" },
    filter_all: "Все",
    weekdays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    months_gen: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
  },

  uk: {
    page_title: "Aveo Beauty Studio — Софія",
    nav_services: "Послуги та ціни",
    nav_about: "Про нас",
    nav_reviews: "Відгуки",
    nav_contact: "Контакти",
    nav_book: "Записатися",
    hero_title: "Краса —<br><em>у кожній деталі.</em>",
    hero_text: "Місце для часу лише для тебе. Професійний догляд, точність і дбайливе ставлення у серці Софії.",
    hero_cta: "Записатися на візит",
    hero_services_link: "Переглянути послуги",
    hero_note: "ТВІЙ МАЛЕНЬКИЙ РИТУАЛ КРАСИ",
    trust_rating: "Рейтинг Google",
    trust_detail: "Увага до деталей<br><span>та турбота з душею</span>",
    trust_location: "Лозенець, Софія<br><span>вул. „Люботрин“ 5</span>",
    services_title: "Обери свою<br><em>процедуру.</em>",
    services_intro: "Ознайомся з послугами та цінами за категоріями. Обери потрібні процедури та надішли заявку на зручний час.",
    price_footnote: "Усі ціни вказані в євро (€). Підтвердження запису відбувається після зв'язку з адміністратором студії.",
    about_eyebrow: "ПРО СТУДІЮ",
    about_title: "Прекрасне відчуття<br>починається з <em>турботи.</em>",
    about_text: "В Aveo Beauty Studio ми віримо, що кожна процедура заслуговує на увагу. Ми створили простір, де можна сповільнити темп, розслабитися та подбати про себе.",
    reviews_title: "Слова, які<br><em>нас надихають.</em>",
    reviews_count: "5 відгуків у Google",
    review_1_text: "«Дуже акуратна робота, чистота та приємна атмосфера. Валентина працює з великою увагою до деталей».",
    review_2_text: "«Професіоналізм, точність і чудове ставлення до клієнта. Дякую за прекрасну роботу!»",
    review_source: "Google review",
    reviews_all_btn: "Переглянути всі відгуки в Google",
    booking_title: "Готова присвятити<br><em>час собі?</em>",
    booking_text: "Заповни форму та надішли заявку. Ми зв'яжемося з тобою, щоб підтвердити вільний час.",
    form_heading: "Заявка на візит",
    form_name: "Ім'я та прізвище",
    form_name_ph: "Як до вас звертатися?",
    form_phone: "Телефон",
    form_services_label: "Оберіть одну або кілька послуг",
    picker_select_initial: "+ Обрати послуги з меню",
    picker_select_more: "+ Додати ще послугу (обрано: {n})",
    picker_search_ph: "Пошук процедури (напр. гель-лак, брови, чистка)...",
    picker_empty: "Процедури не знайдено",
    total_count: "Обрано послуг:",
    total_sum: "Орієнтовна сума:",
    form_date: "Бажана дата",
    date_placeholder: "Обрати дату",
    form_time: "Бажаний час",
    time_placeholder: "Обрати час",
    form_note: "Додаткова інформація",
    form_note_ph: "Бажаний майстер або побажання...",
    form_submit: "Надіслати заявку",
    form_disclaimer: "Заявка не є автоматичним підтвердженням запису. Ми зв'яжемося з вами для підтвердження.",
    btn_pick: "Обрати",
    btn_picked: "Додано",
    contact_title: "Будемо раді бачити<br><em>вас в Aveo.</em>",
    contact_address_label: "АДРЕСА",
    contact_address: "ж.к. Лозенец, вул. «Люботрин» 5,<br>1407 Софія, Болгарія",
    contact_phone_label: "ТЕЛЕФОН",
    contact_book_label: "ЗАПИС",
    contact_book_link: "Надіслати заявку через сайт ↗",
    footer_top: "Вгору ↑",
    err_name: "Будь ласка, введіть ваше ім'я.",
    err_phone: "Будь ласка, введіть телефон для зв'язку.",
    err_service: "Будь ласка, оберіть хоча б одну послугу.",
    err_date: "Будь ласка, оберіть дату.",
    err_time: "Будь ласка, оберіть час з 08:00 до 20:00.",
    sending_btn: "Надсилання...",
    sending_status: "Надсилаємо вашу заявку...",
    sent_success: "Заявку успішно надіслано! Ми скоро зв'яжемося з вами для підтвердження.",
    sent_error: "Помилка під час надсилання. Спробуйте ще раз або зателефонуйте за номером +359 88 702 3228.",
    from_prefix: "від ",
    sections: { nails: "нігті", face: "обличчя", epilation: "депіляція", body: "тіло", all: "усі" },
    filter_all: "Усі",
    weekdays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
    months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
    months_gen: ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"]
  }
};

// 2. ОСНОВНЫЕ РАЗДЕЛЫ (SVG-ИКОНКИ)
const mainSections = [
  {
    id: "nails",
    icon: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 40V22c0-5.5 4.5-10 10-10s10 4.5 10 10v18"/>
      <rect x="18" y="8" width="12" height="19" rx="6"/>
      <path d="M18 13.5c3.5 1.2 8.5 1.2 12 0"/>
      <path d="M20 31.5c2.5 1 5.5 1 8 0"/>
    </svg>`
  },
  {
    id: "face",
    icon: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 8c-4 4-6 9-6 14 0 2 .5 4 1.5 5.5"/>
      <path d="M21 8c2 3 5.5 5 6.5 8.5l2.5 4.5c.6 1 .2 2.2-.8 2.6l-1.2.4c.8 1.2.8 2.5 0 3.3.7 1 .6 2.3-.3 3.1-.6.6-.7 1.6-.4 2.6.5 1.7-.4 3.5-2.1 4-2.5.7-4.7 2.2-6.2 4"/>
      <path d="M20.5 18.5c1.5 1.2 3.2 1.2 4.5 0"/>
      <path d="M17.5 22.5c1.2-.8 2.3-2 2.8-3.3"/>
    </svg>`
  },
  {
    id: "epilation",
    icon: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 25h11c0 7 2.2 12 5 12s5-5 5-12h11"/>
      <path d="M19 29c0 6 2.2 10 5 10s5-4 5-10"/>
      <path d="M23 32c1.5-8 4.5-16 8.5-23-1.2 8-2.5 15.5-5.5 23"/>
    </svg>`
  },
  {
    id: "body",
    icon: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17 9c1.2 4.5 1.2 8.5 0 13-1.8 5.5-2 11.5-.2 18"/>
      <path d="M31 9c-1.2 4.5-1.2 8.5 0 13 1.8 5.5 2 11.5.2 18"/>
      <path d="M16.5 23.5c4.5 2 10.5 2 15 0"/>
      <path d="M15.8 27.5c4.2 1.5 6.8 4.5 8.2 9.5 1.4-5 4-8 8.2-9.5"/>
      <circle cx="24" cy="18.5" r="0.8" fill="currentColor"/>
    </svg>`
  },
  {
    id: "all",
    icon: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="24" cy="15" r="5.5"/>
      <circle cx="15.5" cy="30" r="5.5"/>
      <circle cx="32.5" cy="30" r="5.5"/>
    </svg>`
  }
];

// 3. ПОДКАТЕГОРИИ
const serviceCategories = [
  { id: "gellak", section: "nails", label: { bg: "Гел лак", en: "Gel Polish", ru: "Гель-лак", uk: "Гель-лак" } },
  { id: "noktoplastika", section: "nails", label: { bg: "Ноктопластика", en: "Nail Extensions", ru: "Наращивание ногтей", uk: "Нарощування нігтів" } },
  { id: "manicure", section: "nails", label: { bg: "Маникюр и педикюр", en: "Manicure & Pedicure", ru: "Маникюр и педикюр", uk: "Манікюр і педикюр" } },
  { id: "therapy", section: "nails", label: { bg: "Терапевтични процедури", en: "Podiatry & Care", ru: "Подология и уход", uk: "Подологія та догляд" } },
  { id: "decor", section: "nails", label: { bg: "Декорации на нокти", en: "Nail Art", ru: "Дизайн ногтей", uk: "Дизайн нігтів" } },

  { id: "face_clean", section: "face", label: { bg: "Почистване на лице", en: "Facial Cleansing", ru: "Чистка лица", uk: "Чистка обличчя" } },
  { id: "brows", section: "face", label: { bg: "Вежди", en: "Eyebrows", ru: "Брови", uk: "Брови" } },
  { id: "lashes", section: "face", label: { bg: "Мигли", en: "Eyelashes", ru: "Ресницы", uk: "Вії" } },
  { id: "face_therapy", section: "face", label: { bg: "Терапии за лице", en: "Facial Therapies", ru: "Терапии для лица", uk: "Терапії для обличчя" } },
  { id: "face_aesthetic", section: "face", label: { bg: "Естетични процедури", en: "Aesthetic Treatments", ru: "Эстетические процедуры", uk: "Естетичні процедури" } },
  { id: "pmu", section: "face", label: { bg: "Перманентен грим", en: "Permanent Makeup", ru: "Перманентный макияж", uk: "Перманентний макіяж" } },
  { id: "micropigmentation", section: "face", label: { bg: "Микропигментация", en: "Micropigmentation", ru: "Микропигментация", uk: "Мікропігментація" } },
  { id: "face_other", section: "face", label: { bg: "Други услуги за лице", en: "Other Facial Services", ru: "Другие услуги для лица", uk: "Інші послуги для обличчя" } },

  { id: "wax_women", section: "epilation", label: { bg: "Кола маска жени", en: "Waxing — Women", ru: "Восковая депиляция (жен.)", uk: "Воскова депіляція (жін.)" } },
  { id: "wax_men", section: "epilation", label: { bg: "Кола маска мъже", en: "Waxing — Men", ru: "Восковая депиляция (муж.)", uk: "Воскова депіляція (чол.)" } },

  { id: "body_aesthetic", section: "body", label: { bg: "Естетични процедури", en: "Body Aesthetics", ru: "Эстетика тела", uk: "Естетика тіла" } },
  { id: "body_tattoo", section: "body", label: { bg: "Татуировки / Камуфлаж", en: "Camouflage Tattoo", ru: "Камуфляжный татуаж", uk: "Камуфляжний татуаж" } }
];

// 4. УСЛУГИ (83 ПОЗИЦИИ)
const services = [
  { id: "gl-1", category: "gellak", numericPrice: 35, fromPrice: true, priceNum: "35 €",
    name: { bg: "Маникюр с гел лак + укрепване с гел база при Валентина", en: "Gel Polish Manicure + Gel Base Strengthening with Valentina", ru: "Маникюр с гель-лаком + укрепление гель-базой у Валентины", uk: "Манікюр із гель-лаком + зміцнення гель-базою у Валентини" },
    dur: { bg: "1 ч. - 2 ч.", en: "1 hr - 2 hrs", ru: "1 ч. - 2 ч.", uk: "1 год. - 2 год." } },
  { id: "gl-2", category: "gellak", numericPrice: 35, fromPrice: true, priceNum: "35 €",
    name: { bg: "Маникюр с гел лак + укрепване с гел база при Олга", en: "Gel Polish Manicure + Gel Base Strengthening with Olga", ru: "Маникюр с гель-лаком + укрепление гель-базой у Ольги", uk: "Манікюр із гель-лаком + зміцнення гель-базою в Ольги" },
    dur: { bg: "1 ч. 30 мин. - 2 ч. 30 мин.", en: "1 hr 30 min - 2 hrs 30 min", ru: "1 ч. 30 мин. - 2 ч. 30 мин.", uk: "1 год. 30 хв. - 2 год. 30 хв." } },
  { id: "gl-3", category: "gellak", numericPrice: 42, fromPrice: true, priceNum: "42 €",
    name: { bg: "Френски маникюр с гел лак + укрепване с гел база при Валентина", en: "French Gel Manicure + Gel Base Strengthening with Valentina", ru: "Французский маникюр с гель-лаком + укрепление у Валентины", uk: "Французький манікюр із гель-лаком + зміцнення у Валентини" },
    dur: { bg: "1 ч. 15 мин. - 2 ч. 15 мин.", en: "1 hr 15 min - 2 hrs 15 min", ru: "1 ч. 15 мин. - 2 ч. 15 мин.", uk: "1 год. 15 хв. - 2 год. 15 хв." } },
  { id: "gl-4", category: "gellak", numericPrice: 42, fromPrice: true, priceNum: "42 €",
    name: { bg: "Френски маникюр с гел лак + укрепване с гел база при Олга", en: "French Gel Manicure + Gel Base Strengthening with Olga", ru: "Французский маникюр с гель-лаком + укрепление у Ольги", uk: "Французький манікюр із гель-лаком + зміцнення в Ольги" },
    dur: { bg: "1 ч. 40 мин. - 2 ч. 40 мин.", en: "1 hr 40 min - 2 hrs 40 min", ru: "1 ч. 40 мин. - 2 ч. 40 мин.", uk: "1 год. 40 хв. - 2 год. 40 хв." } },
  { id: "gl-5", category: "gellak", numericPrice: 50, fromPrice: false, priceNum: "50 €",
    name: { bg: "СПА педикюр с гел лак", en: "SPA Pedicure with Gel Polish", ru: "СПА-педикюр с гель-лаком", uk: "СПА-педикюр із гель-лаком" },
    dur: { bg: "1 ч. 50 мин.", en: "1 hr 50 min", ru: "1 ч. 50 мин.", uk: "1 год. 50 хв." } },
  { id: "gl-6", category: "gellak", numericPrice: 40, fromPrice: false, priceNum: "40 €",
    name: { bg: "Апаратен педикюр с гел лак", en: "Hardware Pedicure with Gel Polish", ru: "Аппаратный педикюр с гель-лаком", uk: "Апаратний педикюр із гель-лаком" },
    dur: { bg: "1 ч. 30 мин.", en: "1 hr 30 min", ru: "1 ч. 30 мин.", uk: "1 год. 30 хв." } },
  { id: "gl-7", category: "gellak", numericPrice: 35, fromPrice: false, priceNum: "35 €",
    name: { bg: "Частичен апаратен педикюр с гел лак", en: "Express Hardware Pedicure with Gel Polish", ru: "Частичный аппаратный педикюр с гель-лаком", uk: "Частковий апаратний педикюр із гель-лаком" },
    dur: { bg: "1 ч.", en: "1 hr", ru: "1 ч.", uk: "1 год." } },
  { id: "gl-8", category: "gellak", numericPrice: 5, fromPrice: false, priceNum: "5 €",
    name: { bg: "Сваляне на гел лак поставен в друг салон", en: "Gel Polish Removal (from another salon)", ru: "Снятие гель-лака (покрытие другого салона)", uk: "Зняття гель-лаку (покриття іншого салону)" },
    dur: { bg: "10 мин.", en: "10 min", ru: "10 мин.", uk: "10 хв." } },
  { id: "gl-9", category: "gellak", numericPrice: 5, fromPrice: true, priceNum: "5 €",
    name: { bg: "Поправка на счупен нокът", en: "Broken Nail Repair", ru: "Ремонт сломанного ногтя", uk: "Ремонт зламаного нігтя" },
    dur: { bg: "10 мин. - 20 мин.", en: "10 min - 20 min", ru: "10 мин. - 20 мин.", uk: "10 хв. - 20 хв." } },

  { id: "nk-1", category: "noktoplastika", numericPrice: 60, fromPrice: true, priceNum: "60 €",
    name: { bg: "Изграждане с гел при Валентина", en: "Gel Nail Extensions with Valentina", ru: "Наращивание ногтей гелем у Валентины", uk: "Нарощування нігтів гелем у Валентини" },
    dur: { bg: "1 ч. 30 мин. - 2 ч. 30 мин.", en: "1 hr 30 min - 2 hrs 30 min", ru: "1 ч. 30 мин. - 2 ч. 30 мин.", uk: "1 год. 30 хв. - 2 год. 30 хв." } },
  { id: "nk-2", category: "noktoplastika", numericPrice: 60, fromPrice: true, priceNum: "60 €",
    name: { bg: "Изграждане с гел при Олга", en: "Gel Nail Extensions with Olga", ru: "Наращивание ногтей гелем у Ольги", uk: "Нарощування нігтів гелем в Ольги" },
    dur: { bg: "2 ч. - 2 ч. 50 мин.", en: "2 hrs - 2 hrs 50 min", ru: "2 ч. - 2 ч. 50 мин.", uk: "2 год. - 2 год. 50 хв." } },
  { id: "nk-3", category: "noktoplastika", numericPrice: 38, fromPrice: true, priceNum: "38 €",
    name: { bg: "Гел върху естествени нокти при Валентина", en: "Hard Gel Overlay on Natural Nails with Valentina", ru: "Укрепление натуральных ногтей гелем у Валентины", uk: "Зміцнення натуральних нігтів гелем у Валентини" },
    dur: { bg: "1 ч. - 2 ч.", en: "1 hr - 2 hrs", ru: "1 ч. - 2 ч.", uk: "1 год. - 2 год." } },
  { id: "nk-4", category: "noktoplastika", numericPrice: 38, fromPrice: true, priceNum: "38 €",
    name: { bg: "Гел върху естествени нокти при Олга", en: "Hard Gel Overlay on Natural Nails with Olga", ru: "Укрепление натуральных ногтей гелем у Ольги", uk: "Зміцнення натуральних нігтів гелем в Ольги" },
    dur: { bg: "1 ч. 30 мин. - 2 ч. 30 мин.", en: "1 hr 30 min - 2 hrs 30 min", ru: "1 ч. 30 мин. - 2 ч. 30 мин.", uk: "1 год. 30 хв. - 2 год. 30 хв." } },
  { id: "nk-5", category: "noktoplastika", numericPrice: 38, fromPrice: true, priceNum: "38 €",
    name: { bg: "Поддръжка на гел при Валентина", en: "Gel Nail Refill / Maintenance with Valentina", ru: "Коррекция геля у Валентины", uk: "Корекція гелю у Валентини" },
    dur: { bg: "1 ч. - 2 ч.", en: "1 hr - 2 hrs", ru: "1 ч. - 2 ч.", uk: "1 год. - 2 год." } },
  { id: "nk-6", category: "noktoplastika", numericPrice: 45, fromPrice: true, priceNum: "45 €",
    name: { bg: "Поддръжка на гел тип френски при Валентина", en: "French Gel Refill with Valentina", ru: "Коррекция геля (френч) у Валентины", uk: "Корекція гелю (френч) у Валентини" },
    dur: { bg: "1 ч. - 2 ч.", en: "1 hr - 2 hrs", ru: "1 ч. - 2 ч.", uk: "1 год. - 2 год." } },
  { id: "nk-7", category: "noktoplastika", numericPrice: 38, fromPrice: true, priceNum: "38 €",
    name: { bg: "Поддръжка на гел при Олга", en: "Gel Nail Refill / Maintenance with Olga", ru: "Коррекция геля у Ольги", uk: "Корекція гелю в Ольги" },
    dur: { bg: "1 ч. 30 мин. - 2 ч. 30 мин.", en: "1 hr 30 min - 2 hrs 30 min", ru: "1 ч. 30 мин. - 2 ч. 30 мин.", uk: "1 год. 30 хв. - 2 год. 30 хв." } },

  { id: "mn-1", category: "manicure", numericPrice: 25, fromPrice: false, priceNum: "25 €",
    name: { bg: "Хигиеничен маникюр за жени", en: "Classic Women's Manicure", ru: "Классический женский маникюр", uk: "Класичний жіночий манікюр" },
    dur: { bg: "45 мин.", en: "45 min", ru: "45 мин.", uk: "45 хв." } },
  { id: "mn-2", category: "manicure", numericPrice: 35, fromPrice: false, priceNum: "35 €",
    name: { bg: "Хигиеничен маникюр за мъже", en: "Classic Men's Manicure", ru: "Классический мужской маникюр", uk: "Класичний чоловічий манікюр" },
    dur: { bg: "45 мин.", en: "45 min", ru: "45 мин.", uk: "45 хв." } },
  { id: "mn-3", category: "manicure", numericPrice: 35, fromPrice: false, priceNum: "35 €",
    name: { bg: "Японски маникюр за жени", en: "Japanese Manicure for Women", ru: "Японский маникюр для женщин", uk: "Японський манікюр для жінок" },
    dur: { bg: "1 ч.", en: "1 hr", ru: "1 ч.", uk: "1 год." } },
  { id: "mn-4", category: "manicure", numericPrice: 45, fromPrice: false, priceNum: "45 €",
    name: { bg: "Японски маникюр за мъже", en: "Japanese Manicure for Men", ru: "Японский маникюр для мужчин", uk: "Японський манікюр для чоловіків" },
    dur: { bg: "1 ч.", en: "1 hr", ru: "1 ч.", uk: "1 год." } },
  { id: "mn-5", category: "manicure", numericPrice: 40, fromPrice: false, priceNum: "40 €",
    name: { bg: "Апаратен педикюр без лак за жени", en: "Women's Hardware Pedicure (No Polish)", ru: "Женский аппаратный педикюр без покрытия", uk: "Жіночий апаратний педикюр без покриття" },
    dur: { bg: "1 ч.", en: "1 hr", ru: "1 ч.", uk: "1 год." } },
  { id: "mn-6", category: "manicure", numericPrice: 45, fromPrice: false, priceNum: "45 €",
    name: { bg: "Апаратен педикюр за мъже", en: "Men's Hardware Pedicure", ru: "Мужской аппаратный педикюр", uk: "Чоловічий апаратний педикюр" },
    dur: { bg: "1 ч.", en: "1 hr", ru: "1 ч.", uk: "1 год." } },

  { id: "th-1", category: "therapy", numericPrice: 45, fromPrice: false, priceNum: "45 €",
    name: { bg: "Медицински педикюр", en: "Medical Pedicure", ru: "Медицинский педикюр", uk: "Медичний педикюр" },
    dur: { bg: "1 ч. 30 мин.", en: "1 hr 30 min", ru: "1 ч. 30 мин.", uk: "1 год. 30 хв." } },
  { id: "th-2", category: "therapy", numericPrice: 35, fromPrice: false, priceNum: "35 €",
    name: { bg: "Медицински маникюр", en: "Medical Manicure", ru: "Медицинский маникюр", uk: "Медичний манікюр" },
    dur: { bg: "1 ч. 30 мин.", en: "1 hr 30 min", ru: "1 ч. 30 мин.", uk: "1 год. 30 хв." } },
  { id: "th-3", category: "therapy", numericPrice: 28, fromPrice: true, priceNum: "28 €",
    name: { bg: "Обработка / лечение на впит нокът", en: "Ingrown Nail Treatment", ru: "Обработка / лечение вросшего ногтя", uk: "Обробка / лікування врослого нігтя" },
    dur: { bg: "30 мин. - 45 мин.", en: "30 min - 45 min", ru: "30 мин. - 45 мин.", uk: "30 хв. - 45 хв." } },
  { id: "th-4", category: "therapy", numericPrice: 40, fromPrice: false, priceNum: "40 €",
    name: { bg: "Обработка на гъбичен нокът (до 2 броя)", en: "Fungal Nail Treatment (up to 2 nails)", ru: "Обработка грибкового ногтя (до 2 шт.)", uk: "Обробка грибкового нігтя (до 2 шт.)" },
    dur: { bg: "40 мин.", en: "40 min", ru: "40 мин.", uk: "40 хв." } },
  { id: "th-5", category: "therapy", numericPrice: 10, fromPrice: true, priceNum: "10 €",
    name: { bg: "Лечение на кокоши трън / брадавица", en: "Corn / Plantar Wart Treatment", ru: "Удаление стержневой мозоли / бородавки", uk: "Видалення стрижневого мозоля / бородавки" },
    dur: { bg: "20 мин. - 40 мин.", en: "20 min - 40 min", ru: "20 мин. - 40 мин.", uk: "20 хв. - 40 хв." } },
  { id: "th-6", category: "therapy", numericPrice: 15, fromPrice: false, priceNum: "15 €",
    name: { bg: "Реставрация / обработка на грифозни нокти", en: "Thickened / Onychogryphotic Nail Care", ru: "Обработка / реставрация утолщённых ногтей", uk: "Обробка / реставрація потовщених нігтів" },
    dur: { bg: "30 мин.", en: "30 min", ru: "30 мин.", uk: "30 хв." } },
  { id: "th-7", category: "therapy", numericPrice: 15, fromPrice: false, priceNum: "15 €",
    name: { bg: "Лечение на мазоли (1 брой)", en: "Callus Removal (1 area)", ru: "Удаление мозоли (1 шт.)", uk: "Видалення мозоля (1 шт.)" },
    dur: { bg: "1 ч.", en: "1 hr", ru: "1 ч.", uk: "1 год." } },
  { id: "th-8", category: "therapy", numericPrice: 20, fromPrice: false, priceNum: "20 €",
    name: { bg: "Ортези", en: "Custom Toe Orthotics", ru: "Индивидуальные ортезы", uk: "Індивідуальні ортези" },
    dur: { bg: "1 ч.", en: "1 hr", ru: "1 ч.", uk: "1 год." } },
  { id: "th-9", category: "therapy", numericPrice: 30, fromPrice: false, priceNum: "30 €",
    name: { bg: "Обработка на диабетно стъпало и хиперкератоза", en: "Diabetic Foot & Hyperkeratosis Care", ru: "Обработка диабетической стопы и гиперкератоза", uk: "Обробка діабетичної стопи та гіперкератозу" },
    dur: { bg: "40 мин.", en: "40 min", ru: "40 мин.", uk: "40 хв." } },

  { id: "dc-1", category: "decor", numericPrice: 3, fromPrice: false, priceNum: "3 €",
    name: { bg: "Базови декорации на всички нокти", en: "Basic Nail Art (All Nails)", ru: "Базовый дизайн на все ногти", uk: "Базовий дизайн на всі нігті" },
    dur: { bg: "10 мин.", en: "10 min", ru: "10 мин.", uk: "10 хв." } },

  { id: "fc-1", category: "face_clean", numericPrice: 60, fromPrice: false, priceNum: "60 €",
    name: { bg: "Почистване на лице + пароозонатор + диамантено дермабразио", en: "Facial Cleansing + Steam Ozone + Diamond Dermabrasion", ru: "Чистка лица + вапоризатор + алмазная дермабразия", uk: "Чистка обличчя + вапоризатор + алмазна дермабразія" },
    dur: { bg: "1 ч. 15 мин.", en: "1 hr 15 min", ru: "1 ч. 15 мин.", uk: "1 год. 15 хв." } },
  { id: "fc-2", category: "face_clean", numericPrice: 75, fromPrice: false, priceNum: "75 €",
    name: { bg: "Почистване на лице против акне и мазна кожа", en: "Deep Cleansing Facial for Acne & Oily Skin", ru: "Чистка лица против акне и жирной кожи", uk: "Чистка обличчя проти акне та жирної шкіри" },
    dur: { bg: "1 ч. 10 мин.", en: "1 hr 10 min", ru: "1 ч. 10 мин.", uk: "1 год. 10 хв." } },
  { id: "fc-3", category: "face_clean", numericPrice: 75, fromPrice: false, priceNum: "75 €",
    name: { bg: "Медицинско мануално почистване на лице", en: "Medical Manual Facial Extraction", ru: "Медицинская мануальная чистка лица", uk: "Медична мануальна чистка обличчя" },
    dur: { bg: "1 ч.", en: "1 hr", ru: "1 ч.", uk: "1 год." } },
  { id: "fc-4", category: "face_clean", numericPrice: 35, fromPrice: false, priceNum: "35 €",
    name: { bg: "Диамантено микродермабразио", en: "Diamond Microdermabrasion", ru: "Алмазная микродермабразия", uk: "Алмазна мікродермабразія" },
    dur: { bg: "45 мин.", en: "45 min", ru: "45 мин.", uk: "45 хв." } },
  { id: "fc-5", category: "face_clean", numericPrice: 15, fromPrice: false, priceNum: "15 €",
    name: { bg: "Дарсонвал", en: "Darsonval High-Frequency Facial", ru: "Дарсонвализация лица", uk: "Дарсонвалізація обличчя" },
    dur: { bg: "20 мин.", en: "20 min", ru: "20 мин.", uk: "20 хв." } },

  { id: "br-1", category: "brows", numericPrice: 15, fromPrice: false, priceNum: "15 €",
    name: { bg: "Оформяне на вежди", en: "Eyebrow Shaping", ru: "Коррекция формы бровей", uk: "Корекція форми брів" },
    dur: { bg: "30 мин.", en: "30 min", ru: "30 мин.", uk: "30 хв." } },
  { id: "br-2", category: "brows", numericPrice: 25, fromPrice: false, priceNum: "25 €",
    name: { bg: "Боядисване + оформяне на вежди", en: "Eyebrow Tinting + Shaping", ru: "Окрашивание + коррекция бровей", uk: "Фарбування + корекція брів" },
    dur: { bg: "45 мин.", en: "45 min", ru: "45 мин.", uk: "45 хв." } },
  { id: "br-3", category: "brows", numericPrice: 40, fromPrice: false, priceNum: "40 €",
    name: { bg: "Ламиниране + оформяне на вежди", en: "Brow Lamination + Shaping", ru: "Ламинирование + коррекция бровей", uk: "Ламінування + корекція брів" },
    dur: { bg: "1 ч.", en: "1 hr", ru: "1 ч.", uk: "1 год." } },
  { id: "br-4", category: "brows", numericPrice: 45, fromPrice: false, priceNum: "45 €",
    name: { bg: "Комбо „Щастливи вежди“", en: "Combo “Happy Brows”", ru: "Комбо «Счастливые брови»", uk: "Комбо «Щасливі брови»" },
    dur: { bg: "1 ч.", en: "1 hr", ru: "1 ч.", uk: "1 год." } },

  { id: "ls-1", category: "lashes", numericPrice: 55, fromPrice: false, priceNum: "55 €",
    name: { bg: "Удължаване на мигли", en: "Eyelash Extensions", ru: "Наращивание ресниц", uk: "Нарощування вій" },
    dur: { bg: "1 ч. 30 мин.", en: "1 hr 30 min", ru: "1 ч. 30 мин.", uk: "1 год. 30 хв." } },
  { id: "ls-2", category: "lashes", numericPrice: 75, fromPrice: false, priceNum: "75 €",
    name: { bg: "Комбо „Ти си лукс“", en: "Combo “You Are Luxury”", ru: "Комбо «Ты — люкс»", uk: "Комбо «Ти — люкс»" },
    dur: { bg: "1 ч.", en: "1 hr", ru: "1 ч.", uk: "1 год." } },
  { id: "ls-3", category: "lashes", numericPrice: 55, fromPrice: false, priceNum: "55 €",
    name: { bg: "Комбо „Неотразим поглед“ — Ламиниране на мигли", en: "Combo “Irresistible Gaze” — Lash Lift", ru: "Комбо «Неотразимый взгляд» — Ламинирование ресниц", uk: "Комбо «Чарівний погляд» — Ламінування вій" },
    dur: { bg: "1 ч. 30 мин.", en: "1 hr 30 min", ru: "1 ч. 30 мин.", uk: "1 год. 30 хв." } },
  { id: "ls-4", category: "lashes", numericPrice: 45, fromPrice: false, priceNum: "45 €",
    name: { bg: "Ламиниране + боядисване на горни мигли", en: "Upper Lash Lift + Tint", ru: "Ламинирование + окрашивание верхних ресниц", uk: "Ламінування + фарбування верхніх вій" },
    dur: { bg: "40 мин.", en: "40 min", ru: "40 мин.", uk: "40 хв." } },
  { id: "ls-5", category: "lashes", numericPrice: 55, fromPrice: false, priceNum: "55 €",
    name: { bg: "Ламиниране + боядисване на горни и долни мигли", en: "Upper & Lower Lash Lift + Tint", ru: "Ламинирование + окрашивание верхних и нижних ресниц", uk: "Ламінування + фарбування верхніх і нижніх вій" },
    dur: { bg: "1 ч.", en: "1 hr", ru: "1 ч.", uk: "1 год." } },
  { id: "ls-6", category: "lashes", numericPrice: 40, fromPrice: false, priceNum: "40 €",
    name: { bg: "Поддръжка на мигли", en: "Eyelash Extension Infill", ru: "Коррекция ресниц", uk: "Корекція вій" },
    dur: { bg: "1 ч.", en: "1 hr", ru: "1 ч.", uk: "1 год." } },
  { id: "ls-7", category: "lashes", numericPrice: 10, fromPrice: false, priceNum: "10 €",
    name: { bg: "Боядисване на мигли", en: "Eyelash Tinting", ru: "Окрашивание ресниц", uk: "Фарбування вій" },
    dur: { bg: "15 мин.", en: "15 min", ru: "15 мин.", uk: "15 хв." } },

  { id: "ft-1", category: "face_therapy", numericPrice: 65, fromPrice: false, priceNum: "65 €",
    name: { bg: "Терапия против хиперпигментации и грижа от Brightening с витамин C", en: "Anti-Hyperpigmentation & Vitamin C Brightening Therapy", ru: "Терапия против гиперпигментации Brightening с витамином C", uk: "Терапія проти гіперпігментації Brightening з вітаміном C" },
    dur: { bg: "55 мин.", en: "55 min", ru: "55 мин.", uk: "55 хв." } },
  { id: "ft-2", category: "face_therapy", numericPrice: 35, fromPrice: false, priceNum: "35 €",
    name: { bg: "Терапия на лице за хидратиране (мъже)", en: "Hydrating Facial Therapy (Men)", ru: "Увлажняющая терапия для лица (мужчины)", uk: "Зволожувальна терапія для обличчя (чоловіки)" },
    dur: { bg: "50 мин.", en: "50 min", ru: "50 мин.", uk: "50 хв." } },
  { id: "ft-3", category: "face_therapy", numericPrice: 75, fromPrice: false, priceNum: "75 €",
    name: { bg: "Терапия при акнеична / проблемна кожа + почистване на лице", en: "Acne / Problem Skin Therapy + Facial Cleansing", ru: "Терапия для проблемной кожи + чистка лица", uk: "Терапія для проблемної шкіри + чистка обличчя" },
    dur: { bg: "1 ч. 15 мин.", en: "1 hr 15 min", ru: "1 ч. 15 мин.", uk: "1 год. 15 хв." } },

  { id: "fa-1", category: "face_aesthetic", numericPrice: 80, fromPrice: false, priceNum: "80 €",
    name: { bg: "Химичен пилинг на лице при пигментация", en: "Chemical Peel for Pigmentation", ru: "Химический пилинг при пигментации", uk: "Хімічний пілінг при пігментації" },
    dur: { bg: "55 мин.", en: "55 min", ru: "55 мин.", uk: "55 хв." } },
  { id: "fa-2", category: "face_aesthetic", numericPrice: 65, fromPrice: true, priceNum: "65 €",
    name: { bg: "Химичен пилинг за лице с антиейдж ефект", en: "Anti-Aging Chemical Facial Peel", ru: "Химический пилинг с антиэйдж-эффектом", uk: "Хімічний пілінг з антивіковим ефектом" },
    dur: { bg: "55 мин. - 1 ч.", en: "55 min - 1 hr", ru: "55 мин. - 1 ч.", uk: "55 хв. - 1 год." } },
  { id: "fa-3", category: "face_aesthetic", numericPrice: 75, fromPrice: false, priceNum: "75 €",
    name: { bg: "Химичен пилинг за лице с анти акне ефект", en: "Anti-Acne Chemical Facial Peel", ru: "Химический пилинг с антиакне-эффектом", uk: "Хімічний пілінг з антиакне-ефектом" },
    dur: { bg: "50 мин.", en: "50 min", ru: "50 мин.", uk: "50 хв." } },
  { id: "fa-4", category: "face_aesthetic", numericPrice: 45, fromPrice: false, priceNum: "45 €",
    name: { bg: "Мезотерапия срещу торбички под очите", en: "Under-Eye Mesotherapy for Puffiness", ru: "Мезотерапия от отёков под глазами", uk: "Мезотерапія від набряків під очима" },
    dur: { bg: "40 мин.", en: "40 min", ru: "40 мин.", uk: "40 хв." } },
  { id: "fa-5", category: "face_aesthetic", numericPrice: 40.9, fromPrice: false, priceNum: "40,90 €",
    name: { bg: "Микроиглена нанотерапия на околоочен контур + колагенови пачове", en: "Eye Contour Microneedling Nanotherapy + Collagen Patches", ru: "Микроигольчатая нанотерапия зоны вокруг глаз + коллагеновые патчи", uk: "Мікроголкова нанотерапія зони навколо очей + колагенові патчі" },
    dur: { bg: "40 мин.", en: "40 min", ru: "40 мин.", uk: "40 хв." } },

  { id: "pm-1", category: "pmu", numericPrice: 220, fromPrice: false, priceNum: "220 €",
    name: { bg: "Перманентен грим на вежди", en: "Permanent Eyebrow Makeup", ru: "Перманентный макияж бровей", uk: "Перманентний макіяж брів" },
    dur: { bg: "2 ч.", en: "2 hrs", ru: "2 ч.", uk: "2 год." } },
  { id: "pm-2", category: "pmu", numericPrice: 200, fromPrice: false, priceNum: "200 €",
    name: { bg: "Перманентен грим на очна линия", en: "Permanent Eyeliner", ru: "Перманентный макияж межреснички / стрелки", uk: "Перманентний макіяж повік / стрілки" },
    dur: { bg: "2 ч.", en: "2 hrs", ru: "2 ч.", uk: "2 год." } },
  { id: "pm-3", category: "pmu", numericPrice: 150, fromPrice: false, priceNum: "150 €",
    name: { bg: "Перманентен грим на контур устни", en: "Permanent Lip Liner / Blush", ru: "Перманентный макияж контура губ", uk: "Перманентний макіяж контуру губ" },
    dur: { bg: "2 ч.", en: "2 hrs", ru: "2 ч.", uk: "2 год." } },
  { id: "pm-4", category: "pmu", numericPrice: 100, fromPrice: true, priceNum: "100 €",
    name: { bg: "Ретуш на перманентен грим", en: "Permanent Makeup Touch-Up", ru: "Коррекция (ретушь) перманентного макияжа", uk: "Корекція (ретуш) перманентного макіяжу" },
    dur: { bg: "1 ч. 30 мин.", en: "1 hr 30 min", ru: "1 ч. 30 мин.", uk: "1 год. 30 хв." } },
  { id: "pm-5", category: "pmu", numericPrice: 200, fromPrice: false, priceNum: "200 €",
    name: { bg: "Поправка на перманентен грим правен в друг салон", en: "Permanent Makeup Correction (from another salon)", ru: "Исправление перманентного макияжа из другого салона", uk: "Виправлення перманентного макіяжу з іншого салону" },
    dur: { bg: "2 ч. 30 мин.", en: "2 hrs 30 min", ru: "2 ч. 30 мин.", uk: "2 год. 30 хв." } },

  { id: "mp-1", category: "micropigmentation", numericPrice: 130, fromPrice: false, priceNum: "130 €",
    name: { bg: "Ретуш на микропигментация", en: "Micropigmentation Touch-Up", ru: "Коррекция микропигментации", uk: "Корекція мікропігментації" },
    dur: { bg: "2 ч.", en: "2 hrs", ru: "2 ч.", uk: "2 год." } },

  { id: "fo-1", category: "face_other", numericPrice: 35, fromPrice: false, priceNum: "35 €",
    name: { bg: "Въвеждане на ампула с ултразвук", en: "Ultrasound Ampoule Infusion", ru: "Ультразвуковое введение ампулы", uk: "Ультразвукове введення ампули" },
    dur: { bg: "30 мин.", en: "30 min", ru: "30 мин.", uk: "30 хв." } },
  { id: "fo-2", category: "face_other", numericPrice: 35, fromPrice: false, priceNum: "35 €",
    name: { bg: "Подхранваща ампула за лице с витамини", en: "Nourishing Vitamin Facial Ampoule", ru: "Питательная витаминная ампула для лица", uk: "Живильна вітамінна ампула для обличчя" },
    dur: { bg: "35 мин.", en: "35 min", ru: "35 мин.", uk: "35 хв." } },
  { id: "fo-3", category: "face_other", numericPrice: 35, fromPrice: false, priceNum: "35 €",
    name: { bg: "Пробиване на уши + медицински обеци", en: "Ear Piercing + Medical Studs", ru: "Прокол ушей + медицинские серьги", uk: "Проколювання вух + медичні сережки" },
    dur: { bg: "30 мин.", en: "30 min", ru: "30 мин.", uk: "30 хв." } },

  { id: "ww-1", category: "wax_women", numericPrice: 10, fromPrice: false, priceNum: "10 €",
    name: { bg: "Подмишници — кола маска (жени)", en: "Underarms Waxing (Women)", ru: "Подмышки — воск (жен.)", uk: "Пахви — віск (жін.)" },
    dur: { bg: "10 мин.", en: "10 min", ru: "10 мин.", uk: "10 хв." } },
  { id: "ww-2", category: "wax_women", numericPrice: 30, fromPrice: false, priceNum: "30 €",
    name: { bg: "Цели крака — кола маска (жени)", en: "Full Legs Waxing (Women)", ru: "Ноги полностью — воск (жен.)", uk: "Ноги повністю — віск (жін.)" },
    dur: { bg: "40 мин.", en: "40 min", ru: "40 мин.", uk: "40 хв." } },
  { id: "ww-3", category: "wax_women", numericPrice: 20, fromPrice: false, priceNum: "20 €",
    name: { bg: "1/2 крака — кола маска (жени)", en: "Half Legs Waxing (Women)", ru: "Ноги до колена — воск (жен.)", uk: "Ноги до коліна — віск (жін.)" },
    dur: { bg: "20 мин.", en: "20 min", ru: "20 мин.", uk: "20 хв." } },
  { id: "ww-4", category: "wax_women", numericPrice: 20, fromPrice: false, priceNum: "20 €",
    name: { bg: "Цели ръце — кола маска (жени)", en: "Full Arms Waxing (Women)", ru: "Руки полностью — воск (жен.)", uk: "Руки повністю — віск (жін.)" },
    dur: { bg: "20 мин.", en: "20 min", ru: "20 мин.", uk: "20 хв." } },
  { id: "ww-5", category: "wax_women", numericPrice: 12, fromPrice: false, priceNum: "12 €",
    name: { bg: "1/2 ръце — кола маска (жени)", en: "Half Arms Waxing (Women)", ru: "Руки до локтя — воск (жен.)", uk: "Руки до ліктя — віск (жін.)" },
    dur: { bg: "15 мин.", en: "15 min", ru: "15 мин.", uk: "15 хв." } },
  { id: "ww-6", category: "wax_women", numericPrice: 10, fromPrice: false, priceNum: "10 €",
    name: { bg: "Коремна линия — кола маска (жени)", en: "Stomach Line Waxing (Women)", ru: "Линия живота — воск (жен.)", uk: "Лінія живота — віск (жін.)" },
    dur: { bg: "15 мин.", en: "15 min", ru: "15 мин.", uk: "15 хв." } },
  { id: "ww-7", category: "wax_women", numericPrice: 5, fromPrice: false, priceNum: "5 €",
    name: { bg: "Брадичка — кола маска (жени)", en: "Chin Waxing (Women)", ru: "Подбородок — воск (жен.)", uk: "Підборіддя — віск (жін.)" },
    dur: { bg: "5 мин.", en: "5 min", ru: "5 мин.", uk: "5 хв." } },
  { id: "ww-8", category: "wax_women", numericPrice: 5, fromPrice: false, priceNum: "5 €",
    name: { bg: "Горна устна — кола маска (жени)", en: "Upper Lip Waxing (Women)", ru: "Верхняя губа — воск (жен.)", uk: "Верхня губа — віск (жін.)" },
    dur: { bg: "5 мин.", en: "5 min", ru: "5 мин.", uk: "5 хв." } },
  { id: "ww-9", category: "wax_women", numericPrice: 10, fromPrice: false, priceNum: "10 €",
    name: { bg: "Бикини зона — кола маска (жени)", en: "Bikini Line Waxing (Women)", ru: "Классическое бикини — воск (жен.)", uk: "Класичне бікіні — віск (жін.)" },
    dur: { bg: "15 мин.", en: "15 min", ru: "15 мин.", uk: "15 хв." } },
  { id: "ww-10", category: "wax_women", numericPrice: 25, fromPrice: false, priceNum: "25 €",
    name: { bg: "Интим — кола маска (жени)", en: "Brazilian / Intimate Waxing (Women)", ru: "Глубокое бикини — воск (жен.)", uk: "Глибоке бікіні — віск (жін.)" },
    dur: { bg: "30 мин.", en: "30 min", ru: "30 мин.", uk: "30 хв." } },

  { id: "wm-1", category: "wax_men", numericPrice: 10, fromPrice: false, priceNum: "10 €",
    name: { bg: "Подмишници — кола маска (мъже)", en: "Underarms Waxing (Men)", ru: "Подмышки — воск (муж.)", uk: "Пахви — віск (чол.)" },
    dur: { bg: "15 мин.", en: "15 min", ru: "15 мин.", uk: "15 хв." } },
  { id: "wm-2", category: "wax_men", numericPrice: 20, fromPrice: false, priceNum: "20 €",
    name: { bg: "Гръб — кола маска (мъже)", en: "Back Waxing (Men)", ru: "Спина — воск (муж.)", uk: "Спина — віск (чол.)" },
    dur: { bg: "20 мин.", en: "20 min", ru: "20 мин.", uk: "20 хв." } },
  { id: "wm-3", category: "wax_men", numericPrice: 12, fromPrice: false, priceNum: "12 €",
    name: { bg: "Гърди — кола маска (мъже)", en: "Chest Waxing (Men)", ru: "Грудь — воск (муж.)", uk: "Груди — віск (чол.)" },
    dur: { bg: "15 мин.", en: "15 min", ru: "15 мин.", uk: "15 хв." } },
  { id: "wm-4", category: "wax_men", numericPrice: 13, fromPrice: false, priceNum: "13 €",
    name: { bg: "Корем — кола маска (мъже)", en: "Abdomen Waxing (Men)", ru: "Живот — воск (муж.)", uk: "Живіт — віск (чол.)" },
    dur: { bg: "15 мин.", en: "15 min", ru: "15 мин.", uk: "15 хв." } },
  { id: "wm-5", category: "wax_men", numericPrice: 13, fromPrice: false, priceNum: "13 €",
    name: { bg: "Кръст — кола маска (мъже)", en: "Lower Back Waxing (Men)", ru: "Поясница — воск (муж.)", uk: "Поперек — віск (чол.)" },
    dur: { bg: "15 мин.", en: "15 min", ru: "15 мин.", uk: "15 хв." } },
  { id: "wm-6", category: "wax_men", numericPrice: 20, fromPrice: false, priceNum: "20 €",
    name: { bg: "Цели ръце — кола маска (мъже)", en: "Full Arms Waxing (Men)", ru: "Руки полностью — воск (муж.)", uk: "Руки повністю — віск (чол.)" },
    dur: { bg: "20 мин.", en: "20 min", ru: "20 мин.", uk: "20 хв." } },

  { id: "ba-1", category: "body_aesthetic", numericPrice: 110, fromPrice: false, priceNum: "110 €",
    name: { bg: "Заличаване на белези / стрии с мезококтейл", en: "Scar & Stretch Mark Mesotherapy", ru: "Коррекция рубцов и растяжек мезококтейлем", uk: "Корекція рубців і розтяжок мезококтейлем" },
    dur: { bg: "1 ч.", en: "1 hr", ru: "1 ч.", uk: "1 год." } },
  { id: "bt-1", category: "body_tattoo", numericPrice: 55, fromPrice: false, priceNum: "55 €",
    name: { bg: "Медицински камуфлаж при тъмни кръгове под очите", en: "Medical Camouflage for Dark Under-Eye Circles", ru: "Медицинский камуфляж тёмных кругов под глазами", uk: "Медичний камуфляж темних кіл під очима" },
    dur: { bg: "30 мин.", en: "30 min", ru: "30 мин.", uk: "30 хв." } }
];

// СОСТОЯНИЕ
let currentLang = localStorage.getItem("aveo_lang") || "bg";
if (!translations[currentLang]) currentLang = "bg";

let activeSection = "nails";
let activeCategory = "gellak";
const selectedServiceIds = new Set();

let pickerFilterSection = "all";
let pickerSearchQuery = "";

const mainSectionsEl = document.getElementById("mainSections");
const categoryTabs = document.getElementById("categoryTabs");
const serviceList = document.getElementById("serviceList");

const selectedChipsEl = document.getElementById("selectedChips");
const selectedTotalEl = document.getElementById("selectedTotal");
const servicePickerEl = document.getElementById("servicePicker");
const pickerTrigger = document.getElementById("pickerTrigger");
const pickerTriggerText = document.getElementById("pickerTriggerText");
const pickerDropdown = document.getElementById("pickerDropdown");
const pickerSearch = document.getElementById("pickerSearch");
const pickerFiltersEl = document.getElementById("pickerFilters");
const pickerOptionsEl = document.getElementById("pickerOptions");

const datePickerEl = document.getElementById("datePicker");
const dateTrigger = document.getElementById("dateTrigger");
const dateTriggerText = document.getElementById("dateTriggerText");
const dateDropdown = document.getElementById("dateDropdown");
const calTitle = document.getElementById("calTitle");
const calGrid = document.getElementById("calGrid");
const calPrev = document.getElementById("calPrev");
const calNext = document.getElementById("calNext");
const calWeekdaysEl = document.getElementById("calWeekdays");
const dateInput = document.getElementById("bookingDate");

const timePickerEl = document.getElementById("timePicker");
const timeTrigger = document.getElementById("timeTrigger");
const timeTriggerText = document.getElementById("timeTriggerText");
const timeDropdown = document.getElementById("timeDropdown");
const timeGrid = document.getElementById("timeGrid");
const bookingTimeInput = document.getElementById("bookingTime");

function t(key) {
  return translations[currentLang][key] || translations.bg[key] || key;
}

function getServicePrice(item) {
  return item.fromPrice ? `${t("from_prefix")}${item.priceNum}` : item.priceNum;
}

function getServiceName(item) {
  return item.name[currentLang] || item.name.bg;
}

function getServiceDur(item) {
  return item.dur[currentLang] || item.dur.bg;
}

function getCatLabel(catObj) {
  return catObj.label[currentLang] || catObj.label.bg;
}

// --- ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА ---
function applyLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem("aveo_lang", lang);

  document.documentElement.lang = lang === "uk" ? "uk" : lang;
  document.title = t("page_title");

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  if (calWeekdaysEl) {
    calWeekdaysEl.innerHTML = t("weekdays").map(d => `<span>${d}</span>`).join("");
  }

  if (dateInput && dateInput.value) {
    dateTriggerText.textContent = formatLocalizedDate(dateInput.value);
  } else if (dateTriggerText) {
    dateTriggerText.textContent = t("date_placeholder");
  }

  if (bookingTimeInput && bookingTimeInput.value) {
    timeTriggerText.textContent = bookingTimeInput.value;
  } else if (timeTriggerText) {
    timeTriggerText.textContent = t("time_placeholder");
  }

  renderMenu();
  renderSelectedChips();
  renderPickerFilters();
  renderPickerOptions();
  renderCalendar();
  renderTimeSlots();
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

// --- МЕНЮ УСЛУГ ---
function renderMainSections() {
  if (!mainSectionsEl) return;
  const secNames = t("sections");
  mainSectionsEl.innerHTML = mainSections.map(sec => `
    <button class="section-pill ${sec.id === activeSection ? "active" : ""}"
      type="button" data-section="${sec.id}">
      <span class="section-icon">${sec.icon}</span>
      <span class="section-name">${secNames[sec.id]}</span>
    </button>
  `).join("");

  mainSectionsEl.querySelectorAll(".section-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      const nextSection = btn.dataset.section;
      activeSection = nextSection;
      if (nextSection === "all") {
        activeCategory = "all";
      } else {
        const firstSub = serviceCategories.find(c => c.section === nextSection);
        activeCategory = firstSub ? firstSub.id : "all";
      }
      renderMenu();
    });
  });
}

function renderSubcategories() {
  if (!categoryTabs) return;
  if (activeSection === "all") {
    categoryTabs.innerHTML = "";
    categoryTabs.style.display = "none";
    return;
  }

  categoryTabs.style.display = "flex";
  const subs = serviceCategories.filter(c => c.section === activeSection);

  categoryTabs.innerHTML = subs.map(cat => {
    const count = services.filter(s => s.category === cat.id).length;
    return `
      <button class="category-tab ${cat.id === activeCategory ? "active" : ""}"
        type="button" data-category="${cat.id}">
        ${escapeHTML(getCatLabel(cat))} <span class="tab-count">(${count})</span>
      </button>
    `;
  }).join("");

  categoryTabs.querySelectorAll(".category-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category;
      renderMenu();
    });
  });
}

function renderServices() {
  if (!serviceList) return;
  const visible = activeSection === "all"
    ? services
    : services.filter(item => item.category === activeCategory);

  serviceList.innerHTML = visible.map((item, idx) => {
    const catObj = serviceCategories.find(c => c.id === item.category);
    const durText = getServiceDur(item);
    const metaText = activeSection === "all" && catObj
      ? `${getCatLabel(catObj)} · ${durText}`
      : durText;
    const isPicked = selectedServiceIds.has(item.id);

    return `
      <article class="service-item" style="animation-delay: ${Math.min(idx * 25, 250)}ms">
        <div class="service-info">
          <h3>${escapeHTML(getServiceName(item))}</h3>
          <p>${escapeHTML(metaText)}</p>
        </div>
        <div class="service-meta">
          <strong class="service-price">${escapeHTML(getServicePrice(item))}</strong>
          <button class="service-pick ${isPicked ? "picked" : ""}" type="button" data-id="${item.id}">
            <span class="pick-label">${isPicked ? t("btn_picked") : t("btn_pick")}</span>
            <span class="pick-arrow">${isPicked ? "✓" : "↗"}</span>
          </button>
        </div>
      </article>
    `;
  }).join("");

  serviceList.querySelectorAll(".service-pick").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const wasSelected = selectedServiceIds.has(id);

      if (wasSelected) {
        selectedServiceIds.delete(id);
      } else {
        selectedServiceIds.add(id);
      }

      syncAllServiceUI();

      if (!wasSelected) {
        setTimeout(() => {
          document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
        }, 220);
      }
    });
  });
}

function renderMenu() {
  renderMainSections();
  renderSubcategories();
  renderServices();
}

// --- МУЛЬТИВЫБОР В ФОРМЕ ---
function renderSelectedChips() {
  if (!selectedChipsEl) return;
  const selectedItems = services.filter(s => selectedServiceIds.has(s.id));

  if (selectedItems.length === 0) {
    selectedChipsEl.innerHTML = "";
    if (selectedTotalEl) selectedTotalEl.hidden = true;
    if (pickerTriggerText) pickerTriggerText.textContent = t("picker_select_initial");
    return;
  }

  if (pickerTriggerText) {
    pickerTriggerText.textContent = t("picker_select_more").replace("{n}", selectedItems.length);
  }

  selectedChipsEl.innerHTML = selectedItems.map(item => `
    <span class="service-chip">
      <span class="chip-name">${escapeHTML(getServiceName(item))}</span>
      <span class="chip-price">${escapeHTML(getServicePrice(item))}</span>
      <button type="button" class="chip-remove" data-remove="${item.id}" aria-label="Remove">×</button>
    </span>
  `).join("");

  selectedChipsEl.querySelectorAll(".chip-remove").forEach(btn => {
    btn.addEventListener("click", () => {
      selectedServiceIds.delete(btn.dataset.remove);
      syncAllServiceUI();
    });
  });

  if (selectedTotalEl) {
    const sum = selectedItems.reduce((acc, s) => acc + s.numericPrice, 0);
    const hasFrom = selectedItems.some(s => s.fromPrice);
    const formattedSum = Number.isInteger(sum) ? `${sum} €` : `${sum.toFixed(2).replace(".", ",")} €`;

    selectedTotalEl.hidden = false;
    selectedTotalEl.innerHTML = `
      <span>${t("total_count")} <strong>${selectedItems.length}</strong></span>
      <span>${t("total_sum")} <strong>${hasFrom ? t("from_prefix") : ""}${formattedSum}</strong></span>
    `;
  }
}

function renderPickerFilters() {
  if (!pickerFiltersEl) return;
  const secNames = t("sections");
  const tabs = [
    { id: "all", label: t("filter_all") },
    { id: "nails", label: secNames.nails },
    { id: "face", label: secNames.face },
    { id: "epilation", label: secNames.epilation },
    { id: "body", label: secNames.body }
  ];

  pickerFiltersEl.innerHTML = tabs.map(tab => `
    <button type="button" class="picker-filter-btn ${pickerFilterSection === tab.id ? "active" : ""}" data-sec="${tab.id}">
      ${escapeHTML(tab.label.charAt(0).toUpperCase() + tab.label.slice(1))}
    </button>
  `).join("");

  pickerFiltersEl.querySelectorAll(".picker-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      pickerFilterSection = btn.dataset.sec;
      renderPickerFilters();
      renderPickerOptions();
    });
  });
}

function renderPickerOptions() {
  if (!pickerOptionsEl) return;
  const query = pickerSearchQuery.trim().toLowerCase();

  const allowedCategories = pickerFilterSection === "all"
    ? null
    : new Set(serviceCategories.filter(c => c.section === pickerFilterSection).map(c => c.id));

  const filtered = services.filter(item => {
    if (allowedCategories && !allowedCategories.has(item.category)) return false;
    if (query) {
      const inCurrent = getServiceName(item).toLowerCase().includes(query);
      const inBg = item.name.bg.toLowerCase().includes(query);
      if (!inCurrent && !inBg) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    pickerOptionsEl.innerHTML = `<div class="picker-empty">${t("picker_empty")}</div>`;
    return;
  }

  const grouped = new Map();
  filtered.forEach(item => {
    if (!grouped.has(item.category)) grouped.set(item.category, []);
    grouped.get(item.category).push(item);
  });

  let html = "";
  grouped.forEach((items, catId) => {
    const catObj = serviceCategories.find(c => c.id === catId);
    html += `<div class="picker-group-title">${escapeHTML(catObj ? getCatLabel(catObj) : "")}</div>`;
    html += items.map(item => {
      const checked = selectedServiceIds.has(item.id);
      return `
        <button type="button" class="picker-option ${checked ? "is-selected" : ""}" data-id="${item.id}">
          <span class="option-check">${checked ? "✓" : ""}</span>
          <span class="option-body">
            <span class="option-name">${escapeHTML(getServiceName(item))}</span>
            <small class="option-dur">${escapeHTML(getServiceDur(item))}</small>
          </span>
          <strong class="option-price">${escapeHTML(getServicePrice(item))}</strong>
        </button>
      `;
    }).join("");
  });

  pickerOptionsEl.innerHTML = html;

  pickerOptionsEl.querySelectorAll(".picker-option").forEach(opt => {
    opt.addEventListener("click", () => {
      const id = opt.dataset.id;
      if (selectedServiceIds.has(id)) {
        selectedServiceIds.delete(id);
      } else {
        selectedServiceIds.add(id);
      }
      syncAllServiceUI();
    });
  });
}

function syncAllServiceUI() {
  renderSelectedChips();
  renderPickerOptions();
  renderServices();
}

if (pickerTrigger && pickerDropdown) {
  pickerTrigger.addEventListener("click", () => {
    const isOpen = !pickerDropdown.hidden;
    closeAllDropdowns();
    if (!isOpen) {
      pickerDropdown.hidden = false;
      pickerTrigger.setAttribute("aria-expanded", "true");
      if (pickerSearch) pickerSearch.focus();
    }
  });
}

if (pickerSearch) {
  pickerSearch.addEventListener("input", () => {
    pickerSearchQuery = pickerSearch.value;
    renderPickerOptions();
  });
}

// --- КАЛЕНДАРЬ И ВРЕМЯ (08:00 - 20:00) ---
function getTodayDate() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function toISODate(dateObj) {
  const y = dateObj.getFullYear();
  const m = String(dateObj.getMonth() + 1).padStart(2, "0");
  const d = String(dateObj.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatLocalizedDate(isoStr) {
  const [y, m, d] = isoStr.split("-").map(Number);
  const months = t("months_gen");
  return `${d} ${months[m - 1]} ${y}`;
}

let calViewYear = getTodayDate().getFullYear();
let calViewMonth = getTodayDate().getMonth();

function renderCalendar() {
  if (!calGrid || !calTitle) return;
  const todayObj = getTodayDate();
  const todayISO = toISODate(todayObj);
  const selectedISO = dateInput ? dateInput.value : "";
  const months = t("months");

  calTitle.textContent = `${months[calViewMonth]} ${calViewYear}`;

  if (calPrev) {
    calPrev.disabled =
      calViewYear < todayObj.getFullYear() ||
      (calViewYear === todayObj.getFullYear() && calViewMonth <= todayObj.getMonth());
  }

  const firstDay = new Date(calViewYear, calViewMonth, 1);
  const startOffset = (firstDay.getDay() + 6) % 7;
  const daysInMonth = new Date(calViewYear, calViewMonth + 1, 0).getDate();

  let cellsHTML = "";

  for (let i = 0; i < startOffset; i++) {
    cellsHTML += `<span class="cal-empty"></span>`;
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const cellDate = new Date(calViewYear, calViewMonth, day);
    const cellISO = toISODate(cellDate);
    const isPast = cellDate < todayObj;
    const isToday = cellISO === todayISO;
    const isSelected = cellISO === selectedISO;

    cellsHTML += `
      <button type="button"
        class="cal-day ${isToday ? "is-today" : ""} ${isSelected ? "active" : ""}"
        data-date="${cellISO}"
        ${isPast ? "disabled" : ""}>
        ${day}
      </button>
    `;
  }

  calGrid.innerHTML = cellsHTML;

  calGrid.querySelectorAll(".cal-day:not([disabled])").forEach(btn => {
    btn.addEventListener("click", () => {
      const pickedISO = btn.dataset.date;
      if (dateInput) dateInput.value = pickedISO;
      if (dateTriggerText) dateTriggerText.textContent = formatLocalizedDate(pickedISO);
      renderCalendar();
      renderTimeSlots();
      if (dateDropdown) dateDropdown.hidden = true;
      if (dateTrigger) dateTrigger.setAttribute("aria-expanded", "false");
    });
  });
}

if (calPrev) {
  calPrev.addEventListener("click", () => {
    calViewMonth--;
    if (calViewMonth < 0) {
      calViewMonth = 11;
      calViewYear--;
    }
    renderCalendar();
  });
}

if (calNext) {
  calNext.addEventListener("click", () => {
    calViewMonth++;
    if (calViewMonth > 11) {
      calViewMonth = 0;
      calViewYear++;
    }
    renderCalendar();
  });
}

if (dateTrigger && dateDropdown) {
  dateTrigger.addEventListener("click", () => {
    const isOpen = !dateDropdown.hidden;
    closeAllDropdowns();
    if (!isOpen) {
      renderCalendar();
      dateDropdown.hidden = false;
      dateTrigger.setAttribute("aria-expanded", "true");
    }
  });
}

const timeSlots = [];
for (let hour = 8; hour <= 20; hour++) {
  const hh = String(hour).padStart(2, "0");
  timeSlots.push(`${hh}:00`);
  if (hour < 20) timeSlots.push(`${hh}:30`);
}

function renderTimeSlots() {
  if (!timeGrid || !dateInput) return;
  const selectedDate = dateInput.value;
  const isToday = selectedDate === toISODate(getTodayDate());
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  timeGrid.innerHTML = timeSlots.map(slot => {
    const [h, m] = slot.split(":").map(Number);
    const slotMinutes = h * 60 + m;
    const disabled = isToday && slotMinutes <= currentMinutes;
    const active = bookingTimeInput && bookingTimeInput.value === slot && !disabled;

    if (bookingTimeInput && bookingTimeInput.value === slot && disabled) {
      bookingTimeInput.value = "";
      if (timeTriggerText) timeTriggerText.textContent = t("time_placeholder");
    }

    return `
      <button type="button"
        class="time-slot ${active ? "active" : ""}"
        data-time="${slot}"
        ${disabled ? "disabled" : ""}>
        ${slot}
      </button>
    `;
  }).join("");

  timeGrid.querySelectorAll(".time-slot:not([disabled])").forEach(btn => {
    btn.addEventListener("click", () => {
      if (bookingTimeInput) bookingTimeInput.value = btn.dataset.time;
      if (timeTriggerText) timeTriggerText.textContent = btn.dataset.time;
      renderTimeSlots();
      if (timeDropdown) timeDropdown.hidden = true;
      if (timeTrigger) timeTrigger.setAttribute("aria-expanded", "false");
    });
  });
}

if (timeTrigger && timeDropdown) {
  timeTrigger.addEventListener("click", () => {
    const isOpen = !timeDropdown.hidden;
    closeAllDropdowns();
    if (!isOpen) {
      renderTimeSlots();
      timeDropdown.hidden = false;
      timeTrigger.setAttribute("aria-expanded", "true");
    }
  });
}

function closeAllDropdowns() {
  if (pickerDropdown) pickerDropdown.hidden = true;
  if (pickerTrigger) pickerTrigger.setAttribute("aria-expanded", "false");
  if (dateDropdown) dateDropdown.hidden = true;
  if (dateTrigger) dateTrigger.setAttribute("aria-expanded", "false");
  if (timeDropdown) timeDropdown.hidden = true;
  if (timeTrigger) timeTrigger.setAttribute("aria-expanded", "false");
}

document.addEventListener("click", event => {
  const insideService = servicePickerEl && servicePickerEl.contains(event.target);
  const insideDate = datePickerEl && datePickerEl.contains(event.target);
  const insideTime = timePickerEl && timePickerEl.contains(event.target);

  if (!insideService && !insideDate && !insideTime) {
    closeAllDropdowns();
  }
});

// --- ОТПРАВКА НА ПОЧТУ ---
const form = document.getElementById("bookingForm");
const statusEl = document.getElementById("formStatus");

if (form) {
  form.addEventListener("submit", async event => {
    event.preventDefault();
    const honeyPot = form.querySelector('input[name="website"]');
    if (honeyPot && honeyPot.value) {
      return; // Бот заполнил скрытое поле — тихо прерываем отправку
    }
    if (statusEl) statusEl.style.color = "#6d7958";

    const name = form.elements.name.value.trim();
    const phone = form.elements.phone.value.trim();
    const date = dateInput ? dateInput.value : "";
    const time = bookingTimeInput ? bookingTimeInput.value : "";
    const note = form.elements.message.value.trim();
    const selectedItems = services.filter(s => selectedServiceIds.has(s.id));

    if (name.length < 2) {
      if (statusEl) {
        statusEl.style.color = "#a94438";
        statusEl.textContent = t("err_name");
      }
      form.elements.name.focus();
      return;
    }
    if (!phone) {
      if (statusEl) {
        statusEl.style.color = "#a94438";
        statusEl.textContent = t("err_phone");
      }
      form.elements.phone.focus();
      return;
    }
    if (selectedItems.length === 0) {
      if (statusEl) {
        statusEl.style.color = "#a94438";
        statusEl.textContent = t("err_service");
      }
      if (pickerDropdown) pickerDropdown.hidden = false;
      if (pickerTrigger) pickerTrigger.setAttribute("aria-expanded", "true");
      return;
    }
    if (!date) {
      if (statusEl) {
        statusEl.style.color = "#a94438";
        statusEl.textContent = t("err_date");
      }
      if (dateDropdown) {
        renderCalendar();
        dateDropdown.hidden = false;
      }
      if (dateTrigger) dateTrigger.setAttribute("aria-expanded", "true");
      return;
    }
    if (!time) {
      if (statusEl) {
        statusEl.style.color = "#a94438";
        statusEl.textContent = t("err_time");
      }
      if (timeDropdown) {
        renderTimeSlots();
        timeDropdown.hidden = false;
      }
      if (timeTrigger) timeTrigger.setAttribute("aria-expanded", "true");
      return;
    }

    const submitBtn = form.querySelector(".submit-button");
    const originalBtnHTML = submitBtn ? submitBtn.innerHTML : "";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = t("sending_btn");
    }
    if (statusEl) statusEl.textContent = t("sending_status");

    const servicesText = selectedItems
      .map((s, i) => `${i + 1}. ${s.name.bg} — ${s.fromPrice ? "от " : ""}${s.priceNum}`)
      .join("\n");

    const sum = selectedItems.reduce((acc, s) => acc + s.numericPrice, 0);
    const hasFrom = selectedItems.some(s => s.fromPrice);
    const formattedSum = Number.isInteger(sum) ? `${sum} €` : `${sum.toFixed(2).replace(".", ",")} €`;

    const payload = {
      _subject: `Нова заявка за час — ${name} (${date}, ${time})`,
      _template: "table",
      _captcha: "false",
      "Име и фамилия": name,
      "Телефон": phone,
      "Език на клиента": currentLang.toUpperCase(),
      "Избрани услуги": servicesText,
      "Ориентировъчна сума": `${hasFrom ? "от " : ""}${formattedSum}`,
      "Предпочитана дата": date,
      "Предпочитан час": time,
      "Допълнителна информация": note || "Няма"
    };

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${BOOKING_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok && (result.success === "true" || result.success === true)) {
        if (statusEl) {
          statusEl.style.color = "#546b3b";
          statusEl.textContent = t("sent_success");
        }

        form.reset();
        selectedServiceIds.clear();
        if (dateInput) dateInput.value = "";
        if (dateTriggerText) dateTriggerText.textContent = t("date_placeholder");
        if (bookingTimeInput) bookingTimeInput.value = "";
        if (timeTriggerText) timeTriggerText.textContent = t("time_placeholder");
        syncAllServiceUI();
        renderCalendar();
        renderTimeSlots();
      } else {
        throw new Error(result.message || "Error");
      }
    } catch (error) {
      if (statusEl) {
        statusEl.style.color = "#a94438";
        statusEl.textContent = t("sent_error");
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;
      }
    }
  });
}

// МОБИЛЬНОЕ МЕНЮ И ГОД
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const opened = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(opened));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

// СТАРТ
applyLanguage(currentLang);
