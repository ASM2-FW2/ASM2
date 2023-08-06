import React from 'react'
import { Outlet } from 'react-router-dom'
type Props = {}

const Dashborad = (props: Props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link">
                  <h5>Dashboard</h5>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >
                  <h5>Products</h5>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <h5>Category</h5>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <h1>Home</h1>
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