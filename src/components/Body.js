import React, { useState } from 'react';
import '../styles/Body.css';


const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart'
const PAGE_ABOUT = 'about';
const PAGE_CONTACT = 'contact';
const PAGE_LOGIN = 'login';
const PAGE_REGISTER = 'register';



const Body = () => {

    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(PAGE_PRODUCTS);

    const [products] = useState([
        {
            name: 'Pizza 1',
            cost: 'R39.99',
            image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home-7.jpg'
        },

        {
            name: 'Pizza 2',
            cost: 'R69.99',
            image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home-7.jpg'
        },

        {
            name: 'Pizza 3',
            cost: 'R99.99',
            image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home-7.jpg'
        },

        {
            name: 'Pizza 4',
            cost: 'R119.99',
            image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home-7.jpg'
        },

        {
            name: 'Pizza 5',
            cost: 'R159.99',
            image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home-7.jpg'
        },

        {
            name: 'Pizza 6',
            cost: 'R189.99',
            image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home-7.jpg'
        }

    ])

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

    const renderAbout = () => (
        <>
            <h1 className="caption">About Us</h1>
        </>
    )
    const renderContacts = () => (
        <>
            <h1 className="caption">Contact Us herrrrrrr, add form to send us an email</h1>

        </>
    )


    
    const renderProducts = () => (
        <>
            {/* <h1 className="caption">Menu</h1> */}
            <div className="products">

                {products.map((product, index) => (
                    <div className="product" key={index}>
                        <h3> {product.name}</h3>
                        <img src={product.image} alt="" className="img" />
                        <h4> {product.cost}</h4>
                        <button className="btn2" onClick={() => addToCart(product)}>Add To cart</button>
                    </div>
                ))}
            </div>
        </>
    )

    const renderCart = () => (
        <>
            <h1 className="caption">Cart</h1>
            <div className="products">
                {cart.map((product, index) => (
                    <div className="product" key={index}>
                        <h3> {product.name}</h3>
                        <img src={product.image} alt="" width="150px" />
                        <h4> {product.cost}</h4>
                        <button className="btn2" onClick={() => removeFromCart(product)}>Remove From cart</button>
                        <button className="btn2" onClick={() => buyProduct()}>Buy</button>
                    </div>
                ))}
            </div>
        </>
    )

    const renderLogin = () => (
        <>
            <h1 className="caption">Login, add a login form</h1>


        </>
    )

    const renderRegister = () => (
        <>
            <h1 className="caption">Register,

                add a registering form</h1>

        </>
    )



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
            
            {page === PAGE_CONTACT && renderContacts()}
            {page === PAGE_ABOUT && renderAbout()}
            {page === PAGE_PRODUCTS && renderProducts()}
            {page === PAGE_CART && renderCart()}
            {page === PAGE_LOGIN && renderLogin()}
            {page === PAGE_REGISTER && renderRegister()}

        </div>


    )
}

export default Body;