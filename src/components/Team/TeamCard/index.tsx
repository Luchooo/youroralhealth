import { IconBooks, IconBuilding } from "@tabler/icons-react";
import "./style.css"


type Doctor = {
  name: string;
  profession: string;
  university: string;
  rol?: string;
};

function TeamCard({ name, profession, university, rol }: Doctor) {
  return (
    <div className="p-8 border border-solid border-gray-300 rounded text-center h-52 w-72 flex flex-col items-center justify-center">
      <h3 className="text-xl font-bold text-primary">{name}</h3>
      <p className="text-secondary mt-3 mx-3 font-semibold">{profession}</p>
      <section className="mt-4 border-t-2">
        <div className="flex items-center justify-center my-2">
          <IconBuilding size={20} color="#00173d" />
          <p className="mx-3 text-xs">{university}</p>
        </div>
        {!!rol ? (
          <div className="flex items-center justify-center">
            <IconBooks size={20} color="#00173d" />
            <p className="mx-3 text-balance text-xs">{rol}</p>
          </div>
        ) : (
          ""
        )}
      </section>
    </div>
  );
}

export default TeamCard;
