import { useState } from "react";
import arrayProductos from "./JSON/productos.json"
import { useEffect } from "react";
import ItemList from "./ItemList";
import MenuLateral from "./MenuLateral";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {

                resolve(id ? arrayProductos.filter(item => item.catalogo === id) : arrayProductos);
            }, 2000);
        })
        promesa.then(data => {
            setItems(data)
        })
    }, [id]);

    return (
        <div className=" d-flex  col-md-12 my-5 mx-2 ">
            <br />
            <div className="col-md-2 my-4">
                <MenuLateral />
            </div>
            <div className=" col-md-9 justify-content-end ">
                <ItemList items={items} />

            </div>
            <hr className="mx-5" />

        </div>

    )
}

export default ItemListContainer;