import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className=' container-fluid px-5  bg-body-tertiary sticky-top'>
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <Link className=' text-decoration-none ' to="/"><img src='media/logo.svg' className='   Nav-Logo' alt="Logo"></img></Link>

                        <div class="collapse navbar-collapse justify-content-end fs-4" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <Link class="nav-link nav-anchor-tag  " to="/signup">Sign up</Link>
                                <Link class="nav-link nav-anchor-tag  " to="/about">About</Link>
                                <Link class="nav-link nav-anchor-tag  " to='/product'>Products</Link>
                                <Link class="nav-link nav-anchor-tag  " to="/pricing">Pricing</Link>
                                <Link class="nav-link nav-anchor-tag  " to="/support">Support</Link>
                                <a class="nav-link nav-anchor-tag  " href="http://localhost:3001">
                                    Go to Dashboard
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
