import { removeProject, getProjects, updateProjects } from "./storage.js";
import { format, isPast } from "date-fns";

const projectsContainer = document.querySelector("#projectsContainer");
const content = document.querySelector("#content");
export let selectedProject = false;
export let selectedTodo = false;

const formTitle = document.querySelector("#editTodoTitle");
const formDesc = document.querySelector("#editTodoDesc");
const formDate = document.querySelector("#editTodoDate");
const formPriority = document.querySelector("#editTodoPriority");

export function populateProjects(projectList) {
    projectsContainer.textContent = "";

    projectList.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        const titleP = document.createElement("p");
        titleP.classList.add("title");
        titleP.textContent = project.title;
        projectDiv.appendChild(titleP);

        const descP = document.createElement("p");
        descP.classList.add("description");
        descP.textContent = project.description;
        projectDiv.appendChild(descP);

        projectDiv.addEventListener("click", (e) => {
            const projects = document.querySelectorAll(".project");
            projects.forEach((projectInList) => {
                if (projectInList.classList.contains("selectedProject")) {
                    projectInList.classList.remove("selectedProject");
                };
            });

            projectDiv.classList.add("selectedProject");

            selectedProject = project;
            populateContent(project);
        });

        projectsContainer.appendChild(projectDiv);
    });
}

export function populateContent(project) {
    content.textContent = "";

    const removeProjectButton = document.createElement("button");
    removeProjectButton.id = "removeProjectButton";
    removeProjectButton.textContent = "- Remove Project";
    content.appendChild(removeProjectButton);

    const addTodoButton = document.createElement("button");
    addTodoButton.id = "addTodoButton";
    addTodoButton.command = "show-modal";
    addTodoButton.setAttribute("commandfor", "newTodoContainer");
    addTodoButton.textContent = "+ Add Todo";
    content.appendChild(addTodoButton);

    removeProjectButton.addEventListener("click", (e) => {
        removeProject(selectedProject.id);
        populateProjects(getProjects());
        content.textContent = "";
    });

    project.todoList = project.todoList.sort((todo, lastTodo) => { return lastTodo.priority - todo.priority });

    project.todoList.forEach((todo) => {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todoitem");

        if (isPast(todo.dueDate)) {
            todoDiv.classList.add("pastDue");
        }

        const titleP = document.createElement("p");
        titleP.classList.add("title");
        titleP.textContent = todo.title;
        todoDiv.appendChild(titleP);

        const dateP = document.createElement("p");
        dateP.classList.add("dueDate");
        dateP.textContent = "Due: " + format(todo.dueDate, "dd-MMM-yyyy HH:mm");
        todoDiv.appendChild(dateP);

        const collapsible = document.createElement("div");
        collapsible.classList.add("todoCollapse");
        todoDiv.appendChild(collapsible);
        
        const descP = document.createElement("p");
        descP.classList.add("description");
        descP.textContent = todo.description;
        collapsible.appendChild(descP);

        const priorityP = document.createElement("p");
        priorityP.classList.add("duedate");
        priorityP.textContent = "Priority: " + todo.priority;
        collapsible.appendChild(priorityP);

        const editButton = document.createElement("button");
        editButton.classList.add("editButton");
        editButton.textContent = "Edit";
        editButton.command = "show-modal";
        editButton.setAttribute("commandfor", "editTodoContainer");
        collapsible.appendChild(editButton);

        editButton.addEventListener("click", (e) => {
            formTitle.value = todo.title
            formDesc.value = todo.description
            formDate.value = format(todo.dueDate, "yyyy-MM-dd hh:mm");
            formPriority.value = todo.priority;
            selectedTodo = todo;
        });

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("removeTodoButton");
        deleteButton.textContent = "x";
        todoDiv.append(deleteButton);

        deleteButton.addEventListener("click", (e) => {
            selectedProject.removeTodoItem(todo.id);
            populateContent(selectedProject);
            updateProjects();
        });

        content.appendChild(todoDiv);

        todoDiv.addEventListener("click", (e) => {
            collapsible.classList.toggle("show");
        });
    });
}