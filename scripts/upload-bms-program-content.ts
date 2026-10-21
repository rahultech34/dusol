import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import fs from "fs";
import path from "path";

if (getApps().length === 0) {
  const saPath = path.resolve("./firebase-key.json");
  const serviceAccount = JSON.parse(fs.readFileSync(saPath, "utf-8"));
  initializeApp({ credential: cert(serviceAccount) });
}

const db = getFirestore();

const bmsContent = `<h2>BMS from DU SOL: Distance Education Course Details</h2>
<p>Want a management degree without giving up your job or business? BMS from DU SOL lets you earn a University of Delhi degree through flexible learning. Offered by the School of Open Learning, this BMS distance education program suits working professionals, entrepreneurs and school leavers who want to build management skills alongside other commitments. Here is everything you need to know about duration, eligibility, fees and admission.</p>

<h3>BMS Distance Education: DU SOL Overview</h3>
<p>Bachelor of Management Studies (BMS) is a course provided by the Department of Management Studies (DMS), School of Open Learning, University of Delhi. UGC-DEB approves the program and includes key areas including marketing, finance, human resource, business operation and organizational behavior.</p>
<p>Since this BMS distance education course is self-paced, you can be anywhere and balance work, family and other objectives. Students are given the study materials, online information and access to virtual classes, and guest lectures by industry professionals provide the real world experience and networking.</p>

<h3>Duration and Eligibility</h3>
<ul>
  <li><strong>Duration:</strong> Three years (six semesters), and more time can be allowed to finish the degree subject to the rules of the university.</li>
  <li><strong>Eligibility:</strong> Class 12 pass in a recognised board, with a language and Mathematics or Applied Mathematics.</li>
  <li><strong>Marks:</strong> A minimum aggregate of approximately 60%, with exemption of reserved groups like OBC, EWS and PwBD.</li>
  <li><strong>Entrance Exam:</strong> None because admissions will be given depending on Class 12 marks and on the online application.</li>
</ul>
<p><em>Always carry your marksheet, ID proofs and photographs and ensure that you check the most recent requirements on the official DU SOL website.</em></p>

<h3>Accreditation and Approvals</h3>
<p>BMS, DU SOL is approved by UGC-DEB and the University of Delhi is NAAC A++. At the end you get a degree of the University of Delhi which enhances your career and higher education. Never pay any amount of money without ensuring that approval has been made on official portals.</p>

<h3>Curriculum Overview</h3>
<p>The BMS distance education program is six semesters based on marketing, finance, human resources, business operations and organizational behavior. DU SOL keeps it updated to industry requirements, which are changing to enable students to acquire practical skills on how to solve business problems and make better decisions. DU SOL releases detailed semester-wise subjects, which can be modified and hence download the most recent syllabus on the official site.</p>

<h3>Learning Methodology</h3>
<p>BMS distance education at DU SOL is supported by a blended set of resources:</p>
<ul>
  <li>E-books and study material for self-paced reading</li>
  <li>Live interactive sessions with faculty</li>
  <li>Projects and assignments to apply concepts</li>
  <li>A learning management system for easy access</li>
  <li>Study centres across locations and worldwide reach</li>
</ul>
<p>Dedicated faculty and a learner-friendly approach help you manage work and studies together.</p>

<h3>BMS from DU SOL Fee Structure</h3>
<p><em>Fees are indicative and may be revised, so confirm the current amount on sol.du.ac.in before applying.</em></p>
<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Fee Type</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Application fee</strong></td>
      <td>Rs. 500</td>
    </tr>
    <tr>
      <td><strong>Course fee</strong></td>
      <td>Approx. Rs. 21,120 per year</td>
    </tr>
    <tr>
      <td><strong>Examination fee</strong></td>
      <td>Rs. 200 per subject</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Career Scope After BMS Distance Education</h3>
<p>Graduates may seek employment in marketing, finance, human resource, operations and administration, or start their own businesses. The degree is also a gateway to postgraduate University programs like MBA. Since you are able to work and study at the same time, having the degree and experience or an internship would put you in a good position in the job market.</p>

<h3>How to Apply for BMS from DU SOL</h3>
<ol>
  <li>Visit the official DU SOL admission website.</li>
  <li>Register and fill in the online application form.</li>
  <li>Upload your Class 12 marksheet, photograph and ID proof.</li>
  <li>Pay the application fee online.</li>
  <li>Check confirmation and pay the course fee.</li>
</ol>

<h3>Who Should Choose This Program?</h3>
<p>This BMS distance education program is ideal for working professionals, entrepreneurs and students who want a recognized University of Delhi degree without committing to full-time campus study.</p>

<h3>Frequently Asked Questions</h3>
<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Question</th>
      <th>Answer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Is BMS from DU SOL valid?</strong></td>
      <td>Yes. The program is UGC-DEB approved and the degree is awarded by the University of Delhi.</td>
    </tr>
    <tr>
      <td><strong>What is the eligibility for BMS distance education at DU SOL?</strong></td>
      <td>You need a Class 12 pass from a recognized board with a language and Mathematics, and around 60% marks, with relaxation for certain categories.</td>
    </tr>
    <tr>
      <td><strong>Is there an entrance exam for BMS from DU SOL?</strong></td>
      <td>No. Admission is typically based on Class 12 marks, eligibility and completing the application before the deadline.</td>
    </tr>
    <tr>
      <td><strong>What is the duration of the course?</strong></td>
      <td>The course takes three years, or six semesters, to complete.</td>
    </tr>
  </tbody>
</table>
</div>`;

const bmsFaqs = [
  {
    question: "Is BMS from DU SOL valid?",
    answer: "Yes. The program is UGC-DEB approved and the degree is awarded by the University of Delhi.",
  },
  {
    question: "What is the eligibility for BMS distance education at DU SOL?",
    answer: "You need a Class 12 pass from a recognized board with a language and Mathematics, and around 60% marks, with relaxation for certain categories.",
  },
  {
    question: "Is there an entrance exam for BMS from DU SOL?",
    answer: "No. Admission is typically based on Class 12 marks, eligibility and completing the application before the deadline.",
  },
  {
    question: "What is the duration of the course?",
    answer: "The course takes three years, or six semesters, to complete.",
  },
];

const bmsFees = [
  { title: "Application Fee", amount: "₹500", note: "Online registration fee" },
  { title: "Course Fee (Annual)", amount: "₹21,120", note: "Approx. per year tuition & academic labs" },
  { title: "Examination Fee", amount: "₹200", note: "Per subject exam fee" },
];

async function updateBMS() {
  console.log("Updating BMS program in Firestore...");
  const updateData = {
    id: "bachelor-of-management-studies",
    name: "Bachelor of Management Studies (BMS)",
    slug: "bachelor-of-management-studies",
    type: "ug",
    degree: "Bachelor of Management Studies",
    seoTitle: "BMS from DU SOL: Distance Education Fees & Eligibility 2026",
    seoDescription:
      "Explore BMS from DU SOL (BMS distance education): eligibility, 3-year duration, fees, curriculum and admission steps. Get free counselling today.",
    duration: "3 Years (6 Semesters)",
    overview:
      "Bachelor of Management Studies (BMS) is a course provided by the Department of Management Studies (DMS), School of Open Learning, University of Delhi. UGC-DEB approved.",
    description:
      "Want a management degree without giving up your job or business? BMS from DU SOL lets you earn a University of Delhi degree through flexible learning. Offered by the School of Open Learning, this BMS distance education program suits working professionals, entrepreneurs and school leavers who want to build management skills alongside other commitments. Here is everything you need to know about duration, eligibility, fees and admission.\n\nBachelor of Management Studies (BMS) is a course provided by the Department of Management Studies (DMS), School of Open Learning, University of Delhi. UGC-DEB approves the program and includes key areas including marketing, finance, human resource, business operation and organizational behavior.",
    eligibility:
      "Class 12 pass from a recognized board with a language and Mathematics or Applied Mathematics. Minimum aggregate of approximately 60%, with relaxation for reserved categories (OBC, EWS, and PwBD).",
    admissionProcess:
      "Direct online merit-based admission depending on Class 12 marks and online application on the official DU SOL website. No entrance exam required.",
    curriculum: [
      { semesterOrYear: "Semester 1", subjects: ["Principles of Marketing", "Fundamentals of Management", "Business Communication", "Environmental Studies"] },
      { semesterOrYear: "Semester 2", subjects: ["Organizational Behavior", "Business Statistics", "Financial Accounting", "Language Elective"] },
      { semesterOrYear: "Semester 3", subjects: ["Human Resource Management", "Management Accounting", "Business Law", "Skill Enhancement Course"] },
      { semesterOrYear: "Semester 4", subjects: ["Financial Management", "Operations Management", "Business Research", "Generic Elective"] },
    ],
    content: bmsContent,
    faqs: bmsFaqs,
    fees: bmsFees,
    careerOpportunities: [
      "Marketing Management & Brand Strategy",
      "Financial Analysis & Corporate Finance",
      "Human Resource (HR) Management",
      "Business Operations & Administration",
      "Entrepreneurship & Startup Management",
      "Higher Studies (MBA, PGDM, M.Com)",
    ],
    status: "published",
    featuredImage: "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const docRef = db.collection("ugPrograms").doc("bachelor-of-management-studies");
  await docRef.set(updateData, { merge: true });
  console.log("✅ Successfully updated bachelor-of-management-studies in ugPrograms!");
}

updateBMS().catch(console.error);
