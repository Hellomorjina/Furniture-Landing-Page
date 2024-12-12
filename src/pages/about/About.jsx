import about from '../../assets/about-background.jpg'
import Expriences from '../Home/Expriences'
import Matrial from '../Home/Matrial'



const About = () => {
  return (
        <section>
              <div className="w-full h-[400px] bg-cover flex items-center justify-center " style={{backgroundImage:`url(${about})`}}>
                    <h1 className="text-5xl font-bold text-white">About Us</h1>
                </div>
                <Expriences/>
                <Matrial/>
        </section>

  )
}

export default About