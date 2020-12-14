import navigationFunctions from './coreFunctions/navigationFunctions';
import storageItems from './storageItems';
import newListItem from './addNewItem/newListItemDOM';

// pull from local storage
storageItems.getStorage();

// testing filter
navigationFunctions.updateDom();
newListItem.updateButtons();
