// logs out the user
const Logout = () => {
    const handleClick = () => {
        localStorage.clear();
        window.location = '/';
    }
    return (
        <button class="nav-link" onClick={handleClick}>logOut</button>
    )
}

export default Logout;