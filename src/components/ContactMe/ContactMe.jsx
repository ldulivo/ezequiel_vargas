import { WhatsApp } from '../SvgIcons'
import './ContactMe.scss'
import imgBackground from '../../media/img/office-gdc4e2f809_1920.jpg'
const msg = 'Hola Ezequiel, me comunico para pedirte '
const number = 2615174752
const ContactMe = () => {
  return (
    <section className="ContactMe">
      <div className="ContactMe-Background">
        <img src={imgBackground} alt="background contador" />
      </div>
      <h2>Compromiso con los clientes</h2>
      <p>Se busca siempre brindar soluciones adecuadas a distintas situaciones. La dedicada atención a cada necesidad del clientes es el principal activo. Se busca la mejora continua de sus servicios, adaptando constantemente sus procedimientos a la normativa cambiante de nuestro país.</p>
      <a
        href={`https://wa.me/${number}?text=${msg}`}
        target="_blank"
        rel="noopener noreferrer">
          <WhatsApp style='ContactMe-WhatsApp' />
          <h3>Habla conmigo</h3>
      </a>
    </section>
  )
}

export default ContactMe