import storageItems from '../storageItems.js';

//This module has functions that allow us to manipulate tasks, including deleting them and marking them complete

const listItemFunctions = (() => {
    
    const markComplete = function(object) {
        if (object.completionStatus == "complete") {
            object.completionStatus = "incomplete"}
        else if (object.completionStatus == "incomplete") {
            object.completionStatus = "complete"};
        storageItems.setStorage();
        location.reload();
        return false;
        // import final function and rerun view to hide item if complete
    };

    const deleteListItem = function(object) {
        console.log("Deleting item now...beep boop");

        for (let i=0; i<storageItems.allListItems.length; i++) {    
            if(storageItems.allListItems[i].id == object.id)
                {storageItems.allListItems.splice(i, 1)}
        }
        console.log(storageItems.allListItems);
        storageItems.setStorage();
        location.reload();
        return false;
        //import final function and rerun view to hide item if complete
    };

    return {
        markComplete,
        deleteListItem
    }


})();

export default listItemFunctions;