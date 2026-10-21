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

const bbaContent = `<h2>BBA from DU SOL: Distance Education Course Details</h2>
<p>Looking to make a career in business while also being able to spend time on other activities? With the BBA from DU SOL, you can become a University of Delhi graduate without having to attend classes on a day-to-day basis. This BBA course, offered by the School of Open Learning, is perfect for school leavers, working professionals, and everyone else who desires to get a management education without compromising on their other responsibilities.</p>

<h3>BBA Distance Education: DU SOL Overview</h3>
<p>The University of Delhi's School of Open Learning offers the Bachelor of Business Administration in Financial Investment Analysis (BBA-FIA) in distance mode. The program is approved by UGC-DEB and combines core management subjects with finance skills such as financial management, investment analysis and business strategy.</p>
<p>Because this BBA distance education course is self-paced, you can study from anywhere and balance work, family and competitive exam preparation. It is also more affordable than a regular full-time BBA, while still being taught with inputs from experienced University of Delhi faculty.</p>

<h3>Duration and Eligibility</h3>
<ul>
  <li><strong>Duration:</strong> Minimum 3 years (6 semesters), with up to 6 years to complete the degree plus an additional 3-year grace period for clearing pending exams.</li>
  <li><strong>Eligibility:</strong> Class 12 pass in any stream from a recognized board with at least 45% marks.</li>
  <li><strong>Age limit:</strong> None, so learners of every age can apply.</li>
  <li><strong>Selection:</strong> Merit-based admission through the online application form on the DU SOL website.</li>
</ul>
<p><em>Keep your marksheet, ID proof and photographs ready before applying, and check the latest criteria on the official DU SOL website.</em></p>

<h3>Accreditation and Approvals</h3>
<p>BBA from DU SOL is approved from UGC-DEB and the University of Delhi is NAAC A++ accredited. You can use this UGC-DEB approved distance degree for jobs and higher studies only if you cross-verify that the program is UGC Approved on official websites before paying any amount.</p>

<h3>Curriculum Overview</h3>
<p>The six-semester BBA distance education program covers topics that include marketing, finance, human resource management, operations management and entrepreneurship, with a specialization in investment analysis in finance. The specific subjects covered in each semester are detailed on the DU SOL website and they may change, so be sure to download the most recent syllabus from their website.</p>

<h3>Learning Methodology</h3>
<p>BBA distance education at DU SOL is supported by a blended set of resources:</p>
<ul>
  <li>Live interactive sessions with faculty</li>
  <li>Projects and assignments to apply concepts</li>
  <li>A learning management system for easy access</li>
  <li>Study centres across locations and worldwide reach</li>
</ul>
<p>Semester examinations are conducted at designated centres, and you must appear in person.</p>

<h3>BBA from DU SOL Fee Structure</h3>
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
      <td>Rs. 2,000</td>
    </tr>
    <tr>
      <td><strong>Course fee</strong></td>
      <td>Approx. Rs. 21,120 per year</td>
    </tr>
    <tr>
      <td><strong>Examination fee</strong></td>
      <td>Rs. 1,820 per subject</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Career Scope After BBA Distance Education</h3>
<p>Graduates have the flexibility to move into banking, finance, investment analysis, marketing, HR and operational roles. Many progress onto an MBA or other postgraduate qualification, while the finance specialism is an advantage if you’re targeting a career in financial services. Studying part-time allows you to combine work with your degree, which gives you a key competitive advantage.</p>

<h3>How to Apply for BBA from DU SOL</h3>
<ol>
  <li>Visit the official DU SOL admission portal.</li>
  <li>Register and fill in the online application form.</li>
  <li>Upload your Class 12 marksheet, photograph and ID proof.</li>
  <li>Pay the application fee online.</li>
  <li>Check merit-based confirmation and pay the course fee.</li>
</ol>

<h3>Who Should Choose This Program?</h3>
<p>This BBA distance learning program is a good option for working professionals, students with other responsibilities, and those who wish to obtain an established University of Delhi degree on their own time.</p>

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
      <td><strong>Is BBA from DU SOL valid?</strong></td>
      <td>Yes. The program is UGC-DEB approved and valid for employment and higher education.</td>
    </tr>
    <tr>
      <td><strong>What is the duration of the course?</strong></td>
      <td>The minimum duration is 3 years or 6 semesters, with up to 6 years allowed to complete it.</td>
    </tr>
    <tr>
      <td><strong>What is the eligibility for BBA distance education at DU SOL?</strong></td>
      <td>You need a Class 12 pass in any stream with at least 45% marks from a recognized board.</td>
    </tr>
    <tr>
      <td><strong>Do I need to appear for exams in person?</strong></td>
      <td>Yes. DU SOL conducts semester exams at designated centres.</td>
    </tr>
  </tbody>
</table>
</div>`;

const bbaFaqs = [
  {
    question: "Is BBA from DU SOL valid?",
    answer: "Yes. The program is UGC-DEB approved and valid for employment and higher education.",
  },
  {
    question: "What is the duration of the course?",
    answer: "The minimum duration is 3 years or 6 semesters, with up to 6 years allowed to complete it.",
  },
  {
    question: "What is the eligibility for BBA distance education at DU SOL?",
    answer: "You need a Class 12 pass in any stream with at least 45% marks from a recognized board.",
  },
  {
    question: "Do I need to appear for exams in person?",
    answer: "Yes. DU SOL conducts semester exams at designated centres.",
  },
];

const bbaFees = [
  { title: "Application Fee", amount: "₹2,000", note: "Online registration fee" },
  { title: "Course Fee (Annual)", amount: "₹21,120", note: "Approx. per year tuition & management labs" },
  { title: "Examination Fee", amount: "₹1,820", note: "Per subject examination fee" },
];

async function updateBBA() {
  console.log("Updating BBA program in Firestore...");
  const updateData = {
    seoTitle: "BBA from DU SOL: Distance Education Fees & Eligibility 2026",
    seoDescription:
      "Explore BBA from DU SOL (BBA distance education): eligibility, 3-year duration, fees, curriculum and admission steps. Get free counselling today.",
    duration: "Minimum 3 years (6 semesters), up to 6 years",
    overview:
      "The University of Delhi's School of Open Learning offers the Bachelor of Business Administration in Financial Investment Analysis (BBA-FIA) in distance mode, approved by UGC-DEB.",
    description:
      "Looking to make a career in business while also being able to spend time on other activities? With the BBA from DU SOL, you can become a University of Delhi graduate without having to attend classes on a day-to-day basis. This BBA course, offered by the School of Open Learning, is perfect for school leavers, working professionals, and everyone else who desires to get a management education without compromising on their other responsibilities.\n\nThe University of Delhi's School of Open Learning offers the Bachelor of Business Administration in Financial Investment Analysis (BBA-FIA) in distance mode. The program is approved by UGC-DEB and combines core management subjects with finance skills such as financial management, investment analysis and business strategy.",
    eligibility:
      "Class 12 pass in any stream from a recognized board with at least 45% marks. No age limit.",
    admissionProcess:
      "Merit-based admission through the online application form on the official DU SOL website. Keep mark sheets, ID proof, and photographs ready.",
    content: bbaContent,
    faqs: bbaFaqs,
    fees: bbaFees,
    careerOpportunities: [
      "Banking & Financial Services",
      "Investment Analysis & Equity Research",
      "Marketing Management & Brand Strategy",
      "Human Resource (HR) Management",
      "Operations Management & Supply Chain",
      "Higher Studies (MBA, M.Com, CFA)",
    ],
    updatedAt: new Date().toISOString(),
  };

  // Check if document exists under bachelor-of-business-administration
  const docRef = db.collection("ugPrograms").doc("bachelor-of-business-administration");
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    await docRef.set(updateData, { merge: true });
    console.log("✅ Successfully updated bachelor-of-business-administration in ugPrograms!");
  } else {
    // Also create if not exists
    await docRef.set({
      id: "bachelor-of-business-administration",
      name: "Bachelor of Business Administration (BBA) FIA",
      slug: "bachelor-of-business-administration",
      type: "ug",
      degree: "Bachelor of Business Administration",
      status: "published",
      createdAt: new Date().toISOString(),
      ...updateData,
    });
    console.log("✅ Created bachelor-of-business-administration in ugPrograms!");
  }
}

updateBBA().catch(console.error);
