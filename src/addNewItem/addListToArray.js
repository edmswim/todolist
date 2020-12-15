/* eslint-disable func-names */
/* eslint-disable max-len */
const createListItem = (targetArray, title, description, dueDate, priority, project) => {
  const id = targetArray.length + 1;
  const dueDateParsed = new Date(dueDate);
  const dueDateConverted = new Date(dueDateParsed.getTime() + dueDateParsed.getTimezoneOffset() * 60000);

  return {
    id,
    title,
    description,
    dueDate: dueDateConverted,
    priority,
    project,
    completionStatus: 'incomplete',
  };
};

const addListToArray = function (targetArray, title, description, dueDate, priority, project) {
  const newListItem = createListItem(targetArray, title, description, dueDate, priority, project);
  targetArray.push(newListItem);
};

export default addListToArray;
