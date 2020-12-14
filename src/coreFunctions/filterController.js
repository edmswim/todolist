/* eslint-disable max-len */
import uploadTaskList from './uploadTaskList';
import filterTasks from './filterTasks';
import storageItems from '../storageItems';

// filter controller operates the filter task.
// Depending on the function called, it will change the variables in filterTask and run the function in there to filter the array.

const uploadFilteredTaskList = function () {
  const filteredArray = filterTasks.filterArrayFunction(storageItems.allListItems);
  uploadTaskList(filteredArray);
};

const filterController = {
  sidebarFilterOnLoad() {
    filterTasks.getStorage();
    uploadFilteredTaskList();
    document.getElementById('');
  },

  sidebarFilterClear() {
    filterTasks.sidebarProject = '';
    filterTasks.sidebarTime = '';
    filterTasks.setStorage();
    uploadFilteredTaskList();
  },

  sidebarFilterTime(timeSelection) {
    filterTasks.sidebarProject = '';
    filterTasks.sidebarTime = timeSelection;
    filterTasks.setStorage();
    uploadFilteredTaskList();
    // Testing
    // console.log(`The current filter time is ${filterTasks.sidebarTime}`);
    // console.log(`The current filter project is ${filterTasks.sidebarProject}`)
  },

  sidebarFilterProject(projectSelection) {
    filterTasks.sidebarProject = projectSelection;
    filterTasks.sidebarTime = '';
    filterTasks.setStorage();
    uploadFilteredTaskList();
  },

  completionFilter(completeSelection) {
    filterTasks.completionFilter = completeSelection;
    filterTasks.setStorage();
    uploadFilteredTaskList();
  },
};

export default filterController;
