export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: "admin" | "superadmin";
  password?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: string;
  category: string;
  tags: string[];
  status: "draft" | "published" | "scheduled";
  scheduledDate?: string;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  ogImage?: string;
}

export interface ProgramCurriculumSemester {
  semesterOrYear: string;
  subjects: string[];
}

export interface ProgramFeeItem {
  title: string;
  amount: string;
  note?: string;
}

export interface ProgramFAQ {
  question: string;
  answer: string;
}

export interface Program {
  id: string;
  name: string;
  slug: string;
  type: "ug" | "pg" | "mba";
  degree: string;
  duration: string;
  overview: string;
  description: string;
  content?: string;
  faqs?: ProgramFAQ[];
  eligibility: string;
  admissionProcess: string;
  curriculum: ProgramCurriculumSemester[];
  fees: ProgramFeeItem[];
  careerOpportunities: string[];
  featuredImage: string;
  status: "draft" | "published";
  seoTitle?: string;
  seoDescription?: string;
  createdAt: string;
  updatedAt: string;
}

export interface StudentZoneItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  content: string;
  featuredImage?: string;
  externalLink?: string;
  downloadUrl?: string;
  quickSteps?: string[];
  status: "draft" | "published";
  seoTitle?: string;
  seoDescription?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  count?: number;
}

export interface MediaItem {
  id: string;
  name: string;
  url: string;
  size: number;
  type: string;
  createdAt: string;
}

export interface DashboardStats {
  totalBlogs: number;
  publishedBlogs: number;
  draftBlogs: number;
  totalUGPrograms: number;
  publishedUGPrograms: number;
  totalPGPrograms: number;
  publishedPGPrograms: number;
  totalMBASpecializations: number;
  publishedMBASpecializations: number;
  totalStudentZoneItems: number;
  publishedStudentZoneItems: number;
  recentActivity: {
    id: string;
    title: string;
    type: "blog" | "ug" | "pg" | "mba" | "student-zone";
    status: string;
    updatedAt: string;
    href: string;
  }[];
}
