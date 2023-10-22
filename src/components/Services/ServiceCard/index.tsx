type Card = {
  title: string;
  text: string;
  imageUrl: string;
};

function ServiceCard({ title, text, imageUrl }: Card) {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
        <img
          className="h-40 rounded w-full object-cover object-center mb-6"
          src={imageUrl}
          alt="content"
        />
        <h2 className="text-lg text-secondary font-medium title-font mb-4">
          {title}
        </h2>
        <p className="leading-relaxed text-base">{text}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
