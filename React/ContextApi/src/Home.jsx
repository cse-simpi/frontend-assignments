import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext';

const Home = () => {
    const {theme} = useContext(ThemeContext);
  return (
    <div>
      <h1 className='bg-red-500'>Theme : {theme}</h1>
      <p className='text-gray-500 dark:text-gray-400'>Home page</p>
    </div>
  )
}

export default Home
