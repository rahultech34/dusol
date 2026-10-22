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

export const mbaItContent = `<h2>DU SOL MBA in Information Technology: Fees, Eligibility and Admission</h2>
<p>Want to move into technology leadership while continuing your career? The DU SOL MBA in Information Technology could be the right step. Offered by the School of Open Learning, University of Delhi, it is a flexible and affordable postgraduate programme for graduates and working professionals. This guide covers the DU SOL MBA in Information Technology in detail, including eligibility, fees, curriculum, and career scope.</p>

<h3>MBA in Information Technology at DU SOL: Overview</h3>
<p>An online and distance MBA course offering the same academic standards as offered by Delhi University while still providing the benefit of distance learning. The course package will include, among others, IT strategy, project management, and digital transformation.</p>
<p>Looking for a way to upgrade your management skills in IT? The MBA in Information Technology on offer here is designed to enable working professionals to do so. With core, supplementary, and basic skills modules like data analytics, project work, and dissertation, the course develops your IT management skills. The DU SOL MBA in Information Technology lets you study whenever your schedule permits.</p>

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
      <td>Master of Business Administration (MBA) in Information Technology</td>
    </tr>
    <tr>
      <td><strong>University</strong></td>
      <td>University of Delhi, School of Open Learning (DU SOL)</td>
    </tr>
    <tr>
      <td><strong>Duration</strong></td>
      <td>2 Years (4 Semesters), extendable up to 2 additional years (Max 4 Years)</td>
    </tr>
    <tr>
      <td><strong>Mode</strong></td>
      <td>Distance Learning / Online with weekend counselling</td>
    </tr>
    <tr>
      <td><strong>Approvals</strong></td>
      <td>UGC-DEB approved, NAAC accredited, AICTE recognized</td>
    </tr>
    <tr>
      <td><strong>Eligibility</strong></td>
      <td>Bachelor’s degree in any discipline from a recognized university</td>
    </tr>
    <tr>
      <td><strong>Annual Course Fee</strong></td>
      <td>Approximately ₹52,570 per year</td>
    </tr>
    <tr>
      <td><strong>Key Competencies</strong></td>
      <td>IT Strategy, Project Management, Digital Transformation, Cloud &amp; Big Data Analytics</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Why Choose the DU SOL MBA in Information Technology?</h3>
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
      <td>The degree carries the prestigious Delhi University name, respected by corporate tech employers worldwide</td>
    </tr>
    <tr>
      <td><strong>Career-focused syllabus</strong></td>
      <td>It covers enterprise IT strategy, data analytics, cybersecurity, ERP, and agile project management</td>
    </tr>
    <tr>
      <td><strong>Flexible duration</strong></td>
      <td>A 2-year program with an extension of up to two additional years available if work or personal commitments require it</td>
    </tr>
    <tr>
      <td><strong>Open to all graduates</strong></td>
      <td>Candidates from any discipline (Engineering, Science, Commerce, Arts) can apply and transition to IT leadership</td>
    </tr>
    <tr>
      <td><strong>Practical learning</strong></td>
      <td>Real-world case studies, project work, and a master's dissertation help you immediately apply what you learn on the job</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Who Should Pursue This Programme?</h3>
<p>This course is ideal for:</p>
<ul>
  <li><strong>IT professionals and software engineers</strong> looking to step into management, team leadership, or product ownership roles.</li>
  <li><strong>Engineers and technical specialists</strong> wishing to gain cross-functional business and managerial mastery.</li>
  <li><strong>Graduates of any field</strong> wanting to pivot into the high-paying technology and consulting industry.</li>
  <li><strong>Team leaders and project managers</strong> who would like to take a lead role in driving their organisation’s digital transformation.</li>
  <li><strong>Entrepreneurs and startup founders</strong> managing ventures in the technology space who seek structured managerial training.</li>
</ul>

<h3>DU SOL MBA in Information Technology Duration and Eligibility</h3>
<p>The programme runs for two years, divided into four semesters of six months each. Students who need more time can take an extension of up to two years (four years total), which helps those balancing work or family commitments.</p>
<p>Key eligibility parameters include:</p>
<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Requirement</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Qualifying Degree</strong></td>
      <td>Bachelor's degree in any discipline (B.Tech, BCA, BSc, BCom, BA, etc.) from an accredited university</td>
    </tr>
    <tr>
      <td><strong>Minimum Marks</strong></td>
      <td>Generally 50% aggregate marks for General/Unreserved, with category relaxation for OBC/SC/ST/PwBD as per DU norms</td>
    </tr>
    <tr>
      <td><strong>Age Limit</strong></td>
      <td>No upper age limit for distance and online education</td>
    </tr>
    <tr>
      <td><strong>Work Experience</strong></td>
      <td>Not strictly mandatory, but working professionals receive strong practical synergy</td>
    </tr>
  </tbody>
</table>
</div>
<p><em>Some admissions may also require an entrance exam (OPEN MAT) or graduation merit criteria, so always check the latest guidelines on the official DU SOL website before applying.</em></p>

<h3>Accreditation and Recognition</h3>
<p>DU SOL is UGC-DEB approved, and the University of Delhi is NAAC accredited with top honors, while also adhering to AICTE technical and management frameworks. With these recognitions, the DU SOL MBA in Information Technology carries complete corporate and academic value for executive promotions, multinational hiring, and higher doctoral research.</p>

<h3>Curriculum and Learning Methodology</h3>
<p>The curriculum runs across four semesters, combining core management foundations, IT specialized electives, real-world case simulations, and an industry dissertation. Learners benefit from:</p>
<ul>
  <li>E-books and printed study materials delivered to your doorstep</li>
  <li>Live interactive sessions and webinars by senior IT directors and academicians</li>
  <li>Practical project work, agile assignments, and digital business case studies</li>
  <li>A 24/7 Learning Management System (LMS) and university digital library access</li>
</ul>
<p>These resources make MBA in Information Technology study manageable alongside a full-time demanding job.</p>

<h3>DU SOL MBA in Information Technology Fee Structure</h3>
<p>The fee structure is transparent and economical compared with private business schools:</p>
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
      <td><strong>OPEN MAT Entrance Fee</strong></td>
      <td>₹800 (Open category) / ₹600 (Reserved category)</td>
      <td>Applicable if entrance evaluation is administered for the session</td>
    </tr>
    <tr>
      <td><strong>Registration fee</strong></td>
      <td>₹300</td>
      <td>One-time online registration fee at the time of application</td>
    </tr>
    <tr>
      <td><strong>Course fee (Annual)</strong></td>
      <td>Approximately ₹52,570 per year</td>
      <td>Covers tuition, comprehensive study material, LMS portal, and digital library access</td>
    </tr>
    <tr>
      <td><strong>Examination fee</strong></td>
      <td>₹200 per subject</td>
      <td>Semester examination fee per paper</td>
    </tr>
  </tbody>
</table>
</div>
<p><em>Fees may change each session, so check the official portal before paying. University fees must be paid only to the university.</em></p>

<h3>Career Scope After the Programme</h3>
<p>Graduates can take up roles in IT leadership, technology consulting, and digital innovation management:</p>
<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Career Domain</th>
      <th>Target Job Roles</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>IT Management &amp; Delivery</strong></td>
      <td>IT Project Manager, Scrum Master, Delivery Head, IT Operations Lead</td>
    </tr>
    <tr>
      <td><strong>Technology Consulting</strong></td>
      <td>Technology Consultant, Enterprise Solutions Architect, Systems Business Analyst</td>
    </tr>
    <tr>
      <td><strong>Digital Strategy</strong></td>
      <td>Digital Transformation Manager, Cloud Strategy Consultant, Product Manager</td>
    </tr>
    <tr>
      <td><strong>Data &amp; Enterprise Systems</strong></td>
      <td>Business Intelligence Manager, ERP Consultant, Data Strategy Lead</td>
    </tr>
    <tr>
      <td><strong>Executive Leadership</strong></td>
      <td>Chief Information Officer (CIO), Chief Technology Officer (CTO), IT Director</td>
    </tr>
  </tbody>
</table>
</div>
<p>Working professionals frequently use this degree to attain a promotion or transition from individual developer/engineer roles into senior engineering management. The combination of technical and managerial skill sets is highly sought after in software companies, consulting firms, financial institutions, and digital start-ups.</p>

<h3>How to Apply</h3>
<ol>
  <li><strong>Visit the official portal:</strong> Go to the official admission portal at sol.du.ac.in.</li>
  <li><strong>Register online:</strong> Create an account using your active email address and mobile number.</li>
  <li><strong>Fill application form:</strong> Select MBA (Information Technology) and fill in your academic and professional profile.</li>
  <li><strong>Upload documents:</strong> Attach graduation marksheets, certificates, ID proof, photograph, and signature.</li>
  <li><strong>Pay registration fee online:</strong> Complete payment of the registration fee via net banking, UPI, or card.</li>
  <li><strong>Check merit list:</strong> Once admitted in the merit list, verify your documents and pay the annual course fee.</li>
</ol>
<p>The entire DU SOL MBA in Information Technology admission process is online, so you can apply conveniently from anywhere.</p>

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
      <td><strong>What is the duration of the DU SOL MBA in Information Technology?</strong></td>
      <td>Two years in four semesters, extendable by up to two additional years (four years maximum).</td>
    </tr>
    <tr>
      <td><strong>Who can apply for the MBA in Information Technology at DU SOL?</strong></td>
      <td>Graduates in any discipline from a recognized university. Some admissions may require an entrance exam or work experience.</td>
    </tr>
    <tr>
      <td><strong>What is the fee?</strong></td>
      <td>Roughly ₹52,570 per year, plus ₹300 registration fee, ₹200 per subject for examinations, and the OPEN MAT fee (₹800/₹600).</td>
    </tr>
    <tr>
      <td><strong>Is the degree recognized?</strong></td>
      <td>Yes, DU SOL is UGC-DEB approved, NAAC accredited, and degrees are awarded by the University of Delhi.</td>
    </tr>
    <tr>
      <td><strong>How do I get study material?</strong></td>
      <td>Through printed books delivered by mail and 24/7 digital resources, including the university's digital library and online LMS portal.</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Conclusion</h3>
<p>Are you looking for an MBA program to pursue without taking a break from your career? The DU SOL MBA in Information Technology is a great fit! It is based on the reputation of DU, is recognised by UGC-DEB, offers flexible learning, and practical projects. Compare the official DU SOL MBA in Information Technology with other options, check your eligibility, and connect with free counseling. Your DU SOL MBA in Information Technology is just a click away!</p>`;

export const mbaItFaqs = [
  {
    question: "What is the duration of the DU SOL MBA in Information Technology?",
    answer: "Two years in four semesters, extendable by up to two additional years (four years maximum).",
  },
  {
    question: "Who can apply for the MBA in Information Technology at DU SOL?",
    answer: "Graduates in any discipline from a recognized university. Some admissions may require an entrance exam or work experience.",
  },
  {
    question: "What is the fee for DU SOL MBA in Information Technology?",
    answer: "Roughly ₹52,570 per year, plus ₹300 registration, ₹200 per subject for examinations, and the OPEN MAT fee (₹800 / ₹600).",
  },
  {
    question: "Is the degree recognized?",
    answer: "Yes, DU SOL is UGC-DEB approved and NAAC accredited, with degrees awarded directly by the University of Delhi.",
  },
  {
    question: "How do I get study material?",
    answer: "Through printed books and digital resources, including the university's digital library and LMS portal.",
  },
];

export const mbaItFees = [
  { title: "Registration Fee", amount: "₹300", note: "One-time online registration fee at application" },
  { title: "Course Fee (Annual)", amount: "₹52,570", note: "Tuition, printed/digital study material, LMS portal, and digital library per year" },
  { title: "OPEN MAT Entrance Fee", amount: "₹800 / ₹600", note: "₹800 for Open category, ₹600 for Reserved category" },
  { title: "Examination Fee", amount: "₹200", note: "Per subject semester exam fee" },
];

async function updateMBAIT() {
  console.log("Updating MBA Information Technology in Firestore...");
  const updateData = {
    name: "MBA in Information Technology",
    seoTitle: "DU SOL MBA in Information Technology: Fees & Eligibility",
    seoDescription:
      "Explore the DU SOL MBA in Information Technology: fees, eligibility, curriculum and admission. A flexible MBA in Information Technology from Delhi University.",
    duration: "2 Years (4 Semesters), extendable up to 2 years",
    degree: "Master of Business Administration (Information Technology)",
    type: "mba",
    overview:
      "Want to move into technology leadership while continuing your career? The DU SOL MBA in Information Technology is a flexible, affordable 2-year postgraduate programme from Delhi University designed for working professionals and graduates.",
    description:
      "Want to move into technology leadership while continuing your career? The DU SOL MBA in Information Technology could be the right step. Offered by the School of Open Learning, University of Delhi, it is a flexible and affordable postgraduate programme for graduates and working professionals. This guide covers the DU SOL MBA in Information Technology in detail, including eligibility, fees, curriculum, and career scope.\n\nAn online and distance MBA course offering the same academic standards as offered by Delhi University while still providing the benefit of distance learning. The course package includes IT strategy, project management, digital transformation, data analytics, project work, and dissertation to develop senior IT leadership capabilities.",
    eligibility:
      "Bachelor's degree in any discipline from a recognized university. Candidates from any stream (Engineering, Science, Commerce, Arts) can apply. Some admissions may require an entrance exam (OPEN MAT) or work experience. Merit-based admission.",
    admissionProcess:
      "Online admission via sol.du.ac.in. Register on the portal, fill the application form, upload marksheets and ID proof, pay the registration fee, check the merit list, and confirm admission by paying the course fee.",
    curriculum: [
      {
        semesterOrYear: "Semester 1",
        subjects: [
          "Principles of Management",
          "Managerial Economics",
          "Accounting & Financial Management",
          "IT for Business Decisions & Strategy",
        ],
      },
      {
        semesterOrYear: "Semester 2",
        subjects: [
          "Marketing Management",
          "Human Resource Strategy",
          "Operations & Supply Chain Management",
          "Database Management Systems & Analytics",
        ],
      },
      {
        semesterOrYear: "Semester 3",
        subjects: [
          "Cloud Computing & Big Data Architecture",
          "Cybersecurity, Privacy & IT Law",
          "Enterprise Resource Planning (ERP)",
          "Software Project Management & Agile Methodologies",
        ],
      },
      {
        semesterOrYear: "Semester 4",
        subjects: [
          "Strategic IT Management",
          "Digital Transformation & Change Leadership",
          "Business Intelligence & AI in Management",
          "Capstone IT Dissertation & Major Project",
        ],
      },
    ],
    content: mbaItContent,
    faqs: mbaItFaqs,
    fees: mbaItFees,
    careerOpportunities: [
      "IT Manager & Technical Delivery Lead",
      "Software Project Manager / Scrum Master",
      "Business Analyst & Systems Consultant",
      "Technology Consultant & Solutions Architect",
      "Digital Transformation Manager & Strategy Director",
      "Chief Information Officer (CIO) / Chief Technology Officer (CTO)",
    ],
    updatedAt: new Date().toISOString(),
  };

  const docRef = db.collection("mbaSpecializations").doc("mba-information-technology");
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    await docRef.set(updateData, { merge: true });
    console.log("✅ Successfully updated mba-information-technology in mbaSpecializations!");
  } else {
    await docRef.set({
      id: "mba-information-technology",
      slug: "mba-information-technology",
      status: "published",
      createdAt: new Date().toISOString(),
      ...updateData,
    });
    console.log("✅ Created mba-information-technology in mbaSpecializations!");
  }
}

updateMBAIT().catch(console.error);
