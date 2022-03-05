import React from 'react';

const renderCart = ({ cart, removeFromCart, buyProduct}) => (
    <>
        <h1 className="caption">Checkout Products</h1>
        <div className="products">
            {cart.map((product, index) => (
                <div className="product" key={index}>
                    <h3> {product.name}</h3>
                    <img src={product.image} alt="" width="150px" />
                    <h4> {product.cost}</h4>
                    <button className="btn3" onClick={() => removeFromCart(product)}>Remove From cart</button>
                    <button className="btn4" onClick={() => buyProduct()}>Buy</button>
                </div>
            ))}
        </div>
    </>
)

export default renderCart;