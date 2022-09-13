import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function doneTasksListReducer(state = initialState.tasksDone, action) {
    switch (action.type) {
        case actionTypes.GET_DONE_TASKS_SUCCESS:
            return action.payload

        default:
            return state;
    }
}