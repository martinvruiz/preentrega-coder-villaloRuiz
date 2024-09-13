
import ReactDOM from "react-dom/client";
import "./index.css"
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemListContainer/components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Nosotros from "./pages/Nosotros";
import { Home } from "./pages/Home";
import {Cart} from "./Cart/Cart.jsx"
import { CartProvider } from "./CartContext/CartContext.jsx";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);


function App(){

    return <>
        <CartProvider>
            <BrowserRouter>
            <NavBar/>
        
        
            <Routes>

                <Route path="/" element={<Home/>}></Route>
                <Route path=":category" element={<ItemListContainer/>}></Route>
                <Route path="item/:id" element={<ItemDetailContainer/> }></Route>
                <Route path=":category/item/:id" element={<ItemDetailContainer/> }></Route>
                <Route path="us" element={<Nosotros/>}></Route>
                <Route path="cart" element={<Cart/>}></Route>

        
            </Routes>
        
            </BrowserRouter>
            </CartProvider>
    </>
}

root.render(<App/>)