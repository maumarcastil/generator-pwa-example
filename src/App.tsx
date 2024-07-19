import { RouterProvider } from 'react-router-dom'

import { router } from './modules/core/routers/root'

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
