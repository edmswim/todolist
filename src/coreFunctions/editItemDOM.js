/* eslint-disable func-names */
/* eslint-disable no-restricted-globals */
/* eslint-disable max-len */
import { format } from 'date-fns';
import storageItems from '../storageItems';

// This module creates the edit modal functionality and gives user ability to edit to-do item, and submit it.
const editListItem = (function () {
  const editItemModal = document.getElementById('editItemModal');

  const closeModalOnClick = function () {
    const closeModal = document.getElementById('closeEditModal');
    closeModal.addEventListener('click', () => { editItemModal.style.display = 'none'; });
    window.onclick = function (event) { if (event.target === editItemModal) { editItemModal.style.display = 'none'; } };
  };

  const updateTaskItem = function (object) {
    const title = document.getElementById('editItemForm').elements.namedItem('taskName').value;
    const description = document.getElementById('editItemForm').elements.namedItem('taskDescription').value;
    const dueDateRaw = new Date(document.getElementById('editItemForm').elements.namedItem('dueDate').value);
    const dueDate = new Date(dueDateRaw.getTime() + dueDateRaw.getTimezoneOffset() * 60000);
    const project = document.getElementById('editItemForm').elements.namedItem('project').value;
    const priority = document.getElementById('editItemForm').elements.namedItem('importance').value;
    for (let i = 0; i < storageItems.allListItems.length; i += 1) {
      if (storageItems.allListItems[i].id === object.id) {
        storageItems.allListItems[i].title = title;
        storageItems.allListItems[i].description = description;
        storageItems.allListItems[i].dueDate = dueDate;
        storageItems.allListItems[i].project = project;
        storageItems.allListItems[i].priority = priority;
      }
    }
    editItemModal.style.display = 'none';
    storageItems.setStorage();
    location.reload();
  };

  const loadModal = function (object) {
    editItemModal.style.display = 'block';
    closeModalOnClick();
    const btn = document.getElementById('updateButton');
    btn.addEventListener('click', () => { updateTaskItem(object); });

    const taskName = document.getElementById('taskNameEdit');
    taskName.value = object.title;

    const taskDescription = document.getElementById('taskDescriptionEdit');
    taskDescription.value = object.description;

    const taskDueDate = document.getElementById('dueDateEdit');
    const dueDate = format(new Date(object.dueDate), 'yyyy-MM-dd');
    taskDueDate.value = dueDate;

    const taskProject = document.getElementById('projectEdit');
    taskProject.value = object.project;

    const taskPriority = document.getElementById('importanceEdit');
    taskPriority.value = object.priority;
  };

  return {
    loadModal,
  };
}());

export default editListItem;
