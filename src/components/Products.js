import React, { useState } from 'react';

function Products({ addToCart }) {

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

  return (
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
  );
}

export default Products;