import { useState } from "react";
import ItemCount from "./ItemCount";
import arrayProductos from "./JSON/productos.json"
import { useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const[items, setItems] = useState([]);

    useEffect(()=>{
        const promesa = new Promise(resolve =>{
            setTimeout(()=>{

            resolve(arrayProductos);
            }, 2000);
        })
        promesa.then(data => {
            setItems(data)
        })
    }, []);

    return (
        <div>
            <ItemList items={items}/>
            <ItemCount stock={10}/>
    
        </div>
    )
}

export default ItemListContainer;