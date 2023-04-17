import "./pages/index.css"
import { formTextarea, whitelistValue, inputElm } from "./utils/constants.js";
import Textarea from "./components/Textarea.js";

const textarea = new Textarea(formTextarea, '.input-text__counter')
textarea.enableTextarea()

import img from './images/chevron-up.svg'

import { tagTemplate, suggestionItemTemplate } from './utils/tagify_templates.js';

let tagify = new Tagify(inputElm, {
    userInput : false,
    dropdown: {
        closeOnSelect: false,
        maxItems: Infinity,
        classname: 'groupList',
    },
    templates: {
        tag: tagTemplate,
        dropdownItem: suggestionItemTemplate,
    },
    whitelist: whitelistValue,
})

tagify.dropdown.createListHTML = sugegstionsList  => {
    
    const getCompetitiesForGroup = (group) => {
      let competities = []
      sugegstionsList.forEach(sug => {
        if(sug.group === group) {
          competities.push(tagify.settings.templates.dropdownItem.apply(tagify, [sug]));
        }
      });
      return competities.join("");
    }

    let items = []

    let groups = []
    sugegstionsList.forEach(sug => {
      groups.push(sug.group)
    });
    groups = new Set(groups); // Убираем дубликаты

    groups.forEach(group => {
       items.push(`<div class="tagify__dropdown__itemsGroup" data-title="Group ${group}:">
                          <div style="display: flex; justify-content: space-between">
                            <span class="group__span">${ group }</span>
                            <img src=${img} style="padding: 20px;">
                        
                            <div class="items">
                              <div class="tagify_subgroup group_${ group }">
                                  ${ getCompetitiesForGroup(group) }
                              </div>
                            </div>
                          </div>
                    </div>`);
    });

    let resultHtml = `<div class="multi-level">
                        <div class="items">
                          ${items.join("")}
                        </div>
                      </div
                     `

    return resultHtml;
}

function generateMobileSeletion() {
  let list = document.querySelector(".competitions-mobile__list");

  const getCompetitiesForGroup = (group) => {
      let competities = []
      whitelistValue.forEach(sug => {
        if(sug.group === group) {
          competities.push(`<p class="competitions-mobile__chip">${sug.value}</p>`);
        }
      });
      return competities.join("");
    }

    let items = []

    let groups = []
    whitelistValue.forEach(sug => {
      groups.push(sug.group)
    });
    groups = new Set(groups); // Убираем дубликаты
    groups.forEach(group => {
       items.push(`<li class="competitions-mobile__container">
              <label class="competitions-mobile__acoprd-content">
                <input
                  class="competitions-mobile__input"
                  type="radio"
                  name="acord"
                />
                <span class="competitions-mobile__input-stile"></span>
                ${group}
                <div class="competitions-mobile__acord-body">
                  <div class="competitions-mobile__buttons">
                    <button type="button" class="competitons-mobile__button">
                      Сбросить
                    </button>
                    <button type="button" class="competitons-mobile__button">
                      Выбрать все
                    </button>
                  </div>
                  ${ getCompetitiesForGroup(group)}
                </div>
              </label>
            </li>`);
    });

    let resultHtml = items.join(""); 
                     
  list.insertAdjacentHTML('beforeend', resultHtml);
}

generateMobileSeletion();
