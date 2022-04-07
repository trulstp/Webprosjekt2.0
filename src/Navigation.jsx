import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Template from "./Template";
import AllRequests from "./AllRequests";
import NewRequest from "./NewRequest";

import ProfileIcon from "./icons/profile.png";
import RequestIcon from "./icons/request.png";

const Navigation = () => {
    return (
        <Router>
            <nav className="menu">
                <div>
                    <Link to="/" className="link">
                        <img src={ProfileIcon} alt="List of requests" />
                        List of requests
                    </Link>
                </div>

                <div>
                    <Link to="/my-profile" className="link">
                        <img src={ProfileIcon} alt="My profile" />
                        My profile
                    </Link>
                </div>

                <div>
                    <Link to="/new-request" className="link">
                        <img src={RequestIcon} alt="New request" />
                        New request
                    </Link>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<AllRequests />} exact />

                <Route path="/my-profile" element={<Template />} />

                <Route path="/new-request" element={<NewRequest />} />
            </Routes>
        </Router>
    );
};

export default Navigation;
