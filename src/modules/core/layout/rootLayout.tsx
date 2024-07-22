import { Outlet } from 'react-router-dom'

export const RootLayout = () => {
  /*   const navigate = useNavigate()

  React.useEffect(() => {
    const handleBackButton = () => {
      console.log('🚀 ~ handleBackButton ~ location:', location)
      if (location.pathname === '/') {
        CapacitorApp.exitApp()
      } else {
        navigate(-1)
      }
    }

    CapacitorApp.addListener('backButton', handleBackButton)

    return () => {
      CapacitorApp.removeAllListeners()
    }
  }, [location, navigate]) */

  return (
    <>
      <Outlet />
    </>
  )
}
