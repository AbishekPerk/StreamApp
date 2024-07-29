import React from 'react'
import Sub from '../../assets/sub/sub1.vtt'
import './episode.css';

const episode1 = () => {
    
  return (
    <div className='videocon'>
      <center><a href='./Home'><button className='but' type='submit' >Home Page</button></a></center>
      
    <center>
      <h3 className='tit'>Episode 1</h3>
     <video className='video' width='1024' height='600' controls> 
    <source src='https://d2mcbieeo6g48.cloudfront.net/WBEP1.mp4' type='video/mp4'/>
    <track label="English" kind="subtitles" srclang="en" src={Sub} default />
   </video>
   </center>
   <div className='cont'><center><a href='./episode2'><button className='but' type='submit' >Next</button></a></center></div>
    </div> 
  )
}

export default episode1