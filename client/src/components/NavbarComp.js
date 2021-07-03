import {React, useState} from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom"
import styled from 'styled-components'

import SignUp from './SignUp/SignUp'
import Login from './Login/Login'
import { useAuth } from '../contexts/AuthContext'

const StyledNavbar = styled(Navbar)`
    margin-bottom: 30px;
`;

const NavbarComp = () => {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout(){
        setError('')

        try{
            await logout()
            history.pushState('/login')
        } catch {
            setError('Failed')
        }
    }
    
    return (
        <Router>
            <div>
                <Container>
                    <Navbar.Brand as={Link} to={"/home"}>Q&A</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                            <Nav.Link as={Link} to={"/features"}>Features</Nav.Link>
                            <Nav.Link as={Link} to={"/price"}>Pricing</Nav.Link>
                        </Nav>
                        {currentUser ? 
                            <Nav>
                                <Navbar.Text>{currentUser.email}</Navbar.Text>
                                <Button onClick={handleLogout}>Log Out</Button>
                            </Nav>
                            :
                            <Nav className="ml-auto">
                                <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
                                <Nav.Link as={Link} to={"/signUp"}>Sign Up</Nav.Link>
                            </Nav>
                            }
                    </Container>
                </div>     
            
            <Switch>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}

export default NavbarComp
