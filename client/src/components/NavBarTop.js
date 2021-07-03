import {React, useState} from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import styled from 'styled-components';
import searchIcon from "./images/magnifyingglass.png";
import logo from "./images/logo.png";

import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import { useAuth } from '../contexts/AuthContext';

function NavBarTop() {
    return (
        <div class="topNavBar">
        <div style={{display: "inline-block"}} className="searchBarModel">
                        <img
                        style={{
                            position: "absolute",
                            height: "4.8vh",
                            left: "1.1vw",
                            top: "0.7vh"
                        }}
                        src={searchIcon}
                        alt="Search logo"
                        />
                        <p style={{ textAlign: "center", color: "#CFDBD5", lineHeight: "6vh"}}>Got a question?</p>


                    </div>

        </div>
    )};

export default NavBarTop;