import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Menu from '../icons/bars-solid.svg';
import CartIcon from '../icons/cart-arrow-down-solid.svg';
import Close from '../icons/circle-xmark-solid.svg';

class Navbar extends Component {

    state = {
        toggle: false
    }

    menuToggle = () => {
        this.setState ({toggle: !this.state.toggle})
    }

    render() {
        const {toggle} = this.state;
        
        return (
            <header>

                <div className="menu" onClick={this.menuToggle}>
                    <img src={Menu} alt="" width="20" />
                </div>
               
                <div className="logo">
                    <h1>
                       <a href="/">
                       Pizza Store
                       </a>
                    </h1>
                </div>
 
                <nav>
                    <ul className={toggle ? "toggle" : ""}>
                        <li><a href="/" >Home</a></li>
                        <li><a href="/product">Product</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/login">Login / Register</a></li>
                        <li className="close" onClick={this.menuToggle}> 
                        <img src={Close} alt="" width="20" />
                        </li>
                    </ul>

                    <div className="nav-cart">
                        <span></span>
                        <a href="/cart">
                            <img src={CartIcon} alt="" width="20" />
                        </a>
                    </div>
                </nav> 

            </header>
        )
    }
}

export default Navbar;