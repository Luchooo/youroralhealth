import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section className="pt-32 pb-0">
      <div className="container mx-auto p-6">
        <p className="text-center text-2xl text-secondary font-extrabold uppercase mb-3">
          Nuestros servicios
        </p>
        <h2 className="text-center mb-14 text-4xl text-primary font-bold">
          Lo que ofrecemos
        </h2>
        <ul className="grid gap-4 lg:grid-cols-3 lg:grid-rows-3 sm:grid-cols-1 md:grid-cols-2">
          <ServiceCard
            title={"Endodoncia"}
            text={"Salvamos dientes dañados de forma efectiva."}
            imageUrl={"./img/service-icon-1.webp"}
          />
          <ServiceCard
            title={"Higiene Oral"}
            text={"Sonrisa fresca y saludable gracias a nuestra higiene bucal."}
            imageUrl={"./img/service-icon-2.webp"}
          />
          <ServiceCard
            title={"Ortodoncia"}
            text={"Transforma tu sonrisa con nuestra ortodoncia personalizada."}
            imageUrl={"./img/service-icon-3.webp"}
          />
          <li className="hidden xl:grid xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:row-end-4 xl:self-center">
            <figure>
              <img
                src={"./img/service-banner.webp"}
                width="409"
                height="467"
                className="w-full"
              />
            </figure>
          </li>
          <ServiceCard
            title={"Urgencias Odontológicas"}
            text={"Atención rápida y profesional en casos de emergencia."}
            imageUrl={"./img/service-icon-4.webp"}
          />
          <ServiceCard
            title={"Coronas"}
            text={"Coronas dentales para restaurar tu sonrisa."}
            imageUrl={"./img/service-icon-5.webp"}
          />
          <ServiceCard
            title={"Manejo de dolor"}
            text={"Dolor dental, soluciones efectivas y alivio inmediato."}
            imageUrl={"./img/service-icon-6.webp"}
          />
        </ul>
      </div>
    </section>
  );
}

export default Services;
