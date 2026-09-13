import BannerImg from "../../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 min-h-87.5 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
        {/* Text side */}
        <div className="min-w-0 w-full text-center md:text-left">
          <h1 className="font-extrabold leading-[1.05] text-gray-900 text-[32px] sm:text-[40px] md:text-[48px] lg:text-[58px]">
            Build Your Ideal
            <span className="block brand-gradient-text">Development Stack</span>
          </h1>

          <p className="mt-5 md:mt-6 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed text-gray-500 max-w-150 mx-auto md:mx-0">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-7 md:mt-10 flex items-center justify-center md:justify-start flex-wrap gap-2.5">
            <button className="btn btn-sm border-none brand-gradient text-white transition-transform hover:-translate-y-0.5">
              Explore Technologies
            </button>

            <button className="btn btn-sm btn-outline min-w-36 border-gray-300 text-gray-700 hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>

        {/* Image side */}
        <div className="flex-none w-full md:w-115 flex justify-center items-center">
          <img
            src={BannerImg}
            alt="Dev stack hero image"
            className="w-3/4 sm:w-2/3 md:w-full max-w-80 md:max-w-125 h-auto block"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
