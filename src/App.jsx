import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import Dashboard from './pages/Dashboard'

import { Route,Routes } from 'react-router-dom'
function App() {
 

  return (
  <div className='min-h-screen bg-gray-50'>
   <Navbar/>
   <main className='p-6'>
    <Routes>
      <Route path='/' element={<Products/>} />
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>

   </main>
   </div>
  )
}

export default App
