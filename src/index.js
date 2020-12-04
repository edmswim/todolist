 import addListToArray from './addNewListItem';
 import filterController from './sidebarFunctions/navControls';

//testing below

    //adding values to array
        addListToArray(controller.allListItems, "walk dog", "","2020-11-20","highPriority","project1");
        addListToArray(controller.allListItems, "get bread", "","2020-12-02","highPriority","project2");
        console.log(controller.allListItems);

    //testing filter
    filterController.sidebarFilterClear();


//-------------


//actual code below


//when you click on sidebar, it should change completionFilter and taskList filter
//then it should run the functions to uploadTaskList on the filtered view



/*
todo list

    javascript:
        -upload sidebar based on distinct projects in array
            - removing duplicates
        - making the sidebar functional - onclick run the functions
        - add new item


    css:
         - add css to designate a completed item on the list

*/