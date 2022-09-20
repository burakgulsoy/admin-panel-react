import React, { useState } from 'react'
import {
    Container,
    NavLink,
    List,
    Navbar,
    Nav,
    NavItem,
    Collapse
} from "reactstrap";

function FreelancerSidebar(props) {

    const [collapsedTasksInfo, setCollapsedTasksInfo] = useState(true);

    const toggleNavbarTasksInfo = () => setCollapsedTasksInfo(!collapsedTasksInfo);


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
                                <NavLink href="/freelancerPage/FreelancerInfo">
                                    Personal Info
                                </NavLink>
                            </Navbar>

                        </li>

                        <li class="list-group-item">

                            <Navbar onClick={toggleNavbarTasksInfo} href="#">
                                <NavLink href="#">
                                    Tasks Info
                                </NavLink>
                            </Navbar>

                            <Collapse isOpen={!collapsedTasksInfo} navbar>

                                <Nav navbar>
                                    <NavItem>
                                        <NavLink href="../tasks/FreelancerAllTasks" className='ms-5'>
                                            View all tasks
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="../tasks/FreelancerTasksToDo" className='ms-5'>
                                            View tasks - TODO
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="../tasks/FreelancerTasksInProgress" className='ms-5'>
                                            View tasks - In progress
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="../tasks/FreelancerTasksDone" className='ms-5'>
                                            View tasks - Done
                                        </NavLink>
                                    </NavItem>
                                </Nav>

                            </Collapse>


                        </li>
                    </List>
                </Navbar>
            </div>


        </Container>

    )

}

export default FreelancerSidebar