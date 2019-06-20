import React, { Component } from 'react';
import './navbar.scss';
import logo from './ROAM_white.png';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = { 
        hamburgerOn: false,
     }
    render() { 
        return ( 
            <nav>
                <div className="logo">
                    <img src={logo} />
                </div>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Destinations</a>
                    </li>
                    <li>
                        <a href="#">Tours</a>
                    </li>
                    <li>
                        <a href="#">Pages</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Elements</a>
                    </li>

                </ul>
            </nav>
         );
    }
}
 
export default Navbar;