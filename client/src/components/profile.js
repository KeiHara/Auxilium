import {React} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import PandaProfile from "./images/pandaProfile.png";

function ProfilePage () {
    return(
        <div class="mainContent">
            <div class="basicInfo">
                <img style={{display: "inline-block", float: "left"}} src={PandaProfile} alt="Panda's Profile Pic"/>
                <div style={{display: "inline-block", marginLeft: "5vw"}}>
                    <h1>Display Name:</h1>
                    <h2>Panda128</h2>
                    <h1>About Me:</h1>
                    <h2>I'm a panda!</h2>
                </div>
            </div>

            <div>
                <h1>A C H I E V E M E N T S</h1>

            </div>

            <div>
                <h1>S T A T S</h1>
                <h2>94 Questions Asked</h2>
                <h2>23 QUestions Answered</h2>
            </div>

            <div>
                <h1>R E P U T A T I O N</h1>
                <h2>94 Questions Asked</h2>
                <h2>23 QUestions Answered</h2>
            </div>

            <div>
                <h1>R E C E N T   A C T I V I T Y</h1>
                <h2>Answered How do I insert an image into my web app?</h2>
                <h2>Asked How to convert this while loop into a for loop?</h2>
                <h2>Replied to How do I use a generator</h2>
            </div>

        </div>
    )};


export default ProfilePage;