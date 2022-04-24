import React, { Component } from "react";

import ListIcon from "./icons/list.png";
import ProfileIcon from "./icons/profile.png";
import RequestIcon from "./icons/request.png";
import LogoutIcon from "./icons/logout.png";

class Navigation extends Component {
    render() {
        return (
            <nav className="menu">
                <div>
                    <a href="/all" className="link">
                        <img src={ListIcon} alt="List of requests" />
                        List of requests
                    </a>
                </div>

                <div>
                    <a href="/my-profile" className="link">
                        <img src={ProfileIcon} alt="My profile" />
                        My profile
                    </a>
                </div>

                <div>
                    <a href="/new-request" className="link">
                        <img src={RequestIcon} alt="New request" />
                        New request
                    </a>
                </div>

                <div>
                    <a href="/" className="link">
                        <img src={LogoutIcon} alt="Log out" />
                        Log out
                    </a>
                </div>
            </nav>
        );
    }
}

export default Navigation;
