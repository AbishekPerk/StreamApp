import React from 'react'
import './navbar.css'
import logo_light from '../../assets/brightness.png'
import logo_dark from '../../assets/moon.png'
import animelogo from '../../assets/windbreaker1.png'

const navbar = ({theme, setTheme}) => {
    const toggle_mode=()=>{
        theme == 'light' ? setTheme('dark'):setTheme('light');
        console.log("clicked");
    }
  return (
    <div className='Navbar'>
      <img src={animelogo} alt="" className='logo'/>
      <img onClick={()=>{toggle_mode()}} src={theme == 'light'? logo_light:logo_dark} alt="" className='toggle-icon'/>
    </div>
  )
}

export default navbar