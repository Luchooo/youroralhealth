import { IconBooks } from "@tabler/icons-react";

type Doctor = {
  name: string;
  imageUrl: string;
  profession: string;
  university: string;
};

function TeamCard({ name, imageUrl, profession, university }: Doctor) {
  return (
    <li className="snap-start min-w-full sm:min-w-[50%] md:min-w-[30%] lg:min-w-[20%]">
      <div className="p-8 border border-solid border-gray-300 rounded text-center min-h-full">
        <div className="flex justify-center gap-3 items-center border rounded overflow-hidden mb-6">
          <img
            src={imageUrl}
            alt="Doctor 1"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-2xl font-bold text-primary">{name}</h3>
        <p className="text-secondary mt-3 mx-3 font-semibold">{profession}</p>
        <div className="flex items-center justify-center">
          <IconBooks size={24} color="#00173d" />
          <p className="text-secondary mx-3">{university}</p>
        </div>
      </div>
    </li>
  );
}

export default TeamCard;
