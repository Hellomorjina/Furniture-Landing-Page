/* eslint-disable react/prop-types */


const Tooltips = ({position= 'bottom',colors=['bg-red-700','bg-green-700','bg-blue-700']}) => {
  const positionClasses = {
    bottom:{
      tooltip:'bottom-full left-1/2 transform -translate-x-1/2 mb-3',
      arrow:'left-1/2 transform -translate-x-1/2 -bottom-2 border-t '
    }
 
  }
  return (
    <div className="releative group">
    <button className="releative p-4 bg-white/25 rounded-full border border-1 bg-white text-xl">
      <div className={`hidden absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 p-2 rounded-lg bg-white/25 shadow-md group-hover:flex gap-1${positionClasses[position].tooltip}`}>
      {
        colors.map((colors,index) =>(
          <div key={index} className={`size-6 ${colors} border  rounded-full`}></div>
        ))
      }  
          {/* tooltip arrow */}
          <div className={`absolute  w-0 h-0 border-1-8 border-l-transparent  border-r-8 border-r-transparent border-t-8 border-t-white/35 ${positionClasses[position].arrow}`}>
          </div>
      </div>
    </button>
 
 </div>
  )
}

export default Tooltips