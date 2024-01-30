import ItemCount from "./ItemCount";

const ItemDetail = ({item}) =>{
    return(
            <div className="container  border   rounded ">
                <div className="row   justify-content-around ">
                    <div className="col-md-5   d-flex align-items-center justify-content-center">
                    <img src={item.image} className="img-fluid  p-4  " alt={item.tile} />
                    </div>
                    <div className="col-md-5  text-center border-start flex-row align-items-center justify-content-center  ">
                        <div className="row my-5 ">
                            <h1>{item.title}</h1>
                            <p>{item.descripcion}</p>
                            <b>${item.price}</b>
                            
                        </div>
                    <div className="col ">
                        <ItemCount stock={item.stock}  />
                    </div>
                    
                    
                    </div>
                    
                </div>
            </div>
    )
}

export default ItemDetail;