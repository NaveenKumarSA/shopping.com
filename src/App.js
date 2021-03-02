import React, { useState } from "react";

import "./App.css";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

function App() {
  const [cart, setCart] = useState([]);

  const [products] = useState([
    {
      name: "Mi LED tv",
      cost: " 13,339.99",
      img:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS36-0nXIiIkI68AeMLreigbhAwttO01-WmHFWazyOEc-o_7j73tL3jnQBUzySCODWRLfYxU2dGJA&usqp=CAc",
    },
    {
      name: "Sanitizer Kit",
      cost: " 1,039.49",
      img:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRQ5gIIMfECipI4w3uwRsCII9GlRSO0ffXlQRta5RssPN-4KTUZZ6dxOWr8JgoYAlutp1kbiTyb0Q&usqp=CAc",
    },
    {
      name: "Digital LED Alarm clock ",
      cost: " 1039.79",
      img:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSfQ4pRHvb1p5mz21oAr0sZVaI0pOREao-LafspnqgmAtc2yY3Vrek-mzc5oGMkzfgBD6SLIU-i-Ep6gUYsYUebGi4mb_8e3GSG0JUMVPU&usqp=CAc",
    },
    {
      name: "AA Battery",
      cost: " 9.9",
      img: "https://5.imimg.com/data5/JV/CY/MY-21893711/dura-cell-500x500.jpg",
    },
    {
      name: " Blanket",
      cost: " 999",
      img:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR26NyqP0PHOgqz_HiiwHFwnY0kLS5Ovin7COGUi0dTzJhMr2FOZfFQXSd7cYsNG9ARHS_keUnF&usqp=CAc",
    },
    {
      name: "Tooth Brush",
      cost: " 39.99",
      img:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT6jju1XMGvTd5xR_ycthkHu9X_V7Dmewb3zUltDOWVNpE04HCR_xG-fL0RszqL2IJjrOHsgfnZRQk&usqp=CAc",
    },
    {
      name: "Tooth Brush",
      cost: " 49.99",
      img:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT6jju1XMGvTd5xR_ycthkHu9X_V7Dmewb3zUltDOWVNpE04HCR_xG-fL0RszqL2IJjrOHsgfnZRQk&usqp=CAc",
    },
    {
      name: "Mi LED tv",
      cost: " 13,339.99",
      img:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS36-0nXIiIkI68AeMLreigbhAwttO01-WmHFWazyOEc-o_7j73tL3jnQBUzySCODWRLfYxU2dGJA&usqp=CAc",
    },
    {
      name: "Sanitizer Kit",
      cost: " 1,039.49",
      img:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRQ5gIIMfECipI4w3uwRsCII9GlRSO0ffXlQRta5RssPN-4KTUZZ6dxOWr8JgoYAlutp1kbiTyb0Q&usqp=CAc",
    },
    {
      name: "Digital LED Alarm clock ",
      cost: " 1039.79",
      img:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSfQ4pRHvb1p5mz21oAr0sZVaI0pOREao-LafspnqgmAtc2yY3Vrek-mzc5oGMkzfgBD6SLIU-i-Ep6gUYsYUebGi4mb_8e3GSG0JUMVPU&usqp=CAc",
    },
    {
      name: " Blanket",
      cost: " 899",
      img:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR26NyqP0PHOgqz_HiiwHFwnY0kLS5Ovin7COGUi0dTzJhMr2FOZfFQXSd7cYsNG9ARHS_keUnF&usqp=CAc",
    },
  ]);
  // adding products into the cart array
  const addToCart = (product) => {
    //console.log("This is inside the addToCart method ");
    setCart([...cart, { ...product }]);
  };
  // Removing product from the cart
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const [page, setPage] = useState(PAGE_PRODUCTS);
  // const [page, setPage] = useState(PAGE_CART);  // only once it is required  for the repeated purpose we can do like this
  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };
  // This is a page that reders all the products from the state array
  const renderProducts = () => {
    return (
      <>
        <h1>Products</h1>
        <div className="products">
          {products.map((product, idx) => (
            <div className="pro-card" key={idx}>
              <h2 className="card-name">{product.name}</h2>
              <h4> INR {product.cost}</h4>
              <img className="" src={product.img} alt={product.name} />
              <br></br>
              <button className="topBtn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </>
    );
  };
  // This is going to render the cart
  const renderCart = () => {
    var total=0; 
    return (
      <>
        <h1>Your Cart</h1>
        <div className="container">
          <div className="products col-6 ">
            {cart.map((product, idx) => (
              <div className="pro-card" key={idx}>
                <h2 className="card-name">{product.name}</h2>
                <h4> INR {product.cost}</h4>
                <img className="" src={product.img} alt={product.name} />
                <br></br>
                <button
                  className="topBtn"
                  onClick={() => removeFromCart(product)}
                >
                  Remove
                </button>
                
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };
  // This is a cart header class which has a function of rendering cart alone
  const cartHeader = () => {
    return (
      <header className="headerDiv">
        <button className="topBtn" onClick={() => navigateTo(PAGE_CART)}>
          Go To Cart ( {cart.length} )
        </button>
        <button className="topBtn" onClick={() => navigateTo(PAGE_PRODUCTS)}>
          View Products
        </button>
      </header>
    );
  };
  // This returns the actual page
  return (
    <div className="App ">
      {cartHeader()}
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
    </div>
  );
}

export default App;
