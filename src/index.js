import "./styles.css";
import {populateProjects} from "./display.js";
import {getProjects} from "./storage.js";
import "./buttons.js";

populateProjects(getProjects());