import React, { useState, useEffect } from 'react'

import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from "reactstrap"


const Login = () => {

    const handleSubmit = event => {
        event.preventDefault();
    };

    return (

        <div className='login'>
            <Form onSubmit={(e)=>handleSubmit(e)}>
                <FormGroup>
                    <Label for='adminUsername'>Username</Label>

                    <Input
                        id='adminUsername'
                        name='adminUsername'
                        placeholder=''
                        type='text'
                        value={adminUsername}
                        onChange={(e) => setUsername(e.target.value)}>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for='adminPassword'>Password</Label>

                    <Input
                        id='adminPassword'
                        name='adminPassword'
                        placeholder=''
                        type='password'
                        value={adminPassword}
                        onChange={(e) => setPassword(e.target.value)}>
                    </Input>

                </FormGroup>
                <Button type='submit' value='Submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default Login;