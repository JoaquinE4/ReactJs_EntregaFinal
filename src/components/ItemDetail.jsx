import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContex } from "./CartContex";

const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContex)
    const onAdd = (quantity) => {
        addItem(item, quantity)
    }

    return (
        <div className="container  border   rounded ">
            <div key={item.id} className="row   justify-content-around ">
                <div className="col-md-5   d-flex align-items-center justify-content-center">
                    <img src={item.image} className="img-fluid  p-4  " alt={item.name} />
                </div>
                <div className="col-md-5  text-center border-start flex-row align-items-center justify-content-center  ">
                    <div className="row my-5 ">
                        <h1>{item.name}</h1>
                        <p>{item.descripcion}</p>
                        <b>${item.price}</b>
                    </div>
                    <div className="col ">
                        <ItemCount stock={item.stock} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail;