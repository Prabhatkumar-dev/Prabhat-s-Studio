import React from 'react'
import { Link , Routes,Route } from 'react-router-dom'
import Description from './components/Description'
import Products from './components/Products'
import Categorizeddata from './components/Categorizeddata'

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/description/:id' element={<Description/>}/>
        <Route path='/category/:cat' element={<Categorizeddata/>}/>
      </Routes>
    </div>
  )

}

export default App