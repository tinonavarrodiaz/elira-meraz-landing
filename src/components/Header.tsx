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
      <img src="/img/logo.svg" alt="Elvira Meraz Logo" className='logo' id="link-top" data-href="top"/>
      <nav className={`main-nav`}>
        <Hamburger active={active} action={ToggleMenuFunction} />
        <Menu active={active}/>
      </nav>
    </header>
  )
}

export default Header
