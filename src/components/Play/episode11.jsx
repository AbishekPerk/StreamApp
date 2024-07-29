import React from 'react'
import './episode.css'

const episode11 = () => {
  return (
    <div className='videocon'>
      <center><a href='./Home'><button className='but' type='submit' >Home Page</button></a></center>
    <center>
    <h3 className='tit'>Episode 11</h3>
     <video className='video' width='1024' height='600' controls > 
    <source src='https://d2mcbieeo6g48.cloudfront.net/WBEP11.mp4' type='video/mp4'/>
    <track label="English" kind="subtitles" srclang="en" src='' default />
   </video>
   </center>
   <div className='cont1'>
    <center><a href='./episode10'><button className='but1' type='submit' >Prev</button></a></center>
    <center><a href='./episode12'><button className='but2' type='submit' >Next</button></a></center>
    </div>
    </div> 
  )
}

export default episode11