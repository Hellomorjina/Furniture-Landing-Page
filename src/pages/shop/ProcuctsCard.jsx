/* eslint-disable react/prop-types */
import Reating from "../../components/Reating";
import { getImgUrl } from "../../utils/getImgUrl";
import { FaPlus } from "react-icons/fa";

function ProcuctsCard({ product }) {
  return (
    <div>
      <div className="bg-[#FAFAFA]">
        <img src={getImgUrl(`${product.imageUrl}`)} alt="" />
      </div>
      <div className="p-6 bg-white dark:bg-black shadow-sm">
        <h4 className="text-base md-1">{product.category}</h4>
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <Reating rating={product.rating} />
        <div className="mt-5 flex justify-between items-center">
          <p className="text-scondary dark:text-white font-bold text-lg">
            <sup>$</sup>
            <span>{product.price}</span>
          </p>
          <button className="bg-secondary hover:bg-primary text-white dark:bg-white p-2 rounded-full">
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProcuctsCard;
