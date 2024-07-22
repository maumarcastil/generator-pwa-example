import { useState } from 'react'
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'

import { UserPhoto } from '../models/camera'

export const usePhotoGallery = () => {
  const [photos, setPhotos] = useState<UserPhoto[]>([])

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      quality: 90,
      source: CameraSource.Camera,
      resultType: CameraResultType.Uri,
    })

    const fileName = Date.now() + '.jpeg'
    const newPhotos = [
      {
        filepath: fileName,
        webviewPath: photo.webPath,
      },
      ...photos,
    ]
    setPhotos(newPhotos)
  }

  return {
    photos,
    takePhoto,
    setPhotos,
  }
}
