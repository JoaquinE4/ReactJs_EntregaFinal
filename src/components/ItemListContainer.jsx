import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import MenuLateral from "./MenuLateral";
import { useParams } from "react-router-dom";
import { getDocuments } from "./function/funcion";

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const { id } = useParams()
    
    useEffect(() => {
        const data = getDocuments("productos", id).then(res => {
            setItems(res)
        }
        )
    }, [id])

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