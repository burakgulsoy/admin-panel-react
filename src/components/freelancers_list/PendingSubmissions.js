import React, { Component } from 'react'
import {
    Table,
    Button
} from "reactstrap"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as freelancerActions from '../../redux/actions/freelancerActions'

class PendingSubmissions extends Component {

    componentDidMount() {
        this.props.actions.getUnvalidatedFreelancers()
    }

    validateFreelancer(freelancerToUpdate){
        freelancerToUpdate.is_validated = 1
        this.props.actions.updateFreelancer(freelancerToUpdate)
    }

    deleteFreelancer(freelancerToDelete){
        this.props.actions.deleteFreelancer(freelancerToDelete)
    }

    render() {
        return (
            <div>
                <Table striped hover bordered>
                    <thead >
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Role</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>


                    <tbody>
                        {this.props.unvalidatedFreelancers.map(freelancer => (
                            <tr key={freelancer.freelancer_id}>
                                <th scope='row'>{freelancer.freelancer_id}</th>
                                <td>{freelancer.name}</td>
                                <td>{freelancer.surname}</td>
                                <td>{freelancer.email}</td>
                                <td>{freelancer.phone_number}</td>
                                <td>{getRoleName(freelancer.role_id)}</td>
                                <td><Button outline color="success" onClick={()=>this.validateFreelancer(freelancer)}>Validate</Button></td>
                                <td><Button outline color="danger"  onClick={()=>this.deleteFreelancer(freelancer)}>Deny</Button></td>
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
        unvalidatedFreelancers: state.unvalidatedFreelancerListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getUnvalidatedFreelancers: bindActionCreators(freelancerActions.getUnvalidatedFreelancers, dispatch),
            updateFreelancer:bindActionCreators(freelancerActions.updateFreelancer,dispatch),
            deleteFreelancer:bindActionCreators(freelancerActions.deleteFreelancer,dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PendingSubmissions)