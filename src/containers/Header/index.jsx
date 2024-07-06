import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import s from './style.module.css';


const Header = () => {

   const index = 0

   const location = useLocation()

   return ( 

      <header className={s.header}>
            
            <div className={s.container}>
   
                  <nav className={s.menu}>
   
                     <ul className={s.menuList}>
   
                        <li className={s.menuListItem}>
                           <NavLink end  to="/" className={location.pathname === '/'  ? s.active : s.item}>Презентационные видео</NavLink>
                        </li>

                        <li className={s.menuListItem}>
                           <NavLink end to="/videos" className={location.pathname === '/videos' ? s.active : s.item}>Мои видео</NavLink>
                        </li>
   
                     </ul>
   
                  </nav>
               
               </div>

      </header>

    );
}
 
export default Header;