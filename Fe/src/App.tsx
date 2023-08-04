import { Fragment } from 'react'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Home from './Component/Homepage/Home'

function App() {

  return (
    <Fragment>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </Fragment>
  )
}

export default App
