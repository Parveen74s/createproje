import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Myformlayout() {
  return (
    <div className='container-fluid' style={{ marginTop: '86px' }}>
      <div className='row'>
        <div className='col-md-2'>
          <aside className='border'>
            <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary">
              <span class="fs-4">Sidebar</span>
              <hr/>
              <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                  <Link to="formdesign1" class="nav-Link active" aria-current="page">
                    form layout 1
                  </Link>
                </li>
                <li>
                  <Link to="formdesign2" class="nav-Link Link-body-emphasis">
                    form lauout 2
                  </Link>
                </li>
                <li>
                  <Link to="formstyle3" class="nav-Link Link-body-emphasis">
                    form layout 3
                  </Link>
                </li>
                <li>
                  <Link to="products" class="nav-Link Link-body-emphasis">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="customers" class="nav-Link Link-body-emphasis">
                    Customers
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
        <div className='col-md-10'>
          <div className='border'>
            <h4>Content</h4>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  )
}
