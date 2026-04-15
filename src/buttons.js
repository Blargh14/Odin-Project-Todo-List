import {populateProjects, populateContent} from "./display.js";
import {addProject, getProjects, updateProjects} from "./storage.js";
import { newTodo } from "./todoitem.js";
import { selectedProject, selectedTodo } from "./display.js";

const projectForm = document.querySelector("#newProjectForm");
const todoForm = document.querySelector("#newTodoForm");
const editTodoForm = document.querySelector("#editTodoForm");
const projectDialog = document.querySelector("#newProjectContainer");
const todoDialog = document.querySelector("#newTodoContainer");
const editTodoDialog = document.querySelector("#editTodoContainer");

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
    todo.priority = formData.get("todoPriority");

    selectedProject.addTodoItem(todo);

    updateProjects();

    populateContent(selectedProject);

    todoForm.reset();

    todoDialog.close();
});

editTodoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const todo = newTodo();

    const formData = new FormData(editTodoForm);
    todo.title = formData.get("editTodoTitle");
    todo.description = formData.get("editTodoDesc");
    todo.dueDate = formData.get("editTodoDate");
    todo.priority = formData.get("editTodoPriority");

    selectedProject.addTodoItem(todo);
    selectedProject.removeTodoItem(selectedTodo.id);

    updateProjects();

    populateContent(selectedProject);

    editTodoForm.reset();

    editTodoDialog.close();
});