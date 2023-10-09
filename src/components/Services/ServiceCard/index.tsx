type Card = {
  title: string;
  text: string;
  imageUrl: string;
};

function ServiceCard({ title, text, imageUrl }: Card) {
  return (
    <li className="list-none">
      <div className="flex justify-start gap-8 min-h-full border border-solid border-gray-300 rounded p-7">
        <div className="w-14 shrink-0">
          <img src={imageUrl} width="100" height="100" className="w-full" />
        </div>
        <div>
          <h3 className="text-2xl font-extrabold mb-2 text-primary">{title}</h3>
          <p className="leading-7 text-gray-500">{text}</p>
        </div>
      </div>
    </li>
  );
}

export default ServiceCard;
