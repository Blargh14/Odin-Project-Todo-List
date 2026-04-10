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

        todoDiv.textContent = todo.title + todo.description + todo.dueDate + todo.priority + todo.checklist;

        content.appendChild(todoDiv);
    });

}