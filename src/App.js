import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./components/navigation/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./container/ItemListContainer";
import ItemDetailContainer from "./container/ItemDetailContainer";
import { CartContextFunction } from "./context/CartContext";
import Cart from "./container/Cart";
import Checkout from './container/Checkout';

function App() {
    useEffect(() => {
        if (localStorage.getItem("cart") === null) {
            localStorage.setItem("cart", JSON.stringify([]));
        } 

        if (localStorage.getItem("cartTotal") === null) {
            localStorage.setItem("cartTotal", "0");
        }

        if (localStorage.getItem("cartUnits") === null) {
            localStorage.setItem("cartUnits", "0");
        }
    }, []);

    return (
        <BrowserRouter>
            <CartContextFunction>
                <div>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<ItemListContainer />} />
                        <Route path='/category/:categoryId' element={<ItemListContainer />} />
                        <Route path='/item/:id' element={<ItemDetailContainer />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/checkout' element={<Checkout />} />
                    </Routes>
                </div>
            </CartContextFunction>
        </BrowserRouter>
    );
}

export default App;
