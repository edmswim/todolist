//onclick you should pass through the function
//functions are all tasks, date, project, 
import uploadTaskList from './uploadTasks';
import filterObj from './filterTasks';
import storageItems from '../storage.js'

var uploadFilteredTaskList = function() {     
        let filteredArray = filterObj.filterArrayFunction(storageItems.allListItems);
        uploadTaskList(filteredArray);
}

const filterController = {
    //is there a way we could have put this into a separate module? I'm not sure how to pass through filterobj and controller through html
    
    sidebarFilterClear: function() {
        console.log("sidebarFilterClear")
        filterObj.sidebarProjectSelection = "";
        filterObj.sidebarTimeSelection = "";
        uploadFilteredTaskList();
    },

    sidebarFilterTime: function(timeSelection) {
        filterObj.sidebarProjectSelection = "";
        filterObj.sidebarTimeSelection = timeSelection;
        uploadFilteredTaskList();
    },

    sidebarFilterProject: function(projectSelection) {
        filterObj.sidebarProjectSelection = projectSelection;
        filterObj.sidebarTimeSelection = "";
        uploadFilteredTaskList();
    },

    completionFilter: function(completeSelection) {
        filterObj.completionFilter = completeSelection;
        uploadFilteredTaskList();
    }
}

export default filterController;