//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import { Button } from './components/Button'
import './App.css'
import { WapperList } from './components/WrapperList';
import { List } from './components/List';

function App() {

  const buttonText = "Count: ";

  return (
      <>
        <WapperList>
          <List/>
        </WapperList>
      </>
  )
}

export default App
