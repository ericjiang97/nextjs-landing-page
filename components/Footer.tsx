import React from "react";

import about from "../config/about";

const Footer = () => {
  return (
    <footer className="mt-24 bg-gray-900 sm:mt-12">
      <div className="mx-auto max-w-md py-12 px-4 overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <p className="mt-8 text-center text-base text-gray-400">
          Copyright &copy;{` ${new Date().getFullYear()} ${about.me.name}`}.
        </p>
        <p className="mt-8 text-center text-base text-gray-400">
          Built with <a href="https://nextjs.org/">NextJS</a>,{" "}
          <a href="https://tailwindcss.com">Tailwind</a> &amp;{" "}
          <a href="https://fontawesome.com">FontAwesome</a>. Powered by{" "}
          <a href="https://vercel.com">Vercel</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
