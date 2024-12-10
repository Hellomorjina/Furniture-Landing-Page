import Button from "../../components/button"


const WhyChoosing = () => {
  return (
    <section className="section_contniner ">
      <div className="my-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center md:grid-12">
         <div className="text-4xl font-bold">
            why<br/>Choosing Us
         </div>
         <div>
            <h3 className="text-2xl font-semibold mb-3">Luxury facilities</h3>
            <p className="text-base md-2">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
             <Button text={"Learn More"}/>
         </div>
         <div>
            <h3 className="text-2xl font-semibold mb-3">Affordable Price</h3>
            <p className="text-base md-2">You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.</p>
             <Button text={"Learn More"}/>
         </div>
         <div>
            <h3 className="text-2xl font-semibold mb-3">Many Choices</h3>
            <p className="text-base md-2">We provide many unique work space choices so that you can choose the workspace to your liking.</p>
             <Button text={"Learn More"}/>
         </div>
      </div>
    </section>
  )
}

export default WhyChoosing