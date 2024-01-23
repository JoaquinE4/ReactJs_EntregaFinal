import { useState } from "react";
import ItemCount from "./ItemCount";
import {arrayProductos} from "./JSON/productos.json"
import { useEffect } from "react";
import Item from "./Item";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
    const[items, setItems] = useState([]);

    useEffect(()=>{
        const promesa = new Promise(resolve =>{
            setTimeout(()=>{

            resolve(arrayProductos);
            }, 2000);
        })
        promesa.them(data => {
            setItems(arrayProductos)
        })
    }, []);

    return (
        <div>

        <div className="alert alert-info container w-50 p-3" role="alert">
            <p className="my-2">{greeting}</p>


            <ItemCount stock={10}/>
        </div>
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer;