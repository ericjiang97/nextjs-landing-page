interface School {
  name: string;
  url?: string;
}

interface WorkCompany {
  companyName: string;
  url?: string;
}

interface Job {
  jobTitle: string;
  company: WorkCompany;
}

interface About {
  school?: School;
  job?: Job;
  socials?: {
    twitter: string;
  };
}

const about: About = {
  socials: {
    twitter: "ericjiang97",
  },
  school: {
    name: "Monash University",
    url: "https://monash.edu",
  },
  job: {
    jobTitle: "Test Engineer",
    company: {
      companyName: "Google",
      url: "https://about.google",
    },
  },
};

export default about;
