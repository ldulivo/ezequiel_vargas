import './Maps.scss'
import imgFooter from '../../media/img/footer.png'
export const Maps = () => {
  return (
    <section className='Maps'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.075398519805!2d-68.85007306912192!3d-32.8961747156784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e098970fdd1bf%3A0x7604ee51516346c3!2sEstudio%20Contable%20Perez%20%26%20Vargas!5e0!3m2!1ses-419!2sar!4v1663980299445!5m2!1ses-419!2sar'
          title='Ezequiel Vargas'
          loading="lazy"
          allowFullScreen
          referrerPolicy='no-referrer-when-downgrade'></iframe>
          <img src={imgFooter} alt="footer" />
    </section>
  )
}
