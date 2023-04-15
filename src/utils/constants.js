export const formTextarea = document.querySelectorAll('.input-text__textarea');
export const regVolonter = document.forms["registration-volonter"];

export const  obj = {
  formSelector: '.main__form', //Класс формы
  inputSelector: '.input-text__textfield', //Класс инпутов
  submitButtonSelector: '.btn__registration', //Кнопка сохранить
  inactiveButtonClass: 'btn_status_disabled', //Стиль неактивной кнопки
  inputErrorClass: 'input-text__textfield_error', //Стиль инпута с ошибкой
  errorClass: 'main__input-error_active' //Активированный Span ошибки
}

export const buttonDelete = document.querySelectorAll('.input-text__delete');
export const objDelete = {
  blockInputText: '.input-text', //обертка (блок с инпутами и кнопками)
  textDelete: '.text-delete' // Инпут который надо удалять (new class)
}