import Button from "../../components/button"
import matrial1 from "./../../assets/material1.png"
import matrial2 from "./../../assets/material2.png"
import matrial3 from "./../../assets/material3.png"
const Matrial = () => {
  return (
    <section className="section_contniner my-24 flex justify-between flex-col md:flex-row md:gap-20  items-center gap-8">
    <div className="md:w-1/2 mx-auto">
        <h3 className="uppercase text-lg font-semibold text-primary mb-4">Materials</h3>
        <h2 className="capitalize text-4xl font-bold  mb-4">Very serious materials  <br/> for making  furniture</h2>
        <p className="text-base text-secondary dark:text-white lg:w-2/3  mb-4">Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
        <Button text="More Info"/>

    </div>
    <div className="md:w-1/2 grid grid-cols-2 md:items-end md:grid-cols-3 items-center">
        <div >
           <img src={matrial1} alt=""  />
           <img src={matrial2} alt=""  />
     
        </div>
        <div className="md:col-span-2 col-span-1">
           <img src={matrial3} alt="" className="w-full md:h-[541px]"  />
        </div>
    </div>
 </section>
  )
}

export default Matrial