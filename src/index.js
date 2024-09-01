import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemListContainer/components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Nosotros from "./pages/Nosotros";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

function App(){

    return <>
        <BrowserRouter>
        <NavBar/>
        
        
        <Routes>

            <Route path="/" element={<ItemListContainer/>}></Route>
            <Route path="products/:category" element={<ItemListContainer/>}></Route>
            <Route path="item/:id" element={<ItemDetailContainer/> }></Route>
            <Route path="us" element={<Nosotros/>}></Route>

        
        </Routes>
        
        </BrowserRouter>
        </>
}

root.render(<App/>)