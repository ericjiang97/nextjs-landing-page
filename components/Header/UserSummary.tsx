import React from "react";
import about from "../../config/about";

const UserSummary: React.FC = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 truncate">Eric Jiang</h1>

      <div className="flex flex-wrap">
        {about.school && (
          <div className="flex">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                fill="#fff"
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
            <a
              className="text-sm font-semibold text-gray-400 truncate ml-1"
              href={about.school.url}
            >
              {about.school.name}
            </a>
          </div>
        )}
        {about.job && (
          <div className="flex md:ml-3">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div className="text-sm font-semibold text-gray-400 truncate ml-1">
              {about.job.jobTitle} at{" "}
              <a href={about.job.company.url} className="text-underline">
                {about.job.company.companyName}
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserSummary;
