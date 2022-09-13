import React, { Component } from 'react'
import {
    Table
} from "reactstrap"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as taskActions from '../../redux/actions/taskActions'

class ViewTasksDone extends Component {

    componentDidMount() {
        this.props.actions.getDoneTasks()
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
                        {this.props.doneTasks.map(task => (
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

function mapStateToProps(state) {
    return {
        doneTasks: state.doneTasksListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getDoneTasks: bindActionCreators(taskActions.getDoneTasks, dispatch)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ViewTasksDone)



