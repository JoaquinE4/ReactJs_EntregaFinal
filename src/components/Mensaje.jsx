import acrobata from "../assets/acrobata.png"
const Mensaje = ({tamaño}) => {


    return(
        <div className="container-fluid">
            <div className="row">
                <div className="left col-md-6 text-center aling-items-center my-auto">
                    <h2>Donde la Tierra se<br />Transforma en Belleza</h2>
                    
                    <p>Terapia del Barro</p>
                </div>
                <div className="right col-md-6  ">
                    <img src={acrobata} alt="" width={tamaño}/>
                </div>

            </div>
        </div>
    )
}

export default Mensaje;