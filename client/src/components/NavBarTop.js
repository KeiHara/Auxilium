import {React} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import searchIcon from "./images/magnifyingglass.png";
import addIcon from "./images/AddIcon.png";
import settingsIcon from "./images/SettingsIcon.png";
import profileIcon from "./images/ProfileIcon.png";

function NavBarTop() {
    return (
        <div class="topNavBar">
            <div style={{display: "inline-block", borderRadius: "40px", marginLeft: "45px"}} className="searchBarModel">
                <img
                    style={{
                        position: "absolute",
                        height: "4.2vh",
                        left: "1.1vw",
                        top: "1vh",
                    }}
                    src={searchIcon}
                    alt="Search logo"
                />
                <p style={{ 
                    textAlign: "center", 
                    color: "#CFDBD5", 
                    lineHeight: "6vh"
                }}>
                    Got a question?
                </p>
            </div>
                <div style={{right: "9vw"}} class="circle">
                    <img style={{right: "9vw"}} src={addIcon} alt="Add Icon"/>
                </div>
                <div style={{right: "5vw"}} class="circle">
                    <img style={{right: "9vw"}} src={settingsIcon} alt="Settings Icon"/>
                </div>
                <div style={{right: "1vw"}} class="circle">
                    <img style={{right: "9vw"}} src={profileIcon} alt="Profile Icon"/>
                </div>

        </div>
    )};

export default NavBarTop;