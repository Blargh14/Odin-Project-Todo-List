function addTodoItemFunction(item) { this.todoList.push(item) };
function removeTodoItemFunction(id) {
    this.todoList = this.todoList.filter((item) => item.id != id);
}

export default function newProject() {
    let id = crypto.randomUUID();
    let title = "";
    let todoList = [];
    const addTodoItem = addTodoItemFunction;
    const removeTodoItem = removeTodoItemFunction;
       
    return {id, title, todoList, addTodoItem, removeTodoItem};
}

export function addFunctionsToStoredProject(project) {
    project.addTodoItem = addTodoItemFunction;
    project.removeTodoItem = removeTodoItemFunction;
}
