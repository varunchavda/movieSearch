import { useState } from 'react'
import './App.css'
import { Routes , Route} from  "react-router-dom";
import Home from './Home'
import Singlecard from './Singlecard';
import Error from './Error';

//for defining the routes / navigations
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movie/:id' element={<Singlecard/>} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}
export default App