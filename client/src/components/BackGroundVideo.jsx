import React from 'react'
import video from "./../video/vecteezy_retro-style-1980-motion-grid-landscape-with-digital-sun-background_2222162.mp4"

export default function BackGroundVideo() {
  return (
    <div className = "video-background">
      <video width ="1280" height="960"  className='videoTag' autoPlay loop muted>
    <source src={video} type='video/mp4' />
</video>
    </div>
  )
}
