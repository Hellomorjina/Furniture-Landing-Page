/* eslint-disable react/prop-types */
import ButtonIcon from '../../assets/button.png'
import { useState } from "react"
import { products } from "../../utils/products"
import ProcuctsCard from "./ProcuctsCard"
const Products = ({headline}) => {
  const categories = ["Chair","Beds","Sofa","Lamp"]
  const [selectedCategory, setSelectedCategory] = useState("Chair");
  const [visibleproducts, setVisibleproducts] =useState(4);
  const filteredProducts = products.filter((product) => product.category === selectedCategory);

  const lodemoreproducts = () =>{
    setVisibleproducts((prev) => prev + 4)
  }
  return (
    <div>
        <div className="section_contniner">
            <h2 className="text-4xl font-bold text-center my-8 ">{headline}</h2>
            {/* categori tabs */}
            <div className="bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5  py-5 mb-16">
               <div className="flex flex-col sm:flex-row items-center md:justify-between justify-center">
                {
                  categories.map((category) =>(
                    <button onClick={() =>{ 
                      setSelectedCategory(category)
                      setVisibleproducts(4)
                    
                    }}
                    key={category} className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-primary hover:text-white ${selectedCategory === category ? 'bg-white text-primary':'text-secondary'}`}>{category}</button>
                  ))
                }
               </div>
            </div>
            {/* product grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
               {      
                filteredProducts.slice(0,visibleproducts).map((product,index) =>(
                   <ProcuctsCard key={index} product={product}/>
                ))
               }
            </div>
            {/* lode More button */}
            {
              visibleproducts < filteredProducts.length &&(
                <div className="flex justify-center mt-8">
                  <button className='text-sm text-primary flex items-center gap-1 font-semibold' onClick={lodemoreproducts}
                  >View All  <img src={ButtonIcon} alt=""/></button>
                </div>
              )
            }
        </div>
    </div>
  )
}

export default Products