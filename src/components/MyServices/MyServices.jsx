import './MyServices.scss'
import imgMonotributistas from '../../media/img/apparel-g817fdf225_1920.jpg'
import imgResponsableInscripto from '../../media/img/accounting-gcfd9c9f30_1920.jpg'
import imgEmpresa from '../../media/img/architecture-g023c94107_1920.jpg'
import imgSueldos from '../../media/img/office-g7b0c50bd1_1920.jpg'
export const MyServices = () => {
  return (
    <section className='MyServices'>
      <div className="content">
        <h2>Servicios</h2>
      </div>
      <div className="content">

        <div className="card">
          <header>
            <img src={imgMonotributistas} alt="Monotributistas" />
          </header>
          <main>
            <h3>Monotributistas</h3>
            <p>Inscripción en Monotributo y habilitación para que empieces a facturar. Declaración jurada de Ingresos Brutos. Recategorización.</p>
          </main>
        </div>

        <div className="card">
          <header>
            <img src={imgResponsableInscripto} alt="Monotributistas" />
          </header>
          <main>
            <h3>Responsable Inscripto</h3>
            <p>Inscripción Responsable Inscripto, alta en IVA y habilitación para que empieces a facturar. Declaración jurada de IVA, Ganancias e Ingresos Brutos.</p>
          </main>
        </div>

        <div className="card">
          <header>
            <img src={imgEmpresa} alt="Monotributistas" />
          </header>
          <main>
            <h3>Empresas</h3>
            <p>Creación de S.A y S.R.L. Confección de balance e inventarios mensuales y anual, auditoría, informe, copiado y rúbrica de libros contables. Inpuestos.</p>
          </main>
        </div>

        <div className="card">
          <header>
            <img src={imgSueldos} alt="Monotributistas" />
          </header>
          <main>
            <h3>Sueldos y Jornales</h3>
            <p>Recibos de sueldo, formularios mensuales, asesoría, novedades, Actualización de escalas salariales según convenio, liquidación por despido y/o renuncia.</p>
          </main>
        </div>

      </div>
    </section>
  )
}