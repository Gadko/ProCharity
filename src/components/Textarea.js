export default class Textarea {
  constructor (formTextarea, counter) {
    this._formTextarea = formTextarea;
    this._counter = counter;
  }

  _calculateSymbols(item, counter, maxLength) {
    const length = item.value.length;
    
    counter.textContent = `${length}/${maxLength}`
  }

  _resize(item) {
    item.style.height = 'auto';
    item.style.height = `${item.scrollHeight}px`;
  }

  _setEventListener() {
    this._formTextarea.forEach((item) => {
      const formCounterLength = item.parentElement.querySelector(this._counter);
      const maxLength = item.maxLength;
    
      item.addEventListener('input', (event) => {
        event.preventDefault();
        this._calculateSymbols(item, formCounterLength, maxLength);
        this._resize(item)
      });
    
      this._resize(item)
      this._calculateSymbols(item, formCounterLength, maxLength);
    })
  }

  enableTextarea() {
    this._setEventListener();
  }
}