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
    
    sidebarFilterClear: function() {
        filterTasks.sidebarProject = "";
        filterTasks.sidebarTime = "";
        uploadFilteredTaskList();
    },

    sidebarFilterTime: function(timeSelection) {
        filterTasks.sidebarProject = "";
        filterTasks.sidebarTime = timeSelection;
        uploadFilteredTaskList();
        //Testing
            // console.log(`The current filter time is ${filterTasks.sidebarTime}`);
            // console.log(`The current filter project is ${filterTasks.sidebarProject}`)
    },

    sidebarFilterProject: function(projectSelection) {
        filterTasks.sidebarProject = projectSelection;
        filterTasks.sidebarTime = "";
        uploadFilteredTaskList();
    },

    completionFilter: function(completeSelection) {
        filterTasks.completionFilter = completeSelection;
        uploadFilteredTaskList();
    }
}

export default filterController;