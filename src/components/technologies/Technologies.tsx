import { Suspense } from "react";
import TechnologyCard from "./TechnologyCard";
import type { ITechnology } from "../../types/Types";

const Technologies = () => {
  const technologyDataPromise = async (): Promise<ITechnology[]> => {
    const res = await fetch("/data.json");
    const data = await res.json();
    return data;
  };

  return (
    <div>
      <Suspense fallback={<p>Loading Data....</p>}>
        <TechnologyCard
          technologyDataPromise={technologyDataPromise()}
        ></TechnologyCard>
      </Suspense>
    </div>
  );
};

export default Technologies;
