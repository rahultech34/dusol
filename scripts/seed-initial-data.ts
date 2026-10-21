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
      duration: "Minimum 3 years, maximum 6 years",
      overview: "A BA from DU SOL offers you a University of Delhi degree through flexible distance learning with UGC-DEB entitlement and NAAC accreditation.",
      description: "A BA from DU SOL offers you a University of Delhi degree through flexible distance learning so work, family or exam preparation need not halt your graduation. The Bachelor of Arts is the most popular undergraduate program of School of Open Learning (SOL).\n\nThis guide covers BA distance education at DU SOL, including duration, eligibility, specialisations, fees and how to apply.",
      eligibility: "Candidates must have passed Class 12 (10+2) from CBSE or any recognized national/state board with a minimum of 40% aggregate marks.",
      admissionProcess: "Direct online merit admission without CUET. Register on the official portal, upload scanned certificates, and confirm admission by paying annual tuition fees.",
      curriculum: [
        { semesterOrYear: "Semester 1", subjects: ["History of India (Ancient)", "Introduction to Political Theory", "Environmental Science", "Language Core: Hindi / English"] },
        { semesterOrYear: "Semester 2", subjects: ["History of India (Medieval)", "Indian Government & Politics", "Communication Skills", "Language Core: Modern Indian Language"] },
        { semesterOrYear: "Semester 3", subjects: ["Comparative Government", "Principles of Macroeconomics", "Generic Elective Course", "Skill Enhancement Course"] },
        { semesterOrYear: "Semester 4", subjects: ["Public Administration", "International Relations", "Skill Enhancement: Digital Literacy", "Discipline Specific Core"] },
      ],
      fees: [
        { title: "Application Fee", amount: "₹500", note: "Online registration" },
        { title: "Course Fee (Annual)", amount: "₹10,120", note: "Approx. per year tuition & material" },
        { title: "Examination Fee", amount: "₹200", note: "Per subject" },
      ],
      careerOpportunities: [
        "Teaching, especially after B.Ed or MA",
        "Civil services and state public service exams",
        "Journalism, content writing and editing",
        "Social work, NGOs and development sector",
        "Higher studies such as MA or MBA through entrance exams",
      ],
      featuredImage: "",
      status: "published",
      seoTitle: "BA from DU SOL | BA Distance Education Fees, Admission 2026",
      seoDescription: "Explore the BA from DU SOL: BA distance education duration, eligibility, specialisations, fees and admission process for 2026. Get free counselling.",
      faqs: [
        { question: "Is a distance BA from DU SOL valid?", answer: "Yes. It is UGC-DEB approved and valid for jobs and higher studies." },
        { question: "BA Programme or BA Honours?", answer: "Honours studies one subject deeply; Programme offers a broader mix." },
        { question: "Can I finish in under 3 years?", answer: "No. The minimum duration is 3 years." },
        { question: "Is an entrance exam needed?", answer: "Admission is mostly merit-based, so CUET (UG) is generally not required." },
        { question: "What support do students get?", answer: "You receive online study material, guides, previous year papers and counselling sessions." },
      ],
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
      duration: "Minimum 3 years (6 semesters), up to 6 years",
      overview: "The University of Delhi's School of Open Learning offers the Bachelor of Business Administration in Financial Investment Analysis (BBA-FIA) in distance mode, approved by UGC-DEB.",
      description: "Looking to make a career in business while also being able to spend time on other activities? With the BBA from DU SOL, you can become a University of Delhi graduate without having to attend classes on a day-to-day basis. This BBA course, offered by the School of Open Learning, is perfect for school leavers, working professionals, and everyone else who desires to get a management education without compromising on their other responsibilities.\n\nThe University of Delhi's School of Open Learning offers the Bachelor of Business Administration in Financial Investment Analysis (BBA-FIA) in distance mode. The program is approved by UGC-DEB and combines core management subjects with finance skills such as financial management, investment analysis and business strategy.",
      eligibility: "Class 12 pass in any stream from a recognized board with at least 45% marks. No age limit.",
      admissionProcess: "Merit-based admission through the online application form on the official DU SOL website. Keep mark sheets, ID proof, and photographs ready.",
      curriculum: [
        { semesterOrYear: "Semester 1", subjects: ["Principles of Management", "Financial Accounting & Valuation", "Business Statistics", "Microeconomics"] },
        { semesterOrYear: "Semester 2", subjects: ["Corporate Finance", "Macroeconomics for Business", "Business Ethics & Governance", "Marketing Management"] },
      ],
      fees: [
        { title: "Application Fee", amount: "₹2,000", note: "Online registration fee" },
        { title: "Course Fee (Annual)", amount: "₹21,120", note: "Approx. per year tuition & management labs" },
        { title: "Examination Fee", amount: "₹1,820", note: "Per subject examination fee" },
      ],
      careerOpportunities: [
        "Banking & Financial Services",
        "Investment Analysis & Equity Research",
        "Marketing Management & Brand Strategy",
        "Human Resource (HR) Management",
        "Operations Management & Supply Chain",
        "Higher Studies (MBA, M.Com, CFA)",
      ],
      featuredImage: "",
      status: "published",
      seoTitle: "BBA from DU SOL: Distance Education Fees & Eligibility 2026",
      seoDescription: "Explore BBA from DU SOL (BBA distance education): eligibility, 3-year duration, fees, curriculum and admission steps. Get free counselling today.",
      faqs: [
        { question: "Is BBA from DU SOL valid?", answer: "Yes. The program is UGC-DEB approved and valid for employment and higher education." },
        { question: "What is the duration of the course?", answer: "The minimum duration is 3 years or 6 semesters, with up to 6 years allowed to complete it." },
        { question: "What is the eligibility for BBA distance education at DU SOL?", answer: "You need a Class 12 pass in any stream with at least 45% marks from a recognized board." },
        { question: "Do I need to appear for exams in person?", answer: "Yes. DU SOL conducts semester exams at designated centres." },
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      name: "Bachelor of Management Studies (BMS)",
      slug: "bachelor-of-management-studies",
      type: "ug",
      degree: "Bachelor of Management Studies",
      duration: "3 Years (6 Semesters)",
      overview: "Bachelor of Management Studies (BMS) is a course provided by the Department of Management Studies (DMS), School of Open Learning, University of Delhi. UGC-DEB approved.",
      description: "Want a management degree without giving up your job or business? BMS from DU SOL lets you earn a University of Delhi degree through flexible learning. Offered by the School of Open Learning, this BMS distance education program suits working professionals, entrepreneurs and school leavers who want to build management skills alongside other commitments. Here is everything you need to know about duration, eligibility, fees and admission.",
      eligibility: "Class 12 pass from a recognized board with a language and Mathematics or Applied Mathematics. Minimum aggregate of approximately 60%, with relaxation for reserved categories (OBC, EWS, and PwBD).",
      admissionProcess: "Direct online merit-based admission depending on Class 12 marks and online application on the official DU SOL website. No entrance exam required.",
      curriculum: [
        { semesterOrYear: "Semester 1", subjects: ["Principles of Marketing", "Fundamentals of Management", "Business Communication", "Environmental Studies"] },
        { semesterOrYear: "Semester 2", subjects: ["Organizational Behavior", "Business Statistics", "Financial Accounting", "Language Elective"] },
        { semesterOrYear: "Semester 3", subjects: ["Human Resource Management", "Management Accounting", "Business Law", "Skill Enhancement Course"] },
        { semesterOrYear: "Semester 4", subjects: ["Financial Management", "Operations Management", "Business Research", "Generic Elective"] },
      ],
      fees: [
        { title: "Application Fee", amount: "₹500", note: "Online registration fee" },
        { title: "Course Fee (Annual)", amount: "₹21,120", note: "Approx. per year tuition & academic labs" },
        { title: "Examination Fee", amount: "₹200", note: "Per subject exam fee" },
      ],
      careerOpportunities: [
        "Marketing Management & Brand Strategy",
        "Financial Analysis & Corporate Finance",
        "Human Resource (HR) Management",
        "Business Operations & Administration",
        "Entrepreneurship & Startup Management",
        "Higher Studies (MBA, PGDM, M.Com)",
      ],
      featuredImage: "",
      status: "published",
      seoTitle: "BMS from DU SOL: Distance Education Fees & Eligibility 2026",
      seoDescription: "Explore BMS from DU SOL (BMS distance education): eligibility, 3-year duration, fees, curriculum and admission steps. Get free counselling today.",
      faqs: [
        { question: "Is BMS from DU SOL valid?", answer: "Yes. The program is UGC-DEB approved and the degree is awarded by the University of Delhi." },
        { question: "What is the eligibility for BMS distance education at DU SOL?", answer: "You need a Class 12 pass from a recognized board with a language and Mathematics, and around 60% marks, with relaxation for certain categories." },
        { question: "Is there an entrance exam for BMS from DU SOL?", answer: "No. Admission is typically based on Class 12 marks, eligibility and completing the application before the deadline." },
        { question: "What is the duration of the course?", answer: "The course takes three years, or six semesters, to complete." },
      ],
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
