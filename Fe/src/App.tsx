import Home from './Component/Homepage/Home'
import { Routes, Route } from 'react-router-dom'
import ProductPage from './Component/productPage/productPage'
import ProductAdmin from './Layout/Admin/Productlist/ProductAdmin'
import Dashborad from './Layout/Admin/dashboard'
import Addproduct from './Layout/Admin/Addproduct/Addproduct'
import Editproduct from './Layout/Admin/Editproduct/Editproduct'
import ProductDetail from './Component/ProductDetail/ProductDetail'
import CategoryList from './Layout/category/CategoryList'
import AddCate from './Layout/category/AddCate'
import Updatecate from './Layout/category/Updatecate'
function App() {

  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} />
        <Route path='product' >
          <Route index element={<ProductPage />} />
        </Route>
        <Route path='product/:id' element={<ProductDetail/>}/>
      </Route>
      <Route path="/admin" element={<Dashborad />} >
        <Route path="product" element={<ProductAdmin />} />
        <Route path="add" element={<Addproduct />} />
        <Route path="edit/:id" element={<Editproduct />} />
        <Route path='category' element={<CategoryList/>}/>
        <Route path='category/add' element={<AddCate/>}/>
        <Route path='category/add' element={<AddCate/>}/>
        <Route path='category/edit/:id' element={<Updatecate/>}/>

      </Route>
    </Routes>
  )
}

export default App
