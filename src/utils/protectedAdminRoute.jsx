import {Outlet, Navigate} from "react-router-dom";
import { useLocation} from "react-router";

const useAuth = () => {
    const user = {role: false}
    if(sessionStorage.getItem("role") === "admin"){
        user.role = true;
    };
    return user && user.role;
}
    const ProtectedAdminRoutes = () => {
        const location = useLocation()
        const isAuth = useAuth();
        return isAuth ? (
        <Outlet/>
        ) : (
        <Navigate to="/all" replace state={{ from: location }} />);
    }

export default ProtectedAdminRoutes