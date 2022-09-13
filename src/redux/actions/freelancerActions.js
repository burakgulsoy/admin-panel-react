import * as actionTypes from "./actionTypes"

// export function getFreelancersSuccess(freelancers){
//     return {
//         type: actionTypes.GET_FREELANCERS_SUCCESS,
//         payload:freelancers
//     }
// }

export function getValidatedFreelancersSuccess(validatedFreelancers) {
    return {
        type: actionTypes.GET_VALIDATED_FREELANCERS_SUCCESS,
        payload: validatedFreelancers
    }
}

export function getUnvalidatedFreelancersSuccess(UnvalidatedFreelancers) {
    return {
        type: actionTypes.GET_UNVALIDATED_FREELANCERS_SUCCESS,
        payload: UnvalidatedFreelancers
    }
}

export function getFreelancerByIdSuccess(freelancerById) {
    return {
        type: actionTypes.GET_FREELANCER_BY_ID_SUCCESS,
        payload: freelancerById
    }
}

export function updateFreelancerSuccess(freelancer) {
    return {
        type: actionTypes.UPDATE_FREELANCER_SUCCESS,
        payload:freelancer
    }
}

export function deleteFreelancerSuccess(freelancer) {
    return {
        type: actionTypes.DELETE_FREELANCER_SUCCESS,
        payload:freelancer
    }
}

export function updateFreelancerApi(freelancer){
    return fetch("http://localhost:8080/api/updatefreelancer",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(freelancer)
    })
    .then(handleResponse)
    .catch(handleError);
}

export function updateFreelancer(freelancer){
    return function(dispatch){
        return updateFreelancerApi(freelancer)
        .then(updatedFreelancer => {
            dispatch(updateFreelancerSuccess(updatedFreelancer))
            
        }).catch(error=>{throw error})
    }
}

export function deleteFreelancerApi(freelancer){
    return fetch("http://localhost:8080/api/deletefreelancer",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(freelancer)
    })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteFreelancer(freelancer){
    return function(dispatch){
        return deleteFreelancerApi(freelancer)
        .then(deletedFreelancer => {
            dispatch(deleteFreelancerSuccess(deletedFreelancer))
        }).catch(error=>{throw error})
    }
}

export function getFreelancerById(freelancer_id) {
    return function (dispatch) {
        let url = "http://localhost:8080/api/freelancers"
        url = url + "/" + freelancer_id
        return fetch(url)
            .then(response => response.json())
            .then(result => dispatch(getFreelancerByIdSuccess(result)))
    };
}

export function getValidatedFreelancers() {
    return function (dispatch) {
        let url = "http://localhost:8080/api/validatedfreelancers"
        return fetch(url)
            .then(response => response.json())
            .then(result => dispatch(getValidatedFreelancersSuccess(result)))
    };
}

export function getUnvalidatedFreelancers() {
    return function (dispatch) {
        let url = "http://localhost:8080/api/unvalidatedfreelancers"
        return fetch(url)
            .then(response => response.json())
            .then(result => dispatch(getUnvalidatedFreelancersSuccess(result)))
    };
}

export async function handleResponse(response){
    if(response.ok){
        return response.json()
    }

    const error = await response.text
    throw new Error(error)
}

export function handleError(error){
    console.error("Bir hata oluştu")
    throw error
}



