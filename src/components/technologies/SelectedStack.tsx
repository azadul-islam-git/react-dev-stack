import { toast } from "react-toastify";
import type { ITechnology } from "../../types/Types";
import { RxCross2 } from "react-icons/rx";

interface SelectedStackProps {
  selectedStack: ITechnology[];
  setSelectedStack: React.Dispatch<React.SetStateAction<ITechnology[]>>;
}

const SelectedStack = ({
  selectedStack,
  setSelectedStack,
}: SelectedStackProps) => {
  // Remove one technology
  const handleRemove = (id: string) => {
    const removedTechnology = selectedStack.find(
      (technology) => technology.id === id,
    );

    setSelectedStack((prevStack) =>
      prevStack.filter((technology) => technology.id !== id),
    );

    toast.success(`${removedTechnology?.name} removed from your stack!`);
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    toast.success("All technologies removed!");
    setSelectedStack([]);
  };

  return (
    <div className="w-full rounded-3xl bg-white p-5 shadow-xl">
      {/* Heading */}
      <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>

      <p className="mt-1 text-sm text-gray-400">
        {selectedStack.length === 0
          ? "No technologies selected yet."
          : `${selectedStack.length} Technology Selected`}
      </p>

      {/* Empty State */}
      {selectedStack.length === 0 ? (
        <div className="mt-4 flex h-28 items-center justify-center rounded-2xl border border-dashed border-gray-200">
          <span className="text-sm text-gray-400">Your stack is empty.</span>
        </div>
      ) : (
        /* Selected Technologies */
        <div className="mt-4 space-y-2">
          {selectedStack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center justify-between gap-2 rounded-xl border border-gray-200 p-3"
            >
              {/* Icon + Name */}
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-8 h-8 object-contain"
                />

                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {technology.name}
                  </h3>

                  <p className="text-[10px] text-gray-400">
                    {technology.category}
                  </p>
                </div>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => handleRemove(technology.id)}
                className="text-gray-400 hover:text-red-500 text-xl"
              >
                <RxCross2 />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Remove All Button */}
      {selectedStack.length > 0 && (
        <button
          onClick={handleRemoveAll}
          className="btn btn-outline btn-error w-full mt-12 rounded-xl font-bold"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default SelectedStack;
