import { CameraExample } from '../../core/components/camera/CameraExample'
import { LocationExample } from '../../core/components/location/locationExample'
import { ModalMobile } from '../../core/components/modals/modalMobile'
import { LocalNotificationComponent } from '../../core/components/notification/localNotifications'

const HomePage = () => {
  return (
    <>
      <div>
        <CameraExample />
        <LocalNotificationComponent />
        <LocationExample />
        <ModalMobile />
      </div>
    </>
  )
}

export default HomePage
