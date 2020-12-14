import {
  addDays,
  endOfWeek,
  startOfDay,
  format,
} from 'date-fns';

// eslint-disable-next-line max-len
// this contains the functionality to filter an array, and stores the variables on which its filtered on.

const filterTasks = (function filterTasksFunction() {
  const stripTime = (time) => format(time, 'yyyy-MM-dd');
  const sidebarTimeFilter = function sidebarTimeFilterFunction(taskArray, sidebarFilter) {
  // If there is a var in "sidebarTime", this function creates array filtered for that time
    const today = new Date();
    const tomorrow = addDays(new Date(), 1);
    const week = endOfWeek(today);
    if (sidebarFilter === 'today') {
      const filterFunction = function (element) {
        return stripTime(element.dueDate) === stripTime(today);
      };
      return taskArray.filter(filterFunction);
    } if (sidebarFilter === 'tomorrow') {
      const filterFunction = function (element) {
        return stripTime(element.dueDate) === stripTime(tomorrow);
      };
      return taskArray.filter(filterFunction);
    } if (sidebarFilter === 'week') {
      const filterFunction = function (element) {
        if (element.dueDate >= startOfDay(today) && element.dueDate <= week) {
          return true;
        }
        return false;
      };
      return taskArray.filter(filterFunction);
    }
    return taskArray;
  };

  const compareFilter = function (array, filter, property) {
    // This function takes an array, a property in said array, and an item to filter on.
    // It checks the property in each array against the string to filter.
    // Then it returns an array where array property = filter string
    if (filter === '') { return array; }
    const filterFunction = function (element) {
      return element[property] === filter;
    };
    return array.filter(filterFunction);
  };

  const completionFilter = 'incomplete';
  const sidebarProject = '';
  const sidebarTime = '';

  const filterArrayFunction = function (taskArray) {
    const sideBarFilteredArray = sidebarTimeFilter(taskArray, this.sidebarTime);
    const filteredProjectArray = compareFilter(sideBarFilteredArray, this.sidebarProject, 'project');
    const completionFilterArray = compareFilter(filteredProjectArray, this.completionFilter, 'completionStatus');
    return completionFilterArray;
  };

  const setStorage = function () {
    localStorage.setItem('completionFilter', this.completionFilter);
    localStorage.setItem('sidebarProject', this.sidebarProject);
    localStorage.setItem('sidebarTime', this.sidebarTime);
  };

  const getStorage = function () {
    if (localStorage.getItem('completionFilter') == null) {
      this.completionFilter = 'incomplete';
    } else {
      this.completionFilter = localStorage.getItem('completionFilter');
    }

    if (localStorage.getItem('sidebarProject') == null) {
      this.sidebarProject = '';
    } else {
      this.sidebarProject = localStorage.getItem('sidebarProject');
    }

    if (localStorage.getItem('sidebarTime') == null) {
      this.sidebarTime = '';
    } else {
      this.sidebarTime = localStorage.getItem('sidebarTime');
    }
  };

  return {
    completionFilter,
    sidebarProject,
    sidebarTime,
    filterArrayFunction,
    setStorage,
    getStorage,
  };
}());

export default filterTasks;
