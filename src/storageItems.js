// This file contains the array with all to-do list items,and functions to get and set it

const storageItems = (function storageItemList() {
  let allListItems;
  const getStorage = function pullUpStorageItem() {
    let storedItems;
    if (localStorage.getItem('toDoList') === null) {
      storedItems = [];
    } else {
      storedItems = JSON.parse(localStorage.getItem('toDoList'));
      for (let i = 0; i < storedItems.length; i += 1) {
        const dateParsed = new Date(storedItems[i].dueDate);
        storedItems[i].dueDate = dateParsed;
      }
    }
    this.allListItems = storedItems;
  };
  const setStorage = function setStorageValue() {
    localStorage.setItem('toDoList', JSON.stringify(this.allListItems));
  };
  return {
    allListItems,
    getStorage,
    setStorage,
  };
}());

export default storageItems;
