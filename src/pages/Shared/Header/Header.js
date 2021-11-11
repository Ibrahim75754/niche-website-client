import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    console.log(user)

    const activeStyle = {
        color: "#FDF3F4",
    }
    return (
        <div style={{ marginBottom: '80px' }}>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: "#006885" }}>
                <div class="container">
                    <NavLink class="navbar-brand" to="/">
                        {/* <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top" /> */}
                        <h1 className="text-bold d-inline" style={{ color: "tomato" }}>MYShop</h1>
                    </NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{ fontWeight: "bold" }}>
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
                        {user?.email ?
                            <span class="navbar-text">
                                <span style={{ color: "#FDF3F4" }}>{user?.displayName}</span>
                                <button onClick={logout} className="btn btn-success ms-2">LogOut</button>
                            </span>
                            :
                            <span class="navbar-text">
                                <NavLink class="" aria-current="page" to='/login'><button className="btn btn-success">Login</button></NavLink>
                            </span>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;