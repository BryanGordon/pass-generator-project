import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Instructions } from './components/Instructions'

function App () {
  return (
    <div className='container'>
      <Header />
      <main className='bg-blue-400 p-4 min-h-full'>
        <Instructions />
      </main>
      <Footer />
    </div>
  )
}

export default App
