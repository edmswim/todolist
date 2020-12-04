import {parse} from 'date-fns'

var id = 0;


const createListItem = (title, description, dueDate, priority, project) => {
    id++;

    const markComplete = function() {
        if (this.completionStatus == "complete") {
            this.completionStatus = "incomplete"}
        else if (this.completionStatus == "incomplete") {
            this.completionStatus = "complete"}
        console.log(this.completionStatus);

        //import final function and rerun view to hide item if complete
    };

    const deleteListItem = function(targetArray) {
        for (let i=0; i<targetArray.length; i++) {
            if(targetArray[i].id == this.id)
                {targetArray.splice(i, 1)}
        }
        //import final function and rerun view to hide item if complete
    }

    var dueDateParsed = new Date(dueDate);
    var dueDateConverted = new Date(dueDateParsed.getTime() + dueDateParsed.getTimezoneOffset() * 60000)

    var d = new Date();
    var n = dueDateParsed.getTimezoneOffset();

    return {
        id, 
        title, 
        description,
        dueDate: dueDateConverted, 
        priority, 
        project, 
        completionStatus: "incomplete", 
        markComplete,
        deleteListItem
    }
}

const addListToArray= function(targetArray, title, description, dueDate, priority, project ) { 
    let newListItem = createListItem(title, description, dueDate, priority, project);
    targetArray.push(newListItem);
} 

export default addListToArray