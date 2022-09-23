import videoBackground from '../../media/video/finance.mp4'
import './Header.scss'
const Header = ({ children }) => {
  return (
    <header className='Header'>
      <video
        src={videoBackground}
        autoPlay
        muted
        loop
        ></video>
        {children}
    </header>
  )
}

export default Header