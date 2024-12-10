import ProcuctsCard from "./ProcuctsCard"

const Products = ({headline}) => {
  const categories = ["Chair","Beds","Sofa","Lamp"]
  return (
    <div>
        <div className="section_contniner">
            <h2 className="text-4xl font-bold text-center my-8 ">{headline}</h2>
            {/* categori tabs */}
            <div className="bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5  py-5 mb-16">
               <div className="flex flex-col sm:flex-row items-center md:justify-between justify-center">
                {
                  categories.map((category) =>(
                    <button key={category} className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-primary hover:text-white`}>{category}</button>
                  ))
                }
               </div>
            </div>
            {/* product grid */}
            <div>
               {
                Products.map((product,index) =>(
                   <ProcuctsCard key={index} product={product}/>
                ))
               }
            </div>
        </div>
    </div>
  )
}

export default Products