
import uploadTaskList from './uploadTaskList';
import filterTasks from './filterTasks';
import storageItems from '../storageItems.js'

//filter controller operates the filter task. Depending on the function called, it will change the variables in filterTask and run the function in there to filter the array. 

var uploadFilteredTaskList = function() {     
        let filteredArray = filterTasks.filterArrayFunction(storageItems.allListItems);
        uploadTaskList(filteredArray);
}

const filterController = {
    sidebarFilterOnLoad: function() {
        filterTasks.getStorage();
        uploadFilteredTaskList();
        document.getElementById('')
    },

    sidebarFilterClear: function() {
        filterTasks.sidebarProject = "";
        filterTasks.sidebarTime = "";
        filterTasks.setStorage();
        uploadFilteredTaskList();
    },

    sidebarFilterTime: function(timeSelection) {
        filterTasks.sidebarProject = "";
        filterTasks.sidebarTime = timeSelection;
        filterTasks.setStorage();
        uploadFilteredTaskList();
        //Testing
            // console.log(`The current filter time is ${filterTasks.sidebarTime}`);
            // console.log(`The current filter project is ${filterTasks.sidebarProject}`)
    },

    sidebarFilterProject: function(projectSelection) {
        filterTasks.sidebarProject = projectSelection;
        filterTasks.sidebarTime = "";
        filterTasks.setStorage();
        uploadFilteredTaskList();
    },

    completionFilter: function(completeSelection) {
        filterTasks.completionFilter = completeSelection;
        filterTasks.setStorage();
        uploadFilteredTaskList();
    }
}

export default filterController;