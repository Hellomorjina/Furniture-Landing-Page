
import { Outlet } from 'react-router-dom'
import './App.css'
import Navber from './components/Navber';
import Footer from './components/Footer';


function App() {

  return (
    <>
    <Navber />
    <main className='min-h-screen'>
        <Outlet />
    </main>
     <Footer/>

    </>
  )
}

export default App
