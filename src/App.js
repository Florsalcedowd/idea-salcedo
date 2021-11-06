import React from "react";
import "./App.css";
import NavBar from "./components/navigation/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./container/ItemListContainer";
import ItemDetailContainer from "./container/ItemDetailContainer";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' exact element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
