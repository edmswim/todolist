 import addListToArray from './addNewListItem.js';
 import navigationFunctions from './navigationDOM.js';
 import storageItems from './storage.js';
 import newListItem from './newListItemDOM'

//testing below

    //adding values to array
        addListToArray(storageItems.allListItems, "walk ted", "","2020-12-08","highPriority","Dog Stuff");
        addListToArray(storageItems.allListItems, "walk dog", "","2020-12-07","mediumPriority","Dog Stuff");
        addListToArray(storageItems.allListItems, "walk scoop", "","2020-12-07","lowPriority","Dog Stuff");
        addListToArray(storageItems.allListItems, "get bread", "","2020-12-06","highPriority","Home List");
        addListToArray(storageItems.allListItems, "get cheese", "","2020-12-06","highPriority","Home List");
        addListToArray(storageItems.allListItems, "finish to-do list app", "","2020-12-05 ","highPriority","Coding");
        console.log(storageItems.allListItems);

        var localStoragePull = function () {storageItems.allListItems = JSON.parse(localStorage.getItem('toDoList'))};

    //testing filter
    navigationFunctions.updateDom();
    console.log("test");
    newListItem.modalOpenClose();
    newListItem.modalSubmitButton();



    



//-------------


//actual code below


//when you click on sidebar, it should change completionFilter and taskList filter
//then it should run the functions to uploadTaskList on the filtered view



/*
todo list

    javascript:
        - new item modal
        - edit modal
        - delete modal
        - upon clicking complete it should refresh...no idea how to do this with our existing structure
        - fix priorities - medium priority should be yellow
*/