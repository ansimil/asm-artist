import { music } from "../assets/music" 
import AudioCard from "./AudioCard"
    

const AudioCardContainer = () => {
  return (
    <div className="audio-card-container">
        {music.map((track) => {
            return (
                <AudioCard info={track} />
            )
        })}
    </div>
  )
}

export default AudioCardContainer