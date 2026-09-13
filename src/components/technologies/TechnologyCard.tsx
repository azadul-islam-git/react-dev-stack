import { use } from "react";
import { FaReact, FaStar } from "react-icons/fa";

const TechnologyCard = ({ technologyDataPromise }) => {
  const techData = use(technologyDataPromise);
  console.log(techData);

  return (
    <div className="card w-full max-w-61.25 bg-base-100 border border-base-200 rounded-2xl shadow-sm p-4">
      {/* Top: Icon + Popular Badge */}
      <div className="flex items-center justify-between">
        <FaReact className="text-3xl text-[#61DAFB]" />

        <span className="badge badge-info badge-outline rounded-full text-xs px-3 py-3">
          Popular
        </span>
      </div>

      {/* Title + Description */}
      <div className="mt-4">
        <h2 className="text-xl font-bold text-base-content">React</h2>

        <p className="text-sm text-base-content/60 leading-5 mt-2">
          A declarative, component-based JavaScript library for building modern
          user interfaces.
        </p>
      </div>

      {/* Divider */}
      <div className="divider my-3"></div>

      {/* Bottom Info */}
      <div className="flex items-center justify-between gap-2 text-xs">
        <span className="badge badge-ghost text-xs">Frontend</span>

        <small className="text-base-content/60">Beginner-Friendly</small>

        <span className="flex items-center gap-1 text-base-content">
          <FaStar className="text-yellow-500" />
          4.9
        </span>
      </div>

      {/* Button */}
      <button className="btn btn-sm w-full mt-4 rounded-lg bg-[#0b1120] text-white border-none hover:bg-[#1a2338]">
        Add to Stack
      </button>
    </div>
  );
};

export default TechnologyCard;
