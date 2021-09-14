// logs out the user
const Logout = () => {
    const handleClick = () => {
        localStorage.clear();
        window.location = '/';
    }
    return (
        <li class="nav-link" onClick={handleClick}>logOut</li>
    )
}

export default Logout;