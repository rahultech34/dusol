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

const mbaContent = `<h2>MBA from DU SOL: Fees, Eligibility, Specializations and Admission</h2>
<p>Want to go into management without leaving your job? An MBA from DU SOL lets you do that. Provided by the School of Open Learning, University of Delhi it is a flexible and low-cost postgraduate program for graduates and people who are working. This guide explains the MBA from DU SOL in detail, talking about who can apply, how much it costs, what areas you can focus on, and what kinds of jobs you can get.</p>

<h3>MBA Distance Education at DU SOL: Overview</h3>
<p>The DU SOL programme is a two-year postgraduate course in business administration, delivered in distance mode. It covers core management areas such as Marketing, Finance, Human Resource Management, and Operations, balancing theory with practical knowledge. It is especially useful for students who want career growth or a job switch.</p>
<p>MBA distance learning program offered through online and distance mode is a semester-based program, which is UGC-DEB and AICTE approved. The course material of the program is available in print and online, and student support is provided through contact classes &amp; webinars. Due to the structured course, MBA distance education at DU SOL is suitable for learners throughout India.</p>

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
      <td><strong>Programme</strong></td>
      <td>Master of Business Administration (MBA)</td>
    </tr>
    <tr>
      <td><strong>University</strong></td>
      <td>University of Delhi, School of Open Learning (DU SOL)</td>
    </tr>
    <tr>
      <td><strong>Duration</strong></td>
      <td>2 years (4 semesters), extendable up to 4 years</td>
    </tr>
    <tr>
      <td><strong>Mode</strong></td>
      <td>Distance education / blended learning</td>
    </tr>
    <tr>
      <td><strong>Approvals</strong></td>
      <td>UGC-DEB entitled, AICTE approved, NAAC accredited</td>
    </tr>
    <tr>
      <td><strong>Eligibility</strong></td>
      <td>Bachelor’s degree with minimum 50% marks (45% for reserved categories)</td>
    </tr>
    <tr>
      <td><strong>Annual Tuition Fee</strong></td>
      <td>Approximately ₹55,220 per year</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Why Choose an MBA from DU SOL?</h3>
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
      <td><strong>Respected brand</strong></td>
      <td>Delhi University's prestigious name adds immense credibility and weight to your resume</td>
    </tr>
    <tr>
      <td><strong>Flexible timeline</strong></td>
      <td>You can take up to 4 years to finish the course at your own comfortable pace</td>
    </tr>
    <tr>
      <td><strong>Learn while you earn</strong></td>
      <td>Study alongside your corporate career without taking a salary pause or career break</td>
    </tr>
    <tr>
      <td><strong>Simple admission</strong></td>
      <td>Admission is generally based on your graduation marks through merit selection</td>
    </tr>
    <tr>
      <td><strong>Digital support</strong></td>
      <td>E-books, live interactive sessions, LMS access, and regular faculty webinars</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Who Should Pursue This Programme?</h3>
<p>This course is a good fit for:</p>
<ul>
  <li><strong>Working professionals</strong> who want to move into supervisory, leadership, or managerial roles.</li>
  <li><strong>Entrepreneurs &amp; business owners</strong> who need structured strategic management knowledge.</li>
  <li><strong>Fresh graduates</strong> who cannot afford the high costs of private full-time campus MBA programmes.</li>
  <li><strong>Homemakers</strong> planning to restart or accelerate their corporate careers.</li>
  <li><strong>Professionals planning an industry switch</strong> toward consulting, finance, analytics, or tech management.</li>
</ul>
<p>Since classes do not need to be attended daily, you can set your own study schedule and still prepare thoroughly for semester examinations.</p>

<h3>MBA from DU SOL Duration and Eligibility</h3>
<p>The course is spread over two years and has four semesters. It can be studied over a period of four years by students who require additional flexibility, which can benefit those with busy work schedules.</p>
<p>You must have a bachelor's degree in any stream from a recognized university with minimum 50% marks (45% for reserved category candidates). The eligibility criteria may be updated each year, so check the latest eligibility norms on the official DU SOL website before applying.</p>

<h3>Available MBA Specializations</h3>
<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Specialization</th>
      <th>Key Focus Areas</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Marketing Management</strong></td>
      <td>Consumer behavior, digital marketing, brand management, sales &amp; distribution channels</td>
    </tr>
    <tr>
      <td><strong>Financial Management</strong></td>
      <td>Corporate finance, investment analysis, security valuation, financial modeling, banking</td>
    </tr>
    <tr>
      <td><strong>Human Resource Management (HRM)</strong></td>
      <td>Talent acquisition, organizational development, labor law compliance, compensation &amp; benefits</td>
    </tr>
    <tr>
      <td><strong>Business Analytics</strong></td>
      <td>Big data analytics, predictive modeling, data visualization, business intelligence</td>
    </tr>
    <tr>
      <td><strong>International Trade Management</strong></td>
      <td>Global supply chains, export-import documentation, foreign exchange, WTO compliance</td>
    </tr>
    <tr>
      <td><strong>Information Technology (IT)</strong></td>
      <td>Enterprise architecture, cloud computing, cyber law, IT project leadership</td>
    </tr>
    <tr>
      <td><strong>Supply Chain &amp; Operations Management</strong></td>
      <td>Procurement, logistics, inventory management, total quality management (TQM), Lean Six Sigma</td>
    </tr>
  </tbody>
</table>
</div>
<p><em>Availability of specific electives may vary by academic session, so choose the option that matches your work experience and future career targets.</em></p>

<h3>Accreditation and Recognition</h3>
<p>Approvals are a crucial aspect of any distance education program. The DU SOL MBA is approved by UGC-DEB, recognized by AICTE, and the University of Delhi is NAAC accredited. A distance MBA from DU SOL is recognized for corporate executive promotions, public sector undertakings (PSUs), government recruitment, and doctoral (PhD) studies worldwide.</p>

<h3>Curriculum and Learning Methodology</h3>
<p>The curriculum runs across four semesters with core foundation management subjects in the first year and specialization-specific electives in the second year. Learners rely on:</p>
<ul>
  <li>E-books and printed study materials prepared by premier DU faculty</li>
  <li>Live interactive weekend webinars and contact classes</li>
  <li>Real-world case studies, projects, and assignments</li>
  <li>A centralized 24/7 learning management system (LMS)</li>
</ul>

<h3>MBA from DU SOL Fee Structure</h3>
<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Fee Type</th>
      <th>Amount</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Application fee</strong></td>
      <td>₹500</td>
      <td>One-time online application &amp; registration fee</td>
    </tr>
    <tr>
      <td><strong>Course fee</strong></td>
      <td>Approximately ₹55,220 per year</td>
      <td>Tuition, LMS access, e-library resources, and study material</td>
    </tr>
    <tr>
      <td><strong>Examination fee</strong></td>
      <td>₹200 per subject</td>
      <td>Semester examination fee per paper</td>
    </tr>
  </tbody>
</table>
</div>
<p><em>Fees are subject to periodic university revisions. Confirm the current figures on the official portal at sol.du.ac.in before paying.</em></p>

<h3>Career Scope After the Programme</h3>
<p>An MBA from DU SOL prepares you for diverse executive, consulting, and managerial appointments across top sectors:</p>
<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Management Field</th>
      <th>Target Job Roles</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Corporate Strategy &amp; Analytics</strong></td>
      <td>Business Analyst, Strategic Planner, Management Consultant</td>
    </tr>
    <tr>
      <td><strong>Project &amp; Operations</strong></td>
      <td>Project Manager, Operations Manager, Supply Chain Coordinator</td>
    </tr>
    <tr>
      <td><strong>Marketing &amp; Sales</strong></td>
      <td>Marketing Manager, Brand Strategist, Business Development Manager</td>
    </tr>
    <tr>
      <td><strong>Human Resources</strong></td>
      <td>HR Manager, Talent Acquisition Specialist, HR Business Partner (HRBP)</td>
    </tr>
    <tr>
      <td><strong>Finance &amp; Banking</strong></td>
      <td>Financial Analyst, Management Accountant, Risk &amp; Compliance Analyst</td>
    </tr>
  </tbody>
</table>
</div>

<h3>How to Apply for MBA from DU SOL</h3>
<ol>
  <li><strong>Visit the official portal:</strong> Go to the official admission portal at sol.du.ac.in.</li>
  <li><strong>Register:</strong> Fill in the online registration form with your email ID and mobile number.</li>
  <li><strong>Upload documents:</strong> Attach graduation marksheets, certificates, ID proof, photograph, and signature.</li>
  <li><strong>Pay application fee:</strong> Submit the ₹500 application fee through the online payment gateway.</li>
  <li><strong>Check merit list:</strong> Once selected in the merit round, complete verification and pay the annual course fee.</li>
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
      <td><strong>What is the duration of the MBA from DU SOL?</strong></td>
      <td>It is a two-year programme in four semesters, extendable up to four years for working professionals.</td>
    </tr>
    <tr>
      <td><strong>Who can apply for MBA distance education at DU SOL?</strong></td>
      <td>Graduates in any discipline with at least 50% marks (45% for reserved categories) from a recognized university.</td>
    </tr>
    <tr>
      <td><strong>What is the total fee for DU SOL MBA?</strong></td>
      <td>Roughly ₹55,220 per year, plus a ₹500 application fee and ₹200 per subject for examinations.</td>
    </tr>
    <tr>
      <td><strong>Is the DU SOL MBA degree recognized?</strong></td>
      <td>Yes, the DU SOL MBA is UGC-DEB entitled, AICTE approved, and awarded by the University of Delhi.</td>
    </tr>
    <tr>
      <td><strong>Can working professionals study this course?</strong></td>
      <td>Yes, flexible digital study materials, LMS portals, and weekend webinars are specifically designed for working learners.</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Conclusion</h3>
<p>Do you want to develop leadership skills without pausing your career? An MBA from DU SOL is worth serious consideration. It combines Delhi University’s wide recognition, UGC-DEB approval, flexible study options, and affordable fees. Whether you’re aiming for a promotion or a new industry, DU SOL’s distance MBA offers a reliable path. Compare specializations, check eligibility, and get free counseling to start your DU SOL MBA journey today.</p>`;

const mbaFaqs = [
  {
    question: "What is the duration of the MBA from DU SOL?",
    answer: "It is a two-year programme divided into four semesters, extendable up to four years for working professionals who need additional flexibility.",
  },
  {
    question: "Who can apply for MBA distance education at DU SOL?",
    answer: "Graduates in any discipline with at least 50% aggregate marks (45% for reserved categories) from a recognized university.",
  },
  {
    question: "What is the fee for DU SOL MBA?",
    answer: "The annual course fee is roughly ₹55,220 per year, with a one-time ₹500 application fee and ₹200 per subject for semester examinations.",
  },
  {
    question: "Is the DU SOL MBA degree recognized for corporate & government jobs?",
    answer: "Yes, the DU SOL MBA is UGC-DEB entitled, AICTE approved, and awarded by the University of Delhi, making it fully valid for private corporate roles, PSUs, and government recruitment.",
  },
  {
    question: "Can working professionals study this course while keeping their job?",
    answer: "Yes, self-paced digital/printed study materials, 24/7 LMS access, and weekend webinars are specifically designed so you never have to pause your career.",
  },
];

const mbaFees = [
  { title: "Application Fee", amount: "₹500", note: "One-time online registration fee" },
  { title: "Course Fee (Annual)", amount: "₹55,220", note: "Tuition, LMS access, study materials, and webinars" },
  { title: "Examination Fee", amount: "₹200", note: "Per subject semester exam fee" },
];

async function updateMBA() {
  console.log("Updating MBA program in Firestore...");
  const updateData = {
    name: "Master of Business Administration (MBA)",
    seoTitle: "MBA from DU SOL: Fees, Eligibility & Admission 2026",
    seoDescription:
      "Explore the MBA from DU SOL: fees, eligibility, specializations and admission steps. A flexible MBA distance education option from Delhi University.",
    duration: "2 years (4 semesters), up to 4 years",
    degree: "Master of Business Administration",
    type: "pg",
    overview:
      "Want to transition into management without leaving your job? An MBA from DU SOL provides an AICTE and UGC-DEB approved, flexible, and affordable postgraduate management degree from Delhi University.",
    description:
      "Want to go into management without leaving your job? An MBA from DU SOL lets you do that. Provided by the School of Open Learning, University of Delhi it is a flexible and low-cost postgraduate program for graduates and people who are working. This guide explains the MBA from DU SOL in detail, talking about who can apply, how much it costs, what areas you can focus on, and what kinds of jobs you can get.\n\nThe DU SOL programme is a two-year postgraduate course in business administration, delivered in distance mode. It covers core management areas such as Marketing, Finance, Human Resource Management, and Operations, balancing theory with practical knowledge. It is especially useful for students who want career growth or a job switch.",
    eligibility:
      "Bachelor's degree in any stream from a recognized university with minimum 50% marks (45% for reserved categories). Merit-based admission.",
    admissionProcess:
      "Direct online admission via sol.du.ac.in. Register online, upload graduation marksheets and ID, pay the application fee, check the merit list, and confirm admission by paying the annual fee.",
    content: mbaContent,
    faqs: mbaFaqs,
    fees: mbaFees,
    careerOpportunities: [
      "Business Analyst / Management Consultant",
      "Project Manager / Operations Manager",
      "Marketing Manager / Brand Strategist",
      "Human Resource (HR) Manager / HRBP",
      "Financial Analyst / Management Accountant / Risk Analyst",
      "Business Development Manager / Client Partner",
    ],
    updatedAt: new Date().toISOString(),
  };

  const docRef = db.collection("pgPrograms").doc("master-of-business-administration");
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    await docRef.set(updateData, { merge: true });
    console.log("✅ Successfully updated master-of-business-administration in pgPrograms!");
  } else {
    await docRef.set({
      id: "master-of-business-administration",
      slug: "master-of-business-administration",
      status: "published",
      createdAt: new Date().toISOString(),
      ...updateData,
    });
    console.log("✅ Created master-of-business-administration in pgPrograms!");
  }
}

updateMBA().catch(console.error);
