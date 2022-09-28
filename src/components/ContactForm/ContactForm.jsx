import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { ScrollOff, ScrollOn } from '../SectionHeader/utils'
import { Close } from '../SvgIcons'
import './ContactForm.scss'
export const ContactForm = () => {
  const loadContactForm = useRef(0)
  const [modal, setModal] = useState(false)
  const [speakWithUs, setSpeakWithUs] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
  })
  const [nombreIsCorrect, setNombreIsCorrect] = useState(true)
  const [telefonoIsCorrect, setTelefonoIsCorrect] = useState(true)
  const [emailIsCorrect, setEmailIsCorrect] = useState(true)
  const [mesajeIsCorrect, setMesajeIsCorrect] = useState(true)

  const handleContactMe = (event) => {
    setSpeakWithUs({
      ...speakWithUs,
      [event.target.name]: event.target.value
    })
    const isCorrect = (event.target.value !== '')
    switch (event.target.name) {
      case 'nombre':
        setNombreIsCorrect(isCorrect)
        break
      case 'telefono':
        setTelefonoIsCorrect(isCorrect)
        setEmailIsCorrect(isCorrect)
        break
      case 'email':
        setTelefonoIsCorrect(isCorrect)
        setEmailIsCorrect(isCorrect)
        break
      default:
        setMesajeIsCorrect(isCorrect)
        break
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (speakWithUs.nombre === '' || !nombreIsCorrect) {
      setNombreIsCorrect(false)
      return
    }
    if ((speakWithUs.telefono === '' || !telefonoIsCorrect) && (speakWithUs.email === '' || !emailIsCorrect)) {
      setTelefonoIsCorrect(false)
      setEmailIsCorrect(false)
      return
    }

    const validRegEx = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if (!speakWithUs.email.match(validRegEx) && (speakWithUs.telefono === '' || !telefonoIsCorrect)) {
      setEmailIsCorrect(false)
      return
    }
    
    if (speakWithUs.mensaje === '' || !mesajeIsCorrect) {
      setMesajeIsCorrect(false)
      return
    }

    e.target.submit('submit')
  }

  const returnURL = () => {
    ScrollOn('modalContactMe')
    const newURL = `${window.location.origin}${window.location.pathname}`
    window.location.href = newURL
  }

  useEffect(() => {
    if (loadContactForm.current === 0) {
      loadContactForm.current += 1
      return
    }
    
    (modal)
    ? ScrollOff('modalContactMe')
    : returnURL()
  }, [modal])

  useEffect(() => {
    if(window.location?.hash === '') return
    setModal(!modal)
  }, [])

  return (
    <section className="ContactForm" id='ContactForm'>
      <div className="content">
        <form
          id='leo1'
          action="https://formsubmit.co/ezequiel508@hotmail.com"
          /* action="https://formsubmit.co/ldulivo@gmail.com" */
          method="POST"
          onSubmit={handleSubmit}
        >
          <h2>Contáctame</h2>
          <label className={nombreIsCorrect ? '' : 'ContactForm-Label--false'}>
            <input
              value={speakWithUs.nombre}
              onChange={handleContactMe}
              name='nombre'
              type='text'/>
              <span className={speakWithUs.nombre !== '' ? 'active' : ''}>Nombre</span>
          </label>
          <label className={telefonoIsCorrect ? '' : 'ContactForm-Label--false'}>
            <input
              value={speakWithUs.telefono}
              onChange={handleContactMe}
              name='telefono'
              type='number'/>
              <span className={speakWithUs.telefono !== '' ? 'active' : ''}>Número de teléfono</span>
          </label>
          <label className={emailIsCorrect ? '' : 'ContactForm-Label--false'}>
            <input
              value={speakWithUs.email}
              onChange={handleContactMe}
              name='email'
              type='email'/>
              <span className={speakWithUs.email !== '' ? 'active' : ''}>Correo electrónico</span>
          </label>
          <label className={`label-textarea ${mesajeIsCorrect ? '' : 'ContactForm-Label--false'}`}>
            <textarea
              value={speakWithUs.mensaje}
              onChange={handleContactMe}
              name='mensaje'></textarea>
            <span className={speakWithUs.mensaje !== '' ? 'active' : ''}>Escribe tu mensaje</span>            
          </label>
          <input type="submit" value="Enviar" disabled={false}/>
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