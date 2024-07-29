import LasuLogo from '../images/lasuLogo 1.png';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const [scroll, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  }, []);

  const location = useLocation();

  // Set the active link based on the current location
  const getLinkClassName = (path) =>
    `font-extrabold text-2xl md:text-4xl duration-500 ${
      location.pathname === path ? 'text-[#49C56C]' : 'text-[#0900FF]'
    }`;

  return (
    <header
      className={`${
        scroll ? 'bg-blue-100' : 'bg-white '
      }   z-10 flex justify-around text-white italic shadow-md items-center px-2 md:px-2 lg:px-24 fixed w-full top-0 pt-16 left-0 transition-colors duration-300 ease-in-out`}
    >
      <div className="flex gap-3">
        <img src={LasuLogo} alt="My-Lasu-Logo" />
        <h2 className="text-2xl sm:text-2xl lg:text-4xl  font-extrabold font-sansita  text-black">
          LASU LIBRARY
        </h2>
      </div>

      <nav>
        <ul className="flex flex-col md:flex-row md:gap-12 gap-6 text-[#0900FF] text-[14px] md:text-[17px] font-extrabold">
          <li>
            <Link to="/" className={getLinkClassName('/')}>
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/readers"
              className={getLinkClassName('/readers')}
            >
              READERS
            </Link>
          </li>
          <li>
            <Link to="/books" className={getLinkClassName('/books')}>
              BOOKS
            </Link>
          </li>
          <li>
            <Link
              to="/my-bag"
              className={getLinkClassName('/my-bag')}
            >
              MY BAG
            </Link>
          </li>
          <li>
            <Link
              to="/returns"
              className={getLinkClassName('/returns')}
            >
              RETURNS
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
