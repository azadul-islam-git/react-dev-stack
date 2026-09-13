import { use } from "react";
import { FaStar } from "react-icons/fa";
import type { ITechnology } from "../../types/Types";

interface TechnologyProps {
  technologyDataPromise: Promise<ITechnology[]>;
}

const TechnologyCard = ({ technologyDataPromise }: TechnologyProps) => {
  const techData = use(technologyDataPromise);

  return (
    <div className="container mx-auto px-4 lg:px-8 my-10">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#111827]">
          Explore the <span className="text-[#d91b7e]">Technologies</span>
        </h1>

        <p className="text-sm text-[#64748b] mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Technology Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {techData.map((technology) => (
          <div
            key={technology.id}
            className="card w-full bg-base-100 border border-base-200 rounded-2xl shadow-sm p-4"
          >
            {/* Top: Icon + Badge */}
            <div className="flex items-center justify-between">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-10 h-10 object-contain"
              />

              <span className="badge badge-info badge-outline rounded-full text-xs px-3 py-3">
                {technology.badge}
              </span>
            </div>

            {/* Title + Description */}
            <div className="mt-4">
              <h2 className="text-xl font-bold text-base-content">
                {technology.name}
              </h2>

              <p className="text-sm text-base-content/60 leading-5 mt-2">
                {technology.description}
              </p>
            </div>

            {/* Divider */}
            <div className="divider my-3"></div>

            {/* Bottom Info */}
            <div className="flex items-center justify-between gap-2 text-xs">
              <span className="badge badge-ghost text-xs">
                {technology.category}
              </span>

              <small className="text-base-content/60">
                {technology.difficulty}
              </small>

              <span className="flex items-center gap-1 text-base-content">
                <FaStar className="text-yellow-500" />
                {technology.rating}
              </span>
            </div>

            {/* Button */}
            <button className="btn btn-sm w-full mt-4 rounded-lg bg-[#0b1120] text-white border-none hover:bg-[#1a2338]">
              Add to Stack
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyCard;
