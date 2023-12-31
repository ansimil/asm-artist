import { music } from '../assets/music'
import { useState } from 'react'
import { PlayingContext } from './PlayingContext'
import { useContext } from 'react'
import play from '../assets/images/play-icon.png'
import pause from '../assets/images/pause-icon.png'
import MobileAudioListContainer from './MobileAudioListContainer'


const AudioPlayer = () => {
    const { isPlaying, setIsPlaying, setPlayCount, playCount, currentSong, previousSong, audioPlayer, setPreviousSong, setNavbarClick } = useContext(PlayingContext)
    return (
        <div className='list__audio-player'>
            <div className="list__play-icon-container">
                <img 
                className='play-icon'
                src={isPlaying && currentSong === previousSong ? pause : play} 
                alt="play-icon" 
                onClick={()=>{
                    setNavbarClick(false)
                    if (playCount < 1){
                        setPlayCount(1)
                    }
                    else {
                        setPlayCount(playCount+1)
                    }

                    if (currentSong !== previousSong){
                        audioPlayer.current.src = currentSong.audioUrl
                        audioPlayer.current.play()
                        setPreviousSong(currentSong)
                        setIsPlaying(true)
                    }
                    else {
                        setIsPlaying(!isPlaying)
                    } 
                }}    
                />
            </div>
        </div>
    )
}

const AudioDetails = () => {
    const { currentSong } = useContext(PlayingContext)

    return (
        <div className='audio-details-container'>
            <AudioPlayer />
            <p className="newscard__description newscard__element audio-details__desciption">{currentSong.description}</p>
        </div>
    )
}

const AudioListContainer = () => {
    const { setCurrentSong  } = useContext(PlayingContext)
    const [ selectedTrack, setSelectedTrack ] = useState("track1")

    const musicSorted = music.sort((track, nextTrack) => {
        return nextTrack.year - track.year
    })
        return (
            <div className='audio-list-container'>
                <div className='audio-table-outer-container'>
                <div className='audio-table-container'>
                    <table className='audio__table'>
                        <tbody>
                        {musicSorted.map((track, i) => {
                            return (
                                <tr
                                key={`${track}-${i+1}`}
                                id={`track${i+1}`}
                                onClick={()=>{
                                    setCurrentSong(track)
                                    setSelectedTrack(`track${i+1}`)
                                }}
                                className={`table__row ${`track${i+1}` === selectedTrack ? "selected": ""}`}
                                >
                                    <td>
                                    <div className='table__text-container'>
                                        <p className={`table__text song-title`}>{track.title}</p>
                                        <p className={`table__row ${`track${i+1}` === selectedTrack ? "song-info": "hidden"}`}>{track.year} {track.channels}</p>
                                    </div>
                                    
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
                <AudioDetails />
                </div>
                <MobileAudioListContainer />
                
                
            </div>
          )
  
}

export { AudioListContainer, AudioDetails, AudioPlayer }