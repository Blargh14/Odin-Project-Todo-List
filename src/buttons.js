import {populateProjects} from "./display.js";
import {addProject, getProjects} from "./storage.js";

const form = document.querySelector("#newProjectForm");
const dialog = document.querySelector("#newProjectContainer");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    addProject(formData.get("projectTitle"));
    populateProjects(getProjects());

    form.reset();

    dialog.close();
});