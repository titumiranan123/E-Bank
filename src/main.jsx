import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Provider from './component/Provider/Provider.jsx'
import { RouterProvider } from 'react-router-dom'
import routes from './component/Routes/routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <div className='lg:px-[50px] bg-[#0F0826]'>
        <RouterProvider router={routes} />
      </div>
    </Provider>
  </React.StrictMode>,
)
