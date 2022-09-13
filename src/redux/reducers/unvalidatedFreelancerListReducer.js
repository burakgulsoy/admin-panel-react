import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function unvalidatedFreelancerListReducer(state = initialState.unvalidatedFreelancersList, action) {
    switch (action.type) {
        case actionTypes.GET_UNVALIDATED_FREELANCERS_SUCCESS:
            return action.payload

        default:
            return state;
    }
}