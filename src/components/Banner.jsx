import banerSole from "../assets/baner.jpg"
const Banner = () => {
    return(
        <div className="container my-5 d-flex  aling-items-center justify-items-center"   data-aos-duration="700" data-aos="zoom-in"  >
            <img src={banerSole} alt="Gordita Boladora" className="center-block img-fluid" />
        </div>
    )
}
export default Banner;