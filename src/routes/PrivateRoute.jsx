import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";
import Loader from "../pages/Loader/Loader";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <Loader></Loader>
    }

    if (user) {
        return children
    }

    return <Navigate to="/singIn"></Navigate>
};

export default PrivateRoute;