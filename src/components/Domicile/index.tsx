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
                  Atención domiciliaria
                </h2>
                <p className="mb-6 pb-2 lg:pb-0">
                  Brindamos atención dental a domicilio. Nuestro equipo
                  profesional se desplaza a tu hogar para ofrecer servicios
                  dentales personalizados y convenientes. Tu sonrisa es nuestra
                  prioridad.
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
