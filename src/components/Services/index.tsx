import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <>
      <section className="pt-32 pb-0">
        <div className="container mx-auto p-6">
          <p className="text-center text-2xl text-secondary font-extrabold uppercase mb-3">
            Nuestros servicios
          </p>
          <h2 className="text-center text-4xl text-primary font-bold">
            Lo que ofrecemos
          </h2>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            <ServiceCard
              title={"Ortodoncia"}
              text={
                "Transformamos tu sonrisa para que luzcas radiante."
              }
              imageUrl={"./img/service-1.webp"}
            />
            <ServiceCard
              title={"Endodoncia"}
              text={"Recupera la salud dental y disfruta de un alivio inmediato."}
              imageUrl={"./img/service-2.webp"}
            />
            <ServiceCard
              title={"Implantología"}
              text={"Recupera dientes perdidos y disfruta de una sonrisa completa."}
              imageUrl={"./img/service-3.webp"}
            />
            <ServiceCard
              title={"Cirujía"}
              text={"Soluciones quirúrgicas precisas para una sonrisa perfecta."}
              imageUrl={"./img/service-4.webp"}
            />
            <ServiceCard
              title={"Diseño de sonrisa"}
              text={"Diseñamos tu sonrisa para que refleje tu belleza única."}
              imageUrl={"./img/service-5.webp"}
            />
            <ServiceCard
              title={"Higiene Oral"}
              text={
                "Mantenemos tu boca saludable para una vida plena."
              }
              imageUrl={"./img/service-6.webp"}
            />
            <ServiceCard
              title={"Urgencias Odontológicas"}
              text={"Estamos aquí para ayudarte en situaciones de emergencia."}
              imageUrl={"./img/service-7.webp"}
            />
             <ServiceCard
              title={"Periodoncia"}
              text={"Cuida tus encías para mantener una sonrisa firme y sana."}
              imageUrl={"./img/service-8.webp"}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
