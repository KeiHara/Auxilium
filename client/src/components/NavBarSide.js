import {React, useState} from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import styled from 'styled-components';
import logo from "./images/logo.png";

import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import { useAuth } from '../contexts/AuthContext';

function NavBarSide () {
    return (
        <div class="mainNavBar">
            <Router>
            <div>
                <img style={{height: "8vh", marginTop: "2.5vh", marginLeft: "1.5vw", marginBottom: "0"}} src={logo} alt="Logo"/>
            </div>
            <div class="mainNavLinks">
                <hr/>
                <div>
                    <h2>Ask A Question</h2>
                </div>
                <hr />
                <div>
                    <h3>Explore/FAQ</h3>
                        <ul>
                            <li>What is a variable?</li>
                            <li>How to create an i...</li>
                            <li>How to fix SyntaxE...</li>
                        </ul>
                </div>
                <hr />
                <div>
                    <h3>Most Popular Tags</h3>
                    <div class="tags">
                        <p>Python</p>
                    </div>
                    <div class="tags">
                        <p>AI</p>
                    </div>
                    <div class="tags">
                        <p>Backend</p>
                    </div>
                </div>
                <hr />
                <div>
                    <h3>Weekly Leaderboard</h3>
                    <ol>
                        <li>User 1</li>
                        <li>User 2</li>
                        <li>User 3</li>
                        <li>User 4</li>
                    </ol>
                </div>
                <hr />
                <div>
                    <h3>About</h3>
                </div>
                <hr />
                <div>
                    <h3>Community</h3>
            </div>
            <hr />
            </div>
            </Router>
        </div>
    )};


export default NavBarSide;
