import { socials } from "../constants";

import Section from "./Section";

function Footer() {
  // Returned JSX
  return (
    <Section crosses className="!px-0 !py-10" id="footer">
      <footer className="container flex sm:justify-between justify-center items-stretch sm:items-start gap-2 sm:gap:10 max-sm:flex-col caption text-n-4">
        <div>
          <ul className="flex gap-5 flex-wrap mb-6 sm:mb-3 max-sm:justify-center ">
            {socials.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-[#155EFC] rounded-full transition-colors hover:bg-black"
              >
                <img
                  src={item.iconUrl}
                  width={16}
                  height={16}
                  alt={item.title}
                />
              </a>
            ))}
          </ul>
          <p className="max-sm:text-center lg:block">
            &copy; {new Date().getFullYear()}. Cryenx Labs. All Rights reserved
          </p>
        </div>
        <div className="text-center sm:text-right max-sm:text-xs text-[#212F4F]">
          <p>
            Built with ❤️ at Cryenx Labs.
          </p>
        </div>
      </footer>
    </Section>
  );
}

export default Footer;