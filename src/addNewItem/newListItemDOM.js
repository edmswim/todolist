import addListToArray from './addListToArray.js';
import storageItems from '../storageItems.js';

const newListItem = function() {
    let modalOpenClose = function() {
        const btn = document.getElementById("addNewItemButton")
        const newItemModal = document.getElementById('addNewItemModal');
        const closeModal =document.getElementById('closeAddNewModal');
        btn.addEventListener("click", function() {addNewItemModal.style.display="block"});
        closeModal.addEventListener("click", function() {addNewItemModal.style.display="none"})
        window.onclick = function(event) {if (event.target == newItemModal) {newItemModal.style.display = "none";}}
    };

    let addNewListItem = function() {
        const title = document.getElementById("newItemForm").elements.namedItem("taskName").value;
        const description = document.getElementById("newItemForm").elements.namedItem("taskDescription").value;
        const dueDate = document.getElementById("newItemForm").elements.namedItem("dueDate").value;
        const project = document.getElementById("newItemForm").elements.namedItem("project").value;
        const priority = document.getElementById("newItemForm").elements.namedItem("importance").value;
        addListToArray(storageItems.allListItems, title, description, dueDate, priority, project);
        console.log(storageItems.allListItems);
        //you need to have the list refresh here, but first sort out the bug you have
    }

    let modalSubmitButton = function() {
        const button = document.getElementById("addNewListItemButton");
        button.addEventListener("click", function() {
            console.log(formValid);
            var formValid = document.getElementById("newItemForm").checkValidity();
            if(formValid) {
                addNewListItem();
                storageItems.setStorage();
                addNewItemModal.style.display="none";
                location.reload();
            }
            else {
                alert("Form not complete");
                console.log(storageItems.allListItems);
            };
        })
    }

    let updateButtons = function() {
        modalOpenClose();
        modalSubmitButton();
    }

    return {
        updateButtons
    }
}();

export default newListItem