export const formTextarea = document.querySelectorAll('.input-text__textarea');

export const inputElm = document.querySelector('.input-text__textfield_type_competitions');
export const inputMobile = document.querySelector('.competitions-mobile');
export const buttonMobileClose = document.querySelector('.competitions-mobile__close')
export const buttonMobileOpen = document.querySelector('.input-text');


export const popupContacts = document.querySelector('.popup_type_contacts')
export const openPopupContacts = document.querySelector('.link_all-block-size')
export const closePopupContacts = document.querySelector('.popup__close-cross')
export const savePopupContacts = document.querySelector('.popup__btn_save')

export const whitelistValue = [
  {
      value: 'Социальные сети',
      group: 'Маркетинг и коммуникации',
      id: 1
  },
  {
      value: 'Работа с текстами',
      group: 'Маркетинг и коммуникации',
      id: 2
  },
  {
      value: 'Email-рассылки',
      group: 'Маркетинг и коммуникации',
      id: 3
  },
  {
      value: 'Настройка принтера',
      group: 'IT штуки',
      id: 4
  },
  {
      value: 'Установка пасьянс-косынки',
      group: 'IT штуки',
      id: 5
  }
].map(item => ({ ...item, class: `group_${item.id}` }));

export const editAvatar = document.querySelector('.popup__image')
export const profileAvatar = document.querySelector('.image-edit__profile-image')

