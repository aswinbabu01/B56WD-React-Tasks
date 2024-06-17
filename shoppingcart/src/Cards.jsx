import React from 'react'

function Cards({ products, addTocart, cart, removeFromCart }) {
    const { id, ProductName, price, productImage } = products;
    const isInCart = cart.some(item => item.id === id)
    return (
        <div>
            <div className="container">
                <div className='col-lg-3 my-5'>
                    <div className="card" style={{ width: "100%" }}>
                        <img src={productImage} className="card-img-top" alt={id} style={{ height: '15rem', width: '16rem' }} />
                        <div className="card-body">
                            <h5 className="card-title ">{ProductName}</h5>
                            <p className="card-text">${price}</p>
                            {isInCart ? (
                                <button onClick={() => removeFromCart(products)} className="btn btn-danger">Remove from cart</button>
                            ) : (
                                <button onClick={() => addTocart(products)} className="btn btn-primary">Add to cart</button>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards