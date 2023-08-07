import React from 'react'
import { music } from '../assets/music';

const MobileAudioListContainer = () => {
    const musicSorted = music.sort((track, nextTrack) => {
        return nextTrack.year - track.year
    })
  return (
    <div className='mobile-audio-list-container'>
        {musicSorted.map((page) => {
          return (
                <details
                id={`${music.title}-mobile-details`}
                className={`mobile-details-container ${music.title}-mobile-details`}
                onClick={() => {
                    const els = document.getElementsByClassName("mobile-details-container")
                    const elsKeys = Object.keys(els)
                    elsKeys.forEach((key) => {
                    if (els[key].id !== `${music.title}-mobile-details`){
                        els[key].open = false
                    }
                    })
                }}
                >
                    <summary className='mobile-summary-container'>
                        <p className='mobile-summary__header'>{page.title}</p>
                    </summary>
                </details>          
            )
        })}
    </div>
  )
}

export default MobileAudioListContainer