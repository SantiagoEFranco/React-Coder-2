import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './componentes/NavBar'
import HomeView from './views/HomeView'
import HondaView from './views/HondaView'
import YamahaView from './views/YamahaView'
import KawazakiView from './views/KawazakiView'
import ItemDetailContainer from './views/ItemDetailContainer'
import ItemListContainer from './componentes/ItemListContainer'

function App() {



  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route exact path='/' element={<HomeView/>}></Route>
      <Route exact path='/category/:categoryId' element={<ItemListContainer/>}></Route>
      <Route exact path="/item/:id" element={<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
