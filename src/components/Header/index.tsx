import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconPhone,
  IconMapPin,
  IconBrandFacebook,
} from "@tabler/icons-react";

export default function Header() {
  return (
    <div className="relative mb-20">
      <nav className="bg-primary py-4 lg:flex lg:justify-evenly lg:gap-16 top-0 left-0 right-0 fixed">
        <div className="flex flex-shrink-0 justify-center items-center ml-4 mb-4 sm:mb-0">
          <img
            className="h-10 w-auto"
            src="./img/dent.webp"
            alt="Your Company"
          />
          <h2 className="text-white text-3xl font-bold ml-4">
            Your Oral Health
          </h2>
        </div>
        <ul className="flex list-none items-center justify-around gap-2 text-sm sm:text-base lg:justify-start lg:gap-16">
          <li className="text-white text-opacity-[0.9] flex flex-row content-center justify-center gap-1 pt-1 hover:underline hover:cursor-pointer">
            <IconMapPin size={22} color="white" />
            <a
              target={"_blank"}
              href="https://maps.app.goo.gl/mK9MMz4ntG538pWq6"
              rel="noreferrer"
            >
              <address>Calle 150 # 21a - 14, Bogotá.</address>
            </a>
          </li>
          <li className="flex flex-col sm:flex-row sm:gap-8">
            <div className="text-white text-opacity-[0.9] flex flex-row content-center justify-center gap-1 pt-1 hover:underline hover:cursor-pointer">
              <IconPhone size={22} color="white" />
              <a href="tel:3224450492">3224450492</a>
            </div>
            <div className="text-white text-opacity-[0.9] flex flex-row content-center justify-center gap-1 pt-1 hover:underline hover:cursor-pointer">
              <IconPhone size={22} color="white" />
              <a href="tel:3212780197">3212780197</a>
            </div>
          </li>
        </ul>
        <figure className="lg:flex lg:justify-end gap-3 pt-1 hidden">
          <a
            target="_blank"
            href="https://www.facebook.com/"
            className="text-white text-[16px] cursor-pointer hover:text-royal_blue"
          >
            <IconBrandFacebook />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/"
            className="text-white text-[16px] cursor-pointer hover:text-royal_blue"
          >
            <IconBrandInstagram />
          </a>
          <a
            target="_blank"
            href="https://www.twitter.com/"
            className="text-white text-[16px] cursor-pointer hover:text-royal_blue"
          >
            <IconBrandTwitter />
          </a>
        </figure>
      </nav>
    </div>
  );
}
