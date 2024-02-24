const CartContexProvedor = ({children}) =>{
const[items, setItems] = useState([])

useEffect(()=>{
    const db = getFirestore();
    const colRef= collection(db, "productos")
    getDocs(colRef).then((snapshot)=>{
        const data =  snapshot.docs.map(doc => doc.data())
        setItems(data)
        
        console.log(data)
        
    })
    },[])

return(
    <CartContex.Provider value={items}>
        {children}
    </CartContex.Provider>
)
}
export default CartContexProvedor;