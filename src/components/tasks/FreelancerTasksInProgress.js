import React, { Component } from 'react'
import {
    Table
} from "reactstrap"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as taskActions from '../../redux/actions/taskActions'


class FreelancerTasksInProgress extends Component {
    
    componentDidMount() {
        this.props.actions.getInProgressTasks()
    }

    render() {
        return (
            <div>
                <Table striped hover bordered>
                    <thead >
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>Freelancer ID</th>
                            <th>Begin Date</th>
                            <th>End Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {getFreelancerTasksInProgress(this.props.inProgressTasks, this.props.freelancer).map(task => (
                            <tr key={task.task_id}>
                                <th scope='row'>{task.task_id}</th>
                                <td>{task.task_description}</td>
                                <td>{task.freelancer_id}</td>
                                <td>{task.task_begin_date}</td>
                                <td>{task.task_end_date}</td>
                                <td>{task.task_type}</td>
                            </tr>
                        ))}
                    </tbody>

                </Table>
            </div>
        )
    }
}

function getFreelancerTasksInProgress(inProgressTasks,freelancer){
    let freelancerTasks = []

    for (let i = 0; i < inProgressTasks.length; i++) {
        
        if(inProgressTasks[i].freelancer_id == freelancer.freelancer_id){
            freelancerTasks.push(inProgressTasks[i])
        }
    }
    return freelancerTasks
}

function mapStateToProps(state) {
    return {
        freelancer: state.getFreelancerByIdReducer,
        inProgressTasks: state.inProgressTasksListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getInProgressTasks: bindActionCreators(taskActions.getInProgressTasks, dispatch)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FreelancerTasksInProgress)


