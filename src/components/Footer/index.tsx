import { IconClockHour4, IconMapPin, IconPhone } from "@tabler/icons-react";

function Footer() {
  return (
    <footer className="bg-primary p-6">
      <div className="grid gap-8 sm:grid-cols-2 my-12 container mx-auto justify-around">
        <div>
          <a className="text-white font-bold font-['Poppins'] text-4xl">
            YourOralHealth.
          </a>
          <p className="text-gray-300 text-sm mt-3">
            Contáctanos hoy mismo para programar tu cita o resolver cualquier
            pregunta. Tu salud bucal es nuestra prioridad.
          </p>
          <div className="text-gray-300 flex gap-5 mt-10">
            <span className="bg-gradient-to-tr from-blue-400 to-blue-600 h-10 w-10 text-white rounded-full flex justify-center items-center">
              <IconClockHour4 color="white" />
            </span>
            <div className="text-sm">
              <p>Lunes - Viernes (9:00am 8:00pm) </p>
              <p>Sábado - Domingo (9:00am 5:00pm) </p>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:justify-center">
          <ul>
            <li>
              <p className="text-white font-bold text-2xl">Contacto</p>
            </li>
            <li className="text-gray-300 flex gap-5 items-center mt-5">
              <span className="bg-gradient-to-tr from-blue-400 to-blue-600 h-10 w-10 text-white rounded-full flex justify-center items-center">
                <IconMapPin color="white" />
              </span>
              <div className="hover:underline hover:cursor-pointer">
                <a
                  target={"_blank"}
                  href="https://maps.app.goo.gl/mK9MMz4ntG538pWq6"
                  rel="noreferrer"
                >
                  Calle 150 # 21a - 14, Bogotá
                </a>
              </div>
            </li>
            <li className="text-gray-300 flex gap-5 items-center mt-5">
              <span className="bg-gradient-to-tr from-blue-400 to-blue-600 h-10 w-10 text-white rounded-full flex justify-center items-center">
                <IconPhone color="white" />
              </span>
              <div className="hover:underline hover:cursor-pointer">
                <a href="tel:3212780197">321 278 0197</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
