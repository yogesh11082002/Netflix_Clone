import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import { Route ,Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
<Routes>

 
   <Route path='/' element={  <Login/>} />
    <Route path='/login' element={  <Home />} />
    
</Routes>
   
    </div>
  )
}

export default App

