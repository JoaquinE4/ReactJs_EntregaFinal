
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PaginaPrincipal from './components/PaginaPrincipal'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {


  return (
    <BrowserRouter>
      <Header />
    
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/tienda" element={<ItemListContainer />} />
        <Route path="/tienda/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />



      </Routes>
      
      <Footer />
    </BrowserRouter>

  )

}

export default App
