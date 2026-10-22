'use client'

import { useState } from 'react'
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from '@react-google-maps/api'

export const MapComponent = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY
      ? process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY
      : '',
  })

  const markers = [
    {
      id: 1,
      name: 'First',
      position: { lat: 30, lng: 30 },
    },
    {
      id: 2,
      name: 'Second',
      position: { lat: 10, lng: 10 },
    },
    {
      id: 3,
      name: 'Third',
      position: { lat: 40, lng: 40 },
    },
    {
      id: 4,
      name: 'Fourth',
      position: { lat: 50, lng: 55 },
    },
  ]

  const [activeMarker, setActiveMarker] = useState(null)

  const handleActiveMarker = (marker: any) => {
    setActiveMarker(marker)
  }

  // const handleOnLoad = (map: any) => {
  //   const bounds = new google.maps.LatLngBounds()
  //   markers.forEach(({ position }) => bounds.extend(position))
  //   map.fitBounds(bounds)
  // }

  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={{
          width: '100%',
          height: '520px',
          marginTop: '3rem',
        }}
        center={{ lat: 40, lng: 15 }}
        clickableIcons={true}
        // onLoad={handleOnLoad}
        onClick={() => setActiveMarker(null)}
        zoom={3}
      >
        {markers.map(({ id, name, position }) => (
          <MarkerF
            key={id}
            position={position}
            options={{
              icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png',
            }}
            onClick={() => handleActiveMarker(id)}
          >
            {activeMarker === id ? (
              <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                <div>{name}</div>
              </InfoWindowF>
            ) : null}
          </MarkerF>
        ))}
      </GoogleMap>
    )
  )
}
