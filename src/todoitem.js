export function newTodo() {
    let title = "";
    let description = "";
    let dueDate = "";
    let priority = 0;
    let checklist = [];

    return {title, description, dueDate, priority, checklist};
}