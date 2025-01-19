import { useState } from "react";
import Nav from "./Nav";
import { FaCartShopping } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
   const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/statistics", name: "Statistics" },
        { id: 3, path: "/dashboard", name: "Dashboard" }
    ];
    return (
        <div>
            <div>
                <div onClick={() => setOpen(!open)} className="md:hidden relative z-20 font-bold ml-2 mt-2">
                    {
                        open === true ?   <IoClose className="text-5xl" /> : <IoMenu  className="text-5xl" />

                    }
                </div>
                <div className={`md:flex md:justify-evenly duration-[3000ms] absolute text-white text-2xl font-semibold ${open ? "top-0 h-full" : "-top-64"} md:items-center md:gap-52 bg-[#9538E2] w-full  flex justify-center items-center md:bg-transparent`}>
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
