import React, { useState } from 'react';
// import list
import '../styles/Body.css';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart'

const Body = () => {
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(PAGE_PRODUCTS)

    const [products] = useState([
        {
            name: 'Pizza 1',
            cost: 'R15.99',
            image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home-7.jpg'

        },

        {
            name: 'Pizza 1',
            cost: 'R15.99',
            image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home-7.jpg'

        },

        {
            name: 'Pizza 1',
            cost: 'R15.99',
            image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home-7.jpg'

        },

        {
            name: 'Pizza 1',
            cost: 'R15.99',
            image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home-7.jpg'

        },

        {
            name: 'Pizza 1',
            cost: 'R15.99',
            image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home-7.jpg'

        },

        {
            name: 'Pizza 1',
            cost: 'R15.99',
            image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home-7.jpg'

        }

    ])

    const addToCart = (product) => {
        // alert("button works")
        setCart([...cart, {...product}]);
    }

    const gotoCart = (nextPage) => {
        setPage(nextPage)
    }

    const removeFromCart = (productToRemove) => {
        setCart(cart.filter(product => product !== productToRemove)

        )}

    const renderProducts = () => (
        <>
          <h1>Products</h1>
            <div className="products">
                {products.map((product, index) => (
                    <div className="product" key={index}>
                        <h3> {product.name}</h3>
                        <img src={product.image} alt="" width="150px" />
                        <h4> {product.cost}</h4>
                        <button onClick={() => addToCart(product)}>Add To cart</button>
                    </div>
                ))}

            </div>
        </>
    )

    const renderCart = () => (
        <>
          <h1>Cart</h1>
        <div className="products">
                {cart.map((product, index) => (
                    <div className="product" key={index}>
                        <h3> {product.name}</h3>
                        <img src={product.image} alt="" width="150px" />
                        <h4> {product.cost}</h4>
                        <button onClick={() => removeFromCart(product)}>Remove From cart</button>
                    </div>
                ))}

            </div>
        
        

        </>
    )

    return (
        <div className="container">
            <button onClick={() => gotoCart(PAGE_CART)}>Go to cart {cart.length}</button>
            {page === PAGE_PRODUCTS && renderProducts()}
            {page === PAGE_CART && renderCart()}

        </div>
    )
}

export default Body;