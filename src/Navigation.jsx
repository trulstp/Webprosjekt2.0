import React, { Component } from "react";
import ListIcon from "./icons/list.png";
import ProfileIcon from "./icons/profile.png";
import RequestIcon from "./icons/request.png";
import LogoutIcon from "./icons/logout.png";


function logout() {
    sessionStorage.clear();
    console.log("test")
}
class Navigation extends Component {
    
    render() {
        return (
            <nav className="menu">
                <div>
                    <a href="/all" className="link" id="list-of-requests-link">
                        <img src={ListIcon} alt="List of requests" />
                        List of requests
                    </a>
                </div>

                <div>
                    <a href="/my-profile" className="link" id="my-profile-link">
                        <img src={ProfileIcon} alt="My profile" />
                        My profile
                    </a>
                </div>

                <div>
                    <a href="/new-request" className="link" id="new-request-link">
                        <img src={RequestIcon} alt="New request" />
                        New request
                    </a>
                </div>
                <div>
                    <a href="/admin" className="link" id="my-profile-link">
                        <img src={ProfileIcon} alt="Admin" />
                        Administrate
                    </a>
                </div>
                <div>
                    <a onClick={ ()=>logout() }  href="/"  className="link">
                        <img src={LogoutIcon}  alt="Log out" />
                        Log out
                    </a>
                </div>
            </nav>
        );
    }
}

export default Navigation;
