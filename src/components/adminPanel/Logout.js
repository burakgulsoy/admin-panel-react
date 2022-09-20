import React from 'react'
import { useDispatch } from "react-redux";
import {
    Button
  } from "reactstrap";
import { logout } from './userSlice';

function Logout() {

    const dispatch = useDispatch()
    
    const handleLogout = (e) => {
        e.preventDefault()

        dispatch(logout())
    } 

    return (
        <div>

            <Button className="ml-auto" onClick={(e) => handleLogout(e)}>
                Logout
            </Button>

        </div>
    )
}

export default Logout
