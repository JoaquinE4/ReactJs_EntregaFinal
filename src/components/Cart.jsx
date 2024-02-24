import React, { useContext } from 'react';
import { CartContex } from "./CartContex";
import { Link } from 'react-router-dom';
import tacho from "../assets/basura.svg";

const Cart = () => {
    const { cart, removedItem, clear, CartTotal, SumaCartTotal } = useContext(CartContex);

    if (CartTotal() === 0) {
        return (
            <div className="container vh">
                <div className="row">
                    <div className="col">
                        <h1>Vaya a comprar, tío</h1>
                        <Link to={"/"}>Página Principal</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='container my-5 vh'>
            <div className="row">
                <table className="table  border ">
                    <tbody>
                        {cart.map(item =>
                            <tr key={item.id}>
                                <td ><img src={item.image} width={90} alt={item.name} /></td>
                                <td className='align-middle'>{item.name}</td>
                                <td className='align-middle'>{item.quantity}</td>
                                <td className='align-middle'>$ {item.price}</td>
                                <td className='align-middle   '><button type='button' className='btnS   btn' onClick={() => removedItem(item.id)} style={{ verticalAlign: 'middle' }}>
                                    <img src={tacho} width={30} alt="" />
                                </button></td>
                            </tr>
                        )}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td  className='align-middle   '>Total: $ {SumaCartTotal()}</td>
                            <td className='align-middle   '><button onClick={clear} className='btnS   btn'> <img src={tacho} width={30} alt="" /></button></td>
                        </tr>
                        </tbody>
                </table>
            </div>
            <div className="row d-flex justify-content-end">
                <Link to={"/form"} className='  btnS    btn ' >Finalizar compra</Link>
            </div>
        </div>
    );
};
export default Cart;