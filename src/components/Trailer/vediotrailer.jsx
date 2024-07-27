import React from 'react'
import './video.css'
import thumbnail from '../../assets/thumbnail.jpg'


const vediotrailer = () => {
  return (
    <div>
     <div className='block1'>
      <div className='block2'>
       <video poster={thumbnail} controls className='trailer'>
         <source src="https://d2mcbieeo6g48.cloudfront.net/trailer.mp4" type="video/mp4" />
       </video>
       
       <div className='block3'>
       <h1 className='title'>WIND BREAKER</h1>
        <p className='para'>Haruka Sakura is the new lonely first-year high school student at Furin High School, which is recognized in town as a school for delinquents with its students' notoriously bad academic reputation. However, he eventually meets the members of Bofurin, an organization within Furin High comprised of student delinquents, one by one and learns that they are the sole protectors of the town, contradictory to his initial expectations.</p>
        <br></br>
        <br></br>
       </div>
       </div>
      
       </div>
      
    </div>
  )
}

export default vediotrailer