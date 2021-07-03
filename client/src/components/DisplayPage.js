import {React} from 'react'
import { Link } from "react-router-dom"

import searchIcon from "./images/magnifyingglass.png";
import logo from "./images/logo.png";


function DisplayPage(isLoggedIn){
    return(
        <div>
                <div>
                    <div className="bigTitle">
                        <img
                        style={{
                            position: "absolute",
                            height: "14vh",
                            left: "30%",
                            top: "2.5vh"
                        }}
                        src={logo}
                        alt="Logo"
                        />
                        <h1 className="bigTitleText">AUXILIUM</h1>
                    </div>

                    <div style={{textAlign: "center"}}>
                        <p
                        style={{ fontSize: "0.8rem", color: "#CFDBD5", marginTop: "2vh", marginBottom: "0" }}
                        >
                        5,835 people currently asking...
                        </p>
                    </div>

                    <div className="searchBarModel">
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

                    <div>
                        <Link to="/login">
                        <div style={{ float: "left" }} className="smallBarModel1">
                        <p style={{ textAlign: "center" }}>Sign In</p>
                        </div>
                        </Link>
                        <Link to="/signup">
                            <div style={{ float: "right" }} className="smallBarModel2">
                                <p style={{ textAlign: "center", color: "black"}}>Sign Up</p>
                            </div>
                        </Link>
                    </div>
                    
                </div>
        </div>
    )
};

export default DisplayPage ;