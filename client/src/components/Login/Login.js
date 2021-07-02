import React, { useRef, useState } from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap'
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"


const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError('Failed to sign in')
        }
        setLoading(false)
    }

    return (
        <>
            <Card className="w-50 mx-auto">
                <h2 className="text-center mb-4">Log In</h2>
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

                    <Button className="w-50 mb-3" type="submmit">Log In</Button>
                </Form>
            </Card>
            <div disabled={loading} className="text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    )
}

export default Login
