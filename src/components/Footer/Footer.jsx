import './Footer.scss'
const msg = 'Hola Ezequiel, me comunico para pedirte '
const number = 2615174752
export const Footer = () => {
  return (
    <footer className='Footer'>
      <div className="content">
        <a
          className="Footer-Card"
          href="https://www.linkedin.com/in/vargasezequiel"
          target="_blank"
          rel="noopener noreferrer">
            <p>LinkedIn</p>
        </a>
        <a
          className="Footer-Card"
          href="mailto:ezequiel508@hotmail.com"
          target="_blank"
          rel="noopener noreferrer">
            <p>eMail</p>
        </a>
        <a
          className="Footer-Card"
          href={`https://wa.me/${number}?text=${msg}`}
          target="_blank"
          rel="noopener noreferrer">
            <p>WhatsApp</p>
        </a>
      </div>
      <a
        className='Footer-Direction'
        href="https://goo.gl/maps/hXADSCxKffow2ABL9"
        target="_blank"
        rel="noopener noreferrer">
          <p>Estudio Contable Perez & Vargas</p>
          <span>Av. Pedro Molina 367, M5500 Mendoza</span>
        </a>
    </footer>
  )
}