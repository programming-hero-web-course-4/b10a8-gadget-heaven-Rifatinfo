const Nav = ({ route }) => {
    return (
        <div className="mt-4 md:mt-0">
            <ul>
                <li
                    className="hover:bg-white hover:text-black hover:rounded-lg px-28 md:px-6 py-3 md:py-2 transition-all 
                    duration-200 ease-in-out md:bg-transparent text-center"
                >
                    <a href={route.path} className="">
                        {route.name}
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
