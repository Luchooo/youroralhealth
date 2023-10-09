import Button from "../Button";

function Cta() {
  return (
    <section className="bg-[#0e264f]">
      <div className="container mx-auto">
        <div className="container grid md:grid-cols-2 items-center sm:w-full">
          <figure className="lg:-mt-20 md:mt-0 mt-7">
            <img
              src="./img/cta-banner.webp"
              width="1056"
              height="1076"
              alt="cta banner"
              className="lg:w-[70%] w-[80%] mx-auto"
            />
          </figure>
          <div className="flex flex-col py-8 md:py-16 px-6">
            <p className="text-secondary md:text-xl font-bold mb-3 text-xl">
              Reserva tu cita dental
            </p>
            <h2 className="text-white lg:text-5xl md:text-4xl font-bold mb-9 text-3xl">
              Dale a tu sonrisa el cuidado que se merece.
            </h2>
            <Button text={"Agendar cita"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
