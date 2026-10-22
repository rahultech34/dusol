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

export const mjmcContent = `<h2>MJMC from DU SOL: Fees, Eligibility, Syllabus and Admission</h2>
<p>Want to start a career in journalism, media or digital storytelling without going to a college campus? An MJMC from DU SOL might be the option. Provided by the School of Open Learning, University of Delhi, it is a flexible and low-cost postgraduate program for graduates from any subject. This guide explains the MJMC from DU SOL completely, including what you need to qualify, how much it costs, what you will study and what jobs are available.</p>

<h3>Online MJMC at DU SOL: Overview</h3>
<p>The DU SOL programme is a two-year postgraduate degree in Master of Journalism and Mass Communication. The DU SOL programme is made for people who love media, communication and digital storytelling. The programme focuses on news reporting, media ethics, digital journalism, public relations, advertising, television production and communication theories. The DU SOL programme blends hands-on training with theory.</p>
<p>The Online MJMC programme is delivered online. The Online MJMC programme lets students attend classes, watch recorded lectures, join webinars and submit assignments from anywhere. The curriculum follows industry trends, preparing learners for print media, broadcasting, digital media, public relations and corporate communication. For journalists and working professionals, the Online MJMC programme at DU SOL removes the need for regular college attendance.</p>

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
      <td>Master of Journalism and Mass Communication (MJMC)</td>
    </tr>
    <tr>
      <td><strong>University</strong></td>
      <td>University of Delhi, School of Open Learning (DU SOL)</td>
    </tr>
    <tr>
      <td><strong>Duration</strong></td>
      <td>2 Years (4 Semesters)</td>
    </tr>
    <tr>
      <td><strong>Mode</strong></td>
      <td>Online / Distance Learning</td>
    </tr>
    <tr>
      <td><strong>Approvals</strong></td>
      <td>UGC-DEB approved, NAAC accredited, AICTE listed</td>
    </tr>
    <tr>
      <td><strong>Eligibility</strong></td>
      <td>Graduation in any discipline from a recognized university (No age limit)</td>
    </tr>
    <tr>
      <td><strong>Annual Course Fee</strong></td>
      <td>Approximately ₹12,500 per year</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Why Choose an MJMC from DU SOL?</h3>
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
      <td>The degree carries the prestigious Delhi University name, respected by employers nationwide</td>
    </tr>
    <tr>
      <td><strong>Open to all streams</strong></td>
      <td>Graduates from any discipline (Arts, Science, Commerce, Engineering) can apply</td>
    </tr>
    <tr>
      <td><strong>No age limit</strong></td>
      <td>Learners of any age can enroll and upgrade their skills or make a mid-career transition</td>
    </tr>
    <tr>
      <td><strong>Study from anywhere</strong></td>
      <td>Virtual classes, live sessions, and recorded lectures fit flexibly around your work routine</td>
    </tr>
    <tr>
      <td><strong>Affordable fees</strong></td>
      <td>The annual course fee is modest (approx. ₹12,500/year) compared with private media academies</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Who Should Pursue This Programme?</h3>
<p>This course is ideally structured for:</p>
<ul>
  <li><strong>Aspiring journalists and reporters</strong> who want formal university credentials in news reporting, editing, and investigative journalism.</li>
  <li><strong>Content creators and social media professionals</strong> seeking rigorous training in storytelling, digital ethics, and audience analytics.</li>
  <li><strong>Working professionals</strong> in marketing, advertising, or corporate communication wanting to elevate their managerial communications profile.</li>
  <li><strong>Fresh graduates from any stream</strong> looking to launch a fast-growing career in television production, PR, or digital broadcasting.</li>
  <li><strong>Career switchers</strong> seeking recognized Delhi University credentials without quitting their day job.</li>
</ul>
<p>Recorded lectures let you learn around your own schedule, balancing professional commitments with exam preparation.</p>

<h3>MJMC from DU SOL Duration and Eligibility</h3>
<p>The program lasts for two years and is split into four semesters. The online setup is flexible, which means students can study at their own speed. This works well for people who have just finished their studies and for those who are already working.</p>
<p>To apply, candidates must hold a bachelor's degree in any subject from a recognized university. Key eligibility criteria include:</p>
<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Eligibility Requirement</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Qualifying Degree</strong></td>
      <td>Graduation in any stream (BA, BCom, BSc, BBA, BTech, etc.) from an accredited university</td>
    </tr>
    <tr>
      <td><strong>Age Limit</strong></td>
      <td>No minimum or maximum age limit</td>
    </tr>
    <tr>
      <td><strong>Admission Basis</strong></td>
      <td>Merit-based on graduation percentage (no entrance test required for distance mode)</td>
    </tr>
    <tr>
      <td><strong>Category Relaxation</strong></td>
      <td>Standard Government of India / Delhi University reservation norms apply</td>
    </tr>
  </tbody>
</table>
</div>
<p><em>The criteria can change each session, so verify details on the official DU SOL website before applying.</em></p>

<h3>Accreditation and Recognition</h3>
<p>DU SOL is UGC-DEB approved, and the University of Delhi holds NAAC accreditation with top grading. An MJMC degree from DU SOL is fully recognized for government information services, public broadcast networks (Prasar Bharati, Doordarshan, All India Radio), private media conglomerates, UGC NET examinations, and Ph.D. admissions across India and abroad.</p>

<h3>Curriculum and Learning Methodology</h3>
<p>The curriculum runs across four semesters and combines practical digital training with communication theory. Learners benefit from:</p>
<ul>
  <li>E-books and interactive digital study materials</li>
  <li>Virtual classes and live interactive weekend sessions</li>
  <li>Recorded lectures and masterclass webinars with seasoned media experts</li>
  <li>Real-world reporting projects, multimedia portfolios, and research assignments</li>
  <li>A centralized Learning Management System (LMS) accessible 24/7</li>
</ul>
<p>These resources make Online MJMC learning manageable even with a full-time job.</p>

<h3>MJMC from DU SOL Fee Structure</h3>
<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Fee Component</th>
      <th>Amount</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Registration fee</strong></td>
      <td>₹300</td>
      <td>One-time online registration charge at application</td>
    </tr>
    <tr>
      <td><strong>Course fee</strong></td>
      <td>Approximately ₹12,500 per year</td>
      <td>Covers tuition, digital learning access, LMS portal, and webinars</td>
    </tr>
    <tr>
      <td><strong>Examination fee</strong></td>
      <td>₹200 per subject</td>
      <td>Semester examination fee per paper</td>
    </tr>
  </tbody>
</table>
</div>
<p><em>Fees may change each session, so check the official portal before paying. This transparent structure helps you plan your budget for the full two years in advance. University fees must be paid only to the university.</em></p>

<h3>Career Scope After the Programme</h3>
<p>Graduates find high-growth opportunities across print journalism, digital media, television broadcasting, corporate PR, and advertising agencies:</p>
<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Media Domain</th>
      <th>Target Job Roles</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Digital &amp; Print Journalism</strong></td>
      <td>News Reporter, Sub-Editor, Feature Writer, Digital Journalist, Fact-Checker</td>
    </tr>
    <tr>
      <td><strong>Television &amp; Broadcasting</strong></td>
      <td>News Producer, Video Editor, Anchor, Broadcast Journalist, Radio Jockey (RJ)</td>
    </tr>
    <tr>
      <td><strong>Public Relations &amp; Corporate</strong></td>
      <td>PR Executive, Corporate Communications Specialist, Brand Spokesperson</td>
    </tr>
    <tr>
      <td><strong>Advertising &amp; Content</strong></td>
      <td>Copywriter, Creative Strategist, Media Planner, Content Marketing Lead</td>
    </tr>
    <tr>
      <td><strong>Social Media &amp; Digital Strategy</strong></td>
      <td>Social Media Executive, Community Manager, Multimedia Storyteller</td>
    </tr>
    <tr>
      <td><strong>Academia &amp; Higher Studies</strong></td>
      <td>Lecturer / Assistant Professor (via UGC NET in Mass Comm), Ph.D. Scholar</td>
    </tr>
  </tbody>
</table>
</div>

<h3>How to Apply</h3>
<ol>
  <li><strong>Visit the official portal:</strong> Go to the official admission portal at sol.du.ac.in.</li>
  <li><strong>Register online:</strong> Create your profile with your email ID and mobile number.</li>
  <li><strong>Fill application form:</strong> Enter personal, academic, and graduation details carefully.</li>
  <li><strong>Upload documents:</strong> Attach graduation marksheets, certificates, ID proof, photograph, and signature.</li>
  <li><strong>Pay registration fee online:</strong> Complete payment of the ₹300 registration fee.</li>
  <li><strong>Check merit list:</strong> Once selected in the merit round, complete document verification and pay the annual course fee.</li>
</ol>
<p>The entire MJMC from DU SOL admission process is online, so you can apply conveniently from anywhere.</p>

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
      <td><strong>What is the duration of the MJMC from DU SOL?</strong></td>
      <td>It is a two-year postgraduate programme divided into four semesters.</td>
    </tr>
    <tr>
      <td><strong>Who can apply for Online MJMC at DU SOL?</strong></td>
      <td>Graduates in any discipline from a recognized university. There is no age limit.</td>
    </tr>
    <tr>
      <td><strong>What is the fee?</strong></td>
      <td>Roughly ₹12,500 per year, plus a ₹300 registration fee and ₹200 per subject for exams.</td>
    </tr>
    <tr>
      <td><strong>Is the degree UGC approved?</strong></td>
      <td>Yes, DU SOL is UGC-DEB approved, and the degree is awarded by the University of Delhi.</td>
    </tr>
    <tr>
      <td><strong>Can I study while working full-time?</strong></td>
      <td>Yes, the online format with recorded lectures, digital e-books, and flexible LMS assignments suits working professionals.</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Conclusion</h3>
<p>If you are looking forward to building a media career while pursuing your existing commitments, the MJMC offered by DU SOL is a perfect choice that features Delhi University’s credibility, UGC-DEB approval, online flexibility, and economical fees. Regardless of being a journalist, content writer, or communication expert, you can consider enrolling in the Online MJMC program from DU SOL. It is essential to compare the available options, ensure eligibility, and have a free consultation before you finalize your decision to pursue MJMC from DU SOL.</p>`;

export const mjmcFaqs = [
  {
    question: "What is the duration of the MJMC from DU SOL?",
    answer: "It is a two-year postgraduate programme divided into four semesters.",
  },
  {
    question: "Who can apply for Online MJMC at DU SOL?",
    answer: "Graduates in any discipline from a recognized university. There is no age limit.",
  },
  {
    question: "What is the fee for DU SOL MJMC?",
    answer: "Roughly ₹12,500 per year, plus a ₹300 registration fee and ₹200 per subject for exams.",
  },
  {
    question: "Is the degree UGC approved?",
    answer: "Yes, DU SOL is UGC-DEB approved and NAAC accredited, with degrees awarded directly by the University of Delhi.",
  },
  {
    question: "Can I study while working full-time?",
    answer: "Yes, the online format with recorded lectures, webinars, and digital study material is specifically tailored for working professionals.",
  },
];

export const mjmcFees = [
  { title: "Registration Fee", amount: "₹300", note: "One-time online registration fee" },
  { title: "Course Fee (Annual)", amount: "₹12,500", note: "Tuition, LMS access, webinars, and study material per year" },
  { title: "Examination Fee", amount: "₹200", note: "Per subject semester exam fee" },
];

async function updateMJMC() {
  console.log("Updating MJMC program in Firestore...");
  const updateData = {
    name: "Master of Journalism and Mass Communication (MJMC)",
    seoTitle: "MJMC from DU SOL: Fees, Eligibility & Admission 2026",
    seoDescription:
      "Explore the MJMC from DU SOL: fees, eligibility, curriculum and admission steps. A flexible Online MJMC option from Delhi University.",
    duration: "2 Years (4 Semesters)",
    degree: "Master of Journalism and Mass Communication (MJMC)",
    type: "pg",
    overview:
      "Want to start a career in journalism, media or digital storytelling without going to a college campus? An MJMC from DU SOL is a flexible, affordable 2-year online postgraduate degree from Delhi University for graduates from any stream.",
    description:
      "Want to start a career in journalism, media or digital storytelling without going to a college campus? An MJMC from DU SOL might be the option. Provided by the School of Open Learning, University of Delhi, it is a flexible and low-cost postgraduate program for graduates from any subject. This guide explains the MJMC from DU SOL completely, including what you need to qualify, how much it costs, what you will study and what jobs are available.\n\nThe DU SOL programme is a two-year postgraduate degree in Master of Journalism and Mass Communication, designed for learners passionate about media, digital journalism, television production, PR, and corporate communication.",
    eligibility:
      "Bachelor's degree in any discipline from a recognized and accredited university. No upper age limit. Admission is merit-based depending on graduation performance.",
    admissionProcess:
      "Direct online admission via sol.du.ac.in. Register on the portal, fill the application form, upload marksheets and ID proof, pay the registration fee, check the merit list, and confirm admission by paying the annual course fee.",
    curriculum: [
      {
        semesterOrYear: "Semester 1",
        subjects: [
          "Communication Theories & Models",
          "Print Journalism & News Reporting",
          "Media Ethics & Legal Frameworks",
          "History & Evolution of Mass Media",
        ],
      },
      {
        semesterOrYear: "Semester 2",
        subjects: [
          "Broadcast Journalism (Television & Radio Production)",
          "Advertising & Brand Communication",
          "Public Relations & Corporate Communication",
          "Media Management & Business Models",
        ],
      },
      {
        semesterOrYear: "Semester 3",
        subjects: [
          "Digital Journalism & New Media Technologies",
          "Data Journalism & Fact-Checking Methodologies",
          "Development Communication & Rural Media",
          "Documentary & Audiovisual Production",
        ],
      },
      {
        semesterOrYear: "Semester 4",
        subjects: [
          "Media Research Methodologies",
          "Social Media Strategies & Web Analytics",
          "Media Dissertation / Research Project",
          "Internship / Capstone Professional Portfolio",
        ],
      },
    ],
    content: mjmcContent,
    faqs: mjmcFaqs,
    fees: mjmcFees,
    careerOpportunities: [
      "News Reporter & Bureau Correspondent",
      "Digital Content Writer & Web Editor",
      "Television / Broadcast News Producer",
      "Public Relations (PR) Specialist & Brand Executive",
      "Social Media Manager & Digital Strategist",
      "Corporate Communications Specialist",
      "Media Researcher & Doctoral Scholar",
    ],
    updatedAt: new Date().toISOString(),
  };

  const docRef = db.collection("pgPrograms").doc("master-of-journalism-and-mass-communication");
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    await docRef.set(updateData, { merge: true });
    console.log("✅ Successfully updated master-of-journalism-and-mass-communication in pgPrograms!");
  } else {
    await docRef.set({
      id: "master-of-journalism-and-mass-communication",
      slug: "master-of-journalism-and-mass-communication",
      status: "published",
      createdAt: new Date().toISOString(),
      ...updateData,
    });
    console.log("✅ Created master-of-journalism-and-mass-communication in pgPrograms!");
  }
}

updateMJMC().catch(console.error);
