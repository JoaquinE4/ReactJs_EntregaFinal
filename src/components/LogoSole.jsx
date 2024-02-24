import { Link } from "react-router-dom";
import Logo from "../assets/Sole logo.png"
const LogoSole = ({tamaño}) => {
    return (
    <Link to={"/"} ><img src={Logo} alt="Solo sole" className="rounded-circle  logo shadow-lg " width={tamaño} /></Link> 
    )
}
export default LogoSole;