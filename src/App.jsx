import ContactMe from './components/ContactMe'
import { Footer } from './components/Footer'
import Header from './components/Header'
import { Maps } from './components/Maps'
import { MyServices } from './components/MyServices'
import SectionHeader from './components/SectionHeader'
const App = () => {
  return (
    <div className="App">
      <Header>
        <div className="content">
          <h2>Ezequiel Vargas</h2>
          <h1>Contador Público</h1>
          <div>
            <p>Más de 15 años de experiencia en el sector retail.</p>
            <p>Junto a un equipo de trabajo realizo tareas contables e impositivas.</p>
          </div>
        </div>
      </Header>
      <SectionHeader />
      <ContactMe />
      <MyServices />
      <Maps />
      <Footer />
    </div>
  )
}

export default App