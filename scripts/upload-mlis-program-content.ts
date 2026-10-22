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

const mlisContent = `<h2>MLIS from DU SOL: Fees, Eligibility, Syllabus and Admission</h2>
<p>Dreaming of a career in libraries, archives, or information centers? An MLIS from DU SOL could be the ideal next step. Offered by the School of Open Learning, University of Delhi, it is a flexible and affordable postgraduate programme for library science graduates who want to study at their own pace. This guide covers the MLIS from DU SOL in detail, including eligibility, fees, curriculum, and career scope.</p>

<h3>MLIS Distance Education at DU SOL: Overview</h3>
<p>The DU SOL programme is a one-year postgraduate degree designed for learners seeking to deepen their understanding of library and information science through flexible learning. The programme includes core courses like Information Sources and Services, Information and Communication Technology Application, Management of Library and Information Centre, and Research Methods.</p>
<p>The MLIS Distance Education course here is semestrial. The MLIS Distance Education course at DU SOL is certified by UGC-DEB and can be taken up to work in academic institutions, public libraries, research organizations, and government institutions. The study materials are available in digital and hard copy mediums. DU SOL also organizes contact and online academic sessions for MLIS distance education learners.</p>

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
      <td>Master of Library and Information Science (MLISc)</td>
    </tr>
    <tr>
      <td><strong>University</strong></td>
      <td>University of Delhi, School of Open Learning (DU SOL)</td>
    </tr>
    <tr>
      <td><strong>Duration</strong></td>
      <td>1 year (2 semesters)</td>
    </tr>
    <tr>
      <td><strong>Mode</strong></td>
      <td>Distance education / open learning</td>
    </tr>
    <tr>
      <td><strong>Approvals</strong></td>
      <td>UGC-DEB entitled, NAAC accredited</td>
    </tr>
    <tr>
      <td><strong>Eligibility</strong></td>
      <td>BLISc (Bachelor of Library and Information Science) from a recognized university</td>
    </tr>
    <tr>
      <td><strong>Annual Course Fee</strong></td>
      <td>Approximately ₹5,420 per year</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Why Choose an MLIS from DU SOL?</h3>
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
      <td>The degree carries the prestigious Delhi University name, highly respected by employers across India</td>
    </tr>
    <tr>
      <td><strong>Short duration</strong></td>
      <td>You can complete the entire master's qualification in just one year (two semesters)</td>
    </tr>
    <tr>
      <td><strong>Affordable fees</strong></td>
      <td>The annual course fee is remarkably low (approx. ₹5,420/year) compared with private institutions</td>
    </tr>
    <tr>
      <td><strong>Study while working</strong></td>
      <td>You can learn at your own pace without taking a career break from your current library post</td>
    </tr>
    <tr>
      <td><strong>Digital support</strong></td>
      <td>E-books, live sessions, LMS access, and online academic contact classes keep learning accessible</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Who Should Pursue This Programme?</h3>
<p>This course is specifically suited for:</p>
<ul>
  <li><strong>BLISc graduates</strong> aiming for chief librarian, college librarian, or documentation officer appointments.</li>
  <li><strong>Working library staff</strong> seeking grade promotion, higher pay scales, and administrative responsibilities.</li>
  <li><strong>Professionals interested in digital libraries</strong>, archival preservation, metadata engineering, and knowledge management.</li>
  <li><strong>Candidates preparing for academic research</strong> (UGC NET in Library Science or Ph.D. degrees).</li>
</ul>
<p>Since daily attendance is not required, you can balance your studies with a job and prepare steadily for semester examinations.</p>

<h3>MLIS from DU SOL Duration and Eligibility</h3>
<p>The programme is a one-year postgraduate course divided into two semesters. This compact format lets students earn a master's qualification quickly without long breaks from work.</p>
<p>To apply, candidates must have completed a BLISc (Bachelor of Library and Information Science) degree from a recognized university. Minimum marks criteria are:</p>
<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Category</th>
      <th>Minimum Qualifying Marks</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>General Category</strong></td>
      <td>Minimum 50% aggregate marks in BLISc</td>
    </tr>
    <tr>
      <td><strong>OBC, EWS, and PwBD</strong></td>
      <td>Minimum 45% aggregate marks in BLISc</td>
    </tr>
    <tr>
      <td><strong>SC and ST Candidates</strong></td>
      <td>Passing marks in the BLISc degree</td>
    </tr>
  </tbody>
</table>
</div>
<p><em>Admission is merit-based. Criteria can change each session, so confirm them on the official DU SOL website before applying.</em></p>

<h3>Accreditation and Recognition</h3>
<p>DU SOL is UGC-DEB approved, and the University of Delhi is NAAC accredited. An MLIS degree from DU SOL has complete academic validity for central and state government librarian recruitments, university appointments, UGC NET examinations, and Ph.D. admissions nationwide.</p>

<h3>Curriculum and Learning Methodology</h3>
<p>The curriculum runs across two semesters with core library science papers, assignments, and research projects. Key subjects include:</p>
<ul>
  <li>Information Sources, Systems and Services</li>
  <li>Information and Communication Technology (ICT) Applications in Libraries</li>
  <li>Management of Library and Information Centres</li>
  <li>Research Methodology and Quantitative Techniques</li>
  <li>Digital Library Architecture, Metadata, and Information Retrieval</li>
  <li>Advanced Cataloguing and Classification Practicals</li>
</ul>
<p>Learners benefit from e-books, printed study materials, live interactive sessions, contact classes, and a 24/7 learning management system.</p>

<h3>MLIS from DU SOL Fee Structure</h3>
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
      <td>Approximately ₹5,420 per year</td>
      <td>Tuition, LMS access, and comprehensive printed/digital study material</td>
    </tr>
    <tr>
      <td><strong>Examination fee</strong></td>
      <td>₹200 per subject</td>
      <td>Semester examination fee per paper</td>
    </tr>
  </tbody>
</table>
</div>
<p><em>Fees may change each session, so check the official portal at sol.du.ac.in before paying. University fees must be paid only to the university.</em></p>

<h3>Career Scope After the Programme</h3>
<p>Graduates can work in prestigious academic, governmental, and private information institutions:</p>
<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Domain</th>
      <th>Target Job Roles</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Academic Institutions</strong></td>
      <td>University Head Librarian, College Librarian, Assistant Librarian</td>
    </tr>
    <tr>
      <td><strong>Government &amp; Public Sector</strong></td>
      <td>Library &amp; Information Officer in Ministries, CSIR Labs, DRDO, National Archives</td>
    </tr>
    <tr>
      <td><strong>Documentation &amp; Research</strong></td>
      <td>Documentation Officer, Senior Research Archivist, Records Manager</td>
    </tr>
    <tr>
      <td><strong>Digital Information &amp; Corporate</strong></td>
      <td>Digital Library Manager, Information Architecture Specialist, Knowledge Manager</td>
    </tr>
    <tr>
      <td><strong>Academia &amp; Higher Studies</strong></td>
      <td>Assistant Professor (via UGC NET in LIS), Ph.D. Doctoral Scholar</td>
    </tr>
  </tbody>
</table>
</div>

<h3>How to Apply for MLIS from DU SOL</h3>
<ol>
  <li><strong>Visit the official portal:</strong> Go to the official admission portal at sol.du.ac.in.</li>
  <li><strong>Register:</strong> Fill in the online registration form with your email ID and mobile number.</li>
  <li><strong>Upload documents:</strong> Attach BLISc marksheets, certificates, ID proof, photograph, and signature.</li>
  <li><strong>Pay fee online:</strong> Submit the application fee through the online payment gateway.</li>
  <li><strong>Check merit list:</strong> Once selected in the merit round, complete verification and pay the course fee.</li>
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
      <td><strong>What is the duration of the MLIS from DU SOL?</strong></td>
      <td>It is a one-year postgraduate programme divided into two semesters.</td>
    </tr>
    <tr>
      <td><strong>Who can apply for MLIS distance education at DU SOL?</strong></td>
      <td>Graduates who have completed their BLISc (Bachelor of Library and Information Science) from a recognized university and meet the category marks criteria.</td>
    </tr>
    <tr>
      <td><strong>What is the fee for DU SOL MLIS?</strong></td>
      <td>Roughly ₹5,420 per year, plus a ₹500 application fee and ₹200 per subject for examinations.</td>
    </tr>
    <tr>
      <td><strong>Is the DU SOL MLIS degree recognized?</strong></td>
      <td>Yes, DU SOL is UGC-DEB approved and the degree is awarded by the University of Delhi.</td>
    </tr>
    <tr>
      <td><strong>Can working professionals study this course?</strong></td>
      <td>Yes, flexible digital study materials, LMS portals, and online contact sessions are specifically designed for working learners.</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Conclusion</h3>
<p>If you want to gain library science skills without stopping your career, an MLIS from DU SOL is worth serious thought. It brings together Delhi University’s reputation, UGC-DEB approval, a one-year study plan and affordable fees. Whether your goal is to become a librarian, work in research, or manage information systems, the MLIS distance education program at DU SOL gives you a clear path. Check your eligibility and connect with our counsellors for free guidance to start your DU SOL MLIS journey today.</p>`;

const mlisFaqs = [
  {
    question: "What is the duration of the MLIS from DU SOL?",
    answer: "It is a one-year postgraduate programme divided into two semesters.",
  },
  {
    question: "Who can apply for MLIS distance education at DU SOL?",
    answer: "Graduates who hold a BLISc (Bachelor of Library and Information Science) degree from a recognized university meeting the category percentage criteria.",
  },
  {
    question: "What is the annual fee for DU SOL MLIS?",
    answer: "Roughly ₹5,420 per year, with a one-time ₹500 application fee and ₹200 per subject for semester examinations.",
  },
  {
    question: "Is the DU SOL MLIS degree recognized for government librarian jobs?",
    answer: "Yes, DU SOL is UGC-DEB approved and awarded by the University of Delhi, making graduates fully eligible for central/state government librarian recruitments, KVS, NVS, and university positions.",
  },
  {
    question: "Can working professionals study this course while keeping their job?",
    answer: "Yes, flexible digital/printed study materials, LMS access, and online academic sessions are tailored specifically for working professionals.",
  },
];

const mlisFees = [
  { title: "Application Fee", amount: "₹500", note: "One-time online registration fee" },
  { title: "Course Fee (Annual)", amount: "₹5,420", note: "Tuition, LMS access, and comprehensive study material per year" },
  { title: "Examination Fee", amount: "₹200", note: "Per subject semester exam fee" },
];

async function updateMLIS() {
  console.log("Updating MLIS program in Firestore...");
  const updateData = {
    name: "Master of Library and Information Science (MLIS)",
    seoTitle: "MLIS from DU SOL: Fees, Eligibility & Admission 2026",
    seoDescription:
      "Explore the MLIS from DU SOL: fees, eligibility, curriculum and admission steps. A flexible MLIS distance education option from Delhi University.",
    duration: "1 year (2 semesters)",
    degree: "Master of Library & Information Science",
    type: "pg",
    overview:
      "Dreaming of a career in libraries, archives, or information centers? An MLIS from DU SOL is a flexible, affordable 1-year postgraduate degree from Delhi University for BLISc graduates.",
    description:
      "Dreaming of a career in libraries, archives, or information centers? An MLIS from DU SOL could be the ideal next step. Offered by the School of Open Learning, University of Delhi, it is a flexible and affordable postgraduate programme for library science graduates who want to study at their own pace. This guide covers the MLIS from DU SOL in detail, including eligibility, fees, curriculum, and career scope.\n\nThe programme is a one-year postgraduate degree designed for learners seeking to deepen their understanding of library and information science through flexible learning, covering Information Sources, ICT Applications, Management of Library Centres, and Research Methods.",
    eligibility:
      "BLISc degree from a recognized university. Minimum 50% marks for General category, 45% for OBC/EWS/PwBD, and passing marks for SC/ST candidates. Merit-based admission.",
    admissionProcess:
      "Direct online admission via sol.du.ac.in. Register online, upload BLISc marksheets and ID, pay the application fee, check the merit list, and confirm admission by paying the annual fee.",
    content: mlisContent,
    faqs: mlisFaqs,
    fees: mlisFees,
    careerOpportunities: [
      "University Head Librarian & College Librarian",
      "Library & Information Officer (Ministries, CSIR, DRDO)",
      "Senior Research Archivist & Records Manager",
      "Digital Library Manager & Knowledge Architect",
      "College Assistant Professor (via UGC NET in LIS)",
      "Doctoral Research Scholar (Ph.D.) in Library Science",
    ],
    updatedAt: new Date().toISOString(),
  };

  const docRef = db.collection("pgPrograms").doc("master-of-library-and-information-science");
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    await docRef.set(updateData, { merge: true });
    console.log("✅ Successfully updated master-of-library-and-information-science in pgPrograms!");
  } else {
    await docRef.set({
      id: "master-of-library-and-information-science",
      slug: "master-of-library-and-information-science",
      status: "published",
      createdAt: new Date().toISOString(),
      ...updateData,
    });
    console.log("✅ Created master-of-library-and-information-science in pgPrograms!");
  }
}

updateMLIS().catch(console.error);
