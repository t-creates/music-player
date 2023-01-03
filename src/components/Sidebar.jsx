import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';

import { logo } from '../assets';
import { links } from '../assets/constants';

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" color="#0074d9" />
        <span className="text-[#0074d9] hover:text-black text-base font-medium">
          {item.name}
        </span>
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-gradient-to-br from-black/50 to-silver ">
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks />
      </div>

      {/* Mobile Menu */}
      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine className="h-6 w-6 text-white mr-2" onClick={() => setMobileMenuOpen(false)} />
        ) : <HiOutlineMenu className="h-6 w-6 text-white mr-2" onClick={() => setMobileMenuOpen(true)} />}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-silver backdrop-blur-lg
      z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : 'left-full'}`}
      >
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
