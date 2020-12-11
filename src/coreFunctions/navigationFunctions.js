import filterController from './filterController';
import filterTasks from './filterTasks';
import storageItems from '../storageItems.js';

//is this the right format? Or should all of the below functions be tucked into a singular object?

const resetActiveSidebar = function() {
    var sidebarItems = document.getElementsByClassName('sidebarItem');
    for(let i=0; i<sidebarItems.length; i++) {
        sidebarItems[i].classList.remove('active');
    }
}

const resetActiveTopBar = function() {
    var sidebarItems = document.getElementsByClassName('filterOption');
    for(let i=0; i<sidebarItems.length; i++) {
        sidebarItems[i].classList.remove('active');
    }
}

const addClickFunctionTime = function() {
    var timeList = document.getElementsByClassName('sidebarTime');
    for (let i=0; i<timeList.length; i++) {
        timeList[i].addEventListener("click", function() {
            filterController.sidebarFilterTime(timeList[i].getAttribute('data-value'));
            resetActiveSidebar();
            timeList[i].classList.add('active');
        });
    }
}

const addClickFunctionAllTasks = function () {
    var allTaskButton = document.getElementById('allTasks');
    allTaskButton.addEventListener("click", function() {
        filterController.sidebarFilterClear();
        resetActiveSidebar();
        allTaskButton.classList.add('active');
    });
}

const addClickFunctionTopBar = function() {
    var allTopSelectors = document.getElementsByClassName('filterOption');
    for (let i=0; i<allTopSelectors.length; i++) {
        allTopSelectors[i].addEventListener("click", function() {
            filterController.completionFilter(allTopSelectors[i].getAttribute('data-value'));
            resetActiveTopBar();
            allTopSelectors[i].classList.add('active');
        })
    }
}

const displayProjects = function (array) {
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

const updateActive = function() {
    //updating topbar to display active filter
    if(filterTasks.completionFilter == "") {document.getElementById("all").classList.add('active')}
    else {
        const completionBar = document.getElementById("subheaderRank").querySelectorAll(`[data-value=${filterTasks.completionFilter}]`)[0];
        completionBar.classList.add('active')
    }

    //updating sidebar to display active filter
    if (filterTasks.sidebarProject=="" && filterTasks.sidebarTime=="") {
        
        document.getElementById("allTasks").classList.add('active')
    }
    else if(filterTasks.sidebarTime=="") {
        document.getElementById("projectList").querySelectorAll(`[data-value="Dog Stuff"]`)[0].classList.add('active')
    }
    else if (filterTasks.sidebarProject=="") {
        document.getElementById("timeList").querySelectorAll(`[data-value=${filterTasks.sidebarTime}]`)[0].classList.add('active')
    }
    else {
        console.log("error")
        console.log(filterTasks.sidebarProject);
        console.log(filterTasks.sidebarTime)
    }
}

const navigationFunctions = {
    updateDom: function() {
        addClickFunctionTime();
        addClickFunctionAllTasks();
        addClickFunctionTopBar();
        displayProjects(storageItems.allListItems);
        filterController.sidebarFilterOnLoad();
        updateActive();
    }
}



export default navigationFunctions;