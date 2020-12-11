//This file contains the array with all to-do list items,and functions to get and set it

const storageItems = function() {
    let allListItems;
    let getStorage = function() {
        let storedItems
        if (localStorage.getItem('toDoList')== null) {
            storedItems = [];
        }
        else {
            storedItems = JSON.parse(localStorage.getItem('toDoList'));
            for (let i=0; i<storedItems.length; i++){
                let dateParsed = new Date(storedItems[i].dueDate)
                storedItems[i].dueDate = dateParsed
            };
        }
        this.allListItems=storedItems;
        console.log(this.allListItems);
    };
    let setStorage = function() {
        console.log(`this is ${this}`);
        localStorage.setItem('toDoList', JSON.stringify(this.allListItems))
    };
    return {
        allListItems,
        getStorage,
        setStorage
    }
}();

export default storageItems;