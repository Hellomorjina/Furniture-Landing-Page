import counct from '../../assets/contact-background.jpg'
import Testmonial from '../Home/Testmonial'

const Contact = () => {
  return (
    <section>
    <div className="w-full h-[400px] bg-cover bg-center flex items-center justify-center " style={{backgroundImage:`url(${counct})`}}>
          <h1 className="text-5xl font-bold text-white">Contact Us</h1>
      </div>
      <Testmonial/>
    </section>
  )
}

export default Contact