import React from 'react'
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

//he does not have the export on layout variable
const Layout = ({children}) => {
  return (
    <div className='layout'>
      <head>
        <title>Lek Store</title>
      </head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout