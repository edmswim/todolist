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
        filterObj.sidebarProject = "";
        filterObj.sidebarTime = "";
        uploadFilteredTaskList();
    },

    sidebarFilterTime: function(timeSelection) {
        filterObj.sidebarProject = "";
        filterObj.sidebarTime = timeSelection;
        uploadFilteredTaskList();
        //Testing
            // console.log(`The current filter time is ${filterObj.sidebarTime}`);
            // console.log(`The current filter project is ${filterObj.sidebarProject}`)
    },

    sidebarFilterProject: function(projectSelection) {
        filterObj.sidebarProject = projectSelection;
        filterObj.sidebarTime = "";
        uploadFilteredTaskList();
    },

    completionFilter: function(completeSelection) {
        filterObj.completionFilter = completeSelection;
        uploadFilteredTaskList();
    }
}

export default filterController;