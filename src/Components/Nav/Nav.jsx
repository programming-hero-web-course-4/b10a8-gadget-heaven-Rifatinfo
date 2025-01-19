const Nav = ({ route }) => {
    return (
        <div>
            <ul>
                <li key={route.path}>
                    <a href={route.path}>{route.name}</a>
                </li>
            </ul>
        </div>
    );
};

export default Nav;

