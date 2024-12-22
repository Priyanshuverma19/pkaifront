import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './components/Homepage.jsx'
import Dashboardpage from './components/Dashboardpage.jsx'
import Chatpage from './components/Chatpage.jsx'
import Rootlayouts from './layouts/Rootlayouts.jsx'
import Dashboardlayout from './layouts/Dashboardlayout.jsx'
import Signuppage from './components/Signuppage.jsx'
import Signinpae from './components/Signinpae.jsx'


const router = createBrowserRouter([
  {
    element: <Rootlayouts />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/sign-in/*",
        element: <Signinpae />,
      },
      {
        path: "/sign-up/*",
        element: <Signuppage />,
      },
      {
        element: <Dashboardlayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboardpage />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <Chatpage/>,
          },
        ],
      },
    ],
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
