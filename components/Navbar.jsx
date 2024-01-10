import reactlogo from '../src/assets/react.png'

function Navbar() {
    return (
        <div className="navigation-bar">
            <img src={reactlogo} className="navbar-logo" alt="React logo"/>
            <h3 className="navbar-text">ReactFacts</h3>
            <p className="navbar-course-text">React course - Project 1</p>
        </div>
    )
}

export default Navbar;

