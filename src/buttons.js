import {populateProjects, populateContent} from "./display.js";
import {addProject, getProjects} from "./storage.js";
import { newTodo } from "./todoitem.js";
import { selectedProject } from "./display.js";

const projectForm = document.querySelector("#newProjectForm");
const todoForm = document.querySelector("#newTodoForm");
const projectDialog = document.querySelector("#newProjectContainer");
const todoDialog = document.querySelector("#newTodoContainer");

projectForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(projectForm);

    addProject(formData.get("projectTitle"));
    populateProjects(getProjects());

    projectForm.reset();

    projectDialog.close();
});

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const todo = newTodo();

    const formData = new FormData(todoForm);
    todo.title = formData.get("todoTitle");
    todo.description = formData.get("todoDesc");
    todo.dueDate = formData.get("todoDate");
    todo.priority = formData.get("priority");

    selectedProject.addTodoItem(todo);

    populateContent();

    todoForm.reset();

    todoDialog.close();
});