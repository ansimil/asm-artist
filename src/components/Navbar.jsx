import React from 'react'
import play from '../assets/images/play-icon.png'
import pause from '../assets/images/pause-icon.png'
import { PlayingContext } from './PlayingContext'
import { useContext, useEffect, useState } from 'react'

const PlayButton = ({ setNavbarClick, setIsPlaying, isPlaying }) => {
    return (
        <div className='navbar__play-icon-container'>
            <img 
            className='play-icon' 
            src={isPlaying ? pause : play} 
            alt="play-icon" 
            onClick={()=>{
                setNavbarClick(true)
                setIsPlaying(!isPlaying)
            }}
            />
        </div>
    )
}

const AudioPlayer = () => {
    const { isPlaying, setIsPlaying, previousSong, setNavbarClick, progressBar, onSeek, audioPlayer, animationRef, whilePlaying, progress } = useContext(PlayingContext)
    const [ time, setTime ] = useState()

    const progressCalc = (timeToBeCalculate) => {
        let minutes = Math.floor(timeToBeCalculate / 60)
        let seconds = Math.floor(timeToBeCalculate % 60)

        if (seconds < 10){
            seconds = `0${seconds}`
        }
        return (
            `0${minutes}:${seconds}`
        )
    }

    useEffect(()=>{
        setTime(progressCalc(progress))
    },[progress])

    return (
        <div className='navbar__audio-player'>
            <PlayButton setIsPlaying={setIsPlaying} setNavbarClick={setNavbarClick} isPlaying={isPlaying} />
            <div>
                <div className='navbar__audioplayer-title-duration-container'>
                    <p className='navbar__audio-player__title'>{previousSong.title}</p>
                    <p className='navbar__audio-player__title'>{time}</p>
                </div>
                <div className='navbar__audio-player__range-slider-container'>
                    <input 
                    className="navbar__audio-player__range-slider" 
                    type="range" ref={progressBar} 
                    onChange={onSeek} 
                    onMouseDown={()=>{
                        if (isPlaying){
                            audioPlayer.current.pause(); cancelAnimationFrame(animationRef.current)
                        }
                        else {
                            cancelAnimationFrame(animationRef.current)
                        }
                    }} 
                    onMouseUp={()=>{
                        audioPlayer.current.play(); 
                        animationRef.current = requestAnimationFrame(whilePlaying)
                        if (!isPlaying){
                            setIsPlaying(true)
                        }
                        
                    }}
                    />
                </div>
                
            </div>
        
        
    </div> 
    )
}

const Navbar = () => {
    const { playCount } = useContext(PlayingContext)
   
  return (
    <div className='navbar-container'>
        <div className='navbar__header-container'>
            <h3 className='navbar__header'>andrew simon miller</h3>
        </div>
        <div className='navbar__links'>
            {
                playCount > 0 && <AudioPlayer />
            }
        </div>
    </div>
  )
}

export  { 
    Navbar,
    AudioPlayer,
    PlayButton,
}