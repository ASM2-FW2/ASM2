import React from 'react'
import { Outlet } from 'react-router-dom'
type Props = {}

const Dashborad = (props: Props) => {
  return (
    <div className="container-fluid">
  <div className="row">
  <nav className="col-md-2 d-md-block bg-dark sidebar vh-100 d-flex">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link">
              <h5>Dashboard</h5>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <h5>
                <a href="/admin/product">Products</a>
              </h5>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <h5>
                <a href="/admin/category">Category</a>
              </h5>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              <h1>
                <a href="/">Home</a>
              </h1>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <main className="col-md-10 ms-sm-auto col-lg-10 px-md-4">
      <div className="row">
        <Outlet />
      </div>
    </main>
  </div>
</div>
  )
}

export default Dashborad