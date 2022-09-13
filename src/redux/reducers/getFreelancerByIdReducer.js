import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function getFreelancerByIdReducer(state = initialState.freelancerById, action) {
    switch (action.type) {
        case actionTypes.GET_FREELANCER_BY_ID_SUCCESS:
            return action.payload

        default:
            return state;
    }
}