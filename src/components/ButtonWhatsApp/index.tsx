import { IconBrandWhatsapp } from "@tabler/icons-react";

function ButtonWhatsApp() {
  return (
    <div className="fixed">
      <a
        target={"_blank"}
        href="https://api.whatsapp.com/send/?phone=+573212780197&text=Hola, necesito más información."
        rel="noreferrer"
        className="fixed bottom-6 right-4 bg-[#25d366] hover:bg-[#00a884] h-16 w-16 text-white rounded-full flex justify-center items-center hover:cursor-pointer"
      >
        <IconBrandWhatsapp size={45} color="#fff" />
      </a>
    </div>
  );
}

export default ButtonWhatsApp;
