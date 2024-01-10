
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'
import Mensaje from './components/Mensaje'

function App() {


  return (
    <div  >
      <Header />
      <ItemListContainer greeting={"El Sitio esta en desarrollo ⚙️​🔧 Por favor Ingrese mas tarde ​"}/>
      <hr />
      <Banner  />
      <Mensaje  />
      <hr />
      <Footer/>
    </div>
  )

}

export default App
