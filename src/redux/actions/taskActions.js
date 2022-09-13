import * as actionTypes from "./actionTypes"

export function getAllTasksSuccess(allTasks){
    return {
        type: actionTypes.GET_ALL_TASKS_SUCCESS,
        payload:allTasks
    }
}

export function getToDoTasksSuccess(toDoTasks){
    return {
        type: actionTypes.GET_TO_DO_TASKS_SUCCESS,
        payload:toDoTasks
    }
}

export function getInProgressTasksSuccess(inProgressTasks){
    return {
        type: actionTypes.GET_IN_PROGRESS_TASKS_SUCCESS,
        payload:inProgressTasks
    }
}

export function getDoneTasksSuccess(doneTasks){
    return {
        type: actionTypes.GET_DONE_TASKS_SUCCESS,
        payload:doneTasks
    }
}

export function getAllTasks(){
    return function(dispatch){
        let url = "http://localhost:8080/api/tasks"
        return fetch(url)
        .then(response => response.json())
        .then(result => dispatch(getAllTasksSuccess(result)))
    };
}

export function getToDoTasks(){
    return function(dispatch){
        let url = "http://localhost:8080/api/tasksToDo"
        return fetch(url)
        .then(response => response.json())
        .then(result => dispatch(getToDoTasksSuccess(result)))
    };
}

export function getInProgressTasks(){
    return function(dispatch){
        let url = "http://localhost:8080/api/tasksInProgress"
        return fetch(url)
        .then(response => response.json())
        .then(result => dispatch(getInProgressTasksSuccess(result)))
    };
}

export function getDoneTasks(){
    return function(dispatch){
        let url = "http://localhost:8080/api/tasksDone"
        return fetch(url)
        .then(response => response.json())
        .then(result => dispatch(getDoneTasksSuccess(result)))
    };
}