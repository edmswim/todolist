import {format, toDate} from 'date-fns'

const markComplete = function() {console.log("Placeholder to mark a task as complete")};
const editButton = function() {console.log("edit")};
const deleteButton = function() {console.log("delete")};

const displayEditModal = function(task) {
    //edit modal should have the title, description, due date, project, completeness, importance, all in an editable form

}

const uploadTaskList = function(taskListArray) {
    const taskListTable = document.getElementById("taskListTable");
    taskListTable.innerHTML = "";
    for (let i=0; i<taskListArray.length; i++)
    {
        var rowItem = document.createElement('tr'); 
            rowItem.setAttribute("id", taskListArray[i].id);
            rowItem.classList.add(taskListArray[i].completionStatus)

            const rowItemComplete = document.createElement('td'); 
                rowItemComplete.classList.add('taskRow','taskButton');
                var rowItemCompleteButton = document.createElement('button');
                    rowItemCompleteButton.classList.add(taskListArray[i].priority);
                    rowItemCompleteButton.addEventListener("click", taskListArray[i].markComplete.bind(taskListArray[i]));
                rowItemComplete.appendChild(rowItemCompleteButton);
            rowItem.appendChild(rowItemComplete);

            const rowItemTitle = document.createElement('td');
                rowItemTitle.classList.add('taskRow','taskName');
                rowItemTitle.innerHTML = taskListArray[i].title
            rowItem.appendChild(rowItemTitle);  

            var rowItemDueDate = document.createElement('td');
                rowItemDueDate.classList.add('taskRow','taskDate');
                rowItemDueDate.innerHTML = format(taskListArray[i].dueDate, 'MMM dd');
                var today = format(new Date(), 'yyyy-MM-dd');
                var listedDate = format(taskListArray[i].dueDate, 'yyyy-MM-dd');
                if (listedDate > today) {
                      console.log("Due date in future");
                 } 
                else if (listedDate == today) {
                     rowItemDueDate.classList.add('comingSoon');
                     //console.log("today!")
                }
                 else if (listedDate < today) {
                    //console.log("Due date in past")
                    rowItemDueDate.classList.add('overdue');
                }
            rowItem.appendChild(rowItemDueDate);

            var rowItemProject = document.createElement('td');
                rowItemProject.classList.add('taskRow','taskProject');
                rowItemProject.innerHTML = taskListArray[i].project;
                rowItem.appendChild(rowItemProject);

            var rowItemEdit = document.createElement('td');
                rowItemEdit.addEventListener("click", editButton);
                rowItemEdit.classList.add('taskRow','taskButton', 'edit', 'icon');
                rowItemEdit.innerHTML = `<svg viewBox="0 -1 401.52289 401" xmlns="http://www.w3.org/2000/svg"><path d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0"/></svg>`
                rowItem.appendChild(rowItemEdit);

            var rowItemDelete = document.createElement('td');
                rowItemDelete.addEventListener("click", deleteButton);
                rowItemDelete.classList.add('taskRow','taskButton', 'delete', 'icon')
                rowItemDelete.innerHTML = `<svg height="15px" class="trash icon" viewBox="-40 0 427 427.00131" width="15px" xmlns="http://www.w3.org/2000/svg"><path d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/><path d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0"/><path d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/></svg>`
                rowItem.appendChild(rowItemDelete);
                rowItemDelete.addEventListener("click", function() {taskListArray[i].deleteListItem.bind(taskListArray[i])(taskListArray)});
        taskListTable.appendChild(rowItem);
    }
}




export default uploadTaskList 