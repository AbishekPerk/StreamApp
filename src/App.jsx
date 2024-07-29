import React,{useState} from 'react'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Episode1 from './components/Play/episode1.jsx'
import Episode2 from './components/Play/episode2.jsx'
import Episode3 from './components/Play/episode3.jsx'
import Episode4 from './components/Play/episode4.jsx'
import Episode5 from './components/Play/episode5.jsx'
import Episode6 from './components/Play/episode6.jsx'
import Episode7 from './components/Play/episode7.jsx'
import Episode8 from './components/Play/episode8.jsx'
import Episode9 from './components/Play/episode9.jsx'
import Episode10 from './components/Play/episode10.jsx'
import Episode11 from './components/Play/episode11.jsx'
import Episode12 from './components/Play/episode12.jsx'
import Episode13 from './components/Play/episode13.jsx'
import Home from './index.jsx'

function App() {
  

  return (
    <div>
      <BrowserRouter>
         <Routes>
           <Route index element={<Home />}  />

           <Route path="/Home" element={<Home />}/>
           <Route path='/episode1' element={<Episode1/>}/>
           <Route path='/episode2' element={<Episode2/>}/>
           <Route path='/episode3' element={<Episode3/>}/>
           <Route path='/episode4' element={<Episode4/>}/>
           <Route path='/episode5' element={<Episode5/>}/>
           <Route path='/episode6' element={<Episode6/>}/>
           <Route path='/episode7' element={<Episode7/>}/>
           <Route path='/episode8' element={<Episode8/>}/>
           <Route path='/episode9' element={<Episode9/>}/>
           <Route path='/episode10' element={<Episode10/>}/>
           <Route path='/episode11' element={<Episode11/>}/>
           <Route path='/episode12' element={<Episode12/>}/>
           <Route path='/episode13' element={<Episode13/>}/>
         </Routes>
      </BrowserRouter>
       
    </div>
  )
}

export default App
