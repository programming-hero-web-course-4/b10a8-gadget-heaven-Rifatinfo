const Nav = ({ route }) => {
    return (
        <div>
            <ul>
                <li className="hover:bg-white hover:text-black px-32 py-3 md:bg-transparent" key={route.path}>
                    <a href={route.path}>{route.name}</a>
                </li>
            </ul>
        </div>
    );
};

export default Nav;

