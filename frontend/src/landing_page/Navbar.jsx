import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg border-bottom" style={{ color: "#fff" }}>
            <div className="container  p-2">
                <Link className="navbar-brand" to="/" >
                    <i class="fa-solid fa-chart-line" style={{ color: "blue" }}>
                        <span style={{ color: "blue" ,marginLeft : "8px" ,borderBottom: "2px solid blue" ,letterSpacing:"3px" }}>Trade</span>
                        <span style={{ color: "grey" ,borderBottom: "2px solid blue" ,letterSpacing:"3px"}}>Desk</span>
                    </i> </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse homeNav navbar-collapse" id="navbarSupportedContent">

                    <form className='d-flex' role='search'>
                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/product">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/pricing">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/support">Support</Link>
                            </li>


                        </ul>
                    </form>

                </div>
            </div>
        </nav>

    );
}