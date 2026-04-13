export function newProject() {
    let title = "";
    let todoList = [];

    const addTodoItem = (item) => { todoList.push(item) };
    const removeToDoItem = (removeTitle) => {
        todoList = todoList.filter((item) => item.title != removeTitle);
    }

    return {title, todoList, addTodoItem, removeToDoItem};
}