import { useState } from "react";
import Item from "./Item";

const ItemList = ({items}) =>{
    const [productos, setProductos] = useState(items)

    return(
        {items.map(item =>(
            <Item key={item.id} item={item}/>
        ))}
    )
}

export default ItemList;