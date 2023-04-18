import "./pages/index.css"

import { formTextarea, editAvatar } from "./utils/constants.js";
import Textarea from "./components/Textarea.js";
import Cropper from "../node_modules/cropperjs/dist/cropper.js"
import ItcCustomSelect from "./components/itc-custom-select.js"

const textarea = new Textarea(formTextarea, '.input-text__counter')
textarea.enableTextarea()


const select1 = new ItcCustomSelect('#select-1');

const select2 = new ItcCustomSelect('#select-2');
    

editAvatar.src = "https://img3.akspic.ru/previews/5/5/4/1/7/171455/171455-zhivopis-illustracia-art-voda-oblako-500x.jpg"
const cropper = new Cropper(editAvatar, {
    aspectRatio: 1/1,
    autoCropArea: 1
});

cropper.options.highlight = false;
cropper.options.dragMode = "move";
cropper.options.guides = false;
cropper.options.center = false;
cropper.options.cropBoxMovable = false;
cropper.options.background = false;

