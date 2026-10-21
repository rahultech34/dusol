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

const baContent = `<h2>BA from DU SOL: Distance Education Course, Fees and Admissions 2026</h2>
<p>A BA from DU SOL offers you a University of Delhi degree through flexible distance learning so work, family or exam preparation need not halt your graduation. The Bachelor of Arts is the most popular undergraduate program of School of Open Learning (SOL).</p>
<p>This guide covers BA distance education at DU SOL, including duration, eligibility, specialisations, fees and how to apply.</p>

<h3>Overview of the BA from DU SOL</h3>
<p>The programme lets you study subjects such as History, Political Science, Sociology, English, Hindi and Economics in depth. It suits students aiming for civil services, teaching, social work or journalism. Admissions are mostly merit-based, so CUET (UG) is generally not required.</p>

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
      <td>Bachelor of Arts (BA)</td>
    </tr>
    <tr>
      <td><strong>University</strong></td>
      <td>University of Delhi, School of Open Learning</td>
    </tr>
    <tr>
      <td><strong>Mode</strong></td>
      <td>Distance education</td>
    </tr>
    <tr>
      <td><strong>Duration</strong></td>
      <td>Minimum 3 years, maximum 6 years</td>
    </tr>
    <tr>
      <td><strong>Approvals</strong></td>
      <td>UGC-DEB entitled, NAAC accredited</td>
    </tr>
  </tbody>
</table>
</div>

<h3>BA Distance Education: Duration and Eligibility</h3>
<p>The course is a minimum of 3 and a maximum of 6 years long so you can study at your own pace. To apply, you should have a Class 12 pass from a recognised board. Minimum marks vary with category and subject and relaxations are given to reserved categories.</p>

<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Course</th>
      <th>General category</th>
      <th>OBC category</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>BA Programme</strong></td>
      <td>Around 40% in Class 12</td>
      <td>As per brochure</td>
    </tr>
    <tr>
      <td><strong>BA English Honours</strong></td>
      <td>65% in Class 12</td>
      <td>58.5%</td>
    </tr>
    <tr>
      <td><strong>BA Political Science Honours</strong></td>
      <td>50% aggregate</td>
      <td>45%</td>
    </tr>
  </tbody>
</table>
</div>
<p><em>Requirements change each year, so confirm the latest details on the official DU SOL website.</em></p>

<h3>Accreditation and Approvals</h3>
<p>DU SOL is UGC-DEB entitled, meaning the University Grants Commission permits it to offer distance programmes. The University of Delhi is also NAAC accredited. Your BA from DU SOL is therefore valid for jobs, government applications and postgraduate study such as MA.</p>

<h3>BA Specialisations at DU SOL</h3>
<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Specialisation</th>
      <th>Best suited for</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>BA (Prog) with Education</strong></td>
      <td>Future teachers</td>
    </tr>
    <tr>
      <td><strong>English Hons</strong></td>
      <td>Writers, editors and communicators</td>
    </tr>
    <tr>
      <td><strong>Hindi and Urdu</strong></td>
      <td>Translators, journalists and language careers</td>
    </tr>
    <tr>
      <td><strong>History</strong></td>
      <td>Civil services and heritage fields</td>
    </tr>
    <tr>
      <td><strong>Political Science</strong></td>
      <td>Public administration and policy</td>
    </tr>
    <tr>
      <td><strong>Sociology and Psychology</strong></td>
      <td>Social work, counselling and research</td>
    </tr>
    <tr>
      <td><strong>Economics Hons and Mathematics</strong></td>
      <td>Analytical and banking careers</td>
    </tr>
    <tr>
      <td><strong>Sanskrit</strong></td>
      <td>Language and academic roles</td>
    </tr>
  </tbody>
</table>
</div>
<p>Choose based on your career goal and interest, since you will study mostly on your own.</p>

<h3>Key Benefits of BA Distance Education</h3>
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
      <td><strong>Flexible schedule</strong></td>
      <td>Study around work, family or exam preparation</td>
    </tr>
    <tr>
      <td><strong>Affordable fees</strong></td>
      <td>Lower cost than regular college programmes</td>
    </tr>
    <tr>
      <td><strong>Recognised degree</strong></td>
      <td>Valid across India for jobs and further study</td>
    </tr>
    <tr>
      <td><strong>Wide subject choice</strong></td>
      <td>Many arts and humanities options</td>
    </tr>
  </tbody>
</table>
</div>

<h3>BA Course Curriculum</h3>
<p>Each of the BA courses from DU SOL is divided into six semesters. You will take language courses, core courses for each subject and skills or elective courses. Honours students specialise in one subject. Your assignments and exams are all throughout the semester, so you get progress reports all the time. Please see the syllabus of the course for exact papers. It may change from time to time.</p>

<h3>Learning Methodology in BA Distance Education</h3>
<ul>
  <li>E-book study material for anytime learning</li>
  <li>Live interactive sessions to clear doubts</li>
  <li>Projects and assignments to build writing skills</li>
  <li>Online learning management system</li>
  <li>Study centres for guidance and exams</li>
</ul>

<h3>BA from DU SOL Fees Structure</h3>
<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Fee type</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Application fee</strong></td>
      <td>Rs 500</td>
    </tr>
    <tr>
      <td><strong>Course fee</strong></td>
      <td>About Rs 10,120 per year</td>
    </tr>
    <tr>
      <td><strong>Examination fee</strong></td>
      <td>Rs 200 per subject</td>
    </tr>
  </tbody>
</table>
</div>
<p><em>These amounts are approximate. Verify current fees at sol.du.ac.in before paying.</em></p>

<h3>Career Scope after BA Distance Education</h3>
<ul>
  <li>Teaching, especially after B.Ed or MA</li>
  <li>Civil services and state public service exams</li>
  <li>Journalism, content writing and editing</li>
  <li>Social work, NGOs and development sector</li>
  <li>Higher studies such as MA or MBA through entrance exams</li>
</ul>
<p>DU SOL may not run a dedicated placement cell for distance students, so skills and experience matter most.</p>

<h3>Study Tips for Distance Learners</h3>
<p>In BA distance education, make a weekly timetable, finish assignments before deadlines and revise regularly instead of waiting for exams. Attend live sessions when possible and use previous year papers to understand question patterns.</p>

<h3>Who Should Choose the BA from DU SOL?</h3>
<p>Working professionals, competitive exam aspirants, homemakers returning to study and anyone wanting an affordable Delhi University degree will find the BA from DU SOL useful.</p>

<h3>How to Apply for BA Distance Education</h3>
<ol>
  <li>Visit the official DU SOL admission website and register.</li>
  <li>Fill in personal and academic details.</li>
  <li>Choose your language and subject combination.</li>
  <li>Upload mark sheets, photograph and identity proof.</li>
  <li>Pay the application fee online and save the receipt.</li>
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
      <td><strong>Is a distance BA from DU SOL valid?</strong></td>
      <td>Yes. It is UGC-DEB approved and valid for jobs and higher studies.</td>
    </tr>
    <tr>
      <td><strong>BA Programme or BA Honours?</strong></td>
      <td>Honours studies one subject deeply; Programme offers a broader mix.</td>
    </tr>
    <tr>
      <td><strong>Can I finish in under 3 years?</strong></td>
      <td>No. The minimum duration is 3 years.</td>
    </tr>
    <tr>
      <td><strong>Is an entrance exam needed?</strong></td>
      <td>Admission is mostly merit-based, so CUET (UG) is generally not required.</td>
    </tr>
    <tr>
      <td><strong>What support do students get?</strong></td>
      <td>You receive online study material, guides, previous year papers and counselling sessions.</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Conclusion</h3>
<p>BA from DU SOL gives you a degree. BA offers timelines and affordable fees so BA distance education is a practical choice. Check eligibility. Pick your subject. Apply before the deadline. For one‑to‑one guidance, book a free counselling session, with experts.</p>`;

const baFaqs = [
  {
    question: "Is a distance BA from DU SOL valid?",
    answer: "Yes. It is UGC-DEB approved and valid for jobs and higher studies.",
  },
  {
    question: "BA Programme or BA Honours?",
    answer: "Honours studies one subject deeply; Programme offers a broader mix.",
  },
  {
    question: "Can I finish in under 3 years?",
    answer: "No. The minimum duration is 3 years.",
  },
  {
    question: "Is an entrance exam needed?",
    answer: "Admission is mostly merit-based, so CUET (UG) is generally not required.",
  },
  {
    question: "What support do students get?",
    answer: "You receive online study material, guides, previous year papers and counselling sessions.",
  },
];

const baFees = [
  { title: "Application Fee", amount: "₹500", note: "Online registration" },
  { title: "Course Fee (Annual)", amount: "₹10,120", note: "Approx. per year tuition & material" },
  { title: "Examination Fee", amount: "₹200", note: "Per subject" },
];

async function updateBA() {
  console.log("Updating BA program in Firestore...");
  const updateData = {
    seoTitle: "BA from DU SOL | BA Distance Education Fees, Admission 2026",
    seoDescription:
      "Explore the BA from DU SOL: BA distance education duration, eligibility, specialisations, fees and admission process for 2026. Get free counselling.",
    duration: "Minimum 3 years, maximum 6 years",
    overview:
      "A BA from DU SOL offers you a University of Delhi degree through flexible distance learning with UGC-DEB entitlement and NAAC accreditation.",
    description:
      "A BA from DU SOL offers you a University of Delhi degree through flexible distance learning so work, family or exam preparation need not halt your graduation. The Bachelor of Arts is the most popular undergraduate program of School of Open Learning (SOL).\n\nThis guide covers BA distance education at DU SOL, including duration, eligibility, specialisations, fees and how to apply.",
    content: baContent,
    faqs: baFaqs,
    fees: baFees,
    careerOpportunities: [
      "Teaching, especially after B.Ed or MA",
      "Civil services and state public service exams",
      "Journalism, content writing and editing",
      "Social work, NGOs and development sector",
      "Higher studies such as MA or MBA through entrance exams",
    ],
    updatedAt: new Date().toISOString(),
  };

  await db.collection("ugPrograms").doc("bachelor-of-arts").set(updateData, { merge: true });
  console.log("✅ Successfully updated bachelor-of-arts in ugPrograms with full guide content and FAQs!");
}

updateBA().catch(console.error);
