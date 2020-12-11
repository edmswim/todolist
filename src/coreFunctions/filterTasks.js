import {addDays, endOfWeek, startOfDay, format} from 'date-fns'

const stripTime = function(time) {
    return format(time, 'yyyy-MM-dd');
}


const sidebarTimeFilter = function (taskArray, sidebarFilter) {
    
    //This function filters for today, tomorrow, and this week if the sidebarFilter is active

    //if the  date (stripped down to essence) = today (stripped down), then today
    //if the due date (stripped) = tomorrow (stripped), then tomorrow
    //if the due date >= today, and is <= end of week, week

    var today = new Date();
    var tomorrow = addDays(new Date(), 1);
    var week = endOfWeek(today);

    if(sidebarFilter == "today") {
        const filterFunction = function(element) {
            return stripTime(element.dueDate) == stripTime(today);
        }
        return taskArray.filter(filterFunction)
    }
    else if (sidebarFilter == "tomorrow") {
        const filterFunction = function(element) {
            return stripTime(element.dueDate) == stripTime(tomorrow);
        }
        return taskArray.filter(filterFunction);
    }
    else if (sidebarFilter == "week") {
        const filterFunction = function(element) {
            if (element.dueDate >= startOfDay(today) && element.dueDate <= week) 
                {
                    return true;}
            else {
                return false}
        }
        return taskArray.filter(filterFunction);
    }
    else {
        return taskArray;
    }
}

const compareFilter = function (array, filter, type) {
    if (filter == "") {
        return array
    }
    else {
        const filterFunction = function(element) {
            return element[type] == filter;
           };
        return array.filter(filterFunction);
    };

}

const filterTasks = {
    completionFilter: "incomplete",
    sidebarProject: "",
    sidebarTime: "",
    filterArrayFunction: function(taskArray) {
        var sideBarFilteredArray = sidebarTimeFilter(taskArray, this.sidebarTime);
        var filteredProjectArray = compareFilter(sideBarFilteredArray, this.sidebarProject, 'project');
        var completionFilterArray = compareFilter(filteredProjectArray, this.completionFilter, 'completionStatus');
        return completionFilterArray;
    }

}


export default filterTasks;