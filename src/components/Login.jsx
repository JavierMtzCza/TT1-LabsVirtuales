import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

import imagen from "../images/undraw_login_re_4vu2 1.svg"

const Login = () => {
    return (
        <div className="main-container">
            <div className="left-container">
                <img src={imagen} width="100%" height="100%" />{' '}
            </div>
            <div className="right-container">
                <h1>Bienvenido a </h1>
                <h2>Math Learn Lab</h2>
                    <Form className="container-inputs">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form>
            </div>
        </div>
    )
}

export default Login