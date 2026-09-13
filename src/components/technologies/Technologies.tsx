import { Suspense, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import SelectedStack from "./SelectedStack";
import type { ITechnology } from "../../types/Types";
import { toast } from "react-toastify";

const technologyDataFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const Technologies = () => {
  const [technologyDataPromise] = useState(() => technologyDataFetch());
  const [selectedStack, setSelectedStack] = useState<ITechnology[]>([]);

  const handleAddToStack = (technology: ITechnology) => {
    setSelectedStack((selectedTechStack) => {
      const alreadyExists = selectedTechStack.find(
        (item) => item.id === technology.id,
      );

      if (alreadyExists) {
        toast.warning(`${technology.name} is already in your stack!`);
        return selectedTechStack;
      }
      toast.success(`${technology.name} added to your stack!`);
      return [...selectedTechStack, technology];
    });
  };

  return (
    <div className="container mx-auto px-4 lg:px-8 my-20">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#111827]">
          Explore the <span className="text-[#d91b7e]">Technologies</span>
        </h1>

        <p className="text-sm text-[#64748b] mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <Suspense
        fallback={
          <p className="text-xl font-semiboldbold">
            Loading Data{" "}
            <span className="loading loading-spinner loading-xl"></span>
          </p>
        }
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          {/* TechnologyCard - 3 columns */}
          <div className="w-full min-w-0 lg:col-span-3">
            <TechnologyCard
              technologyDataPromise={technologyDataPromise}
              handleAddToStack={handleAddToStack}
              selectedStack={selectedStack}
            />
          </div>

          {/* SelectedStack - 4th column */}
          <div className="w-full min-w-0 lg:col-span-1">
            <SelectedStack
              selectedStack={selectedStack}
              setSelectedStack={setSelectedStack}
            />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default Technologies;
