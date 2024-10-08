import React, { useState, useEffect } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out max-w-3xl mx-auto ${
        isScrolled ? 'bg-black bg-opacity-50 py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center bg-gray-800 bg-opacity-50 rounded-full px-4 sm:px-6 ${
            isScrolled ? 'py-2' : 'py-3'
          }`}
        >
          <div
            className={`text-md md:text-xl font-bold transition-all duration-300 ${
              isScrolled ? 'text-base' : ''
            }`}
          >
            {'<Shiva />'}
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-100 hover:text-gray-300">
                  home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-500 hover:text-gray-300">
                  about
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-500 hover:text-gray-300"
                >
                  projects
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
