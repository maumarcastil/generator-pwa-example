import React from 'react'
import {
  Card,
  CardBody,
  Typography,
  CardFooter,
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from '@material-tailwind/react'
import { Position } from '@capacitor/geolocation'

import { useLocation } from '../../hooks/useLocation'

import { cn } from '../../utils/cn'

export const LocationExample = () => {
  const { getCurrentPosition } = useLocation()
  const [open, setOpen] = React.useState(false)
  const [location, setLocation] = React.useState<Position | null>(null)

  const handleOpen = () => setOpen(!open)

  const handleGetLocation = async () => {
    try {
      const position = await getCurrentPosition()
      setLocation(position!)
      handleOpen()
    } catch (error) {
      console.log('🚀 ~ handleGetLocation ~ error:', error)
    }
  }

  return (
    <>
      <Card className="flex mt-6">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Get current location (Example functionality)
          </Typography>
          <Typography>
            Need to find your way? Click the button below to retrieve your
            current location with ease. This feature showcases how your app can
            seamlessly integrate location services, empowering users to access
            their precise geographical position directly from their device.
          </Typography>
        </CardBody>

        <CardFooter className="pt-0">
          <Button
            variant="text"
            onClick={async () => await handleGetLocation()}
            className={cn(
              'w-full sm:w-auto justify-center rounded-2xl outline-none hover:bg-indigo-50 text-gray-600',
            )}
          >
            Get current location
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          <Typography variant="h5" color="blue-gray">
            Location Information
          </Typography>
        </DialogHeader>
        <DialogBody divider className="grid place-items-center gap-4">
          <Typography className="text-center font-normal">
            {location ? (
              <>
                <p>Latitude: {location.coords.latitude}</p>
                <p>Longitude: {location.coords.longitude}</p>
                <p>Accuracy: {location.coords.accuracy} meters</p>
              </>
            ) : (
              <p>Location data not available</p>
            )}
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            close
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}
