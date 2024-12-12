/* eslint-disable react/prop-types */
import { IoStar } from "react-icons/io5";
const Reating = ({rating}) => {
  const totalStars = 5;
  return (
    <div className="flex space-x-1">
      {
        Array.from({length: totalStars},(_,index) => {
          const startIndex = index + 1;
          return startIndex <= rating ? (<IoStar key={index} className="text-primary"/>):(<IoStar key={index} className="text-gray-300"/>)
        })
      }
    </div>
  )
}

export default Reating