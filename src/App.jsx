
import { Outlet } from 'react-router-dom'
import './App.css'
import Navber from './components/Navber';


function App() {

  return (
    <>
    <Navber />
    <main className='min-h-screen'>
        <Outlet />
    </main>
    <footer>footer</footer>

    </>
  )
}

export default App
