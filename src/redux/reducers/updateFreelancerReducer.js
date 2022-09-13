import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function updateFreelancerReducer(state = initialState.updatedFreelancer, action) {
    switch (action.type) {
        case actionTypes.UPDATE_FREELANCER_SUCCESS:
            return action.payload

        default:
            return state;
    }
}