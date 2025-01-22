import { useState } from "react";
import Nav from "./Nav";
import { FaCartShopping } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { LuCircleUserRound } from "react-icons/lu";
import { Link } from "react-router";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/statistics", name: "Statistics" },
        { id: 3, path: "/dashboard", name: "Dashboard" },
    ];

    return (
        <div className="relative max-w-6xl mx-auto">
            {/* Menu Button for Mobile */}
            <div
                onClick={() => setOpen(!open)}
                className="md:hidden relative z-20 font-bold ml-2 mt-2 cursor-pointer"
            >
                {open ? <IoClose className="text-3xl" /> : <IoMenu className="text-3xl" />}
            </div>

            {/* Navbar Content */}
            <div
                className={`md:flex md:justify-between md:items-center md:gap-10 transition-all md:bg-transparent duration-300 ease-in-out 
                ${open ? "top-0 bg-[#9538E2]" : "-top-64"} absolute md:static w-full md:h-auto h-screen 
                text-white md:text-black text-lg z-10`}
            >
                {/* Logo Section */}
                <div className="justify-center items-center md:flex hidden">
                    <h1 className="text-xl font-semibold">Gadget Heaven</h1>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    {routes.map((route) => (
                        <Nav route={route} key={route.id}></Nav>
                    ))}
                </div>

                {/* Icon Section */}
                <div className="flex justify-center items-center gap-4 mt-6 md:mt-0">
                    <FaCartShopping className="cursor-pointer" />
                    <GiSelfLove className="cursor-pointer" />
                    <Link to="/login" className="cursor-pointer">
                        <LuCircleUserRound  /> {/* Adjust the size as needed */}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
