import { Geolocation } from '@capacitor/geolocation'

export const useLocation = () => {
  const getCurrentPosition = async () => {
    try {
      const position = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
      })
      return position
    } catch (error) {
      console.log('🚀 ~ getCurrentPosition ~ error:', error)
    }
  }

  return {
    getCurrentPosition,
  }
}
