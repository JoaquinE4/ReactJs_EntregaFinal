import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom'
import PaginaPrincipal from './components/PaginaPrincipal'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import Forms from './components/Form'

function App() {
  return (
    
    <BrowserRouter>
      <Header />
          <Routes>
            <Route path="/" element={<PaginaPrincipal />} />
            <Route path="/tienda" element={<ItemListContainer />} />
            <Route path="/tienda/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart"  element={<Cart/>}/>
            <Route path="/form" element={<Forms/>}/>
          </Routes>
      <Footer />
    </BrowserRouter>
    
  )
}
export default App