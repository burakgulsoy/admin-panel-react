import React, { useState } from 'react'
import {
    Container,
    Nav,
    NavItem,
    NavLink,
    List,
    Collapse,
    Navbar
} from "reactstrap";

function Sidebar(props) {


    const [collapsedViewFreelancer, setCollapsedViewFreelancer] = useState(true);
    const [collapsedViewTasks, setCollapsedViewTasks] = useState(true);

    const toggleNavbarViewFreelancer = () => setCollapsedViewFreelancer(!collapsedViewFreelancer);
    const toggleNavbarViewTasks = () => setCollapsedViewTasks(!collapsedViewTasks);

    return (

        <Container className="bg-light border ">

            <div >
                <Navbar vertical  >

                    <List type="unstyled">

                        <li class="list-group-item">
                            <Navbar>
                                <NavLink href="/">
                                    Home
                                </NavLink>
                            </Navbar>
                        </li>


                        <li class="list-group-item">

                            <Navbar onClick={toggleNavbarViewFreelancer} href="#" >
                                <NavLink href="#">
                                    Freelancers
                                </NavLink>
                            </Navbar>


                            <Collapse isOpen={!collapsedViewFreelancer} navbar>

                                <Nav navbar>
                                    <NavItem>
                                        <NavLink href="../freelancers_list/ViewFreelancers" className='ms-5'>
                                            View Freelancers
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="../freelancers_list/PendingSubmissions" className='ms-5'>
                                            Pending Submissions
                                        </NavLink>
                                    </NavItem>
                                </Nav>

                            </Collapse>

                        </li>

                        <li class="list-group-item">

                            <Navbar onClick={toggleNavbarViewTasks} href="#" >
                                <NavLink href="#">
                                    Tasks
                                </NavLink>
                            </Navbar>


                            <Collapse isOpen={!collapsedViewTasks} navbar>

                                <Nav navbar>
                                    <NavItem>
                                        <NavLink href="../tasks/ViewAllTasks" className='ms-5'>
                                            View all tasks
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="../tasks/ViewTasksToDo" className='ms-5'>
                                            View tasks - TODO
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="../tasks/ViewTasksInProgress" className='ms-5'>
                                            View tasks - In progress
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="../tasks/ViewTasksDone" className='ms-5'>
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

export default Sidebar