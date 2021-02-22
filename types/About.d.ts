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
    // twitter handle
    twitter?: string;
    // your instagram handle
    instagram?: string;
    // your linkedin username
    linkedin?: string;
  };
  me: {
    name: string;
  };
}

export default About;
