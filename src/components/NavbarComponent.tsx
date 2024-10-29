import React from 'react';
import ThemeComponent from "@/components/ThemeComponent";

const NavbarComponent = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a href="/">Homepage</a></li>
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/extras">Extras</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a href="/" className="btn btn-ghost text-xl">Justin Oswald</a>
            </div>
            <div className="navbar-end">
                <div className="indicator">
                    <ThemeComponent />
                </div>
            </div>
        </div>
    )
}

export default NavbarComponent;