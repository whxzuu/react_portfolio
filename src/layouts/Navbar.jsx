import { useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex justify-center">
      <div
        className="sm:cursor-pointer fixed top-10 left-10 z-[999] rounded-lg bg-white/40 p-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={34} />
      </div>
      <nav
        className={`fixed  z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${
          showMenu ? "bottom-10" : "bottom-[-100%]"
        }`}
      >
        {nav.map((item, i) => (
          <div key={i} className="relative group flex flex-col items-center">
            <a
              href={item.link}
              onClick={() => setActive(i)}
              className={`text-xl p-2.5 rounded-full sm:cursor-pointer 
     ${i === active && "bg-dark_primary text-white"} `}
            >
              {createElement(item.icon)}
            </a>
            {/* Tooltip */}
            <span
              className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 
                 opacity-0 group-hover:opacity-100 
                 bg-dark_primary text-white text-sm rounded-xl px-2 py-1 
                 transition-opacity duration-200 whitespace-nowrap"
            >
              {item.name}
            </span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
