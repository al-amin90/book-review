import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../pages/Loader/Loader";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    const location = useLocation();
    console.log(location.pathname);

    if (loading) {
        return <Loader></Loader>
    }

    if (user) {
        return children
    }

    return <Navigate to="/contact" state={location.pathname}></Navigate>
};

export default PrivateRoute;