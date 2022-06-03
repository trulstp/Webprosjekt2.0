import React from "react";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";

//import Template from "./Template";
import AllRequests from "./AllRequests";
import NewRequest from "./NewRequest";
import Profile from "./Profile";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import ViewRequest from "./ViewRequest";
import EditProfile from "./EditProfile";
import Navigation from "./Navigation";
import EditRequest from "./EditRequest";
import ViewApplicants from "./Applicants";
import Admin from "./Admin";
import ProtectedRoutes from "./utils/protectedUserRoute";


const NavigationRoutes = () => {
    const SidebarLayout = () => (
        <>
            <Navigation />
            <Outlet />
        </>
    );
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<SignUp />} />

                <Route path="/" element={<LogIn />} exact />

                <Route path="*" element={<NotFound />} /> 
                <Route element={<ProtectedRoutes/>} >
                <Route element={<SidebarLayout />}>
                    <Route path="/all" element={<AllRequests />} />

                    <Route path="/my-profile" element={<Profile />} />

                    <Route path="/edit-profile" element={<EditProfile />} />

                    <Route path="/new-request" element={<NewRequest />} />

                    <Route path="/edit-request" element={<EditRequest />} />

                    <Route path="/view-applicants" element={<ViewApplicants />} />

                    <Route path="/view-request" element={<ViewRequest />}  />

                    <Route path="/admin" element={<Admin />} />

                    
                </Route>
                </Route>
            </Routes>
        </Router>
    );
    
};

const NotFound = () => {
    return (<div><h1>This page does not exist</h1></div>);
}

export default NavigationRoutes;
