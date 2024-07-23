import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react'
import {
  LocalNotifications,
  ScheduleOptions,
} from '@capacitor/local-notifications'

import { usePlatform } from '../../hooks/usePlatform'

import { cn } from '../../utils/cn'

export const LocalNotificationComponent = () => {
  const { platform } = usePlatform()

  const handleSchedule = async () => {
    if (platform === 'android' || platform === 'ios') {
      const optionsSchedule: ScheduleOptions = {
        notifications: [
          {
            id: 1,
            title: 'Hello',
            body: 'World',
            largeBody: 'This is a large body',
            summaryText: 'This is a summary text',
          },
        ],
      }

      try {
        await LocalNotifications.schedule(optionsSchedule)
      } catch (error) {
        console.log('🚀 ~ handleSchedule ~ error:', error)
      }
    }
  }

  return (
    <Card className="flex mt-6">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Schedule a Notification (Local notifications)
        </Typography>
        <Typography>
          Need a reminder? Schedule a notification with just one click! This
          powerful feature allows you to stay on top of your tasks and never
          miss an important event. Click the button below to experience seamless
          scheduling and enhanced productivity.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          variant="text"
          onClick={handleSchedule}
          disabled={platform !== 'android' && platform !== 'ios'}
          className={cn(
            'w-full sm:w-auto justify-center rounded-2xl outline-none hover:bg-indigo-50 text-gray-600',
          )}
        >
          {platform === 'android' || platform === 'ios'
            ? 'Schedule a Notification'
            : 'Not available on this platform'}
        </Button>
      </CardFooter>
    </Card>
  )
}
