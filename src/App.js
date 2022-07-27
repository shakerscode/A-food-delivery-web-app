import { About, AddProduct, Header, Home, Login, Menu, Register, Services } from "./components";
import { AnimatePresence } from 'framer-motion'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <AnimatePresence>
      <div className="bg-gray-200 w-full h-full">
        <Header></Header>  
        <main className=""> 
          <Routes>
            <Route path='/' element={<Home></Home>}/>
            <Route path='/menu' element={<Menu></Menu>}/>
            <Route path='/about' element={<About></About>}/>
            <Route path='/services' element={<Services></Services>}/>
            <Route path='/add-product' element={<AddProduct></AddProduct>}/>
            <Route path='/register' element={<Register></Register>}/>
            <Route path='/login' element={<Login></Login>}/>
          </Routes>  
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
