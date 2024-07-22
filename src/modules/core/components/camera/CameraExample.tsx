import {
  Card,
  CardBody,
  Typography,
  CardFooter,
  Button,
} from '@material-tailwind/react'

import { usePhotoGallery } from '../../hooks'

import { cn } from '../../utils/cn'

export const CameraExample = () => {
  const { photos, takePhoto } = usePhotoGallery()

  console.log('🚀 ~ CameraExample ~ photos:', photos)

  return (
    <>
      <Card className="flex mt-6">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Take a picture (Example functionality)
          </Typography>
          <Typography>
            Want to capture a moment? Click the button below to open the camera
            interface and take a picture. This feature demonstrates how you can
            seamlessly integrate camera functionality into your application,
            allowing users to capture images directly from their device.
          </Typography>
        </CardBody>

        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            onClick={takePhoto}
            className={cn(
              'w-full sm:w-auto justify-center bg-[--bgSoft] rounded-2xl text-inherit bg-gradient-to-tr from-[--bgSoft] to-[--bgSoft]',
            )}
          >
            Take a picture
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}
