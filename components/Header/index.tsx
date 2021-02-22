import React from "react";

import SocialsFragment from "./Socials";
import UserSummary from "./UserSummary";

import about from "../../config/about";
import headerConfig from "../../config/display";

const HeaderComponent: React.FC = () => {
  return (
    <div>
      <div>
        <img
          className="h-32 w-full object-cover lg:h-48"
          src={headerConfig.headerImage}
          alt="Header Image"
        />
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <img
              className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
              src={headerConfig.profileImage}
              alt={`Profile Image for ${about.me.name}`}
            />
          </div>
          <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
              <UserSummary />
            </div>

            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              <SocialsFragment />
            </div>
          </div>
        </div>
        <div className="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
          <UserSummary />
        </div>
      </div>
    </div>
  );
};
export default HeaderComponent;
