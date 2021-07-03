import React, { useRef, useState } from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap';
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from 'react-router-dom';
import logo from "./logo.png";


const SignUp = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const  signup  = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwards do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    return (
        <>
        <div>
        <div>
        <Link to="/">
            <img style={{position: "absolute", height: "8vh", top: "3vh", left: "1.5vw"}} src={logo} alt="Logo"/>
        </Link>
        </div>
            <div className="userBoxes">
                {error && <Alert className="w-75 mx-auto" variant="danger">{error}</Alert>}
                <Form className="w-75 mx-auto" onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required/>
                    </Form.Group>

                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required/>
                    </Form.Group>

                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required/>
                    </Form.Group>
                    <Button style={{marginTop: "2vh", color: "black", backgroundColor: "#F5CB5C", borderColor: "black"}} className="w-50 mb-3" type="submit">Sign Up</Button>
                </Form>
                    <div disabled={loading} style={{color: "#CFDBD5"}} className="text-center mt-2">
                        Already have an account? <Link style={{color: "#CFDBD5"}} to="/login"><em>Log In</em></Link>
                    </div>
                    
            </div>

            </div>
        </>
    )
}

export default SignUp;
