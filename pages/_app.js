import React from 'react';

import { layout } from '../components';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
   
      <layout>
        <Component {...pageProps} />
      </layout>
  
  )
}

export default MyApp