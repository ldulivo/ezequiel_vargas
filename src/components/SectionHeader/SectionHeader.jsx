import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Close } from '../SvgIcons'
import './SectionHeader.scss'
import { ScrollOff, ScrollOn } from './utils'

const Card = ({ children, dialogH1, dialog, id }) => {
  const [modal, setModal] = useState(false)

  useEffect(() => {
    (modal)
    ? ScrollOff(id)
    : ScrollOn(id)
  }, [id, modal])
  return (
    <div className="colum">
      <div className="content">
        {children}
        <button onClick={() => setModal(!modal)}>Leer más
          <dialog id={id}>
            <Close style={'dialog--close'} />
            <h3 className='dialog--h3'>{dialogH1}</h3>
            <p className='dialog--p'>{dialog}</p>
          </dialog>
        </button>
      </div>
    </div>
  )
}

const SectionHeader = () => {

  return (
    <div className="SectionHeader">
      <Card
        id={uuidv4()}
        dialogH1 = 'Asesoría y orientación integral'
        dialog='La información es la columna vertebral de toda empresa, por lo cual la Asesoría Integral permanentemente realiza revisión, validación y categorización de los archivos físicos y electrónicos, manteniendo la regulación de la documentación.'>
        <h3>Asesoría y orientación integral</h3>
        <p>Asesoría vinculada al desarrollo de su proyecto personal y/o empresarial,  teniendo en cuenta detalles sobre cada aspecto que compone el manejo de la información.</p>
      </Card>
      <Card
        id={uuidv4()}
        dialogH1 = 'Impuestos'
        dialog='IVA.
        – Ingresos Brutos.
        – Regimenes de retención y percepción.
        – Impuestos provinciales y municipales.
        – Cálculo y preparación de anticipos.
        – Regimenes de facturación e información.
        – Confección de los coeficientes del Convenio Multilateral.
        – Realización de provisiones mensuales y anuales. Cálculo de Impuesto diferido.
        – Atenciones de los diversos requerimientos de los fiscos nacionales y provinciales.
        – Inspecciones integrales.
        – Defensa en los procesos de sumario y determinación de oficio.'>
        <h3>Impuestos</h3>
        <p>Despreocúpese de su declaración de impuestos o presentación de estados. No importa si son presentaciónes simples o complejas. Se resolveran las inquietudes tributarias.</p>
      </Card>
      <Card
        id={uuidv4()}
        dialogH1 = 'Reingeniería de comercio'
        dialog='Reinventar el negocio, la empresa o el emprendimiento empleando técnicas como: Visualiación de procesos. - Investigación operativa. - Gestión de cambio. - Benchmarking. - Infotecnología.'>
        <h3>Reingeniería de comercio</h3>
        <p>Mejoras parciales o totales a corto, mediano y largo plazo, logrando como principal objetivo reducir costos, brindar mejor servicio y calidad.</p>
      </Card>
    </div>
  )
}

export default SectionHeader