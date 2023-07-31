import { createContext, useState, useRef, useEffect } from 'react'
import { music } from '../assets/music'

const PlayingContext = createContext()

function Playing(props) {
    const [ isPlaying, setIsPlaying ] = useState(false)
    const [ currentSong, setCurrentSong ] = useState(music[0])
    const [ previousSong, setPreviousSong ] = useState()
    const [ navbarClick, setNavbarClick ] = useState(false)
    const [ playCount, setPlayCount ] = useState(0)
    const audioPlayer = useRef(new Audio(music[0].audioUrl))
    const [ duration, setDuration ] = useState()
    const [ progress, setProgress ] = useState(0)
    const progressBar = useRef()
    const animationRef = useRef()

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime
        setProgress(progressBar.current.value);
        animationRef.current = requestAnimationFrame(whilePlaying)
    }

    const onSeek = () => {
        cancelAnimationFrame(animationRef.current)
        audioPlayer.current.currentTime = progressBar.current.value
    }

    useEffect(() => {
        if (navbarClick) {
            if (audioPlayer.current.paused) {
                audioPlayer.current.play()
                console.log(audioPlayer.current.duration);
                animationRef.current = requestAnimationFrame(whilePlaying)
            }
            else {
                audioPlayer.current.pause()
            }
        }
        else {
            if (currentSong !== previousSong && playCount > 0) {
                audioPlayer.current.src = currentSong.audioUrl
                const seconds = Math.floor(audioPlayer.current.duration);
                console.log(Math.floor(audioPlayer.current.duration));
                setDuration(seconds)
                progressBar.current.max = seconds;
                audioPlayer.current.play()
                animationRef.current = requestAnimationFrame(whilePlaying)
                setPreviousSong(currentSong)
            }
            else {
                if (isPlaying) {
                    audioPlayer.current.play();
                    animationRef.current = requestAnimationFrame(whilePlaying)
                }
                else {
                    audioPlayer.current.pause();
                    cancelAnimationFrame(animationRef.current)
                }
            }
        }
        
      }, [isPlaying]);
    
    return (
        <PlayingContext.Provider 
        value={
            {
                isPlaying, 
                setIsPlaying, 
                playCount, 
                setPlayCount, 
                currentSong, 
                setCurrentSong, 
                previousSong, 
                setPreviousSong, 
                audioPlayer, 
                navbarClick, 
                setNavbarClick, 
                progressBar, 
                onSeek, 
                animationRef, 
                whilePlaying, 
                duration, 
                progress
            }
        }
        >
            {props.children}
        </PlayingContext.Provider>
    )
}

export { PlayingContext, Playing }