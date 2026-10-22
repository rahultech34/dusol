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

const bcomContent = `<h2>BCom from DU SOL: Distance Education Course, Fees and Admissions 2026</h2>
<p>Commerce leads to stable careers in banking, accounting, taxation and finance. The BCom from DU SOL lets you earn a University of Delhi degree through distance learning, so work, family or location no longer stop you from graduating.</p>
<p>This guide covers BCom distance education at DU SOL, including duration, eligibility, curriculum, fees, career scope and how to apply.</p>

<h3>Overview of the BCom from DU SOL</h3>
<p>DU SOL provides both BCom (Programme) and BCom (Honours). The BCom (Programme) gives an overview of accounting, finance, marketing and law. The BCom (Honours) is more specialised offering a study in fields such as accounting, finance, human resource development, marketing, international business, law and taxation. Admission to DU SOL is based on merit and CUET is usually not required.</p>

<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Particular</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Course name</strong></td>
      <td>Bachelor of Commerce (Programme and Honours)</td>
    </tr>
    <tr>
      <td><strong>University</strong></td>
      <td>University of Delhi, School of Open Learning</td>
    </tr>
    <tr>
      <td><strong>Duration</strong></td>
      <td>3 years (6 semesters)</td>
    </tr>
    <tr>
      <td><strong>Mode</strong></td>
      <td>Distance education, blended learning</td>
    </tr>
    <tr>
      <td><strong>Approvals</strong></td>
      <td>UGC-DEB entitled, NAAC accredited</td>
    </tr>
  </tbody>
</table>
</div>

<h3>BCom Distance Education: Duration and Eligibility</h3>
<p>The course is a three-year degree divided into six semesters. The flexible schedule helps students who balance study with work or family. There is no age limit, so learners of all ages can apply.</p>

<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Course</th>
      <th>Minimum marks</th>
      <th>Subject preference</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>BCom (Programme)</strong></td>
      <td>Generally 45%</td>
      <td>10+2 or equivalent from a recognized board</td>
    </tr>
    <tr>
      <td><strong>BCom (Honours)</strong></td>
      <td>Usually around 60%</td>
      <td>Accountancy / Mathematics preferred</td>
    </tr>
  </tbody>
</table>
</div>
<p><em>Rules can change each session, so confirm the latest eligibility on the official DU SOL website.</em></p>

<h3>Accreditation and Approvals</h3>
<p>DU SOL is UGC-DEB entitled, meaning the University Grants Commission permits it to offer distance programmes. The University of Delhi is also NAAC accredited. A BCom from DU SOL is recognised as equivalent to a regular Delhi University BCom for jobs and further study.</p>

<h3>Key Benefits of BCom Distance Education</h3>
<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Benefit</th>
      <th>What it means for you</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Flexible learning</strong></td>
      <td>Study around work, family or exam preparation</td>
    </tr>
    <tr>
      <td><strong>Affordable fees</strong></td>
      <td>Low annual cost compared with private colleges</td>
    </tr>
    <tr>
      <td><strong>Updated syllabus</strong></td>
      <td>Aligned with Delhi University's regular colleges</td>
    </tr>
    <tr>
      <td><strong>Professional pathways</strong></td>
      <td>Supports CA, CS and CMA preparation</td>
    </tr>
  </tbody>
</table>
</div>

<h3>BCom Course Curriculum</h3>
<p>The BCom from DU SOL contains core papers, skill enhancement courses, discipline-specific electives and generic electives. In early semesters, the BCom covers accounting, economics and business law. In later semesters, the BCom moves into taxation, auditing and financial management. Check the syllabus for the exact paper list.</p>

<h3>Learning Methodology in BCom Distance Education</h3>
<ul>
  <li>Printed and digital study material</li>
  <li>Video lectures you can revisit anytime</li>
  <li>Counselling sessions at Learning Support Centres</li>
  <li>Projects and assignments</li>
  <li>Online learning management system</li>
</ul>

<h3>BCom from DU SOL Fees Structure</h3>
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
      <td>₹500</td>
    </tr>
    <tr>
      <td><strong>Course fee</strong></td>
      <td>About ₹10,120 per year</td>
    </tr>
    <tr>
      <td><strong>Examination fee</strong></td>
      <td>₹200 per subject</td>
    </tr>
  </tbody>
</table>
</div>
<p><em>These amounts are approximate. Verify current fees at sol.du.ac.in before paying.</em></p>

<h3>Career Scope after BCom Distance Education</h3>
<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Job Role</th>
      <th>What you do</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Accountant</strong></td>
      <td>Maintain books and prepare financial statements</td>
    </tr>
    <tr>
      <td><strong>Tax consultant</strong></td>
      <td>Handle income tax and GST filings</td>
    </tr>
    <tr>
      <td><strong>Bank officer</strong></td>
      <td>Work in banking operations and customer service</td>
    </tr>
    <tr>
      <td><strong>Financial analyst</strong></td>
      <td>Study financial data to guide decisions</td>
    </tr>
    <tr>
      <td><strong>Auditor</strong></td>
      <td>Check accounts for accuracy and compliance</td>
    </tr>
  </tbody>
</table>
</div>
<p>Many graduates continue with CA, CS, CMA, MCom or MBA. Placement support may vary, so skills and internships matter most.</p>

<h3>Study Tips for Distance Learners</h3>
<p>In BCom distance education, make a weekly timetable, finish assignments on time and revise regularly. Practise accounting problems and tax calculations often, and attend counselling sessions whenever possible.</p>

<h3>Who Should Choose the BCom from DU SOL?</h3>
<p>Working professionals, aspiring accountants and bankers, and students preparing for CA, CS or CMA will find the BCom from DU SOL useful, especially if they want a Delhi University degree at a modest cost.</p>

<h3>How to Apply for BCom Distance Education</h3>
<ol>
  <li>Visit the official DU SOL admission website and register.</li>
  <li>Fill in personal and academic details.</li>
  <li>Choose BCom (Programme) or BCom (Honours).</li>
  <li>Upload your documents, photograph and signature.</li>
  <li>Pay the fee online and save the receipt.</li>
</ol>

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
      <td><strong>Is the BCom from DU SOL valid?</strong></td>
      <td>Yes. It is recognised as equivalent to a regular Delhi University BCom.</td>
    </tr>
    <tr>
      <td><strong>Is there an entrance exam?</strong></td>
      <td>No. Selection is usually based on Class 12 marks.</td>
    </tr>
    <tr>
      <td><strong>What study material will I get?</strong></td>
      <td>Self-learning modules, textbooks and online resources.</td>
    </tr>
    <tr>
      <td><strong>Can I study while working?</strong></td>
      <td>Yes. The flexible format suits working professionals.</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Conclusion</h3>
<p>The BCom from DU SOL gives a degree, easy learning options and low costs which makes BCom distance education a good option for people who want to work in finance. See if you qualify, pick between Programme and Honours, and submit your application before the last date. For help, schedule a free counseling meeting with our professionals.</p>`;

const bcomFaqs = [
  {
    question: "Is the BCom from DU SOL valid?",
    answer: "Yes. It is recognised as equivalent to a regular Delhi University BCom for government jobs, private employment, and higher studies.",
  },
  {
    question: "Is there an entrance exam for DU SOL BCom?",
    answer: "No. Selection is usually merit-based on Class 12 marks. CUET (UG) is not mandatory for DU SOL BCom admissions.",
  },
  {
    question: "What study material will I get?",
    answer: "Students receive printed self-learning modules, digital textbooks via LMS, audio/video lectures, and access to DU library resources.",
  },
  {
    question: "Can I study while working or preparing for CA/CS?",
    answer: "Yes. The flexible distance format is specifically designed for working professionals and students simultaneously pursuing CA, CS, CMA, or competitive exams.",
  },
];

const bcomFees = [
  { title: "Application Fee", amount: "₹500", note: "One-time registration fee" },
  { title: "Course Fee (Annual)", amount: "₹10,120", note: "Approximate tuition & learning resources per year" },
  { title: "Examination Fee", amount: "₹200", note: "Per subject examination fee" },
];

async function updateBCom() {
  console.log("Updating BCom program in Firestore...");
  const updateData = {
    name: "Bachelor of Commerce (B.Com) Programme & Honours",
    seoTitle: "BCom from DU SOL | BCom Distance Education Fees, Admission 2026",
    seoDescription:
      "Explore the BCom from DU SOL: BCom distance education duration, eligibility, fees, curriculum and admission process for 2026. Get free counselling.",
    duration: "3 years (6 semesters)",
    degree: "Bachelor of Commerce",
    overview:
      "Commerce leads to stable careers in banking, accounting, taxation and finance. The BCom from DU SOL lets you earn a University of Delhi degree through flexible distance learning.",
    description:
      "Commerce leads to stable careers in banking, accounting, taxation and finance. The BCom from DU SOL lets you earn a University of Delhi degree through distance learning, so work, family or location no longer stop you from graduating.\n\nThis guide covers BCom distance education at DU SOL, including duration, eligibility, curriculum, fees, career scope and how to apply. DU SOL provides both BCom (Programme) and BCom (Honours). The BCom (Programme) gives an overview of accounting, finance, marketing and law, while BCom (Honours) provides specialized training in financial analysis and corporate governance.",
    eligibility:
      "Class 12 pass from a recognized board. BCom (Programme) generally requires 45% marks; BCom (Honours) usually requires around 60% with Accountancy/Mathematics preference. No age limit.",
    admissionProcess:
      "Merit-based admission on 10+2 marks via the online DU SOL portal. No CUET (UG) required. Register online, upload academic documents and ID, and submit admission fees.",
    content: bcomContent,
    faqs: bcomFaqs,
    fees: bcomFees,
    careerOpportunities: [
      "Accountant (Financial Statements & General Ledger)",
      "Tax Consultant (Income Tax & GST Filings)",
      "Bank Officer & Probationary Officer (PO)",
      "Financial Analyst & Equity Research",
      "Internal & Statutory Auditor",
      "Higher Studies & Professional Credentials (CA, CS, CMA, M.Com, MBA)",
    ],
    updatedAt: new Date().toISOString(),
  };

  const docRef = db.collection("ugPrograms").doc("bachelor-of-commerce");
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    await docRef.set(updateData, { merge: true });
    console.log("✅ Successfully updated bachelor-of-commerce in ugPrograms!");
  } else {
    await docRef.set({
      id: "bachelor-of-commerce",
      slug: "bachelor-of-commerce",
      type: "ug",
      status: "published",
      createdAt: new Date().toISOString(),
      ...updateData,
    });
    console.log("✅ Created bachelor-of-commerce in ugPrograms!");
  }
}

updateBCom().catch(console.error);
