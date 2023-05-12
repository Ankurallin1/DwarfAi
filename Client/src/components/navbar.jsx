import './navbarStyle.css'
import {useState} from 'react';
import { Link, NavLink } from 'react-router-dom'
import { links } from '../Data'
import Logo from '../Images/LOGO.png'
import { GoThreeBars } from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md';
const Navbar = () => {
const[showMenu,setMenu]=useState(false);

  return (
    <div className='nav'>
      <div className="container nav__container">
        <Link to='/' className='Logo' onClick={() => setMenu(false)}>
          <img src={Logo} alt="App logo" className='LoGo' />
        </Link>
        <ul className={`nav__links ${showMenu ? 'show-menu':'hide-menu'}`}>
          {
            links.map(({ name, path }, index) => {
              return (
                <li key={index}>
                  <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ''} onClick={()=>setMenu(prev => !prev)}>{name}</NavLink>
                </li>)
            })
          }
        </ul>
        <button className='nav_toggle-btn' onClick={()=>setMenu(prev => !prev)}>
          {
            showMenu?<MdOutlineClose/>:<GoThreeBars/>
          }
        </button>
      </div>
    </div>
  )
}

export default Navbar