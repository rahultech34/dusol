export interface HomePageNotice {
  id: string;
  title: string;
  date?: string;
  link: string;
  isNew?: boolean;
}

export interface ProgrammeTableItem {
  code: string;
  name: string;
  description: string;
  duration: string;
}

export interface WhyChooseFeature {
  title: string;
  description: string;
}

export interface HomePageFAQ {
  id: string;
  question: string;
  answer: string;
}

export interface HomePageContent {
  seo: {
    title: string;
    description: string;
    keywords?: string;
  };
  about: {
    heading: string;
    subheading?: string;
    paragraphs: string[];
  };
  notices: HomePageNotice[];
  programmes: {
    intro: string;
    bachelorCourses: ProgrammeTableItem[];
    masterCourses: ProgrammeTableItem[];
  };
  eligibility: {
    title: string;
    ugQualification: string;
    pgQualification: string;
    ugMarks: string;
    pgMarks: string;
    entranceExams: string;
    generalRequirements: string[];
  };
  whyChoose: {
    heading: string;
    paragraphs: string[];
    features: WhyChooseFeature[];
  };
  admissionProcedure: {
    heading: string;
    intro: string;
    importantConsiderations: string[];
    onlineProcessSteps: string[];
  };
  faqs: HomePageFAQ[];
  updatedAt?: string;
}
