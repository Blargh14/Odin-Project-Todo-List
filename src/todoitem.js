export function newTodo() {
    let id = crypto.randomUUID();
    let title = "";
    let description = "";
    let dueDate = "";
    let priority = 0;
    let checklist = [];

    return {id, title, description, dueDate, priority, checklist};
}