import React from 'react'
import {
    Container,
    NavLink,
    List,
    Navbar
} from "reactstrap";

function FreelancerSidebar(props) {

    return (

        <Container className="bg-light border ">

            <div >
                <Navbar vertical  >

                    <List type="unstyled">

                        <li class="list-group-item">
                            <Navbar>
                                <NavLink href="/">
                                    Return to Homepage
                                </NavLink>
                            </Navbar>
                        </li>


                        <li class="list-group-item">

                            <Navbar >
                                <NavLink  href="/freelancerPage/FreelancerInfo">
                                    Personal Info
                                </NavLink>
                            </Navbar>

                        </li>

                        <li class="list-group-item">

                            <Navbar   >
                                <NavLink href="/freelancerPage/FreelancerTasks">
                                    Tasks Info
                                </NavLink>
                            </Navbar>

                        </li>
                    </List>
                </Navbar>
            </div>


        </Container>

    )

}

export default FreelancerSidebar