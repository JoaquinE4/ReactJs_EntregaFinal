import CatLoad from "../assets/catload-unscreen.gif"
const Loading = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <div >
                        <img src={CatLoad} width={120} alt="cat load" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Loading;