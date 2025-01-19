import Nav from "./Nav";
import { FaCartShopping } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";

const Navbar = () => {

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/statistics", name: "Statistics" },
        { id: 3, path: "/dashboard", name: "Dashboard" }
    ]
    return (
        <div>
            <div > 
                <div className="md:flex md:justify-evenly md:items-center md:gap-20">
                    <div className="md:flex hidden">
                        {/* logo */}
                        <h1>Gadget Heaven</h1>
                    </div>
                    <div className="md:flex md:items-center md:justify-center md:gap-4">
                        {
                            routes.map(route => <Nav route={route} key={route.id}></Nav>)
                        }
                    </div>
                    <div className="md:flex md:items-center md:gap-3 hidden">
                        {/* icon */}
                        <FaCartShopping />
                        <GiSelfLove />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
