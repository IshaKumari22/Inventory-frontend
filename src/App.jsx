import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import Dashboard from './pages/Dashboard'
import AddProduct from './pages/AddProduct'
import EditProduct from './pages/EditProduct'
import Suppliers from './pages/Suppliers'
import AddSupplier from './pages/AddSupplier'
import EditSupplier from './pages/EditSupplier'


import { Route,Routes } from 'react-router-dom'
function App() {
 

  return (
  <div className='min-h-screen bg-gray-50'>
   <Navbar/>
   <main className='p-6'>
    <Routes>
      <Route path='/' element={<Products/>} />
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/add-product' element={<AddProduct/>}/>
      <Route path='/edit-product/:id' element={<EditProduct/>}/>
      <Route path="/suppliers" element={<Suppliers />} />
      <Route path="/add-supplier" element={<AddSupplier />} />
      <Route path="/edit-supplier/:id" element={<EditSupplier />} />
    </Routes>

   </main>
   </div>
  )
}

export default App
