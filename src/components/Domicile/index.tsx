function Domicile() {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
            <div className="flex lg:py-12">
              <img
                src="./img/feature.webp"
                className="w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px]"
                alt="image"
              />
            </div>
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div className="flex h-full items-center rounded-lg bg-[#0e264f] p-6 text-center text-white lg:pl-12 lg:text-left">
              <div className="lg:pl-12">
                <h2 className="mb-6 text-3xl font-bold">
                  Odontología General y Especializada
                </h2>
                <p className="mb-4 pb-2 lg:pb-0 text-sm leading-relaxed">
                  Cuidamos tu salud oral de forma integral. Nuestra atención cubre el diagnóstico, prevención y tratamiento de las enfermedades más comunes de la boca, dientes y encías. Realizamos limpiezas profesionales, obturaciones, extracciones, tratamientos de conductos y revisiones periódicas para mantener tu salud oral en óptimas condiciones.
                </p>
                <p className="mb-4 pb-2 lg:pb-0 text-sm leading-relaxed">
                  Contamos además con servicios especializados en cirugía oral, extracción de cordales, implantología dental y diseño de sonrisa y armonización orofacial, para una atención completa que preserve tus dientes a lo largo de tu vida.
                </p>
                <p className="pb-2 lg:pb-0 text-sm leading-relaxed">
                  Nuestros profesionales altamente capacitados utilizan tecnología de vanguardia para ofrecerte un diagnóstico preciso, cómodo y seguro. Agenda tu cita hoy y da el primer paso hacia una sonrisa saludable y duradera.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Domicile;