import {   createContext, useState } from "react"

export const CartContex = createContext()

const CartContexProvider = ({children} ) =>{
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let pos = cart.findIndex(producto => producto.id === item.id);  
            cart[pos].quantity += quantity;
            setCart(cart.slice());
        } else {
            const updatedCart = [...cart];
            updatedCart.push({ ...item, quantity: quantity });
            setCart(updatedCart);
        }
    }
    function removedItem(id) {
        const updatedCart = cart.filter(producto => producto.id !== id);
        setCart(updatedCart);
    }
    
    const clear = ()=>{
        setCart([])
    }

    const isInCart = (id) =>{
        return cart.some(item => item.id === id)
    }

    const CartTotal = () =>{
        return cart.reduce((acum, product)=> acum += product.quantity, 0)
    }
    const SumaCartTotal = () => {
        return cart.reduce((acum, item) => acum + (item.quantity * item.price), 0);
    }
    

    return (
        <CartContex.Provider value={{cart, addItem, removedItem, clear, CartTotal, SumaCartTotal, setCart}}>
            {children}
        </CartContex.Provider>
    )
}
export default CartContexProvider;