export default class FormValidator {
  constructor(options, formElement) {
    this._options = options;
    this._formElement = formElement;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._options.inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._options.submitButtonSelector
    );
  }

  _showError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._options.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._options.errorClass);
  }

  _hideError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._options.inputErrorClass);
    errorElement.classList.remove(this._options.errorClass);
    errorElement.textContent = "";
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButton() {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.disabled = true;
      this._buttonElement.classList.add(this._options.inactiveButtonClass);
    } else {
      this._buttonElement.disabled = false;
      this._buttonElement.classList.remove(this._options.inactiveButtonClass);
    }
  }

  _isValid(inputElement) {
    if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
      inputElement.setCustomValidity("");
    }

    if (!inputElement.validity.valid) {
      this._showError(inputElement, inputElement.validationMessage);
    } else {
      this._hideError(inputElement);
    }
  }

  _CheckPassword() {

  }

  _setEventListener() {
    this._formElement.addEventListener("reset", () => {
      setTimeout(() => {
        this._toggleButton();
      }, 0);
    });

    this._inputList.forEach((input) => {
      input.addEventListener("blur", () => {
        this._isValid(input);
        this._toggleButton();
      });
    });
  }

  enableValidation() {
    this._toggleButton(); 
    this._setEventListener();
  }
}
