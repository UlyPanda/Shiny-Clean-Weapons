import React from 'react';
import { AppBar, Toolbar, IconButton, 
    Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        
        <AppBar position="relative">
            <Toolbar id="app-bar">
            {/* <img className="app-logo" id="app-logo" src={AppLogo} alt="Shiny-clean-weapons logo"/> */}
            <h1 className="App-title">Shiny Clean Weapons</h1>
            <br/>
            <ul className="nav-list">
                <li className="nav-list-item">
                    <Link to="/login">Login</Link>
                </li>
                <li className="nav-list-item">
                    <Link to="/weapons">Weapons</Link>
                </li>
                <li className="nav-list-item">
                    <Link to="/signup">Sign Up</Link>
                </li>
            </ul>

            </Toolbar>
        </AppBar>
    )
};
export default Navigation;