import videoInstitutional from '../../media/video/ezequiel_vargas.mp4'
import './InstitutionalVideo.scss'
const InstitutionalVideo = () => {
  return (
    <div className="InstitutionalVideo">
      <video
        muted
        controls
        src={videoInstitutional}>
      </video>
    </div>
  )
}

export default InstitutionalVideo