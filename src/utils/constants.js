export const formTextarea = document.querySelectorAll('.input-text__textarea');

export const inputElm = document.querySelector('.input-text__textfield_type_competitions')

export const whitelistValue = [
  {
      value: 'Социальные сети',
      group: 'Маркетинг и коммуникации'
  },
  {
      value: 'Работа с текстами',
      group: 'Маркетинг и коммуникации'
  },
  {
      value: 'Email-рассылки',
      group: 'Маркетинг и коммуникации'
  },
  {
      value: 'Организация мероприятий',
      group: 'Маркетинг и коммуникации'
  },
  {
      value: 'Реклама',
      group: 'Маркетинг и коммуникации'
  },
  {
    value: 'Дизайн',
    group: 'Дизайн и верстка'
  },
  {
      value: 'Верстка',
      group: 'Дизайн и верстка'
  },
  {
      value: 'Что-то',
      group: 'IT'
  },
  {
      value: 'То-то',
      group: 'IT'
  },
  {
      value: 'Еще что-то',
      group: 'IT'
  },
  {
    value: 'Финансирую',
    group: 'Финансы и фандрайзинг'
  },
  {
    value: 'Трачу деньги',
    group: 'Финансы и фандрайзинг'
  },
  {
    value: 'Умею включать камеру',
    group: 'Фото и видео'
  },
  {
    value: 'И выключать умею',
    group: 'Фото и видео'
  },
  {
    value: 'Знаю законы',
    group: 'Юридические услуги'
  },
  {
    value: 'Смотрел Лучше звоните Солу',
    group: 'Юридические услуги'
  },
  {
    value: 'Стратегии-стратегии',
    group: 'Стратегический консалтинг'
  },
  {
    value: 'Играл в Civilization',
    group: 'Стратегический консалтинг'
  },
  {
    value: 'Чему-нибудь да обучу',
    group: 'Обучение и тренинги'
  },
  {
    value: 'Могу быть личным тренером',
    group: 'Обучение и тренинги'
  },
  {
    value: 'Контролирую работу других',
    group: 'Менеджемент'
  },
  {
    value: 'Умею раздвать задачи',
    group: 'Менеджемент'
  },
  {
    value: 'Пускай что-то будет',
    group: 'HR'
  },
  {
    value: 'И еще что-нибудь',
    group: 'HR'
  },
].map(item => ({ ...item, class: `group_${hashCode(item.group)}` }));