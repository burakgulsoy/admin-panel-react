import React, { Component } from 'react'
import Sidebar from '../sidebar/Sidebar'
import { Row, Col } from 'reactstrap'
import { Route, Routes } from "react-router-dom";
import ViewFreelancers from '../freelancers_list/ViewFreelancers'
import NotFound from "../common/NotFound"
import Home from "../root/Home"
import PendingSubmissions from '../freelancers_list/PendingSubmissions';
import ViewAllTasks from '../tasks/ViewAllTasks'
import ViewTasksToDo from '../tasks/ViewTasksToDo'
import ViewTasksInProgress from '../tasks/ViewTasksInProgress'
import ViewTasksDone from '../tasks/ViewTasksDone'

// THIS CLASS IS NO LONGER USED, CHECK APP.JS FOR ROUTES
export default class Dashboard extends Component {
    render() {
        return (
            <div>

                <Row>
                    <Col xs="2">
                        <Sidebar />
                    </Col>
                    <Col xs="10">

                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="//freelancers_list/ViewFreelancers" element={
                                <ViewFreelancers />} />
                            <Route exact path="//freelancers_list/PendingSubmissions" element={
                                <PendingSubmissions />} />
                            <Route exact path="//tasks/ViewAllTasks" element={
                                <ViewAllTasks />} />
                            <Route exact path="//tasks/ViewTasksToDo" element={
                                <ViewTasksToDo />} />
                            <Route exact path="//tasks/ViewTasksInProgress" element={
                                <ViewTasksInProgress />} />
                            <Route exact path="//tasks/ViewTasksDone" element={
                                <ViewTasksDone />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>

                    </Col>
                </Row>

                {/* buraya grafik eklenecek??? */}

            </div>
        )
    }
}
