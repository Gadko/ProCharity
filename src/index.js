import "./pages/index.css"
import { formTextarea } from "./utils/constants.js";
import Textarea from "./components/Textarea.js";

const textarea = new Textarea(formTextarea, '.input-text__counter')
textarea.enableTextarea()