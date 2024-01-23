import { useState } from "react";
import Item from "./Item";

const ItemList = ({items}) =>{
    const [productos, setProductos] = useState(items)

    return(

        <div className="alert alert-info container " >
            
        {items.map(item =>(
            <Item key={item.id} item={item}/>
        ))}

        
    </div>
    )
}

export default ItemList;