import { Outlet } from "react-router";
import Navbar from "../Components/Nav/Navbar";
import Footer from "../Components/Footer/Footer";

const Roots = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Roots;