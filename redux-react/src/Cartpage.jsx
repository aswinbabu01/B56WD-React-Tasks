import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart, removeFromCart, updateProductCount} from '../src/redux/cartSlice'

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const [isCart, setIsCart] = useState(false);
  const [productCount, setProductCount] = useState({});
  const data = {
    products: [
      {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr2SrOEIbzDcIdZRakVULEMcKJwZesTLYRWh2E2HyQLLGMHNCLOMEbkPc0w-mCAGsILcI&usqp=CAU",
        images: [
          "https://i.dummyjson.com/data/products/1/1.jpg",
          "https://i.dummyjson.com/data/products/1/2.jpg",
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        ],
      },
      {
        id: 2,
        title: "iPhone X",
        description:
          "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_XuH4Xhm3miBPx1mkv-5BbK2rw6RdN--VZA&s",
        images: [
          "https://i.dummyjson.com/data/products/2/1.jpg",
          "https://i.dummyjson.com/data/products/2/2.jpg",
          "https://i.dummyjson.com/data/products/2/3.jpg",
          "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        ],
      },
      {
        id: 3,
        title: "Samsung Galaxy Note 9",
        description:
          "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: "Samsung",
        category: "smartphones",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL6Ct2Lv-nkFdvOaHWeOc0nuCeTj6GMjK7YA&s",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL6Ct2Lv-nkFdvOaHWeOc0nuCeTj6GMjK7YA&s"],
      },
      {
        id: 4,
        title: "OPPOF19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3,
        stock: 123,
        brand: "OPPO",
        category: "smartphones",
        thumbnail: "https://productimages.withfloats.com/actual/619a8e3e530b4f00014200fe.jpeg",
        images: [
          "https://i.dummyjson.com/data/products/4/1.jpg",
          "https://i.dummyjson.com/data/products/4/2.jpg",
          "https://i.dummyjson.com/data/products/4/3.jpg",
          "https://i.dummyjson.com/data/products/4/4.jpg",
          "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        ],
      },
      {
        id: 5,
        title: "Huawei P30",
        description:
          "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        price: 499,
        discountPercentage: 10.58,
        rating: 4.09,
        stock: 32,
        brand: "Huawei",
        category: "smartphones",
        thumbnail: "https://i.gadgets360cdn.com/products/large/1553612275_635_huawei_p30.jpg",
        images: [
          "https://i.dummyjson.com/data/products/5/1.jpg",
          "https://i.dummyjson.com/data/products/5/2.jpg",
          "https://i.dummyjson.com/data/products/5/3.jpg",
        ],
      },
    ],
  };

  const handleToCart = (product) => {
    if (!cartItems.some((item) => item.id === product.id)) {
      dispatch(addToCart(product));
    } else {
      dispatch(removeFromCart(product.id));
    }
  };

  const handleNumberChange = (product, event) => {
    const selectedNumber = parseInt(event.target.value, 10);
    dispatch(updateProductCount({ product, count: selectedNumber }));
  };

  useEffect(() => {
    const updateProductCount = cartItems.reduce((result, value) => {
      result = {
        ...result,
        [value.title]: value.price,
      }
      return result;
    }, {});
    setProductCount(updateProductCount);
  }, [cartItems]);

  return (
    <div className="container">
      <div className="row my-5 mx-5">
        <div className="header d-flex justify-content-center mx-5 my-5">
          <h1>Shoppify</h1>
        </div>
        <div className="button">
          <button type="button" className="btn btn-primary btn-lg" onClick={() => setIsCart(!isCart)}>
            {isCart ? 'Back to Home' : 'Cart'}
          </button>
        </div>
        {isCart ? 
          <>
            {cartItems.map((product) => (<div
            className="card mb-3 mx-4 my-4"
            style={{ maxWidth: "540px" }}
            key={product.id}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={product.thumbnail}
                  className="img-fluid rounded-start"
                  alt={product.title}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title fs-3">{product.title}</h5>
                  <p className="card-text">Stock : {product.stock}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      {product.description}
                    </small>
                  </p>
                  <p className="card-text fs-4">${product.price}</p>
                  
                  <button type="button" className="btn btn-primary" onClick={() => handleToCart(product)}>
                   {cartItems.some((item) => item.id === product.id) ? "Remove From Cart" : "Add To Cart"}
                  </button>
                </div>
              </div>
            </div>
          </div>))}
          
          <p>total: {totalPrice}</p>
          <p>shipping: FREE</p>
          </> : data.products.map((product) => (
          <div
            className="card mb-3 mx-4 my-4"
            style={{ maxWidth: "540px" }}
            key={product.id}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={product.thumbnail}
                  className="img-fluid rounded-start"
                  alt={product.title}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title fs-3">{product.title}</h5>
                  <p className="card-text">Stock : {product.stock}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      {product.description}
                    </small>
                  </p>
                  <p className="card-text fs-4">${product.price}</p>
                  <button type="button" className="btn btn-primary" onClick={() => handleToCart(product)}>
                   {cartItems.some((item) => item.id === product.id) ? "Remove From Cart" : "Add To Cart"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartPage;