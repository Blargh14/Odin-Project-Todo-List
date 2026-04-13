import {newTodo} from "./todoitem.js";
import {newProject} from "./project.js";

if (typeof(localStorage.projects) == "undefined") {
    console.log("reached");
    const placeHolderProject = newProject("A Project Title");
    placeHolderProject.title = "A Project Title";

    const placeHolderToDo = newTodo("12:00", 0, ["eyo"]);
    placeHolderToDo.title = "Title of What to Do";
    placeHolderToDo.description = "A description of that thing";
    placeHolderToDo.dueDate = "12:00";

    placeHolderProject.addTodoItem(placeHolderToDo);

    localStorage.projects = JSON.stringify([placeHolderProject]);
}

export function getProjects() {
    return JSON.parse(localStorage.projects);
};