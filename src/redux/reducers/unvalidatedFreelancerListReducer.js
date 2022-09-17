import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function unvalidatedFreelancerListReducer(state = initialState.unvalidatedFreelancersList, action) {
    switch (action.type) {
        case actionTypes.GET_UNVALIDATED_FREELANCERS_SUCCESS:
            return action.payload

        case actionTypes.REMOVE_FROM_PENDING_LIST:
            const newState = state.filter(freelancer => freelancer.freelancer_id !== action.payload.freelancer_id)
            return newState;
            
        default:
            return state;
    }
}