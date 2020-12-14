/* eslint-disable no-restricted-globals */
/* eslint-disable no-param-reassign */
import storageItems from '../storageItems';

// This module has functions that allow us to manipulate tasks,
// including deleting them and marking them complete

const listItemFunctions = (() => {
  const markComplete = function markCompleteFunction(object) {
    if (object.completionStatus === 'complete') {
      object.completionStatus = 'incomplete';
    } else if (object.completionStatus === 'incomplete') {
      object.completionStatus = 'complete';
    }
    storageItems.setStorage();
    location.reload();
    return false;
    // import final function and rerun view to hide item if complete
  };

  const deleteListItem = function deleteListItemFunction(object) {
    for (let i = 0; i < storageItems.allListItems.length; i += 1) {
      if (storageItems.allListItems[i].id === object.id) {
        storageItems.allListItems.splice(i, 1);
      }
    }
    storageItems.setStorage();
    location.reload();
    return false;
    // import final function and rerun view to hide item if complete
  };

  return {
    markComplete,
    deleteListItem,
  };
})();

export default listItemFunctions;
