import Header from "./Header"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from "react"
import Footer from "./Footer"
import Cards from "./Cards"
import Cart from "./Cart"


function App() {

  const [cart, setCart] = useState([]);

  const [isCart, setIsCart] = useState(null);
  // Add to cart func

  let data = [
    {
      id: 1,
      ProductName: "Sony PS5 Console",
      price: "659.93",
      productImage: "https://m.media-amazon.com/images/I/51fM0CKG+HL._AC_SL1500_.jpg"
    },
    {
      id: 2,
      ProductName: "Sony PS4 Slim 500 GB Console",
      price: "419.91",
      productImage: "https://m.media-amazon.com/images/I/8176J0BnOVL._SL1500_.jpg",
    },
    {
      id: 3,
      ProductName: "Meta Quest 3 Advanced All-in-One VR Headset",
      price: "719.94",
      productImage: "https://www.tanotis.com/cdn/shop/files/1689074740_1776469_154665fd-6c69-454c-9411-efc3fd7659e8_500x.jpg?v=1699616478",
    },
    {
      id: 4,
      ProductName: "Kreo Beluga USB Over-Ear Wired Gaming Headphone",
      price: "33.59",
      productImage: "https://m.media-amazon.com/images/I/61cqpxoP6PL._SL1500_.jpg",
    },
    {
      id: 5,
      ProductName: "NinjaDog Astra Joystick",
      price: "719.94",
      productImage: "https://image.made-in-china.com/2f0j00UbhgcfemhokR/Senze-Sz-4011b-Private-Model-Wireless-Game-Controller-Gamepad-PS4-Wireless-Game-Joystick-for-PS4.jpg",
    },
    {
      id: 6,
      ProductName: "IFYOO- One Wired USB gaming Controller",
      price: "52.66",
      productImage: "https://m.media-amazon.com/images/I/61uBflPaWaL._SL1100_.jpg",
    },
    {
      id: 7,
      ProductName: "Xbox Series X",
      price: "599.51",
      productImage: "https://assets.xboxservices.com/assets/b2/51/b2518691-0175-4bf4-8c2e-9086e8a2c2db.png?n=XBX_A-BuyBoxBGImage02-D.png",
    },
    {
      id: 8,
      ProductName: "Apple MacBook Air Laptop M1 chip",
      price: "923.30",
      productImage: "https://i.gadgets360cdn.com/products/large/macbook-air-m1-2020-db-800x600-1607604365.png?downsize=*:420&output-quality=80",
    },

  ]

  let addTocart = (product) => {
    setCart([...cart, product])
  }

  //Remove Cart func

  let removeFromcart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
  };

  //Switch Cards to Cart
  const switchCart = () => {
    setIsCart(!isCart);
  }


  useEffect(() => {
    console.log('cart', cart);
  }, [cart]);

  return (
    <>
      <Header switchCartPage={switchCart} />
      {isCart ?
        (<Cart cartItems={cart} removeFromCart={removeFromcart} />) :
        (< div className="container">
          <div className="row">
            <div className="col">

              {data.map((product) => (

                < Cards key={product.id} index={product.id} products={product} addTocart={addTocart} removeFromCart={removeFromcart} cart={cart} />
              ))}
            </div>
          </div>
        </div>

        )}


      <Footer />
    </>
  )
}

export default App
