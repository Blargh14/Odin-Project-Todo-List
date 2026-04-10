const projects = document.querySelector("#projects");
const content = document.querySelector("#content");

export function populateProjects(projectList) {
    
}

export function populateContent(project) {
    content.textContent = "";

    project.todoList = project.todoList.sort((todo, lastTodo) => { return lastTodo.priority - todo.priority });

    project.todoList.forEach((todo) => {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todoitem");

        const titleP = document.createElement("p");
        titleP.classList.add("title");
        titleP.textContent = todo.title;
        todoDiv.appendChild(titleP);

        const descP = document.createElement("p");
        descP.classList.add("description");
        descP.textContent = todo.description;
        todoDiv.appendChild(descP);

        const infoBar = document.createElement("div");
        infoBar.classList.add("infobar");
        todoDiv.appendChild(infoBar);

        const dateP = document.createElement("p");
        dateP.classList.add("duedate");
        dateP.textContent = "Due: " + todo.dueDate;
        infoBar.appendChild(dateP);

        const priorityP = document.createElement("p");
        priorityP.classList.add("duedate");
        priorityP.textContent = "Importance: " + todo.priority;
        infoBar.appendChild(priorityP);

        // todoDiv.textContent = todo.title + todo.description + todo.dueDate + todo.priority + todo.checklist;

        content.appendChild(todoDiv);
    });

}