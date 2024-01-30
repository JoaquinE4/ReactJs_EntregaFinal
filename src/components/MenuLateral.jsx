import { Link } from "react-router-dom"

const MenuLateral = () => {
    return (
        <div className="container">
   
            <h5 className="bg-indigo p-3 rounded text-white"  >
                Categorias
            </h5>
            <ol className="list-group border-0 rounded " >
                <li className="list-group-item text-dark border-0"><Link className="nav-link text-dark" to={"/tienda"}>Todos</Link></li>
                <li className="list-group-item text-dark border-0"><Link className="nav-link text-dark" to={"/tienda/Maceta"} >Macetas</Link></li>
                <li className="list-group-item text-dark border-0"><Link className="nav-link text-dark" to={"/tienda/Mate"}>Mates</Link></li>
            </ol>
        </div>
    )
}
export default MenuLateral;