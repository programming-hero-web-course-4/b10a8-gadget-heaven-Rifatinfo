import { NavLink } from "react-router-dom"; // Correct import
const Nav = ({ route }) => {
    return (
        <div className="mt-4 md:mt-0">
            <ul>
                <li
                    className="hover:bg-white hover:text-black hover:rounded-lg px-28 md:px-6 py-3 md:py-2 transition-all 
                    duration-200 ease-in-out md:bg-transparent text-center"
                >
                    <NavLink
                        to={route.path} // Use "to" instead of "href"
                        className={({ isActive }) =>
                            isActive
                                ? "text-black underline" // Classes for active state
                                : "" // Classes for inactive state
                        }
                    >
                        {route.name}
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
