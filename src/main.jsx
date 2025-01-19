import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Routers/Routers'

createRoot(document.getElementById('root')).render(
  <div className='max-w-6xl mx-auto'>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  </div>
)
