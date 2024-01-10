const ItemListContainer = ({ greeting }) => {
    return (
        <div className="alert alert-info container w-50 p-3" role="alert">
            <p className="my-2">{greeting}</p>
        </div>
    )
}

export default ItemListContainer;