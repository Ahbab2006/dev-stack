import HeroImg from '../assets/banner-stack.png'

const Hero = () => {
    return (
       <div className="max-w-6xl mx-auto flex items-center justify-between gap-12 py-16 px-4  border-b border-gray-200">

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
    );
};

export default Hero;