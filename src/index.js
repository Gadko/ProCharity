import "./pages/index.css"
import { formTextarea, obj, regVolonter, buttonDelete, objDelete } from "./utils/constants.js";
import Textarea from "./components/Textarea.js";
import FormValidator from "./components/FormValidator.js";
import InputDelet from "./components/InputDelet.js";

const textarea = new Textarea(formTextarea, '.input-text__counter')
textarea.enableTextarea()

if (regVolonter != null) {
  const validator = new FormValidator(obj, regVolonter);
  validator.enableValidation();
}

const inputDelet = new InputDelet(buttonDelete, objDelete);
inputDelet.enableDelete()

/* const password = document.querySelector('#password-input');
const passwordConfirmation = document.querySelector('#password-input-confirmation');

passwordConfirmation.addEventListener('blur', ChekPassword)

function ChekPassword() {
  if (passwordConfirmation.value === password.value) {
    console.log('yes')
    console.log(!password.validity.valid)
  } else {
    console.log('no')
    console.log(password.validity.valid)
  }
} */




