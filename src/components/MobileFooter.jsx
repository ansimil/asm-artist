import { useContext } from 'react'
import { AudioPlayer } from './Navbar'
import { PlayingContext } from './PlayingContext'

const MobileFooter = () => {
    const { playCount } = useContext(PlayingContext)

  return (
    <div className='mobile-footer-container'>
        {
            playCount > 0 && <AudioPlayer />
        }
    </div>
  )
}

export default MobileFooter