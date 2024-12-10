import { Link, NavLink } from "react-router-dom"
import { FaShoppingBag } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from 'react';


const navItems = [
  { path: '/', label: 'Furniture'},
  { path: '/shop', label: 'Shop'},
  { path: '/about', label: 'About Us'},
  { path: '/contact', label: 'Contact'},
]

const NavItems = ({toggleMenu}) =>{
  return(
      <ul className="flex flex-col md:flex-row items-center md:space-x-8">
        {
          navItems.map((item, index) => (
            <li key={index} onClick={toggleMenu}>
              <NavLink to={item.path}  className={({ isActive }) =>
                    isActive
                     ? "text-primary font-bold"  
                     : "hover:text-primary"
                     }>{item.label}</NavLink>
            </li>
          
          ))
        }
      </ul>
  )
}

function Navber() {
  const[isMenuOpen,setIsMenuOpen] = useState("false");
  const[isScrolled,setIsScrolled] = useState("false");
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState)
  }

  // when scrool  ,apply bg color nav ber
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transtion duration-300 ease-in-out text-white ${isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'} `}>
         <nav className="mx-w-screen-2xl container flex justify-between items-center py-6 px-4">
         {/* logo */}
            <Link to="/" className="font-bold">panto</Link>
         {/* hamburger mobile menu */}
         <div onClick={toggleMenu} className="md:hidden text-xl cursor-pointer hover:text-primary">
           {
            isMenuOpen ? null : <FaBars />
           }
         </div>
         {/*desktop menu */}
         <div className="hidden md:flex">
            <NavItems/>
         </div>
          {/* mobile menu items */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
                <div className="absolute top-4 right-4 text-xl cursor-pointer" onClick={toggleMenu}>
                <FaTimes />
                </div>
                <NavItems toggleMenu={toggleMenu}/>
            </div>
         {/* cart icon */}
         <div className="hidden md:block cursor-pointer relative">
         <FaShoppingBag className="text-xl " />
         <sup className="absolute top:0  bg-primary text-white w-3 h-4 rounded-full flex items-center justify-center text-xs">0</sup>
         </div>
         </nav>
      </header>
    </>
  )
}

export default Navber