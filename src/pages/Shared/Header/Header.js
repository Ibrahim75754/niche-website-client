import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user } = useAuth();
    console.log(user)

    const activeStyle = {
        color: "red",
        fontWeight: "bold"
    }
    return (
        <div style={{ marginBottom: '80px' }}>
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div class="container">
                    <NavLink class="navbar-brand" to="/">
                        <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top" />
                        <h1 className="text-danger text-bold d-inline">Boots</h1>
                    </NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink class="nav-link" activeStyle={activeStyle} aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link " activeStyle={activeStyle} aria-current="page" to="/allProducts">More Products</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link " activeStyle={activeStyle} aria-current="page" to="/dashboard">Dashboard</NavLink>
                            </li>
                        </ul>
                        <span class="navbar-text">
                            <span>hello</span>
                            <NavLink class="" aria-current="page" to="/login"><button className="btn btn-success">Login</button></NavLink>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;