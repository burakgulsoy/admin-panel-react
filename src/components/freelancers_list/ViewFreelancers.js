import React, { Component } from 'react'
import {
    Table,
    Button
} from "reactstrap"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as freelancerActions from '../../redux/actions/freelancerActions'
import { Link } from 'react-router-dom'


class ViewFreelancers extends Component {

    componentDidMount() {
        this.props.actions.getValidatedFreelancers()
    }

    getFreelancerById = (freelancer_id) => {
        this.props.actions.getFreelancerById(freelancer_id)
        console.log(freelancer_id)
    }

    render() {
        return (
            <div>
                <Table striped hover bordered>
                    <thead >
                        <tr >
                            <th>ID</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Role</th>
                            <th></th>
                        </tr>
                    </thead>


                    <tbody >
                        {this.props.validatedFreelancers.map(freelancer => (
                            <tr key={freelancer.freelancer_id} >

                                <th scope='row'>{freelancer.freelancer_id}</th>
                                <td>{freelancer.name}</td>
                                <td>{freelancer.surname}</td>
                                <td>{freelancer.email}</td>
                                <td>{freelancer.phone_number}</td>
                                <td>{getRoleName(freelancer.role_id)}</td>
                                <td>
                                    <Link to="../freelancerPage/FreelancerInfo">
                                        <Button
                                            className="my-2"
                                            onClick={()=>this.getFreelancerById(freelancer.freelancer_id)}
                                        >
                                            >Info
                                        </Button>
                                    </Link>

                                </td>

                            </tr>
                        ))}
                    </tbody>
                </Table>



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
        validatedFreelancers: state.validatedFreelancerListReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getValidatedFreelancers: bindActionCreators(freelancerActions.getValidatedFreelancers, dispatch),
            getFreelancerById: bindActionCreators(freelancerActions.getFreelancerById,dispatch)
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ViewFreelancers)