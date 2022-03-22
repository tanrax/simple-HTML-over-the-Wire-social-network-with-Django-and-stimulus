import {connect, startEvents} from './webSocketsCli.js';
import { Application } from "./vendors/stimulus.js"
import add_controller from "./controllers/add_form_controller.js"
import update_controller from "./controllers/update_form_controller.js"
import message_controller from "./controllers/message_controller.js"

/*
    INITIALIZATION
*/

// WebSocket connection
connect();
startEvents();

// Stimulus
window.Stimulus = Application.start();
Stimulus.register("message", message_controller);
Stimulus.register("addForm", add_controller);
Stimulus.register("updateForm", update_controller);
