export default class Competitions {
  constructor(competitionsMenu, tagifyInput) {
    this._competitionsMenu = competitionsMenu;
    this._tagifyInput = tagifyInput;
    this._selectedCompetitions = [];
  }

  _updateTagify() {
    let values = [];
    this._selectedCompetitions.forEach((o) => values.push(o.value));
    this._tagifyInput.value = values.join(",");
  }
  _removeTag(value) {
    const index = this._selectedCompetitions.findIndex(
      (o) => o.value === value
    );
    if (index < -1) {
      return;
    }

    // Вырубаем чекбокс
    this._selectedCompetitions[index].checkbox.checked = false;
    // Удаляем из списка
    this._selectedCompetitions.splice(index, 1);

    this._updateTagify();
  }
  _addTag(value, id, checkbox) {
    this._selectedCompetitions.push({
      value: value,
      id: id,
      checkbox: checkbox,
    });
  }
  // Обновляем value у tagify, он отрисует всё за нас
  _updateCheckbox(checkbox, value, id) {
    checkbox.checked = !checkbox.checked;

    if (checkbox.checked) {
      this._addTag(value, id, checkbox);
    } else {
      this._removeTag(value);
    }
    this._updateTagify();
  }
  _removeFromTagify(event) {
    this._removeTag(event.detail.data.value);
  }

  createList(values) {
    let id = 0;

    values.forEach((entry) => {
      let listEntry = document.createElement("li");
      listEntry.innerText = entry.name;
      listEntry.className = "competitions__toggle-button";

      let submenu = document.createElement("ul");
      submenu.className = "competitions__submenu";

      entry.values.forEach((value) => {
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "competitions__input-checkbox"
        checkbox.name = id;

        let label = document.createElement("label");
        label.htmlFor = id;
        label.className = "competitions__label-checkbox"
        label.innerText = value;

        let clickableCheckbox = document.createElement("div");
        clickableCheckbox.className = "competitions__checkbox";
        clickableCheckbox.addEventListener("click", (e) => {
          this._updateCheckbox(checkbox, value, checkbox.name);
        });
        clickableCheckbox.append(checkbox);
        clickableCheckbox.append(label);

        submenu.append(clickableCheckbox);

        id++;
      });

      listEntry.append(submenu);
      this._competitionsMenu.append(listEntry);
    });
  }
}
