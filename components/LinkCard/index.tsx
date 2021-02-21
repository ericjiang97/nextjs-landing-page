import React from "react";

import LinkCardProps from "./types";

const LinkCard: React.FC<LinkCardProps> = ({ link }) => {
  return (
    <a href={link.url} target={link.target || "_self"}>
      <div className="max-w-md mx-auto my-3 rounded-xl shadow-md overflow-hidden min-w-full md:max-w-2xl ring-2 border-grey-300 border-solid border-1">
        <div className="md:flex">
          <div className="p-8 flex-1">
            <div className="text-center tracking-wide text-xl  text-indigo-500 font-semibold">
              {link.name}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default LinkCard;
