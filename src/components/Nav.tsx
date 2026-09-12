
import Logo from '../assets/logo-text.png'
import HeroImg from '../assets/banner-stack.png'

const Nav = () => {
  return (
    <nav className="bg-white border-b border-gray-200 ">

      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
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
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-12 py-20 px-4">

        <div className="flex-1">
          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Build Your Ideal <br />

            <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-gray-600 text-lg leading-7">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="btn rounded-2xl border-none text-white bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED]">
              Explore Technologies
            </button>

            <button className="btn rounded-2xl bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <img
            src={HeroImg}
            alt="Development Stack"
            className="max-w-full h-auto"
          />
        </div>

      </div>
    </nav>


  );
};

export default Nav;