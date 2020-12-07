import filterController from './sidebarFunctions/navControls';
import storageItems from './storage.js';

//is this the right format? Or should all of the below functions be tucked into a singular object?

var resetActiveSidebar = function() {
    var sidebarItems = document.getElementsByClassName('sidebarItem');
    for(let i=0; i<sidebarItems.length; i++) {
        sidebarItems[i].classList.remove('active');
    }
}

var resetActiveTopBar = function() {
    var sidebarItems = document.getElementsByClassName('filterOption');
    for(let i=0; i<sidebarItems.length; i++) {
        sidebarItems[i].classList.remove('active');
    }
}

var addClickFunctionTime = function() {
    var timeList = document.getElementsByClassName('sidebarTime');
    for (let i=0; i<timeList.length; i++) {
        timeList[i].addEventListener("click", function() {
            filterController.sidebarFilterTime(timeList[i].getAttribute('data-value'));
            resetActiveSidebar();
            timeList[i].classList.add('active');
        });
    }
}

var addClickFunctionAllTasks = function () {
    var allTaskButton = document.getElementById('allTasks');
    allTaskButton.addEventListener("click", filterController.sidebarFilterClear)
}

var addClickFunctionTopBar = function() {
    var allTopSelectors = document.getElementsByClassName('filterOption');
    for (let i=0; i<allTopSelectors.length; i++) {
        allTopSelectors[i].addEventListener("click", function() {
            filterController.completionFilter(allTopSelectors[i].getAttribute('data-value'));
            resetActiveTopBar();
            allTopSelectors[i].classList.add('active');
        })
    }
}

var displayProjects = function (array) {
    var allProjects = array.map(function(obj) {return obj.project});
    let distinctProjects = allProjects.filter(function(v,i) {return allProjects.indexOf(v)==i;});
    var projectList = document.getElementById("projectList");
    projectList.innerHTML = "";
    for (let i=0; i<distinctProjects.length; i++){
        var newLi = document.createElement('li');
        newLi.classList.add('sidebarItem');
        newLi.setAttribute('data-value', distinctProjects[i]);
        newLi.innerText = distinctProjects[i];
        projectList.appendChild(newLi)
        newLi.addEventListener("click", function() {
            filterController.sidebarFilterProject(distinctProjects[i]);
            resetActiveSidebar();
            this.classList.add('active');
        })
    }
    return distinctProjects;
}

const navigationFunctions = {
    updateDom: function() {
        addClickFunctionTime();
        addClickFunctionAllTasks();
        addClickFunctionTopBar();
        displayProjects(storageItems.allListItems)
        filterController.sidebarFilterClear();
    }
}



export default navigationFunctions;