import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";




function Footer() {
  return (
    <footer className="mx-auto bg-[#F7F7F7] text-black dark:bg-gray-800 dark:text-white pt-20 mt-5  pb-5">
       <div className="section_contniner grid grid-col-1 sm:grid-cols-2 md:grid-cols-5 gap-8 ">
       {/* logo and Ditals  */}
          <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4 "><Link to="/">panto</Link></h2>
              <p className="md:mr-12">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
          </div>
          {/* Services div */}
          <div>
              <h2 className="text-xl font-semibold mb-4 text-primary">Services</h2>
              <ul className="space-y-2 ">
                 <li>
                     <Link to="/" className="hover:text-primary">Email Marketing</Link>
                 </li>
                 <li>
                     <Link to="/" className="hover:text-primary">Campaigns</Link>
                 </li>
                 <li>
                     <Link to="/" className="hover:text-primary">Branding</Link>
                 </li>
              </ul>
          </div>
          {/* Furniture div */}
          <div>
              <h2 className="text-xl font-semibold mb-4 text-primary">Furniture</h2>
              <ul  className="space-y-2 ">
                 <li>
                     <Link to="/" className="hover:text-primary">Beds</Link>
                 </li>
                 <li>
                     <Link to="/" className="hover:text-primary">Chair</Link>
                 </li>
                 <li>
                     <Link to="/" className="hover:text-primary">All</Link>
                 </li>
              </ul>
          </div>
          {/* Follow Us div */}
          <div  className="space-y-2 ">
              <h2 className="text-xl font-semibold mb-4 text-primary">Follow Us</h2>
              <ul>
                 <li>
                     <Link to="/" className="hover:text-primary flex items-center gap-2 space-x-2"><FaFacebook />Facebook</Link>
                 </li>
                 <li>
                     <Link to="/" className="hover:text-primary flex items-center gap-2 space-x-2"><IoLogoTwitter /> Twitter</Link>
                 </li>
                 <li>
                     <Link to="/" className="hover:text-primary flex gap-2 space-x-2 items-center"><AiFillInstagram /> Instagram</Link>
                 </li>
              </ul>
          </div>

       </div>
       {/* copyright */}
       <div className="mt-12 section_contniner flex flex-col sm:flex-row sm:items-center sm:justify-between sm:text-center gap-4 text-left text-black dark:bg-gray-800 dark:text-white border-t border-gray-400 pt-4">
          <p>Copyright&copy;{new Date().getFullYear()}</p>
          <div className="flex gap-8">
              <p><Link to="/" className="hover:text-primary">Terms & Conditions</Link></p>
              <p><Link to="/" className="hover:text-primary">Privacy Policy </Link></p>
          </div>
       </div>
    </footer>
  )
}

export default Footer