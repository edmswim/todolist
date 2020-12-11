 import addListToArray from './addNewItem/addListToArray.js';
 import navigationFunctions from './coreFunctions/navigationFunctions.js';
 import storageItems from './storageItems.js';
 import newListItem from './addNewItem/newListItemDOM.js'

//testing below

    //reset local storage
        // storageItems.allListItems = [];
        // addListToArray(storageItems.allListItems, "walk ted", "","2020-12-08","highPriority","Dog Stuff");
        // addListToArray(storageItems.allListItems, "walk dog", "","2020-12-07","mediumPriority","Dog Stuff");
        // addListToArray(storageItems.allListItems, "walk scoop", "","2020-12-07","lowPriority","Dog Stuff");
        // addListToArray(storageItems.allListItems, "get bread", "","2020-12-06","highPriority","Home List");
        // addListToArray(storageItems.allListItems, "get cheese", "","2020-12-06","highPriority","Home List");
        // addListToArray(storageItems.allListItems, "finish to-do list app", "","2020-12-05 ","highPriority","Coding");
        // storageItems.setStorage();

    //pull from local storage
        storageItems.getStorage();

    //testing add
        //var testItem = addListToArray.createListItem("title", "description", 1/1/2020, "highPriority", "project1");

    //testing filter
     navigationFunctions.updateDom();
     newListItem.updateButtons();



    



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