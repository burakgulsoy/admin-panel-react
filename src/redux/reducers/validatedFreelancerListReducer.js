import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function validatedFreelancerListReducer(state = initialState.validatedFreelancersList, action) {
    switch (action.type) {
        case actionTypes.GET_VALIDATED_FREELANCERS_SUCCESS:
            return action.payload

        default:
            return state;
    }
}