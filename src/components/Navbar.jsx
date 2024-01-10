import CardWidget from "./CardWidget";
import LogoSole from "./LogoSole";

const Navbar = () => {
    return(

        <div className="container ">

            <div className="row">
                <div className="col-md-5 my-5 d-flex justify-items-start" >
                    <ul className="nav ">
                        <li className="nav-item"><a className="nav-link text-dark" href="#">Inicio</a></li>
                        <li className="nav-item"><a className="nav-link text-dark" href="#">Galeria</a></li>
                        <li className="nav-item"><a className="nav-link text-dark" href="#">Sobre Mi</a></li>

                    </ul>

                </div>

                <div className="col-md-2 d-flex aling-items-center justify-content-center">
                        <LogoSole tamaño={150}/>
                    </div>

                    <div className="col-md-4 my-5  d-flex aling-items-center justify-content-end" >
                        <ul className="nav">
                            <li className="nav-item">
                         <a className="nav-link text-dark" href="#">Tienda</a> 
                        
                        </li>
                            <li className="nav-item">
                            <CardWidget/>
                            </li>
                        </ul>
                    

                </div>


            </div>
            


        </div>

    )

}

export default Navbar;