import {newTodo} from "./todoitem.js";
import newProject, {addFunctionsToStoredProject} from "./project.js";

if (typeof(localStorage.projects) == "undefined" || localStorage.projects == "[]") {
    const placeHolderProject = newProject();
    placeHolderProject.title = "A Project Title";

    const placeHolderToDo = newTodo();
    placeHolderToDo.title = "Title of What to Do";
    placeHolderToDo.description = "A description of that thing";
    placeHolderToDo.dueDate = "12:00";

    placeHolderProject.addTodoItem(placeHolderToDo);

    localStorage.projects = JSON.stringify([placeHolderProject]);
}

let projects = JSON.parse(localStorage.projects);

projects.forEach((project) => {
    addFunctionsToStoredProject(project);
});

export function getProjects() {
    return projects;
}

export function addProject(title) {
    const project = newProject();
    project.title = title;
    projects.push(project);
    localStorage.projects = JSON.stringify(projects);
}

export function updateProjects() {
    localStorage.projects = JSON.stringify(projects);
}

export function removeProject(id) {
    projects = projects.filter((item) => item.id != id);
    localStorage.projects = JSON.stringify(projects);
}