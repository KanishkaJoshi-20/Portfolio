import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home  from './pages/Home'
import NotFound from './pages/NotFound'
import './index.css'
import { Toaster } from './components/ui/toaster'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Toaster />
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />}/> 
      {/* route to home */}
      <Route path='*' element={<NotFound />}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
