import { combineReducers } from "redux";
import validatedFreelancerListReducer from "./validatedFreelancerListReducer";
import unvalidatedFreelancerListReducer from "./unvalidatedFreelancerListReducer";
import allTasksListReducer from "./allTasksListReducer"
import toDoTasksListReducer from "./toDoTasksListReducer"
import inProgressTasksListReducer from "./inProgressTasksListReducer"
import doneTasksListReducer from "./doneTasksListReducer"
import getFreelancerByIdReducer from "./getFreelancerByIdReducer";
import updateFreelancerReducer from "./updateFreelancerReducer";

const rootReducer = combineReducers({
    validatedFreelancerListReducer,
    unvalidatedFreelancerListReducer,
    allTasksListReducer,
    toDoTasksListReducer,
    inProgressTasksListReducer,
    doneTasksListReducer,
    getFreelancerByIdReducer,
    updateFreelancerReducer,
})

export default rootReducer;