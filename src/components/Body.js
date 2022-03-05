import React, { useState } from 'react';
import '../styles/Body.css';
import ContactUsForm from './contactUsForm';
import Login from './loginForm';
import Register from './registerForm';
import Products from './Products';
import Cart from './Cart';
import AboutUs from './AboutUs';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';
const PAGE_ABOUT = 'about';
const PAGE_CONTACT = 'contact';
const PAGE_LOGIN = 'login';
const PAGE_REGISTER = 'register';

const Body = () => {

    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(PAGE_PRODUCTS);

   
    const addToCart = (product) => {
        // alert("button works")
        setCart([...cart, { ...product }]);
    }

    const gotoMenu = (menuPage) => {
        setPage(menuPage)
    }

    const aboutUs = (about) => {
        setPage(about);
    }
    const gotoContacts = (contact) => {
        setPage(contact)
    }
    const gotoCart = (nextPage) => {
        setPage(nextPage)
    }

    const gotoLogin = (login) => {
        setPage(login)
    }

    const gotoRegister = (register) => {
        setPage(register)
    }

    const removeFromCart = (productToRemove) => {
        setCart(cart.filter(product => product !== productToRemove)
        )
    }

    const buyProduct = () => {
        alert("product bought")
    }

    return (
        <div>
            <nav>
                <div className="logo">
                    <h1>
                        <a href="/">
                            Pizza Store
                        </a>
                    </h1>
                </div>

                <ul>
                    <li><button className="btn" onClick={() => gotoMenu(PAGE_PRODUCTS)}>Menu</button></li>
                    <li><button className="btn" onClick={() => aboutUs(PAGE_ABOUT)}>About Us</button></li>
                    <li><button className="btn" onClick={() => gotoContacts(PAGE_CONTACT)}>Contact Us</button></li>
                    <li><button className="loginBtn" onClick={() => gotoLogin(PAGE_LOGIN)}>Login</button></li>
                    <li><button className="registerBtn" onClick={() => gotoRegister(PAGE_REGISTER)}> Register</button></li>
                    <li>
                        <button className="btn1" onClick={() => gotoCart(PAGE_CART)}>cart {cart.length}</button>
                    </li>
                </ul>
            </nav>
            
            {page === PAGE_CONTACT && <ContactUsForm />}
            {page === PAGE_ABOUT && <AboutUs />}
            {page === PAGE_PRODUCTS && <Products addToCart={addToCart} />}
            {page === PAGE_CART && <Cart cart={cart} removeFromCart={removeFromCart} buyProduct={buyProduct} />}
            {page === PAGE_LOGIN && <Login />}
            {page === PAGE_REGISTER &&  <Register />}

        </div>
    )
}

export default Body;