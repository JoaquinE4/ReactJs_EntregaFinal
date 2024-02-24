import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export const Terminar = () => {
    return (
        <Link to={"/cart"} className="btn btnS" >Finalizar Compra</Link>
    )
}

const ItemCount = ({ stock, onAdd }) => {
    const [counter, setCounter] = useState(1)
    const [itemStock, setItemStock] = useState(stock)
    const [visible, setVisible] = useState(false)

    const incrementar = () => {
        if (counter < itemStock) {
            setCounter(counter + 1)
        }
    }
    const decrementar = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const itemAdd = () => {
        if (counter <= itemStock) {
            setItemStock(itemStock - counter);
            onAdd(counter)
            setCounter(1);
            setVisible(true)
        }
    }

    useEffect(() => {

        setItemStock(stock)

    }, [stock])

    return (

        <div className=" col  ">
            <div className="row my-1">
                <div >
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btnS" onClick={decrementar}>-</button>
                        <button type="button" className="btn btnS">{counter}</button>
                        <button type="button" className="btn btnS" onClick={incrementar}>+</button>

                    </div>
                </div>
            </div>
            <div className="row ">
                <div >
                    {visible ? <Terminar /> : <button type="button" className="btn btnS" onClick={itemAdd}>Agregar al Carrito</button>}
                </div>
            </div>
        </div>

    )
}

export default ItemCount;