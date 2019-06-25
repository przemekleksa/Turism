import React, { Component } from 'react';
import './navbar.scss';
import logo from './ROAM_white.png';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = { 
        isOpen: false,
        scrolled: false
     }
     
     updateDimensions() {
        console.log(window.innerWidth);
         if(window.innerWidth > 900) {
           this.setState({
               isOpen: true
           })
         }
         console.log(this.state.isOpen)
     }
     
     componentDidMount() {
        this.updateDimensions();
         window.addEventListener('scroll', () =>{
             const isTop = window.scrollY < 100
            if (!isTop) {
                this.setState({
                    scrolled: true,
                    })
            } else {
                this.setState({
                    scrolled: false,
                })
            }
         })
     }

     componentWillUnmount() {
         window.removeEventListener('scroll');
     }

     toggleMenu = () => {
         if (this.state.isOpen === false) {
            this.setState({
                isOpen: true,
            })
         } else {
            this.setState({
                isOpen: false,
            })
         }
         
     }

   

    render() { 
        return ( 
            <nav className={(this.state.scrolled ? 'nav scrolled' : 'nav')}>
                {this.state.isOpen ?
                    <div className="closed opened"></div> : <div className="closed"></div>
                }
                <div className={this.state.scrolled && this.state.isOpen ?  'logo background' : 'logo'}>
                    <img src={logo} />
                </div>
                {this.state.isOpen ? 
                    <div className={this.state.scrolled ? 'burger alternative' : 'burger noscroll'} onClick={this.toggleMenu}><span></span>
                        <span></span>
                        <span></span>
                    </div> 
                    : 
                    <div className='burger' onClick={this.toggleMenu}><span></span>
                        <span></span>
                        <span></span>
                    </div>
                    }
                 {/* <div className={(this.state.isOpen && this.state.scrolled ? 'burger alternative' : 'burger')} onClick={this.toggleMenu}> */}
                    
                <ul className={(this.state.isOpen) ? 'menu open': 'menu'}>
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