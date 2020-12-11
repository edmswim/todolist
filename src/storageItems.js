const storageItems = function() {
    let allListItems = [];
    let getStorage = function() {
        var storedItems = JSON.parse(localStorage.getItem('toDoList'))
        for (let i=0; i<storedItems.length; i++){
            let dateParsed = new Date(storedItems[i].dueDate)
            storedItems[i].dueDate = dateParsed
        }
        this.allListItems=storedItems;
        console.log(this.allListItems);
    };
    let setStorage = function() {
        console.log(`this is ${this}`);
        localStorage.setItem('toDoList', JSON.stringify(this.allListItems))
    };
    return {
        allListItems,
        getStorage,
        setStorage
    }
}();

export default storageItems;