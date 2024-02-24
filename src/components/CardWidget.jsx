import { Link } from "react-router-dom";
import iconCarrito from "../assets/cart.svg";
import { useContext } from "react";
import { CartContex } from "./CartContex";

const CartWidget = () => {
const {CartTotal} = useContext(CartContex)

if(CartTotal == 0){
    return ""
}
return (
    CartTotal() > 0 ? (
        <Link to="/cart" type="button" className="btn position-relative">
            <img src={iconCarrito} alt="Carrito" width={23} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
                {CartTotal()}
            </span>
        </Link>
    ) : ""
);
}
export default CartWidget;