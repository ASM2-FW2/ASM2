
import HomePage from './page/homePage'

import { Routes, Route } from 'react-router-dom'
import LayOutClt from './layout/layoutClient'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LayOutClt />}>
          <Route index element={<HomePage />} />

        </Route>
      </Routes>
    </>
  )
}

export default App
