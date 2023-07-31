import ReactAudioPlayer from 'react-audio-player';
import { useState } from 'react'

const AudioCard = ({ info }) => {    
  const [hovered, setHovered] = useState(false)

  return (
      <div 
      className="audio-container"
      onMouseEnter={() => {
          setHovered(true)
      }}
      onMouseLeave={() => {
          setHovered(false)
      }}    
      >
        {   !hovered && 
            <img className="audio__img" src={info.imgUrl} alt="track" />
        }
        {   hovered &&
            <div className="audio__texts">
              <h4 className="newscard__header newscard__element">{info.title}</h4>
              <p className="newscard__description newscard__element">{info.description}</p>
            </div>
        }
        <ReactAudioPlayer 
        ref={(element) => { console.log(element) }}
        className="audio-player" 
        src={info.audioUrl} 
        controls 
        autoPlay={false} 
        style={{visibility: hovered ? "visible" : "hidden"}}
        onPlay={(e)=>{
            const els = document.getElementsByClassName("audio-player")
            const elsKeys = Object.keys(els)
            elsKeys.forEach(player => {
              if (els[player].currentSrc !== e.target.currentSrc){
                els[player].pause()
              }
            })
        }}
        
        />
      </div>
      
  )
}

export default AudioCard