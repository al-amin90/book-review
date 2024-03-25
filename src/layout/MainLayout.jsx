import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Home from "../pages/Home/Home";


const MainLayout = () => {
    return (
        <div className="mx-auto max-w-[1440px] md:w-[83%] px-4 md:px-0 ">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;