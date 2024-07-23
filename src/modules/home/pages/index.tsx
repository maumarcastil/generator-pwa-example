import { CameraExample } from '../../core/components/camera/CameraExample'
import { LocationExample } from '../../core/components/location/locationExample'
import { LocalNotificationComponent } from '../../core/components/notification/localNotifications'

const HomePage = () => {
  return (
    <>
      <div>
        <CameraExample />
        <LocalNotificationComponent />
        <LocationExample />
      </div>
    </>
  )
}

export default HomePage
