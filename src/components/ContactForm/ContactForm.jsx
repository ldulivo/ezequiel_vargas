import { useEffect } from 'react'
import { useState } from 'react'
import { ScrollOff, ScrollOn } from '../SectionHeader/utils'
import { Close } from '../SvgIcons'
import './ContactForm.scss'
export const ContactForm = () => {
  const [modal, setModal] = useState(false)
  const [speakWithUs, setSpeakWithUs] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
  })

  const handleContactMe = (event) => {
    setSpeakWithUs({
      ...speakWithUs,
      [event.target.name]: event.target.value
    })
    /* console.log('speakWithUs', speakWithUs) */
  }

  useEffect(() => {
    (modal)
    ? ScrollOff('modalContactMe')
    : ScrollOn('modalContactMe')
  }, [modal])

  useEffect(() => {
    if(window.location?.hash === '') return
    
    setModal(!modal)
    /* ScrollOff('modalContactMe') */
  }, [])

  return (
    <section className="ContactForm" id='ContactForm'>
      <div className="content">
        <form
          action="https://formsubmit.co/ldulivo@gmail.com"
          method="POST"
        >
          <h2>Contáctame</h2>
          <label>
            <input
              value={speakWithUs.nombre}
              onChange={handleContactMe}
              name='nombre'
              type='text'/>
              <span className={speakWithUs.nombre !== '' ? 'active' : ''}>Nombre</span>
          </label>
          <label>
            <input
              value={speakWithUs.telefono}
              onChange={handleContactMe}
              name='telefono'
              type='number'/>
              <span className={speakWithUs.telefono !== '' ? 'active' : ''}>Número de teléfono</span>
          </label>
          <label>
            <input
              value={speakWithUs.email}
              onChange={handleContactMe}
              name='email'
              type='email'/>
              <span className={speakWithUs.email !== '' ? 'active' : ''}>Correo electrónico</span>
          </label>
          <label className='label-textarea'>
            <textarea
              value={speakWithUs.mensaje}
              onChange={handleContactMe}
              name='mensaje'></textarea>
            <span className={speakWithUs.mensaje !== '' ? 'active' : ''}>Escribe tu mensaje</span>            
          </label>
          <input type="submit" value="Enviar" />
          <input type="hidden" name="_next" value={`${window.location.origin}${window.location.pathname}#ContactForm`}/>
          <input type="hidden" name="_captcha" value="false"/>
          <input type="hidden" name="_subject" value={`Consulta WEB - ${speakWithUs.nombre}`}/>
        </form>

        <dialog id='modalContactMe' onClick={() => setModal(!modal)}>
          <Close style={'dialog--close'} />
          <h3 className='dialog--h3'>Mensaje enviado!</h3>
          <p className='dialog--p'>A la brevedad estaré en contacto contigo.</p>
        </dialog>
      </div>
    </section>
  )
}