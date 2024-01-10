import banerSole from "../assets/baner.jpg"
const Banner = ({tamaño}) => {
    return(
        <div className="container my-5 d-flex  aling-items-center justify-items-center"  >
            <img src={banerSole} alt="Gordita Boladora" className="center-block img-fluid" />
        </div>
    )
}

export default Banner;