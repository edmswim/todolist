import {addDays, endOfWeek, startOfDay, format} from 'date-fns'



const filterTasks = function() {

    const stripTime = function(time) {
        //function reformats time into yyyy-MM-dd
        return format(time, 'yyyy-MM-dd');
    }

    const sidebarTimeFilter = function (taskArray, sidebarFilter) {
        
        //If there is a variable in "sidebarTime", this function will spit out a version of the array filtered for that time
        
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
                    {return true;}
                else {return false}
            }
            return taskArray.filter(filterFunction);
        }
        else {return taskArray;}
    }

    const compareFilter = function (array, filter, property) {
        //This function takes an array, a property in said array, and an item to filter on. It checks the property in each array against the string to filter, and returns an array where array property = filter string
        if (filter == "") {return array}
        else {
            const filterFunction = function(element) {
                return element[property] == filter;
            };
            return array.filter(filterFunction);
        };
    }


    let completionFilter = "incomplete";
    let sidebarProject="";
    let sidebarTime="";
    // let completionFilter = localStorage.getItem('completionFilter');
    // let sidebarProject=localStorage.getItem('sidebarProject');
    // let sidebarTime= localStorage.getItem('sidebarTime');

    const filterArrayFunction = function(taskArray) {
        var sideBarFilteredArray = sidebarTimeFilter(taskArray,this.sidebarTime);
        var filteredProjectArray = compareFilter(sideBarFilteredArray, this.sidebarProject, 'project');
        var completionFilterArray = compareFilter(filteredProjectArray, this.completionFilter, 'completionStatus');
        return completionFilterArray;
    };

    const setStorage = function() {
        localStorage.setItem('completionFilter', this.completionFilter);
        localStorage.setItem('sidebarProject', this.sidebarProject);
        localStorage.setItem('sidebarTime', this.sidebarTime);
    };
    
    const getStorage = function() {
        if (localStorage.getItem('completionFilter') == null) {this.completionFilter="incomplete"} 
        else {this.completionFilter = localStorage.getItem('completionFilter');}

        if (localStorage.getItem('sidebarProject') == null) {this.sidebarProject=""} 
        else {this.sidebarProject= localStorage.getItem('sidebarProject');}

        if(localStorage.getItem('sidebarTime')==null) {this.sidebarTime=""}
        else{this.sidebarTime= localStorage.getItem('sidebarTime')}
    };
    

    return {
        completionFilter,
        sidebarProject,
        sidebarTime,
        filterArrayFunction,
        setStorage,
        getStorage
    }
}();

export default filterTasks;