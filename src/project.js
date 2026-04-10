export function newProject() {
    let title = "";
    let description = "";
    let todoList = [];

    const addTodoItem = (item) => { todoList.push(item) };
    const removeToDoItem = (removeTitle) => {
        todoList = todoList.filter((item) => item.title != removeTitle);
    }

    return {title, description, todoList, addTodoItem, removeToDoItem};
}