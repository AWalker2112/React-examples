

const Header = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-sm">
                <a
                    className="nav-brand"
                    href="www.qa.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img alt="logo" src="https://i.imgur.com/smguoM3.png" width="100" />
                </a>
                <br></br>
                <a href="/" className="navbar-brand">
                    Todo App
                </a>
            </nav>
        </header>

    );
}

export default Header;