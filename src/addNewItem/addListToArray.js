import {parse} from 'date-fns'


const createListItem = (targetArray, title, description, dueDate, priority, project) => {
    var id = targetArray.length+1;
    var dueDateParsed = new Date(dueDate);
    var dueDateConverted = new Date(dueDateParsed.getTime() + dueDateParsed.getTimezoneOffset() * 60000)


    return {
        id, 
        title, 
        description,
        dueDate: dueDateConverted, 
        priority, 
        project, 
        completionStatus: "incomplete"
    }
}

const addListToArray= function(targetArray, title, description, dueDate, priority, project ) { 
    let newListItem = createListItem(targetArray, title, description, dueDate, priority, project);
    targetArray.push(newListItem);
} 

export default addListToArray