//onclick you should pass through the function
//functions are all tasks, date, project, 
import uploadTaskList from './uploadTaskList';
import filterTasks from './filterTasks';
import storageItems from '../storageItems.js'

var uploadFilteredTaskList = function() {     
        let filteredArray = filterTasks.filterArrayFunction(storageItems.allListItems);
        uploadTaskList(filteredArray);
}

const filterController = {
    //is there a way we could have put this into a separate module? I'm not sure how to pass through filterTasks and controller through html
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