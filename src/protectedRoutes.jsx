import Login from "./Login";
import {Outlet} from "react-router-dom";

const useAuth = () => {
    const user = {loggedIn: false}
    if(sessionStorage.getItem("auth".role)=== "admin"){
        user.loggedIn = true;
    };
    return user && user.loggedIn;
}
    const ProtectedRoutes = () => {
        const isAuth = useAuth();
        return isAuth ? <Outlet/> : <Login/>;
    }

export default ProtectedRoutes