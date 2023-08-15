import { useState } from 'react'
import Hamburger from './Hamburguer';
import Menu from './Menu';

const Header = () => {
  const [active, setActive] = useState(false);
  const ToggleMenuFunction = () => {
    !active ? setActive(true) : setActive(false);
  };
  return (
    <header className="main-header" id="Header">
      <a href="#top1" className='data-link Logo'>
        <img src="/img/logo.svg" alt="Elvira Meraz Logo" className='logo' data-href="top"/>
      </a>
      <nav className={`main-nav`}>
        <Hamburger active={active} action={ToggleMenuFunction} />
        <Menu active={active}/>
      </nav>
    </header>
  )
}

export default Header
