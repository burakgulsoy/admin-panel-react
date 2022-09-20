import React from "react"
import { Container, Row, Col } from "reactstrap";
import Navi from "../navi/Navi";
import { Route, Routes } from "react-router-dom";
import Sidebar from '../sidebar/Sidebar'
import ViewFreelancers from '../freelancers_list/ViewFreelancers'
import NotFound from "../common/NotFound"
import Home from "../root/Home"
import PendingSubmissions from '../freelancers_list/PendingSubmissions';
import ViewAllTasks from '../tasks/ViewAllTasks'
import ViewTasksToDo from '../tasks/ViewTasksToDo'
import ViewTasksInProgress from '../tasks/ViewTasksInProgress'
import ViewTasksDone from '../tasks/ViewTasksDone'
import FreelancerSidebar from "../freelancerPage/FreelancerSidebar";
import FreelancerInfo from "../freelancerPage/FreelancerInfo";
import FreelancerTasks from "../freelancerPage/FreelancerTasks";

function App() {

  return (
    <div>
      <Container>
        <Navi />


        <Row>
          <Col xs="2">
            <Routes>
              <Route path="/freelancerPage/FreelancerInfo" element={<FreelancerSidebar />} />
              <Route path="/freelancerPage/FreelancerTasks" element={<FreelancerSidebar />} />
              <Route path="*" element={<Sidebar />} />
            </Routes>


          </Col>
          <Col xs="10">

            <Routes>
              <Route exact path="/" element={<Home />} />
              {/* buraya grafik eklenecek??? */}
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
              <Route path="/freelancerPage/FreelancerInfo" element={<FreelancerInfo />} />
              <Route path="/freelancerPage/FreelancerTasks" element={<FreelancerTasks />} />

              <Route path="*" element={<NotFound />} />
            </Routes>

          </Col>
        </Row>

        {/* <Dashboard /> */}
      </Container>
    </div>

  );
}

export default App;
