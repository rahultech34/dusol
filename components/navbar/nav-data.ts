export interface CourseItem {
  id: string;
  name: string;
  href: string;
}

export interface NavCategory {
  title: string;
  href: string;
  hasDropdown: boolean;
  type?: "bachelor" | "master" | "mba" | "student";
}

export const BACHELOR_PROGRAMS: CourseItem[] = [
  { id: "ba", name: "Distance BA from DU SOL", href: "/courses/distance-ba" },
  { id: "bba", name: "Distance BBA from DU SOL", href: "/courses/distance-bba" },
  { id: "bms", name: "Distance BMS from DU SOL", href: "/courses/distance-bms" },
  { id: "bcom", name: "Distance BCom from DU SOL", href: "/courses/distance-bcom" },
  { id: "blis", name: "Distance BLIS from DU SOL", href: "/courses/distance-blis" },
];

export const MASTER_PROGRAMS: CourseItem[] = [
  { id: "ma", name: "Distance MA from DU SOL", href: "/courses/distance-ma" },
  { id: "mba", name: "Distance MBA from DU SOL", href: "/courses/distance-mba" },
  { id: "mcom", name: "Distance MCOM from DU SOL", href: "/courses/distance-mcom" },
  { id: "mlis", name: "Distance MLIS from DU SOL", href: "/courses/distance-mlis" },
];

export const MBA_SPECIALIZATIONS: CourseItem[] = [
  { id: "mba-it", name: "MBA in Information Technology", href: "/courses/mba-information-technology" },
  { id: "mba-ba", name: "MBA in Business Analytics", href: "/courses/mba-business-analytics" },
  { id: "mba-ham", name: "MBA in Hospital Administration Management", href: "/courses/mba-hospital-administration" },
  { id: "mba-itm", name: "MBA in International Trade Management", href: "/courses/mba-international-trade" },
  { id: "mba-rm", name: "MBA in Rural Management", href: "/courses/mba-rural-management" },
  { id: "mba-ret", name: "MBA in Retail Management", href: "/courses/mba-retail-management" },
  { id: "mba-bm", name: "MBA in Business Management", href: "/courses/mba-business-management" },
  { id: "mba-pm", name: "MBA in Project Management", href: "/courses/mba-project-management" },
  { id: "mba-mm", name: "MBA in Marketing Management", href: "/courses/mba-marketing-management" },
];

export const STUDENT_ZONE_ITEMS: CourseItem[] = [
  { id: "sz-adm", name: "DUSOL Admission", href: "/student-zone/admission" },
  { id: "sz-fees", name: "DUSOL Courses Fees", href: "/student-zone/courses-fees" },
  { id: "sz-hall", name: "DUSOL Hall Ticket", href: "/student-zone/hall-ticket" },
  { id: "sz-study", name: "DU SOL Study Material", href: "/student-zone/study-material" },
  { id: "sz-result", name: "DUSOL Result", href: "/student-zone/result" },
  { id: "sz-library", name: "DU SOL Library Portal", href: "/student-zone/library-portal" },
  { id: "sz-assign", name: "DU SOL Assignment Status", href: "/student-zone/assignment-status" },
  { id: "sz-alt-uni", name: "DUSOL Alternative Universities", href: "/student-zone/alternative-universities" },
];

export const NAV_LINKS: NavCategory[] = [
  { title: "Home", href: "/", hasDropdown: false },
  { title: "Bachelor Programs", href: "/ug-programs", hasDropdown: true, type: "bachelor" },
  { title: "Master Programs", href: "/pg-programs", hasDropdown: true, type: "master" },
  { title: "MBA Specialization", href: "/courses/mba", hasDropdown: true, type: "mba" },
  { title: "Student Zone", href: "/student-zone", hasDropdown: true, type: "student" },
  { title: "Blogs", href: "/blogs", hasDropdown: false },
];
