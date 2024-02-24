import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (

        <div className="col-md-3 my-1" data-aos="zoom-in-up">
        <Link to={`/item/${item.id}`} className="text-dark text-decoration-none">
          <div className="card card-client rounded-6">
            <img src={item.image} className="img-fluid img-client p-3" alt={item.name} />
            <div className="card-body">
              <strong>{item.name}</strong>
            </div>
          </div>
        </Link>
      </div>
    )
}
export default Item;