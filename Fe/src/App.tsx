import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet} from 'react-router-dom'
import './App.css'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'

function App() {

  return (
    <Fragment>
      <Header/>
      <main>
      <Outlet/>
      </main>
      <Footer/>
    </Fragment>
  )
}

export default App
