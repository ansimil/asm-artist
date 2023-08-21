import { useContext } from 'react'
import { PlayingContext } from './PlayingContext'
import { PlayButton } from './Navbar'

const MobileNavbar = () => {
    const { isPlaying, setIsPlaying, setNavbarClick, playCount, previousSong } = useContext(PlayingContext)

  return (
    <div className='mobile-navbar-container'>
        <div className='mobile-navbar__header-container'>
            <h3 className='mobile-navbar__header'>andrew simon miller</h3>
        </div>
        {  
            playCount > 0 && 
            <div className='mobile-navbar-audio-player'>
                <PlayButton isPlaying={isPlaying} setNavbarClick={setNavbarClick} setIsPlaying={setIsPlaying} />
                <div className='navbar__audioplayer-title-duration-container'>
                    <p>{previousSong.title}</p>
                </div>
            </div> 
        }
        
    </div>
  )
}

export default MobileNavbar