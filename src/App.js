import React from "react";
import "./App.css";
import NavBar from "./components/navigation/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./container/ItemListContainer";
import ItemDetailContainer from "./container/ItemDetailContainer";
import { CartContextFunction } from "./context/CartContext";
import Cart from "./container/Cart";

function App() {
    return (
        <BrowserRouter>
            <CartContextFunction>
                <div>
                    <NavBar />
                    <Routes>
                        <Route path='/' exact element={<ItemListContainer />} />
                        <Route path='/category/:categoryId' element={<ItemListContainer />} />
                        <Route path='/item/:id' element={<ItemDetailContainer />} />
                        <Route path='/cart' element={<Cart />} />
                    </Routes>
                </div>
            </CartContextFunction>
        </BrowserRouter>
    );
}

export default App;
