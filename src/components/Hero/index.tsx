import Button from "../Button";

export const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-200">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center sm:ml-10">
          <h2 className="text-secondary text-3xl font-bold hidden sm:block mb-4">
            Bienvenido a
          </h2>
          <h1 className="sm:text-6xl text-3xl mb-4 text-primary font-bold">
            {"Tu odontólogo de "}
            <br className="hidden lg:inline-block" />
            cabecera
          </h1>
          <p className="text-primary mb-8 leading-relaxed sm:text-2xl sm:mt-4">
            Descubre una odontología moderna y accesible en nuestro consultorio,
            donde tu bienestar dental es nuestra prioridad, y tu sonrisa,
            nuestro orgullo.
          </p>
          <div className="flex justify-center">
            <Button text="Agendar cita" />
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./img/hero-banner.webp"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
