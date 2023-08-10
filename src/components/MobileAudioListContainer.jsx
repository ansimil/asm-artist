import { music } from '../assets/music';
import { AudioDetails } from './AudioListContainer';
import { PlayingContext } from './PlayingContext'
import { useContext } from 'react'

const MobileAudioListContainer = () => {
    const { setCurrentSong  } = useContext(PlayingContext)
    const musicSorted = music.sort((track, nextTrack) => {
        return nextTrack.year - track.year
    })
  return (
    <div className='mobile-audio-list-container'>
        {musicSorted.map((page, i) => {
          return (
                <details
                id={`${page.title}-mobile-details`}
                className={`mobile-details-container ${page.title}-mobile-details`}
                onClick={() => {
                    setCurrentSong(page)
                    const els = document.getElementsByClassName("mobile-details-container")
                    const elsKeys = Object.keys(els)
                    elsKeys.forEach((key) => {
                    if (els[key].id !== `${page.title}-mobile-details`){
                        els[key].open = false
                    }
                    })
                }}
                >
                    <summary className='mobile-summary-container'>
                        <p className='mobile-summary__header'>{page.title}</p>
                    </summary>
                    <AudioDetails />
                </details>          
            )
        })}
    </div>
  )
}

export default MobileAudioListContainer