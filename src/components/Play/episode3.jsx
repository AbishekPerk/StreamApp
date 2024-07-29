import React from 'react'
import './episode.css'

const episode3 = () => {
  return (
    <div className='videocon'>
      <center><a href='./Home'><button className='but' type='submit' >Home Page</button></a></center>
    <center>
    <h3 className='tit'>Episode 3</h3>
     <video className='video' width='1024' height='600' controls > 
    <source src='https://d2mcbieeo6g48.cloudfront.net/WBEP3.mp4' type='video/mp4'/>
    <track label="English" kind="subtitles" srclang="en" src='' default />
   </video>
   </center>
   <div className='cont1'>
    <center><a href='./episode2'><button className='but1' type='submit' >Prev</button></a></center>
    <center><a href='./episode4'><button className='but2' type='submit' >Next</button></a></center>
    </div>
    </div> 
  )
}

export default episode3