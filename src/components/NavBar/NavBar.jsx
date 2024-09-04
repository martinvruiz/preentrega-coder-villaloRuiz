import { Link } from "react-router-dom"
import { CartWidget } from "./components/CartWidget/CartWidget"

export const NavBar = ()=>{

    return <>
        <nav className="flex items-center justify-center bg-cyan-700 h-14">
            <ul className="flex justify-center justify-items-center text-white h-full items-center">
                <li className="mx-6">
                    <Link className="font-bold text-xl" to="/">Proelec</Link>
                </li>
                <li className="mx-6">
                    <Link to="/electricidad">Electricidad</Link>
                </li>
                <li className="mx-6">
                    <Link to="/iluminacion">Iluminacion</Link>
                </li>
                <li className="mx-6">
                    <Link to="/herramientas">Herramientas</Link>
                </li>
                <li className="mx-6">
                    <Link to="/us">Nosotros</Link>
                </li>
            </ul>
            <CartWidget ItemNum="314"/>
        </nav>
    </>
}