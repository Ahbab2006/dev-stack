
import Logo from '../assets/logo-text.png'


const Nav = () => {
  return (
    
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">

        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4 sticky top-0 z-50">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />

          <ul className="hidden md:flex items-center gap-7  font-medium">
            <li>
              <a href="#" className="hover:text-[#D81B7E] transition text-[#D81B7E]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className=" text-gray-700 hover:text-[#D81B7E] transition">
                Technologies
              </a>
            </li>
            <li>
              <a href="#" className=" text-gray-700 hover:text-[#D81B7E] transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className=" text-gray-700 hover:text-[#D81B7E] transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className=" text-gray-700 hover:text-[#D81B7E] transition">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex gap-3">
            <button className="btn rounded-2xl bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
              Sign In
            </button>

            <button className="btn rounded-2xl border-none text-white bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED]">
              Sign Up
            </button>
          </div>
        </div>
  
      </nav>
    

  );
};

export default Nav;