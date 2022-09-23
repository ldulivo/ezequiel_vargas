import { WhatsApp } from '../SvgIcons'
import './ContactMe.scss'
const ContactMe = () => {
  return (
    <section className="ContactMe">
      <h3>Compromiso con el clientes</h3>
      <p>Se busca siempre brindar soluciones adecuadas a distintas situaciones. La dedicada atención a cada necesidad del clientes es el principal activo. Se busca la mejora continua de sus servicios, adaptando constantemente sus procedimientos a la normativa cambiante de nuestro país.</p>
      <a
        href="https://wa.me/2616226005?text=I'm%20interested%20in%20your%20car%20for%20sale"
        target="_blank"
        rel="noopener noreferrer">
          <WhatsApp style='ContactMe-WhatsApp' />
          <h3>Chat con WhatsApp</h3>
      </a>
    </section>
  )
}

export default ContactMe