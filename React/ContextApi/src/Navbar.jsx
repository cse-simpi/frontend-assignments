import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Navbar = () => {
    const {theme,toggleTheme} = useContext(ThemeContext)
  return (
    <div style = {{background: theme=== 'light'? '#ffff' : "#333333", height: '50vh'}}>
      <button onClick={toggleTheme}>{theme==='light' ? 'Dark' : 'Light'}</button>
    </div>
  )
}

export default Navbar
