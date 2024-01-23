const Item = ({item}) =>{
    return(
        
       
            <div className="row">
                <div className="col-md-4">
                <div className="card border-0">
                <img src={item.image} className="card-img-top " alt={item.tile} />
                <div className="card-body">
                    <p className="card-text"> {item.title} </p>
                </div>
                </div>
            
            </div>
            </div>
        
       
    )
}

export default Item;