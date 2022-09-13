import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  CardTitle,
  CardText,
  CardBody,
  Card,
  CardGroup,
  List,
} from "reactstrap"

class freelancerInfo extends Component {
  render() {
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
                    Total tasks:  sayı
                  </li>

                  <li class='list-group-item'>
                    Tasks to do: sayı
                  </li>
                  <li class='list-group-item'>
                    Tasks in progress: sayı
                  </li>
                  <li class='list-group-item'>
                    Tasks done: sayı
                  </li>


                </List>

              </CardText>

            </CardBody>
          </Card>

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


function mapStateToProps(state) {
  return {
    freelancer: state.getFreelancerByIdReducer,

  }
}

export default connect(mapStateToProps)(freelancerInfo)