import Hero from "./Hero"
import WhyChoosing from "./WhyChoosing"
import Products from "./../shop/Products"
import Expriences from "./Expriences"
import Matrial from "./Matrial"
import Testmonial from "./Testmonial"

const Home = () => {
  return (
    <>
      
    <Hero/>
    <WhyChoosing/>
    <Products headline="Best Selling Product"/>
    <Expriences/>
    <Matrial/>
    <Testmonial/>
    </>
  )
}

export default Home