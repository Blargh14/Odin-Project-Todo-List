function addTodoItemFunction(item) { this.todoList.push(item) };
function removeToDoItemFunction(id) {
    this.todoList = this.todoList.filter((item) => item.id != id);
}

export default function newProject() {
    let id = crypto.randomUUID();
    let title = "";
    let todoList = [];
    const addTodoItem = addTodoItemFunction;
    const removeToDoItem = removeToDoItemFunction;
       
    return {id, title, todoList, addTodoItem, removeToDoItem};
}

export function addFunctionsToStoredProject(project) {
    project.addTodoItem = addTodoItemFunction;
    project.removeToDoItem = removeToDoItemFunction;
}
