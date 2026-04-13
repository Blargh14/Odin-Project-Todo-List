import {newTodo} from "./todoitem.js";
import {newProject} from "./project.js";

if (typeof(localStorage.projects) == "undefined") {
    const placeHolderProject = newProject();
    placeHolderProject.title = "A Project Title";

    const placeHolderToDo = newTodo();
    placeHolderToDo.title = "Title of What to Do";
    placeHolderToDo.description = "A description of that thing";
    placeHolderToDo.dueDate = "12:00";

    placeHolderProject.addTodoItem(placeHolderToDo);

    localStorage.projects = JSON.stringify([placeHolderProject]);
}

const projects = JSON.parse(localStorage.projects);

export function getProjects() {
    return projects;
}

export function addProject(title) {
    const project = newProject();
    project.title = title;
    projects.push(project);
    localStorage.projects = JSON.stringify(projects);
}