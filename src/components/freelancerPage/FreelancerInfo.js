import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as taskActions from '../../redux/actions/taskActions'

import {
  CardTitle,
  CardText,
  CardBody,
  Card,
  CardGroup,
  List,
} from "reactstrap"

class freelancerInfo extends Component {

  componentDidMount() {
    this.props.actions.getAllTasks()
  }

  render() {

    let freelancerTasks = getFreelancerTasks(this.props.allTasks, this.props.freelancer)

    return (
      <div>
        <CardGroup className="bg-light">
          <Card>

            <CardBody>

              <CardTitle tag="h5">
                {this.props.freelancer.name + " " + this.props.freelancer.surname}
              </CardTitle>

              <CardText>
                <List type='unstyled'>

                  <li class='list-group-item'>
                    Role: {getRoleName(this.props.freelancer.role_id)}
                  </li>

                  <li class='list-group-item'>
                    Email: {this.props.freelancer.email}
                  </li>

                  <li class='list-group-item'>
                    Phone Number: {this.props.freelancer.phone_number}
                  </li>

                </List>
              </CardText>

            </CardBody>
          </Card>


          <Card>
            <CardBody>

              <CardTitle tag="h5">
                About
              </CardTitle>

              <CardText>
                {this.props.freelancer.freelancer_description}
              </CardText>

            </CardBody>
          </Card>


          <Card>

            <CardBody>
              <CardTitle tag="h5">
                Task Statistics
              </CardTitle>
              <CardText>
                <List type='unstyled'>

                  <li class='list-group-item'>
                    Total tasks: {getFreelancerTasksNumber(this.props.allTasks, this.props.freelancer)}
                  </li>

                  <li class='list-group-item'>
                    Tasks to do:
                    {/* {getToDoTasksNumber(getFreelancerTasks(this.props.allTasks, this.props.freelancer))} */}
                  </li>

                  <li class='list-group-item'>
                    Tasks in progress:
                    {/* {getInProgressTasksNumber(freelancerTasks)} */}
                  </li>

                  <li class='list-group-item'>
                    Tasks done:
                    {/* {getDoneTasksNumber(freelancerTasks)} */}
                  </li>

                </List>
              </CardText>
            </CardBody>
          </Card>




        </CardGroup>



      </div>
    )
  }
}

function getRoleName(role_id) {
  switch (role_id) {
    case 1:
      return "Backend Developer"
    case 2:
      return "Frontend Developer"
    case 3:
      return "Fullstack Developer"
    case 4:
      return "Tester"
    case 5:
      return "Analyst"
    case 6:
      return "iOS Developer"
    case 7:
      return "UI Designer"

    default:
      return ""
  }
}

function getFreelancerTasksNumber(allTasks, freelancer) {

  let freelancerTasks = 0;

  for (let i = 0; i < allTasks.length; i++) {

    if (allTasks[i].freelancer_id == freelancer.freelancer_id) {
      freelancerTasks++
    }

  }
  return freelancerTasks

}

function getToDoTasksNumber(freelancerTasks) {
  let toDoTasks = 0

  for (let i = 0; i < freelancerTasks.length; i++) {

    if (freelancerTasks[i].task_type = "TO_DO") {
      toDoTasks++
    }

  }

  return toDoTasks
}

function getInProgressTasksNumber(freelancerTasks) {
  let inProgressTasks = 0

  for (let i = 0; i < freelancerTasks.length; i++) {

    if (freelancerTasks[i].task_type = "IN_PROGRESS") {
      inProgressTasks++
    }

  }

  return inProgressTasks
}

function getDoneTasksNumber(freelancerTasks) {
  let doneTasks = 0

  for (let i = 0; i < freelancerTasks.length; i++) {

    if (freelancerTasks[i].task_type = "DONE") {
      doneTasks++
    }

  }

  return doneTasks
}

function getFreelancerTasks(allTasks, freelancer) {
  let freelancerTasks = []

  for (let i = 0; i < allTasks.length; i++) {

    if (allTasks[i].freelancer_id == freelancer.freelancer_id) {
      freelancerTasks.push(allTasks[i])
    }

  }

  return freelancerTasks
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getAllTasks: bindActionCreators(taskActions.getAllTasks, dispatch)
    }
  }
}


function mapStateToProps(state) {
  return {
    freelancer: state.getFreelancerByIdReducer,
    allTasks: state.allTasksListReducer,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(freelancerInfo)