import React from 'react'

function Cart({ cartItems, removeFromCart }) {
    return (
        <div>

            <ul className="list-group">
                {cartItems.map(item => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{item.ProductName}</div>
                            ${item.price}
                        </div>
                        <button onClick={() => removeFromCart(item)} className="badge bg-danger rounded-pill">X</button>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Cart