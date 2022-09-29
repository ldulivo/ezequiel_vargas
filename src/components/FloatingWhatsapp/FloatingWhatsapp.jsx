import { WhatsApp } from '../SvgIcons'
import './FloatingWhatsapp.scss'
const msg = 'Hola Ezequiel, me gustaría que agendemos una reunión '
const number = 2615174752
const FloatingWhatsapp = () => {
  return (
    <div className="FloatingWhatsapp">
      <a
        href={`https://wa.me/${number}?text=${msg}`}
        target="_blank"
        rel="noopener noreferrer">
          <WhatsApp style='ContactMe-WhatsApp' />
      </a>
    </div>
  )
}

export default FloatingWhatsapp