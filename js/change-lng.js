const langArr = {
  studio: {
    en: 'Studio',
    ua: 'Студія',
  },
  portfolio: {
    en: 'Portfolio',
    ua: 'Портфоліо',
  },
  contacts: {
    en: 'Contacts',
    ua: 'Контакти',
  },
  title: {
    en: 'Effective solutions for your business',
    ua: 'Ефективні рішення для вашого бізнесу',
  },
  btn: {
    en: 'Order now',
    ua: 'Замовити послугу',
  },
  benefits__title_1: {
    en: 'Attention to detail',
    ua: 'Увага до деталей',
  },
  benefits__text_1: {
    en: 'Ideological considerations, and the beginning of the day-to-day work of shaping a position.',
    ua: 'Ідейні міркування, і навіть початок повсякденної роботи з формування позиції.',
  },
  benefits__title_2: {
    en: 'Punctuality',
    ua: 'Пуктуальність',
  },
  benefits__text_2: {
    en: 'The task of the organization, especially the scope and place of training entail.',
    ua: 'Завдання організації, особливо ж рамки і місце навчання кадрів тягне за собою процес.',
  },
  benefits__title_3: {
    en: 'Planning',
    ua: 'Планування',
  },
  benefits__text_3: {
    en: 'The task of the organization, especially the scope and place of training entail.',
    ua: 'Так само консультація з широким активом зумовлює створення нових пропозицій.',
  },
  benefits__title_4: {
    en: 'Modern technology',
    ua: 'Сучасні технології',
  },
  benefits__text_4: {
    en: 'The importance of these problems is so obvious as planned tasks’ implementation.',
    ua: 'Значимість цих проблем настільки очевидна, як і реалізація планових завдань.',
  },
  servies__title: {
    en: 'What we do',
    ua: 'Чим ми займаємось',
  },
  servies__lable_1: {
    en: 'Desktop applications',
    ua: 'Десктопні додатки',
  },
  servies__lable_2: {
    en: 'Mobile applications',
    ua: 'Мобільні додатки',
  },
  servies__lable_3: {
    en: 'Design solutions',
    ua: 'Дизайнерські рішення',
  },
  team__title: {
    en: 'Team',
    ua: 'Наша команда',
  },
  team__member_1: {
    en: 'Ihor Demianenko',
    ua: "Ігор Дем'яненко",
  },
  team__member_2: {
    en: 'Olha Repina',
    ua: 'Ольга Репіна',
  },
  team__member_3: {
    en: 'Mykola Tarasov',
    ua: 'Микола Тарасов',
  },
  team__member_4: {
    en: 'Mykhailo Yermakov',
    ua: 'Михайло Єрмаков',
  },
  clients__title: {
    en: 'Clients',
    ua: 'Постійні клієнти',
  },
  connect__address: {
    en: 'city Kyiv, Lesya Ukrainka Blvd, 26',
    ua: 'місто Київ, бульвар Лесі Українки, 26',
  },
  footer__text: {
    en: 'Join us',
    ua: 'Приєднуйтесь',
  },
  footer__subscribe: {
    en: 'Get our newsletter',
    ua: 'Підпишіться на розсилку',
  },
  btn__icon: {
    en: 'Subscribe',
    ua: 'Підписатись',
  },
  modal__title: {
    en: 'Leave your phone number and we will call you back',
    ua: 'Залишіть свої контактні дані і ми передзвонимо Вам',
  },
  form__name: {
    en: 'Name',
    ua: "Ім'я",
  },
  form__phone: {
    en: 'Phone number',
    ua: 'Телефон',
  },
  form__email: {
    en: 'E-mail',
    ua: 'Пошта',
  },
  form__comment: {
    en: 'Comment',
    ua: 'Коментар',
  },
  privacy: {
    en: 'I agree to the',
    ua: 'Погоджуюсь отримати розсилку та приймаю',
  },
  privacy__link: {
    en: 'Terms of service',
    ua: 'Умови договору',
  },
  btn__modal: {
    en: 'Submit',
    ua: 'Надіслати',
  },
  all: {
    en: 'All',
    ua: 'Всі',
  },
  webpages: {
    en: 'Web-pages',
    ua: 'Веб-сторінки',
  },
  apps: {
    en: 'Apps',
    ua: 'Програми',
  },
  design: {
    en: 'Design',
    ua: 'Дизайн',
  },
  marketing: {
    en: 'Marketing',
    ua: 'Маркетинг',
  },
  webpages_1: {
    en: 'Web-page',
    ua: 'Веб-сторінкa',
  },
  apps_1: {
    en: 'App',
    ua: 'Програма',
  },
  product__name_1: {
    en: 'Technocryak',
    ua: 'Технокряк',
  },
  overlay__text_1: {
    en: 'Technocryak is a modern coronavirus distribution platform. Companies use this platform for digital espionage and attacks on competitors',
    ua: 'Технокряк це сучасний майданчик поширення коронавірусу. Компанії використовують цю платформу для цифрового шпигунства та атак на захищені сервери конкурентів.',
  },
  product__name_2: {
    en: 'Poster',
    ua: 'Постер',
  },
  overlay__text_2: {
    en: "Posters are an incredibly creative form of design. Their goal is to capture and hold the consumer's attention. The 'New Orlean vs Golden Star' poster fits into a modern illustrated style.",
    ua: 'Постери – неймовірно творча форма дизайну. Їх мета полягає в тому, щоб захопити і утримати увагу споживача. Постер New Orlean vs Golden Star вписується в сучасний ілюстрований стиль.',
  },
};

const select = document.querySelector('select');
const allLang = ['en', 'ua'];

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  console.log(hash);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#en';
    location.reload();
  }

  select.value = hash;
  for (let key in langArr) {
    let elem = document.querySelector('.lng-' + key);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
    }
  }
}
changeLanguage();
