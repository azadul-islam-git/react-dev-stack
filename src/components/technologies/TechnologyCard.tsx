import { use } from "react";
import { FaStar } from "react-icons/fa";
import type { ITechnology } from "../../types/Types";

interface TechnologyProps {
  technologyDataPromise: Promise<ITechnology[]>;
  handleAddToStack: (technology: ITechnology) => void;
  selectedStack: ITechnology[];
}

const TechnologyCard = ({
  technologyDataPromise,
  handleAddToStack,
  selectedStack,
}: TechnologyProps) => {
  const techData = use(technologyDataPromise);

  return (
    <div className="w-full min-w-0">
      {/* Technology Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {techData.map((technology) => {
          const isAdded = selectedStack.some(
            (item) => item.id === technology.id,
          );

          return (
            <div
              key={technology.id}
              className="card w-full min-w-0 bg-base-100 border border-base-200 rounded-2xl shadow-sm p-4"
            >
              {/* Top: Icon + Badge */}
              <div className="flex items-center justify-between gap-2">
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
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
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
              <button
                className={`btn btn-sm w-full mt-4 rounded-lg border-none ${
                  isAdded
                    ? "bg-green-500 text-white"
                    : "bg-[#0b1120] text-white hover:bg-[#1a2338]"
                }`}
                onClick={() => handleAddToStack(technology)}
              >
                {isAdded ? "✓ Added to Stack" : "Add to Stack"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechnologyCard;
