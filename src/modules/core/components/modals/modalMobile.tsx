import React from 'react'
import {
  Card,
  CardBody,
  Typography,
  CardFooter,
  Button,
} from '@material-tailwind/react'
import { Sheet } from 'react-modal-sheet'

import { cn } from '../../utils/cn'

export const ModalMobile = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleShowModal = () => {
    setIsOpen(true)
  }

  const handleDismiss = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Card className="flex mt-6">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Show a Modal (Example functionality)
          </Typography>
          <Typography>
            Want to see how modals work? Click the button below to open a modal
            and experience the functionality in action. This is a simple
            demonstration of how modals can be used to display important
            information or actions in a user-friendly way.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="text"
            onClick={handleShowModal}
            className={cn(
              'w-full sm:w-auto justify-center rounded-2xl outline-none hover:bg-indigo-50 text-gray-600',
            )}
          >
            Show modal mobile
          </Button>
        </CardFooter>
      </Card>

      <Sheet isOpen={isOpen} onClose={handleDismiss} detent="content-height">
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <div className="flex flex-col px-4 pb-2">
              <Typography className="mb-2">
                Want to see how modals work? Click the button below to open a
                modal and experience the functionality in action. This is a
                simple demonstration of how modals can be used to display
                important information or actions in a user-friendly way.
              </Typography>
              <Button
                variant="text"
                onClick={handleDismiss}
                className={cn(
                  'w-full sm:w-auto justify-center rounded-2xl outline-none hover:bg-indigo-50 text-gray-600',
                )}
              >
                Hidden modal mobile
              </Button>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onTap={handleDismiss} />
      </Sheet>
    </>
  )
}
