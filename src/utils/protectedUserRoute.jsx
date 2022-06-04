import {Outlet, Navigate} from "react-router-dom";
import { useLocation} from "react-router";

const useAuth = () => {
    const user = {verified: false}
    if(sessionStorage.getItem("verified") === "true"){
        user.verified = true;
    };
    return user && user.verified;
}
    const ProtectedRoutes = () => {
        const location = useLocation()
        const isAuth = useAuth();
        return isAuth ? (
        <Outlet/>
        ) : (
        <Navigate to="/" replace state={{ from: location }} />);
    }

export default ProtectedRoutes