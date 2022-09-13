import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function allTasksListReducer(state = initialState.allTasks, action) {
    switch (action.type) {
        case actionTypes.GET_ALL_TASKS_SUCCESS:
            return action.payload

        default:
            return state;
    }
}