type Button = {
  text: string;
};
const Button = ({ text }: Button) => {
  return (
    <div>
      <a
        target={"_blank"}
        href="https://api.whatsapp.com/send/?phone=+573212780197&text=Hola, quiero agendar una cita."
        rel="noreferrer"
        className="bg-gradient-to-tr from-carolina_blue to-royal_blue hover:bg-gradient-to-tl cursor-pointer py-4 px-6 rounded-md text-white text-[18px] font-bold text-opacity-[0.8]"
      >
        {text}
      </a>
    </div>
  );
};

export default Button;
