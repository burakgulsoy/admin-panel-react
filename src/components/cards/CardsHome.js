import React, { Component } from 'react'
import {
    CardTitle,
    CardText,
    CardBody,
    Card,
    CardGroup,
} from "reactstrap"

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as freelancerActions from '../../redux/actions/freelancerActions'
import * as taskActions from '../../redux/actions/taskActions'


class CardsHome extends Component {

    componentDidMount() {
        this.props.actions.getValidatedFreelancers()
        this.props.actions.getAllTasks()
        this.props.actions.getDoneTasks()
    }

    render() {
        return (
            <div>

                <CardGroup>
                    <Card>
                        
                        <CardBody>
                            <CardTitle tag="h5">
                                Freelancers
                            </CardTitle>
                            
                            <CardText>
                                Total freelancers: {this.props.validatedFreelancers.length}
                            </CardText>
                            
                        </CardBody>
                    </Card>
                    <Card>
                       
                        <CardBody>
                            <CardTitle tag="h5">
                                Tasks
                            </CardTitle>
                            
                            <CardText>
                                Total tasks: {this.props.allTasks.length}
                            </CardText>
                           
                        </CardBody>
                    </Card>
                    <Card>
                        
                        <CardBody>
                            <CardTitle tag="h5">
                                Task rate
                            </CardTitle>
                           
                            <CardText>
                                Task rate : %{getTaskDoneRate(this.props.doneTasks.length,this.props.allTasks.length)}
                            </CardText>
                            
                        </CardBody>
                    </Card>
                </CardGroup>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        validatedFreelancers: state.validatedFreelancerListReducer,
        allTasks: state.allTasksListReducer,
        doneTasks: state.doneTasksListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getValidatedFreelancers: bindActionCreators(freelancerActions.getValidatedFreelancers, dispatch),
            getAllTasks: bindActionCreators(taskActions.getAllTasks, dispatch),
            getDoneTasks: bindActionCreators(taskActions.getDoneTasks, dispatch)
        }
    }
}

function getTaskDoneRate(doneTaskNumber,allTaskNumber){
    let rate = (doneTaskNumber/allTaskNumber * 100).toFixed(2)
    return rate
}



export default connect(mapStateToProps, mapDispatchToProps)(CardsHome)
