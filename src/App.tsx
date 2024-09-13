import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Instructions } from './components/Instructions'
import { Results } from './components/Results'

function App () {
  return (
    <div className='container'>
      <Header />
      <main>
        <Instructions />
        <Results />
      </main>
      <Footer />
    </div>
  )
}

export default App
