import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";

const keyPath = path.join(process.cwd(), "firebase-key.json");
if (!fs.existsSync(keyPath)) {
  console.error("firebase-key.json not found!");
  process.exit(1);
}

const serviceAccount = JSON.parse(fs.readFileSync(keyPath, "utf8"));
if (getApps().length === 0) {
  initializeApp({ credential: cert(serviceAccount) });
}

const db = getFirestore();

async function seed() {
  console.log("🌱 Seeding initial CMS data to Cloud Firestore...");

  // 1. Ensure Super Admin user
  const hashedPassword = await bcrypt.hash("admin123", 10);
  await db.collection("adminUsers").doc("admin@distanceeducation.com").set(
    {
      email: "admin@distanceeducation.com",
      name: "Super Admin",
      role: "admin",
      password: hashedPassword,
      updatedAt: new Date().toISOString(),
    },
    { merge: true }
  );
  console.log("✅ Admin user verified: admin@distanceeducation.com");

  // 2. Seed Default UG Programs
  const ugPrograms = [
    {
      name: "Bachelor of Arts (BA) Programme",
      slug: "bachelor-of-arts",
      type: "ug",
      degree: "Bachelor of Arts",
      duration: "3 Years (6 Semesters)",
      overview: "Multidisciplinary undergraduate degree offering diverse specializations in History, Political Science, Economics, and Hindi under NEP 2020.",
      description: "The Bachelor of Arts (BA) Programme at Delhi University School of Open Learning (DU SOL) is designed for students seeking a flexible, comprehensive education in liberal arts and humanities. With UGC-DEB recognition and NAAC A++ equivalence, graduates are prepared for government civil services, journalism, teaching, and corporate communications.",
      eligibility: "Candidates must have passed Class 12 (10+2) from CBSE or any recognized national/state board with a minimum of 40% aggregate marks.",
      admissionProcess: "Direct online merit admission without CUET. Register on the official portal, upload scanned certificates, and confirm admission by paying annual tuition fees.",
      curriculum: [
        { semesterOrYear: "Semester 1", subjects: ["History of India (Ancient)", "Introduction to Political Theory", "Environmental Science", "Language Core: Hindi / English"] },
        { semesterOrYear: "Semester 2", subjects: ["History of India (Medieval)", "Indian Government & Politics", "Communication Skills", "Language Core: Modern Indian Language"] },
        { semesterOrYear: "Semester 3", subjects: ["Comparative Government", "Principles of Macroeconomics", "Generic Elective Course", "Skill Enhancement Course"] },
        { semesterOrYear: "Semester 4", subjects: ["Public Administration", "International Relations", "Skill Enhancement: Digital Literacy", "Discipline Specific Core"] },
      ],
      fees: [
        { title: "First Year Annual Tuition Fee", amount: "₹7,820", note: "Includes study material and examination fee" },
        { title: "Second Year Annual Fee", amount: "₹6,800", note: "Academic and portal access fee" },
        { title: "Third Year Annual Fee", amount: "₹6,800", note: "Includes convocation fee" },
      ],
      careerOpportunities: ["UPSC & State PSC Civil Services", "Content Strategy & Journalism", "Public Relations & Advertising", "School & Higher Education Teaching"],
      featuredImage: "",
      status: "published",
      seoTitle: "Distance BA from DU SOL Admission 2026: Eligibility & Syllabus",
      seoDescription: "Get direct admission to DU SOL Bachelor of Arts (BA) program without CUET. Check eligibility, syllabus, subjects, and fee structure.",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      name: "Bachelor of Commerce (B.Com) Programme",
      slug: "bachelor-of-commerce",
      type: "ug",
      degree: "Bachelor of Commerce",
      duration: "3 Years (6 Semesters)",
      overview: "Prestigious commerce undergraduate degree focusing on Financial Accounting, Corporate Laws, Taxation, and Business Mathematics.",
      description: "The B.Com Programme at DU SOL provides rigorous foundational knowledge in commercial practices, accounting standards, taxation regulations, and company management. Taught under the standardized Delhi University syllabus, it is the benchmark qualification for CA, CS, CMA, and banking careers.",
      eligibility: "Candidates must have passed 10+2 with a minimum of 40% aggregate marks from a recognized board. Mathematics or Commerce background is preferred but not compulsory.",
      admissionProcess: "Direct admission based on qualifying intermediate marks. No CUET score needed.",
      curriculum: [
        { semesterOrYear: "Semester 1", subjects: ["Financial Accounting", "Business Law", "Environmental Studies", "Business Organization"] },
        { semesterOrYear: "Semester 2", subjects: ["Business Mathematics & Statistics", "Corporate Law", "Communication Skills", "Language Elective"] },
        { semesterOrYear: "Semester 3", subjects: ["Company Law", "Income Tax Law & Practice", "Computer Applications in Business", "Macroeconomics"] },
        { semesterOrYear: "Semester 4", subjects: ["Cost Accounting", "Corporate Accounting", "E-Commerce", "Business Economics"] },
      ],
      fees: [
        { title: "First Year Total Fee", amount: "₹8,320", note: "Comprehensive course fee" },
        { title: "Second Year Fee", amount: "₹7,300", note: "Annual fee" },
        { title: "Third Year Fee", amount: "₹7,300", note: "Final year fee" },
      ],
      careerOpportunities: ["Chartered Accountancy & Audit", "Investment Banking Analyst", "Corporate Tax Consultant", "Bank Probationary Officer (PO)"],
      featuredImage: "",
      status: "published",
      seoTitle: "Distance B.Com Admission 2026 | DU SOL Delhi University",
      seoDescription: "Apply for DU SOL Distance B.Com 2026-27 without CUET. Learn about eligibility criteria, subjects, fee breakdown, and career prospects.",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      name: "Bachelor of Business Administration (BBA) FIA",
      slug: "bachelor-of-business-administration",
      type: "ug",
      degree: "Bachelor of Business Administration",
      duration: "3 Years (6 Semesters)",
      overview: "Industry-aligned management degree emphasizing Financial and Investment Analysis (FIA), Corporate Strategy, and Analytics.",
      description: "DU SOL's Bachelor of Business Administration in Financial and Investment Analysis (BBA-FIA) is tailored for aspiring corporate leaders and financial strategists. The curriculum blends quantitative analytics, valuation methodologies, and corporate finance under modern business frameworks.",
      eligibility: "Class 12 passed with Mathematics as a compulsory subject and minimum 50% aggregate marks.",
      admissionProcess: "Merit-based admission as per DU SOL annual registration criteria.",
      curriculum: [
        { semesterOrYear: "Semester 1", subjects: ["Principles of Management", "Financial Accounting & Valuation", "Business Statistics", "Microeconomics"] },
        { semesterOrYear: "Semester 2", subjects: ["Corporate Finance", "Macroeconomics for Business", "Business Ethics & Governance", "Marketing Management"] },
      ],
      fees: [
        { title: "Annual Tuition Fee", amount: "₹15,200", note: "Includes specialized digital labs and study material" },
      ],
      careerOpportunities: ["Equity Research Associate", "Financial Modeling Specialist", "Corporate Strategy Trainee", "Risk Analyst"],
      featuredImage: "",
      status: "published",
      seoTitle: "Distance BBA Admission 2026 | DU SOL University of Delhi",
      seoDescription: "Explore DU SOL Distance BBA FIA 2026-27. Check course duration, fees, eligibility criteria, and corporate placement paths.",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  for (const prog of ugPrograms) {
    await db.collection("ugPrograms").doc(prog.slug).set(prog, { merge: true });
    console.log(`✅ Seeded UG Program: ${prog.name}`);
  }

  // 3. Seed Default PG Programs
  const pgPrograms = [
    {
      name: "Master of Business Administration (MBA)",
      slug: "master-of-business-administration",
      type: "pg",
      degree: "Master of Business Administration",
      duration: "2 Years (4 Semesters)",
      overview: "AICTE-approved master degree with specializations in Finance, Marketing, HR, Operations, and Business Analytics.",
      description: "The Distance MBA offered by School of Open Learning, University of Delhi, is designed for working executives, entrepreneurs, and ambitious graduates. Featuring AICTE and UGC-DEB accreditation, this executive-grade degree delivers rigorous leadership development without interrupting your career.",
      eligibility: "Graduation degree in any discipline from a recognized university with minimum 50% aggregate marks (45% for SC/ST/PwD).",
      admissionProcess: "Direct online application on DU SOL website. Merit lists prepared based on graduation percentage.",
      curriculum: [
        { semesterOrYear: "Semester 1", subjects: ["Organizational Behavior", "Managerial Economics", "Financial Reporting & Analysis", "Marketing Management", "Quantitative Techniques"] },
        { semesterOrYear: "Semester 2", subjects: ["Corporate Finance", "Human Resource Management", "Operations & Supply Chain Management", "Strategic Management", "Business Law"] },
        { semesterOrYear: "Semester 3", subjects: ["Specialization Elective 1", "Specialization Elective 2", "Enterprise Resource Planning", "Summer Internship Project"] },
        { semesterOrYear: "Semester 4", subjects: ["Business Ethics & CSR", "International Business", "Specialization Capstone Project", "Comprehensive Viva"] },
      ],
      fees: [
        { title: "First Year Total Fee", amount: "₹52,570", note: "Includes all academic fees, digital library, and exams" },
        { title: "Second Year Total Fee", amount: "₹48,000", note: "Annual fee" },
      ],
      careerOpportunities: ["Management Consultant", "Corporate Finance Manager", "Product & Marketing Strategist", "Operations Director"],
      featuredImage: "",
      status: "published",
      seoTitle: "Distance MBA Admission 2026 | DU SOL AICTE Approved",
      seoDescription: "Complete guide to DU SOL Distance MBA 2026. Specializations, eligibility, fees, semester syllabus, and application process.",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      name: "Master of Commerce (M.Com)",
      slug: "master-of-commerce",
      type: "pg",
      degree: "Master of Commerce",
      duration: "2 Years (4 Semesters)",
      overview: "Advanced postgraduate commerce program in Corporate Accounting, International Finance, and Business Policies.",
      description: "DU SOL M.Com prepares commerce graduates for senior financial roles, research, and academia. With comprehensive training in quantitative business methods, corporate governance, and fiscal administration, it provides regular-grade DU equivalence.",
      eligibility: "B.Com (Hons) or B.Com (Pass) / BBA from a recognized university with minimum 50% aggregate marks.",
      admissionProcess: "Merit-based admission as per DU SOL postgraduate entrance guidelines.",
      curriculum: [
        { semesterOrYear: "Semester 1", subjects: ["Business Environment & Policy", "Advanced Managerial Accounting", "Corporate Governance", "Quantitative Techniques for Business"] },
        { semesterOrYear: "Semester 2", subjects: ["Financial Management", "Marketing Management", "Advanced Financial Institutions & Markets", "International Business Operations"] },
      ],
      fees: [
        { title: "Annual Tuition Fee", amount: "₹9,800", note: "Standard annual fee" },
      ],
      careerOpportunities: ["Senior Financial Controller", "Chief Accountant", "University Assistant Professor (with UGC-NET)", "Treasury Analyst"],
      featuredImage: "",
      status: "published",
      seoTitle: "Distance M.Com Admission 2026 | DU SOL University of Delhi",
      seoDescription: "Apply for DU SOL Distance M.Com for session 2026-27. Learn about eligibility, course duration, fees, and career avenues.",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  for (const prog of pgPrograms) {
    await db.collection("pgPrograms").doc(prog.slug).set(prog, { merge: true });
    console.log(`✅ Seeded PG Program: ${prog.name}`);
  }

  // 4. Seed Default Categories
  const categories = [
    { name: "Admissions 2026", slug: "admissions-2026", description: "Official DU SOL registration updates, cutoff dates, and eligibility criteria." },
    { name: "Exams & Results", slug: "exams-results", description: "Semester examination schedules, hall tickets, and marksheet guidelines." },
    { name: "Course Guides", slug: "course-guides", description: "Comprehensive breakdown of BA, BCom, MA, and MBA curricula." },
    { name: "Student Services", slug: "student-services", description: "ID card, degree download, library access, and marksheet verification." },
  ];

  for (const cat of categories) {
    await db.collection("categories").doc(cat.slug).set(cat, { merge: true });
    console.log(`✅ Seeded Category: ${cat.name}`);
  }

  console.log("🎉 Seeding completed successfully!");
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
