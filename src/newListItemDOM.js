import addListToArray from './addNewListItem.js';
import storageItems from './storageItems.js';

const newListItem = {
    modalOpenClose: function() {
        const btn = document.getElementById("addNewItemButton")
        const newItemModal = document.getElementById('addNewItemModal');
        const closeModal =document.getElementById('closeAddNewModal');
        btn.addEventListener("click", function() {addNewItemModal.style.display="block"});
        closeModal.addEventListener("click", function() {addNewItemModal.style.display="none"})
        window.onclick = function(event) {if (event.target == newItemModal) {newItemModal.style.display = "none";}}
    },

    addNewListItem: function() {
        const title = document.getElementById("newItemForm").elements.namedItem("taskName").value;
        const description = document.getElementById("newItemForm").elements.namedItem("taskDescription").value;
        const dueDate = document.getElementById("newItemForm").elements.namedItem("dueDate").value;
        const project = document.getElementById("newItemForm").elements.namedItem("project").value;
        const priority = document.getElementById("newItemForm").elements.namedItem("importance").value;
        addListToArray(storageItems.allListItems, title, description, dueDate, priority, project);
        console.log(storageItems.allListItems);
        //you need to have the list refresh here, but first sort out the bug you have
    },

    modalSubmitButton: function() {
        const button = document.getElementById("addNewListItemButton");
        let addItem = newListItem.addNewListItem.bind(newListItem);
        
        button.addEventListener("click", function() {
            console.log(formValid);
            var formValid = document.getElementById("newItemForm").checkValidity();
            if(formValid) {
                addItem();
                storageItems.setStorage();
                addNewItemModal.style.display="none";
                //need to figure out how to prevent default refresh. Below does not work...
                //e.preventDefault();
                //localStorage.setItem('toDoList', JSON.stringify(storageItems.allListItems));
            }
            else {
                console.log("Form not complete");
                console.log(storageItems.allListItems);
            };
        })
    }

}

export default newListItem