import React from "react"
import '../styles/tailwind.css'
import { Link } from 'gatsby'

interface IProps {
  children: Object | String
}

const Layout = (props: IProps) => {
  const { children } = props;
  return(
    <div>
      {children}
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
      </ul>
    </div>
  )
}

export default Layout