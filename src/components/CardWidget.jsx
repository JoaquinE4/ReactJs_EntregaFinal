import iconCarrito from "../assets/cart.svg";

const CartWidget = () => {
    return (
        <button type="button" className="btn  position-relative">
            <img src={iconCarrito} alt="Carrito" width={23} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">1</span>
        </button>
    )
}

export default CartWidget;