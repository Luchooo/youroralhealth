import { IconBrandWhatsapp } from "@tabler/icons-react";

function ButtonWhatsApp() {
  return (
    <div className="fixed">
      <a
        target={"_blank"}
        href="https://api.whatsapp.com/send/?phone=+573212780197&text=¡Hola!%20👋%20Bienvenido(a)%20a%20Your%20Oral%20Health.%20🦷✨%20Gracias%20por%20contactarnos.%20Será%20un%20placer%20atenderte%20y%20brindarte%20la%20mejor%20atención%20para%20el%20cuidado%20de%20tu%20sonrisa.%20¿En%20qué%20podemos%20ayudarte%20hoy?"
        rel="noreferrer"
        className="fixed bottom-6 right-4 bg-[#25d366] hover:bg-[#00a884] h-16 w-16 text-white rounded-full flex justify-center items-center hover:cursor-pointer"
      >
        <IconBrandWhatsapp size={45} color="#fff" />
      </a>
    </div>
  );
}

export default ButtonWhatsApp;
