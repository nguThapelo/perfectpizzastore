import React, { useState } from 'react';
// import list
import '../styles/Body.css';

const Body = () => {
    const [cart, setCart] = useState([]);

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
        setCart([...cart, product]);
    }

    return (
        <div className="container">
            <h1>Products</h1>
            <button>Go to cart {cart.length}</button>

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























        </div>
    )
}

export default Body;