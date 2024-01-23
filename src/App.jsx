
import './App.css'
import Banner from './components/Banner'
import Componentes from './components/Componente'
import Footer from './components/Footer'
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'
import Mensaje from './components/Mensaje'

function App() {


  return (
    <div  >
      <Header />
      <ItemListContainer/>
      <hr />
      <Banner  />
      <Mensaje  />
      <hr />
      <Footer/>
    </div>
  )

}

export default App
