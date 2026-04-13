const projectsContainer = document.querySelector("#projectsContainer");
const content = document.querySelector("#content");

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

            populateContent(project);
        });

        projectsContainer.appendChild(projectDiv);
    });
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
        infoBar.classList.add("infoBar");
        todoDiv.appendChild(infoBar);

        const dateP = document.createElement("p");
        dateP.classList.add("dueDate");
        dateP.textContent = "Due: " + todo.dueDate;
        infoBar.appendChild(dateP);

        const priorityP = document.createElement("p");
        priorityP.classList.add("duedate");
        priorityP.textContent = "Importance: " + todo.priority;
        infoBar.appendChild(priorityP);

        content.appendChild(todoDiv);
    });
}