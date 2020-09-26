import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div>
            <nav className="navbar is-info" role="navigation" aria-label="main navigation">
                <div className="container nav-comp">
                    <div className="open-book">
                        <img src={require("../Images/open-book.png")} width='80%' height="100%" alt="website-logo"/>
                    </div>
                    <div id="navbar-main">
                        <Link to = "/"><div id="logo-name">The Study Wall</div></Link>
                        <div className = "columns">
                            <Link to = "/signin" className="column pages">
                                  Sign In
                            </Link>
                            <Link to = "/wall" className="column pages">
                                    Find Wall
                            </Link>
                            <Link to = "/members" className="column pages">
                                    Members
                            </Link>
                        </div>
                    </div>
                    <div className="open-book">
                        <img src={require("../Images/open-book.png")} width='80%' height="100%" alt="website-logo"/>
                    </div>
                </div>
            </nav>
        </div>);
};

export default Navbar;