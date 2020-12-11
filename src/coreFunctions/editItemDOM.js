import {format} from 'date-fns'
import storageItems from '../storageItems.js';

//This module creates the edit modal functionality and gives user ability to edit to-do item, and submit it.
const editListItem = function() {
    const editItemModal = document.getElementById('editItemModal');
    
    var closeModalOnClick = function() {
        const closeModal =document.getElementById('closeEditModal');
        closeModal.addEventListener("click", function() {editItemModal.style.display="none"})
        window.onclick = function(event) {if (event.target == editItemModal) {editItemModal.style.display = "none";}}
    }

    var updateTaskItem = function(object) {
        console.log(object);
        const title = document.getElementById("editItemForm").elements.namedItem("taskName").value;
        const description = document.getElementById("editItemForm").elements.namedItem("taskDescription").value;
        const dueDate = document.getElementById("editItemForm").elements.namedItem("dueDate").value;
        const project = document.getElementById("editItemForm").elements.namedItem("project").value;
        const priority = document.getElementById("editItemForm").elements.namedItem("importance").value;
        for (let i=0; i<storageItems.allListItems.length; i++) {
            if(storageItems.allListItems[i].id == object.id ){
                storageItems.allListItems[i].title=title;
                storageItems.allListItems[i].description=description;
                storageItems.allListItems[i].dueDate=dueDate;
                storageItems.allListItems[i].project=project;
                storageItems.allListItems[i].priority=priority;
            }
            else {}
        }
        editItemModal.style.display="none";
        storageItems.setStorage();
        location.reload();
    }

    var loadModal = function(object) {
        editItemModal.style.display="block";
        closeModalOnClick();
        var btn = document.getElementById("updateButton")
        btn.addEventListener("click", function() {updateTaskItem(object)});

        var taskName = document.getElementById("taskNameEdit");
        taskName.value=object.title;

        var taskDescription = document.getElementById("taskDescriptionEdit");
        taskDescription.value=object.description;

        var taskDueDate=document.getElementById("dueDateEdit");
        var dueDate = format(new Date(object.dueDate), 'yyyy-MM-dd');
        taskDueDate.value=dueDate;

        var taskProject = document.getElementById("projectEdit");
        taskProject.value = object.project;

        var taskPriority = document.getElementById("importanceEdit");
        taskPriority.value = object.priority;
    }


    return {
        loadModal
    }

}();

export default editListItem;