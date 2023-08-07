import React from 'react'
import { menuItems } from '../utilitis/menu'
import { Social } from './Social';

type Props = {
  active: boolean;
}


const Menu = ({ active }: Props) => {
  return (
    <ul className={`main-menu ${active ? 'is-active' : ''}`}>
      {
        menuItems.map((item: any) => (
          <li>
            <a href={`#${item.title}`}>{item.title}</a>
          </li>
        ))
      }
      <li className='li-social'>
        <Social/>
      </li>
    </ul>
  )
}

export default Menu
