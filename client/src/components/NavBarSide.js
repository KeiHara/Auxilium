import { React } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/logo.png";

function NavBarSide () {
    return (
        <div class="mainNavBar">
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
                    <h3>Weekly Leaderboard</h3>
                    <ol>
                        <li>User 1</li>
                        <li>User 2</li>
                        <li>User 3</li>
                        <li>User 4</li>
                        <li>User 5</li>
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
        </div>
    )};


export default NavBarSide;
