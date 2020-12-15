/* eslint-disable func-names */
/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import addListToArray from './addListToArray';
import storageItems from '../storageItems';

const newListItem = (function () {
  const modalOpenClose = function () {
    const btn = document.getElementById('addNewItemButton');
    const newItemModal = document.getElementById('addNewItemModal');
    const closeModal = document.getElementById('closeAddNewModal');
    btn.addEventListener('click', () => { newItemModal.style.display = 'block'; });
    closeModal.addEventListener('click', () => { newItemModal.style.display = 'none'; });
    window.onclick = function (event) { if (event.target === newItemModal) { newItemModal.style.display = 'none'; } };
  };

  const addNewListItem = function () {
    const title = document.getElementById('newItemForm').elements.namedItem('taskName').value;
    const description = document.getElementById('newItemForm').elements.namedItem('taskDescription').value;
    const dueDate = document.getElementById('newItemForm').elements.namedItem('dueDate').value;
    const project = document.getElementById('newItemForm').elements.namedItem('project').value;
    const priority = document.getElementById('newItemForm').elements.namedItem('importance').value;
    addListToArray(storageItems.allListItems, title, description, dueDate, priority, project);
    // you need to have the list refresh here, but first sort out the bug you have
  };

  const modalSubmitButton = function () {
    const button = document.getElementById('addNewListItemButton');
    button.addEventListener('click', () => {
      const formValid = document.getElementById('newItemForm').checkValidity();
      if (formValid) {
        addNewListItem();
        storageItems.setStorage();
        const newItemModal = document.getElementById('addNewItemModal');
        newItemModal.style.display = 'none';
        location.reload();
      } else {
        alert('Form not complete');
      }
    });
  };

  const updateButtons = function () {
    modalOpenClose();
    modalSubmitButton();
  };

  return {
    updateButtons,
  };
}());

export default newListItem;
