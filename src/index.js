import "./pages/index.css"
import { formTextarea, competitionsMenu, competitions, tagifyInput, test } from "./utils/constants.js";
import Textarea from "./components/Textarea.js";
import Competitions from "./components/Competitions.js";

const textarea = new Textarea(formTextarea, '.input-text__counter')
textarea.enableTextarea()


competitions.addEventListener("click", (event) => {
      event.preventDefault();
      competitionsMenu.classList.toggle('competitions__menu_openned');
  });

  window.addEventListener("click", (event) => {
    event.preventDefault();
    if(!event.target.classList.contains('input-text__textfield')){
      competitionsMenu.classList.remove('competitions__menu_openned');
    }
  }, true);

const testCompetitionst = new Competitions (competitionsMenu, tagifyInput);
testCompetitionst.createList(test);

new Tagify(tagifyInput, {
    userInput: false,
    callbacks: {
      "remove": testCompetitionst._removeFromTagify
    }
  });
  