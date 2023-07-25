import React, { useState } from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs'
import {meal} from '../../constants'
import './Intro.css';

const Intro = () => {
 const [playVideo, setPlayVideo] = useState(false)
//  const [showHover, setShowHover] = React.useState(false)
 const vidRef = React.useRef()


 const handleVideo = () =>{
    setPlayVideo((prevPlayVideo)=> !prevPlayVideo)

    playVideo ? vidRef.current.pause() : vidRef.current.play()
 }

//  const pausePlay = ()=>{
//   setShowHover()
// }
  
  return(
    <div className='app__video'>
      <video 
      src={meal}
      ref={vidRef}
      typeof='video/mp4'
      loop
      controls={false}
      ></video>

      <div className='app__video-overlay flex__center'>
        
        <div 
        className='app__video-overlay_circle flex__center' 
        onClick={handleVideo}>

          {playVideo?
          <BsFillPlayFill color='#FFF' fontSize={30}/>
          :<BsPauseFill color='#FFF' fontSize={30}/>
          }

        </div>

      </div>
    </div>
  )
  
};

export default Intro;
