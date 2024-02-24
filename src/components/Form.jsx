import { useContext, useState } from "react";
import { CartContex } from "./CartContex";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Forms = () => {
    const { cart, SumaCartTotal, setCart } = useContext(CartContex);
    const [visible, setVisible] = useState(false)
    const [orden, setOrden] = useState()
    const [buyer, setBuyer] = useState({
        Nombre: "",
        Email: "",
        Telefono: null
    });

    const [errors, setErrors] = useState({
        Nombre: "",
        Email: "",
        Telefono: null
    });

    const Value = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const orden = {
            buyer,
            item: cart,
            total: SumaCartTotal()
        };

        const newErrors = {};

        Object.keys(buyer).forEach(key => {
            if (!buyer[key]) {
                newErrors[key] = `El campo ${key} no  esta completado`;
            } else {
                newErrors[key] = "";
            }
        });

        setErrors(newErrors);

        if (Object.values(newErrors).some(error => error !== "")) {
            return; // Stop the submission if any field is empty
        }
        const db = getFirestore();
        const colRef = collection(db, "orders");
        addDoc(colRef, orden)
            .then((res) => {
                setOrden(res.id)
            })
            .catch(err => err);

        setVisible(true)
    };

    const clearValue = () => {
        setCart([])
        setBuyer({ Nombre: "", Email: "", Telefono: null })
    }

    const Terminar = () => {

        return (
            <Link to={"/"} className="btn btnS" onClick={clearValue}>Volver al inicio</Link>
        )
    }

    return (
        <div className=" container   my-5 py-5   border-2 rounded ">
            <div className="row my-5 justify-content-center">
                {orden ? <div className="col-5">
                    <div class="alert  alert-dark p-5 text-center" role="alert">
                        <h1>Gracias por tu Compra!</h1>
                        <p>Tu ID de Compra es: <b>{orden}</b></p>
                        <Terminar />
                    </div>
                </div> :
                    <div className="row d-flex  justify-content-center rounded ">
                        <div className="col-md-4">
                            <form onSubmit={onSubmit}>
                                {Object.keys(buyer).map((key, i) => (
                                    <div key={i} className="my-3 justify-content-center text-start">
                                        <label htmlFor={key}>{key}</label><br />
                                        <input type="text" name={key} id={key} value={buyer[key]} onChange={Value} />
                                        <p className="text-danger ">{errors[key]}</p>
                                    </div>
                                ))}
                            </form>
                            <div className="row m-1">
                                <button onClick={onSubmit} className="btnS btn" type="submit">Comprar</button>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex ">
                            <table className="table table-light border">
                                <tbody>

                                    {cart.map((item, index) => (
                                        <tr key={index}>
                                            <td className='align-middle'><img src={item.image} width={70} alt={item.name} /></td>
                                            <td className='align-middle'>{item.name}</td>
                                            <td className='align-middle'>{item.quantity}</td>
                                            <td className='align-middle'>$ {item.price}</td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td></td>
                                        <td className='align-middle'>Total:</td>
                                        <td className='align-middle'>${SumaCartTotal()}</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>}
            </div>
        </div>
    );
};
export default Forms;