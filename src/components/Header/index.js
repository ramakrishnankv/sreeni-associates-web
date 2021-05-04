import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.css';

const menuList = [
  {
    name: 'About Us',
    anchor: 'aboutUs',
  },
  {
    name: 'Team',
    anchor: 'team',
  },
  {
    name: 'Key Practices',
    anchor: 'keyPractices',
  },
  {
    name: 'Contact Us',
    anchor: 'contactUs',
  },
  {
    name: 'Key Links',
    anchor: 'keyLinks',
  },
  // {
  //   name: 'Location',
  //   anchor: 'location',
  // },
]

const Header = () => {
  const { hash, pathname } = useLocation();
  const selected = hash.split('#')[1] || 'aboutUs';
  return (
    <header className="appHeader">
      <div className="headerInner">
        <div className="logoWrap">
          <div className="logoBox">
            <div className="logo"></div>
          </div>
          <div className="orgName">
            <h2>Sreeni & Associates</h2>
            <h3>Chartered Accountants</h3>
          </div>
        </div>
        <nav className="nav">
          {pathname !== '/error' &&
            (<ul className="navList">
              {
                menuList.map(({ anchor, name }) =>
                  <li key={`${name}-${anchor}`} className={`menuItem ${selected === anchor ? 'selected' : ''}`}>
                    <a href={`/#${anchor}`}>{name}</a>
                  </li>
                )
              }
            </ul>)
          }
          {pathname === '/error' &&
            (<ul className="navList">
              <li className="menuItem"><Link to={{ pathname: '/' }}>Home</Link></li>
              {/* Add a check to admin */}
              <li className="menuItem"><Link to={{pathname: '/admin'}}>Admin</Link></li>
            </ul>)
          }
        </nav>
      </div>
    </header>
  )
};

export { Header };