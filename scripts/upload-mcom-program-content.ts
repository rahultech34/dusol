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

const mcomContent = `<h2>MCom from DU SOL: Fees, Eligibility, Syllabus and Admission</h2>
<p>Looking to deepen your commerce expertise without stepping away from work? An MCom from DU SOL could be the right fit. Offered by the School of Open Learning, University of Delhi, it is a flexible and affordable postgraduate programme for graduates, business owners, and working professionals. This guide covers the MCom from DU SOL in detail, including eligibility, fees, curriculum, and career scope.</p>

<h3>MCom Distance Education at DU SOL: Overview</h3>
<p>What is the DU SOL programme? It is a postgraduate degree of 2 years duration, designed for aspirants interested in gaining professional competency in the field of commerce through a remote, self-paced learning approach. The DU SOL Programme offers comprehensive coverage of Business Organization, Financial Management, Marketing Management and Statistical Analysis.</p>
<p>MCom distance education at DU SOL involves a semester-wise pattern and it is approved by UGC-DEB. This makes the degree completely valid for government jobs, corporate employment, and higher studies (UGC NET, Ph.D.). The study material is offered in print as well as digital formats, and students can access academic assistance through contact classes and webinars.</p>

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
      <td>Master of Commerce (M.Com)</td>
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
      <td>UGC-DEB entitled, NAAC accredited</td>
    </tr>
    <tr>
      <td><strong>Eligibility</strong></td>
      <td>Bachelor’s degree in Commerce (B.Com/B.Com Hons/BBA or allied)</td>
    </tr>
    <tr>
      <td><strong>Annual Course Fee</strong></td>
      <td>Approximately ₹11,170 per year</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Why Choose an MCom from DU SOL?</h3>
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
      <td><strong>Trusted university</strong></td>
      <td>The degree carries the prestigious Delhi University name, universally respected by employers and institutions</td>
    </tr>
    <tr>
      <td><strong>Flexible timeline</strong></td>
      <td>You can take up to 4 years to complete the course at your own comfortable pace</td>
    </tr>
    <tr>
      <td><strong>Affordable fees</strong></td>
      <td>The annual course fee is remarkably low compared with private university master programs</td>
    </tr>
    <tr>
      <td><strong>Study while working</strong></td>
      <td>You can learn at your own pace without sacrificing your job, income, or career momentum</td>
    </tr>
    <tr>
      <td><strong>Digital support</strong></td>
      <td>E-books, live sessions, LMS access, and regular webinars keep learning accessible</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Who Should Pursue This Programme?</h3>
<p>This course is an ideal fit for:</p>
<ul>
  <li><strong>Commerce graduates</strong> wanting to enter senior banking, investment analysis, or corporate finance positions.</li>
  <li><strong>Entrepreneurs &amp; business owners</strong> who need advanced corporate taxation, fiscal management, and accounting acumen.</li>
  <li><strong>Teachers &amp; educators</strong> seeking postgraduate eligibility for PGT Commerce or college lectureships.</li>
  <li><strong>Aspirants preparing for competitive exams</strong> (UPSC, State PSC, SSC) or professional qualifications (CA, CS, CMA, CFA).</li>
  <li><strong>Professionals planning for academic careers</strong> aiming to qualify for UGC NET and Ph.D. in Commerce.</li>
</ul>

<h3>MCom from DU SOL Duration and Eligibility</h3>
<p>The programme runs for a minimum of two years, divided into four semesters, and students can take up to four years to finish. This extended window helps those who balance work or family responsibilities.</p>
<p>Admission is merit-based and can be done in two ways: with a CUET (PG) score, or on the basis of graduation marks. If seats remain vacant after CUET-based admissions, they are filled using the graduation merit list. Candidates should hold a bachelor's degree in commerce (B.Com, B.Com Hons, or BBA/allied) with the minimum required marks. Criteria can change each session, so confirm them on the official DU SOL website before applying.</p>

<h3>Accreditation and Recognition</h3>
<p>DU SOL is approved by UGC-DEB and the University of Delhi is NAAC accredited. With these recognitions, an MCom from DU SOL has full academic equivalence to a regular college degree, making it accepted across India and globally for government recruitment, banking officer positions, UGC NET, and doctoral research.</p>

<h3>Curriculum and Learning Methodology</h3>
<p>The curriculum runs across four semesters with core commerce papers, advanced managerial accounting, quantitative business techniques, corporate tax planning, assignments, and research projects. Learners benefit from:</p>
<ul>
  <li>E-books and printed study materials prepared by distinguished DU commerce faculty</li>
  <li>Live interactive sessions and webinars</li>
  <li>Projects, case studies, and assignments</li>
  <li>A centralized learning management system (LMS) with 24/7 access</li>
</ul>

<h3>MCom from DU SOL Fee Structure</h3>
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
      <td>One-time online registration charge</td>
    </tr>
    <tr>
      <td><strong>Course fee</strong></td>
      <td>Approximately ₹11,170 per year</td>
      <td>Tuition, comprehensive printed/digital study material, and LMS access</td>
    </tr>
    <tr>
      <td><strong>Examination fee</strong></td>
      <td>₹200 per subject</td>
      <td>Semester-end university examination fee</td>
    </tr>
  </tbody>
</table>
</div>
<p><em>Fees may change each session, so check the official portal at sol.du.ac.in before paying. University fees must be paid only to the university.</em></p>

<h3>Career Scope After the Programme</h3>
<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Career Field</th>
      <th>Target Job Roles</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Banking &amp; Financial Services</strong></td>
      <td>Financial Analyst, Investment Banking Associate, Credit Manager, Bank PO</td>
    </tr>
    <tr>
      <td><strong>Corporate Accounting &amp; Taxation</strong></td>
      <td>Senior Corporate Accountant, Tax Consultant (GST &amp; Direct Tax), Internal Auditor</td>
    </tr>
    <tr>
      <td><strong>Teaching &amp; Higher Education</strong></td>
      <td>College Assistant Professor (via UGC NET), PGT Commerce Teacher (via B.Ed/DSSSB/KVS)</td>
    </tr>
    <tr>
      <td><strong>Corporate Management &amp; Consulting</strong></td>
      <td>Financial Controller, Management Consultant, Budget Analyst</td>
    </tr>
    <tr>
      <td><strong>Research &amp; Advanced Studies</strong></td>
      <td>Doctoral Researcher (Ph.D.), Economic Think Tank Analyst</td>
    </tr>
  </tbody>
</table>
</div>

<h3>How to Apply for MCom from DU SOL</h3>
<ol>
  <li><strong>Visit the official portal:</strong> Go to the official admission portal at sol.du.ac.in.</li>
  <li><strong>Register:</strong> Fill in the online registration form with your email ID and mobile number.</li>
  <li><strong>Upload documents:</strong> Attach graduation marksheets, certificates, ID proof, photograph, and signature.</li>
  <li><strong>Pay fee online:</strong> Submit the application fee through the online payment gateway.</li>
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
      <td><strong>What is the duration of the MCom from DU SOL?</strong></td>
      <td>The minimum duration is two years (four semesters), with a maximum period of up to four years to finish all papers.</td>
    </tr>
    <tr>
      <td><strong>Who can apply for MCom distance education at DU SOL?</strong></td>
      <td>Graduates in commerce (B.Com, B.Com Hons, BBA or equivalent) who meet the minimum marks criteria from a recognized university.</td>
    </tr>
    <tr>
      <td><strong>What is the fee for DU SOL MCom?</strong></td>
      <td>Roughly ₹11,170 per year, plus a ₹500 application fee and ₹200 per subject for examinations.</td>
    </tr>
    <tr>
      <td><strong>Is an entrance exam compulsory?</strong></td>
      <td>Not always. Admissions are conducted through CUET (PG) scores and direct graduation merit lists for remaining seats.</td>
    </tr>
    <tr>
      <td><strong>Can working professionals study this course?</strong></td>
      <td>Yes, flexible digital study materials, LMS portals, and weekend webinars are specifically designed for working learners.</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Conclusion</h3>
<p>If you want to gain commerce skills without stopping your job, an MCom from DU SOL is definitely worth thinking about. It brings together the name of Delhi University, UGC-DEB approval, easy ways to study and low costs. If you want to work in banking, become a teacher, or get a job in government, MCom distance education at DU SOL provides a proven way to go. Explore your options, check your eligibility, and connect with our counsellors for free guidance.</p>`;

const mcomFaqs = [
  {
    question: "What is the duration of the MCom from DU SOL?",
    answer: "The minimum duration is two years divided into four semesters, with an extended window of up to four years to complete all exams.",
  },
  {
    question: "Who can apply for MCom distance education at DU SOL?",
    answer: "Graduates with a bachelor's degree in commerce (B.Com, B.Com Hons, BBA or allied subjects) from a recognized university.",
  },
  {
    question: "What is the annual fee for DU SOL MCom?",
    answer: "Roughly ₹11,170 per year, with a one-time ₹500 application fee and ₹200 per subject for semester examinations.",
  },
  {
    question: "Is an entrance exam compulsory for MCom admission?",
    answer: "Not always. Admissions are offered via CUET (PG) scores as well as direct graduation merit lists for available seats.",
  },
  {
    question: "Can working professionals pursue this course while working full-time?",
    answer: "Yes, flexible digital and printed study materials, 24/7 LMS access, and weekend webinars are specifically structured for working professionals.",
  },
];

const mcomFees = [
  { title: "Application Fee", amount: "₹500", note: "One-time online registration fee" },
  { title: "Course Fee (Annual)", amount: "₹11,170", note: "Tuition, LMS access, and comprehensive study material per year" },
  { title: "Examination Fee", amount: "₹200", note: "Per subject semester exam fee" },
];

async function updateMCom() {
  console.log("Updating MCom program in Firestore...");
  const updateData = {
    name: "Master of Commerce (M.Com)",
    seoTitle: "MCom from DU SOL: Fees, Eligibility & Admission 2026",
    seoDescription:
      "Explore the MCom from DU SOL: fees, eligibility, curriculum and admission steps. A flexible MCom distance education option from Delhi University.",
    duration: "2 years (4 semesters), up to 4 years",
    degree: "Master of Commerce",
    type: "pg",
    overview:
      "Looking to deepen your commerce expertise without stepping away from work? An MCom from DU SOL offers a flexible, UGC-DEB approved postgraduate commerce degree from Delhi University.",
    description:
      "Looking to deepen your commerce expertise without stepping away from work? An MCom from DU SOL could be the right fit. Offered by the School of Open Learning, University of Delhi, it is a flexible and affordable postgraduate programme for graduates, business owners, and working professionals. This guide covers the MCom from DU SOL in detail, including eligibility, fees, curriculum, and career scope.\n\nThe DU SOL Programme offers comprehensive coverage of Business Organization, Financial Management, Marketing Management and Statistical Analysis in a semester-based distance format.",
    eligibility:
      "Bachelor's degree in commerce (B.Com / B.Com Hons / BBA or allied field) from a recognized university with minimum required aggregate marks.",
    admissionProcess:
      "Direct online admission via sol.du.ac.in. Register online, upload graduation marksheets and ID, pay the application fee, check the merit list, and confirm admission by paying the annual fee.",
    content: mcomContent,
    faqs: mcomFaqs,
    fees: mcomFees,
    careerOpportunities: [
      "Senior Corporate Accountant & Financial Controller",
      "Investment Banking Associate & Equity Research Analyst",
      "Tax Consultant (Income Tax, GST & International Taxation)",
      "College & University Assistant Professor (via UGC NET)",
      "PGT Commerce School Lecturer (via B.Ed/KVS/DSSSB)",
      "Doctoral Research Scholar (Ph.D.) in Commerce",
    ],
    updatedAt: new Date().toISOString(),
  };

  const docRef = db.collection("pgPrograms").doc("master-of-commerce");
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    await docRef.set(updateData, { merge: true });
    console.log("✅ Successfully updated master-of-commerce in pgPrograms!");
  } else {
    await docRef.set({
      id: "master-of-commerce",
      slug: "master-of-commerce",
      status: "published",
      createdAt: new Date().toISOString(),
      ...updateData,
    });
    console.log("✅ Created master-of-commerce in pgPrograms!");
  }
}

updateMCom().catch(console.error);
