import React from "react";

const Footer = () => {
  return (
    <footer className="mt-24 bg-gray-900 sm:mt-12">
      <div className="mx-auto max-w-md py-12 px-4 overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {/* <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-400 hover:text-gray-300">
              About
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-400 hover:text-gray-300">
              Blog
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-400 hover:text-gray-300">
              Jobs
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-400 hover:text-gray-300">
              Press
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-400 hover:text-gray-300">
              Accessibility
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-base text-gray-400 hover:text-gray-300">
              Partners
            </a>
          </div> */}
        </nav>

        <p className="mt-8 text-center text-base text-gray-400">
          Copyright &copy; 2020 Eric Jiang.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
