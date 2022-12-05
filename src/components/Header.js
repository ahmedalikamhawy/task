import './Header.css';
function Header(){
    return(
        <header>
            <h2 className ="header-h2">MY TODO APP TITLE</h2>
            <nav className="header-nav">
                <div>
                    <ul className="header-nav-ul">
                        <li><a>link 1</a></li>
                        <li><a>link 2</a></li>
                    </ul>
                </div>
                <div className="header-btn"><button>button</button></div>
            </nav>
        </header>
    );
}
export default Header;
