import Button from "../../components/button"
import exprince from "./../../assets/expricences.png"
function Expriences() {
  return (
    <section className="section_contniner my-24 flex justify-between flex-col md:flex-row md:gap-20  items-center gap-8">
       <div className="md:w-1/2 md:h-[541px]">
           <img src={exprince} alt="" className="w-full h-full" />
       </div>
       <div className="md:w-1/2 mx-auto">
           <h3 className="uppercase text-lg font-semibold text-primary mb-4">experiences</h3>
           <h2 className="capitalize text-4xl font-bold  mb-4">we provide you the <br/> best experience</h2>
           <p className="text-base text-secondary dark:text-white lg:w-2/3  mb-4">You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
           <Button text="More Info"/>

       </div>
    </section>
  )
}

export default Expriences
