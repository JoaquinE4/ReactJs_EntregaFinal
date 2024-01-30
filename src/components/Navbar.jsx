import { Link } from "react-router-dom";
import CardWidget from "./CardWidget";
import LogoSole from "./LogoSole";

const Navbar = () => {
    return(

        <div className="container my-4 " >

            <div className="row">
                <div className="col-md-5 my-5 py-2  align-self-center rounded-pill   justify-content-start  " >
                    <ul className="nav gap-3 ">
                        <li className="nav-item   "><Link className=" nav-link custom-button text-dark" to={"/"}>Inicio</Link></li>
                        <li className="nav-item"><Link className="nav-link custom-button text-dark" to="#">Galeria</Link></li>
                        <li className="nav-item"><Link className="nav-link custom-button text-dark" to="#">Sobre mi</Link></li>

                    </ul>

                </div>

                <div className="col-md-2 d-flex aling-self-center justify-content-center">
                        <LogoSole tamaño={150}/>
                    </div>

                    <div className="col-md-4 m-5 py-2 d-flex align-self-center rounded-pill    justify-content-end" >
                        <ul className="nav aling-items-center gap-3">
                            <li className="nav-item  ">
                         <Link className="nav-link   custom-button  text-dark" to={"/tienda"}>Tienda</Link> 
                        
                        </li>
                            <li className="nav-item px-3">
                            <CardWidget className=" custom-button"/>
                            </li>
                        </ul>
                    

                </div>


            </div>
            


        </div>

    )

}

export default Navbar;