import React, { Component } from 'react'
import { Route, Routes } from "react-router-dom";
import CardsHome from '../cards/CardsHome';


export default class Home extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route exact path="/" element={<CardsHome/>} />
                </Routes>

            </div>
        )
    }
}
