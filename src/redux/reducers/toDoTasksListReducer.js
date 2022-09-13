import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function toDoTasksListReducer(state = initialState.tasksToDo, action) {
    switch (action.type) {
        case actionTypes.GET_TO_DO_TASKS_SUCCESS:
            return action.payload

        default:
            return state;
    }
}