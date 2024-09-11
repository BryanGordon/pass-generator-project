import { Footer } from './components/Footer'
import { Header } from './components/Header'

function App () {
  return (
    <body>
      <Header />
      <main className='bg-blue-400 p-4 h-full'>
        <div>
          Resto de la app
        </div>
      </main>
      <Footer />
    </body>
  )
}

export default App
