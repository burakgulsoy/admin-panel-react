import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function inProgressTasksListReducer(state = initialState.tasksInProgress, action) {
    switch (action.type) {
        case actionTypes.GET_IN_PROGRESS_TASKS_SUCCESS:
            return action.payload

        default:
            return state;
    }
}