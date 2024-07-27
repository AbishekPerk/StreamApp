import React,{useState} from 'react'

import Navbar from './components/Navbar/navbar'
import Trailer from './components/Trailer/vediotrailer'

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className={`container ${theme}`}>
       <Navbar theme={theme} setTheme={setTheme}/>
       <Trailer/>
    </div>
  )
}

export default App
