import { FaSearch } from "react-icons/fa"
import HeroImg from "../../assets/heroimg.png"
import Tooltips from "../../components/Tooltips"


const Hero = () => {
  return (
      <section className='h-[750px] w-full relative bg-cover bg-center text-white' style={{backgroundImage:`url(${HeroImg})`}}>
         <div className="md:pt-[85px] pt-24 text-center space-y-5 md:w-1/2 mx-auto ">
             <h1 className='text-4xl  lg:text-6xl font-medium lg:leading-tight leading-snug mt-20'>Make your interior more minimalistic & modern</h1>
             <p className="text-2xl font-normal mx-auto p-2">Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
              {/* search field */}
              <div className="relative inline-block x-30">
                  <input type="text" placeholder="Search furniture" name="" id="" className="w-full md:w-80 px-6  py-2 bg-white/25 rounded-full border border-gray-300 focus:outline-none"/>
                  <div className="absolute right-3 top-1 p-2 bg-primary rounded-full cursor-pointer">
                      <FaSearch/>
                  </div>
              </div>
         </div>
         {/* botton bulr effect */}
         <div className="absoulte inset-0 bottom-0 h-1/2 -mb-2 bg-gradient-to-t from-white vai-transparent  to-transparent blur-sm"></div>
         {/* hover button for display tooltip box */}
         <div className="hidden xl:block absolute bottom-40 left-24 "> 
           <Tooltips position='bottom'/>
           </div>
         <div className="hidden xl:block absolute bottom-52 left-96 "> 
           <Tooltips position='bottom'/>
           </div>
         <div className="hidden xl:block absolute bottom-24 right-[820px] "> 
           <Tooltips position='bottom'/>
           </div>
         <div className="hidden xl:block absolute bottom-12 right-16 "> 
           <Tooltips position='bottom'/>
           </div>
      
      </section>
  )
}
export default Hero