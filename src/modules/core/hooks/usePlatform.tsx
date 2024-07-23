import React from 'react'
import { Device } from '@capacitor/device'

export const usePlatform = () => {
  const [platform, setPlatform] = React.useState<string>('')

  React.useEffect(() => {
    const getPlatform = async () => {
      const info = await Device.getInfo()
      setPlatform(info.platform)
    }

    getPlatform()
  }, [])

  return {
    platform,
  }
}
