export function newProject() {
    let id = crypto.randomUUID();
    let title = "";
    let todoList = [];

    const addTodoItem = (item) => { todoList.push(item) };
    const removeToDoItem = (id) => {
        todoList = todoList.filter((item) => item.id != id);
    }

    return {id, title, todoList, addTodoItem, removeToDoItem};
}