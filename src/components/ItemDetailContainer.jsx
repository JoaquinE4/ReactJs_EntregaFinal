import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDocument } from "./function/funcion";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const { id } = useParams();
    useEffect(() => {
        const data = getDocument("productos", id).then(res => setItem(res))
    }, [id]);
    return (
        <ItemDetail item={item} />
    )
}
export default ItemDetailContainer;