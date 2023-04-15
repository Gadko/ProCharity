export default class InputDelet {
  constructor(buttonDelete, objDelete, ) {
    this._buttonDelete = buttonDelete;
    this._blockInputText = objDelete.blockInputText; //обертка (блок с инпутами и кнопками)
    this._textDelete = objDelete.textDelete; // Инпут который надо удалять (new class)
  }

  _searchInputDelete (event) {
    const blockParrent = event.closest(this._blockInputText);
    const input = blockParrent.querySelector(this._textDelete);
  
    return input
  }
  
  _deleteData(event) {
    const input = this._searchInputDelete(event);
    if (input != null) {
      input.value = '';
    }
  }
  
  _setEventListener() {
    this._buttonDelete.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.preventDefault()
        this._deleteData(event.target)
      })
    });
  }

  enableDelete() {
    this._setEventListener()
  }
}

/* Для реализации удаления тектов из инпутов или техтареа необходимо:
Обертке задать класс "input-text"

Инпуту или текстареа (или любому другому элементу из
которого надо удалить текст) класс "text-delete"

Кнопке очитить класс "input-text__delete" */