import filterController from './filterController';
import filterTasks from './filterTasks';
import storageItems from '../storageItems';

// this is the primary "DOM" manipulation module, which lets us adjust the dom on various actions
const resetActiveSidebar = function resetActiveSidebarFunc() {
  const sidebarItems = document.getElementsByClassName('sidebarItem');
  for (let i = 0; i < sidebarItems.length; i += 1) {
    sidebarItems[i].classList.remove('active');
  }
};

const resetActiveTopBar = function removeAllClassesFromTopBar() {
  const sidebarItems = document.getElementsByClassName('filterOption');
  for (let i = 0; i < sidebarItems.length; i += 1) {
    sidebarItems[i].classList.remove('active');
  }
};

const addClickFunctionTime = function addClickFunctionTimeName() {
  const timeList = document.getElementsByClassName('sidebarTime');
  for (let i = 0; i < timeList.length; i += 1) {
    timeList[i].addEventListener('click', () => {
      filterController.sidebarFilterTime(timeList[i].getAttribute('data-value'));
      resetActiveSidebar();
      timeList[i].classList.add('active');
    });
  }
};

const addClickFunctionAllTasks = function addClickFunctionAllTasksFunction() {
  const allTaskButton = document.getElementById('allTasks');
  allTaskButton.addEventListener('click', () => {
    filterController.sidebarFilterClear();
    resetActiveSidebar();
    allTaskButton.classList.add('active');
  });
};

const addClickFunctionTopBar = function addClickFunctionTopBarFunction() {
  const allTopSelectors = document.getElementsByClassName('filterOption');
  for (let i = 0; i < allTopSelectors.length; i += 1) {
    allTopSelectors[i].addEventListener('click', () => {
      filterController.completionFilter(allTopSelectors[i].getAttribute('data-value'));
      resetActiveTopBar();
      allTopSelectors[i].classList.add('active');
    });
  }
};

const displayProjects = function displayProjectsFunction(array) {
  const allProjects = array.map((obj) => obj.project);
  const distinctProjects = allProjects.filter((v, i) => allProjects.indexOf(v) === i);
  const projectList = document.getElementById('projectList');
  projectList.innerHTML = '';
  for (let i = 0; i < distinctProjects.length; i += 1) {
    const newLi = document.createElement('li');
    newLi.classList.add('sidebarItem');
    newLi.setAttribute('data-value', distinctProjects[i]);
    newLi.innerText = distinctProjects[i];
    projectList.appendChild(newLi);
    newLi.addEventListener('click', function addEventListenerFunction() {
      filterController.sidebarFilterProject(distinctProjects[i]);
      resetActiveSidebar();
      this.classList.add('active');
    });
  }
  return distinctProjects;
};

const updateActive = function updateActiveFunction() {
  // updating topbar to display active filter
  if (filterTasks.completionFilter === '') { document.getElementById('all').classList.add('active'); } else {
    const completionBar = document.getElementById('subheaderRank').querySelectorAll(`[data-value=${filterTasks.completionFilter}]`)[0];
    completionBar.classList.add('active');
  }

  // updating sidebar to display active filter
  if (filterTasks.sidebarProject === '' && filterTasks.sidebarTime === '') {
    document.getElementById('allTasks').classList.add('active');
  } else if (filterTasks.sidebarTime === '') {
    document.getElementById('projectList').querySelectorAll('[data-value="Dog Stuff"]')[0].classList.add('active');
  } else if (filterTasks.sidebarProject === '') {
    document.getElementById('timeList').querySelectorAll(`[data-value=${filterTasks.sidebarTime}]`)[0].classList.add('active');
  }
};

const navigationFunctions = {
  updateDom() {
    addClickFunctionTime();
    addClickFunctionAllTasks();
    addClickFunctionTopBar();
    displayProjects(storageItems.allListItems);
    filterController.sidebarFilterOnLoad();
    updateActive();
  },
};

export default navigationFunctions;
