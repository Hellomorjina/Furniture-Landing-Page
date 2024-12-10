import HeroImg from "../../assets/heroimg.png"
import Products from "./Products"

const Shop = () => {
  return (
    <section className="min-h-screen">
    {/* baner */}
      <div className="w-full h-[400px] bg-cover bg-center flex items-center justify-center " style={{backgroundImage:`url(${HeroImg})`}}>
          <h1 className="text-5xl font-bold text-white">Shop Our Products</h1>
      </div>
         <Products headline="What's Your Choice"/>
    </section>
  )
}

export default Shop