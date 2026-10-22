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

const blisContent = `<h2>BLIS from DU SOL: Admission 2026, Eligibility, Fees &amp; Syllabus</h2>
<p>Considering a future in library, archive or information management sector but not able to leave your current job? BLIS from DU SOL may be what you are looking for. The Bachelor of Library and Information Science (BLISc) Degree Course is a correspondence course run by the School of Open Learning, Delhi University, through which students can obtain a University of Delhi degree. Get details about DLIS, DU SOL, course, eligibility, syllabus and career options.</p>

<h3>What Is BLIS from DU SOL?</h3>
<p>BLIS DU SOL is a one-year Bachelor of Library and Information Science course for graduates. The programme equips you with skills in library management, cataloguing, classification, digital libraries, organising information and research methods. DU SOL is designed for working professionals, so you can learn while continuing to work.</p>
<p>BLIS distance education has become popular as libraries require those with knowledge of the print system and the digital environment, viz, e-resources, library automation and information retrieval. All these areas are covered in the programme.</p>

<h3>Key Highlights of BLIS from DU SOL</h3>
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
      <td>Bachelor of Library and Information Science (BLISc)</td>
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
      <td>BLIS distance education (open learning)</td>
    </tr>
    <tr>
      <td><strong>Eligibility</strong></td>
      <td>Bachelor’s degree in any stream from a recognised university</td>
    </tr>
    <tr>
      <td><strong>Admission</strong></td>
      <td>Online, through the official SOL portal</td>
    </tr>
    <tr>
      <td><strong>Study material</strong></td>
      <td>Self-learning material provided to enrolled students</td>
    </tr>
  </tbody>
</table>
</div>

<h3>BLIS from DU SOL Eligibility Criteria</h3>
<p>To apply for BLIS from DU SOL, you generally need a bachelor’s degree in any discipline from a recognised university. Minimum-marks requirements and category relaxations can change each session. Always check the latest DU SOL Library Science prospectus before applying.</p>
<p>You can usually apply if you are:</p>
<ul>
  <li>A graduate in Arts, Commerce, Science or any other stream</li>
  <li>A working professional wanting a library science degree while employed</li>
  <li>A graduate seeking a career change into library and information science</li>
</ul>

<h3>BLIS from DU SOL Admission Process 2026</h3>
<p>DU SOL admission for BLISc is fully online. Follow these steps to register:</p>
<ol>
  <li><strong>Visit the official portal:</strong> Go to sol.du.ac.in and open the Library and Information Science admission link.</li>
  <li><strong>Register:</strong> Create your account with a valid email ID and mobile number.</li>
  <li><strong>Fill in the form:</strong> Enter personal and academic details carefully.</li>
  <li><strong>Upload documents:</strong> Add your photograph, signature, graduation marksheet and category certificate, if applicable.</li>
  <li><strong>Pay the fee:</strong> Pay online by debit card, credit card or net banking.</li>
  <li><strong>Confirm admission:</strong> Wait for verification, then download your confirmation and keep a printout.</li>
</ol>
<p><em>Tip: Keep your documents scanned in the required size and format before you start. Apply well before the last date to avoid last-minute errors.</em></p>

<h3>BLIS from DU SOL Fees Structure</h3>
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
      <td><strong>Registration / Application Fee</strong></td>
      <td>₹500</td>
      <td>One-time online registration charge</td>
    </tr>
    <tr>
      <td><strong>Annual Course Fee</strong></td>
      <td>₹9,000 – ₹10,000</td>
      <td>Tuition, LMS, and learning materials (approx. ₹9,800/yr)</td>
    </tr>
    <tr>
      <td><strong>Examination Fee</strong></td>
      <td>Per university norms</td>
      <td>Semester-end examination fee</td>
    </tr>
  </tbody>
</table>
</div>
<p><em>Fees are revised periodically. Confirm the exact amount in the current official prospectus on sol.du.ac.in before paying.</em></p>

<h3>BLIS from DU SOL Syllabus</h3>
<p>The BLISc syllabus combines rigorous theoretical knowledge with practical library cataloguing and automation exercises:</p>
<ul>
  <li>Foundations of Library and Information Science</li>
  <li>Knowledge organisation: classification and cataloguing (DDC &amp; AACR-2)</li>
  <li>Library management and administration</li>
  <li>Information sources and services (print &amp; electronic)</li>
  <li>Information and communication technology (ICT) for libraries</li>
  <li>Research methods and statistics for library science</li>
  <li>Practical work: cataloguing, classification and digital library skills</li>
</ul>

<h3>Why Choose BLIS Distance Education at DU SOL?</h3>
<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Advantage</th>
      <th>What it means for you</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Respected university brand</strong></td>
      <td>A Delhi University degree carries strong academic and employer recognition</td>
    </tr>
    <tr>
      <td><strong>Flexibility</strong></td>
      <td>Study at your own pace alongside your job or competitive preparation</td>
    </tr>
    <tr>
      <td><strong>Affordable</strong></td>
      <td>Substantially lower fees than private library science colleges</td>
    </tr>
    <tr>
      <td><strong>Study support</strong></td>
      <td>Self-learning material and access to the DU Central Library network</td>
    </tr>
    <tr>
      <td><strong>Career growth</strong></td>
      <td>The standard qualification needed for government and institutional library posts</td>
    </tr>
    <tr>
      <td><strong>Higher study pathway</strong></td>
      <td>Directly eligible to progress to MLIS (Master of Library &amp; Information Science)</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Career Scope After BLIS from DU SOL</h3>
<p>Graduates with a BLIS degree can work across public, academic, and private knowledge sectors as:</p>
<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Job Role</th>
      <th>Core Responsibilities</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Librarian / Assistant Librarian</strong></td>
      <td>Manage collection development, book acquisition, and circulation systems</td>
    </tr>
    <tr>
      <td><strong>Library &amp; Information Officer</strong></td>
      <td>Administer institutional knowledge repositories and research collections</td>
    </tr>
    <tr>
      <td><strong>Documentation Officer</strong></td>
      <td>Index, catalog, and preserve scientific, government, and technical reports</td>
    </tr>
    <tr>
      <td><strong>Archivist &amp; Records Manager</strong></td>
      <td>Preserve historical documents, national archives, and digital media</td>
    </tr>
    <tr>
      <td><strong>Digital Library Manager</strong></td>
      <td>Maintain online databases, e-journals, metadata, and institutional repositories</td>
    </tr>
    <tr>
      <td><strong>Information / Knowledge Analyst</strong></td>
      <td>Organize enterprise data and research intelligence in corporate firms</td>
    </tr>
  </tbody>
</table>
</div>
<p><strong>Top Employers:</strong> Central and state universities, Kendriya Vidyalayas (KVS), Navodaya Vidyalayas (NVS), CSIR laboratories, corporate legal firms, publishing houses, national museums, and NGOs.</p>

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
      <td><strong>Is the BLIS from DU SOL valid for government jobs?</strong></td>
      <td>Yes. The degree is UGC-DEB entitled and awarded by the University of Delhi, making you eligible for librarian recruitment in government schools, colleges, and national institutes.</td>
    </tr>
    <tr>
      <td><strong>What is the duration of BLIS at DU SOL?</strong></td>
      <td>BLIS is a 1-year professional degree program divided into 2 semesters.</td>
    </tr>
    <tr>
      <td><strong>Can I study BLIS while working full-time?</strong></td>
      <td>Yes. The curriculum is specifically designed with self-learning printed/digital modules and weekend academic counselling so working professionals can balance job commitments.</td>
    </tr>
    <tr>
      <td><strong>What is the eligibility for BLIS admission?</strong></td>
      <td>You need a Bachelor’s degree in any stream (Arts, Science, Commerce) from a recognized university.</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Is BLIS from DU SOL Worth It?</h3>
<p>Yes. If you are a graduate seeking a recognized, affordable qualification in library and information science and require flexibility, BLIS from DU SOL offers a respected Delhi University credential along with practical skills for contemporary libraries. Before deciding, compare it with other BLIS distance education options in terms of fees, support, and recognition.</p>`;

const blisFaqs = [
  {
    question: "Is the BLIS from DU SOL valid for government jobs?",
    answer: "Yes. The degree is UGC-DEB entitled and awarded by the University of Delhi, making you eligible for librarian recruitment in government schools, universities, and national research institutes.",
  },
  {
    question: "What is the duration of BLIS at DU SOL?",
    answer: "BLIS is a 1-year professional graduate degree program structured across 2 semesters.",
  },
  {
    question: "Can I study BLIS while working full-time?",
    answer: "Yes. The curriculum is tailored for working professionals with self-learning printed/digital modules, LMS access, and weekend counselling sessions.",
  },
  {
    question: "What is the eligibility for BLIS admission at DU SOL?",
    answer: "You need a Bachelor’s degree in any stream (Arts, Science, Commerce, Engineering) from a recognized university. Admissions are merit-based.",
  },
];

const blisFees = [
  { title: "Application / Registration Fee", amount: "₹500", note: "One-time online registration fee" },
  { title: "Annual Course Fee", amount: "₹9,800", note: "Complete 1-year program tuition & learning resources" },
  { title: "Examination Fee", amount: "₹200", note: "Per subject semester exam fee" },
];

async function updateBLIS() {
  console.log("Updating BLIS program in Firestore...");
  const updateData = {
    name: "Bachelor of Library and Information Science (BLIS)",
    seoTitle: "BLIS from DU SOL: Admission 2026, Eligibility & Fees",
    seoDescription:
      "Explore BLIS from DU SOL 2026: eligibility, admission process, fees and syllabus. Know why BLIS distance education at Delhi University suits graduates.",
    duration: "1 year (2 semesters)",
    degree: "Bachelor of Library and Information Science",
    overview:
      "Considering a future in library, archive or information management? The 1-year BLISc from DU SOL equips graduates with skills in digital libraries, classification, cataloguing, and information retrieval.",
    description:
      "Considering a future in library, archive or information management sector but not able to leave your current job? BLIS from DU SOL may be what you are looking for. The Bachelor of Library and Information Science (BLISc) Degree Course is a correspondence course run by the School of Open Learning, Delhi University, through which students can obtain a University of Delhi degree.\n\nBLIS DU SOL is a one-year Bachelor of Library and Information Science course for graduates. The programme equips you with skills in library management, cataloguing, classification, digital libraries, organising information and research methods. DU SOL is designed for working professionals, so you can learn while continuing to work.",
    eligibility:
      "Bachelor’s degree in any discipline (Arts, Science, Commerce, Engineering) from a recognised university. No upper age limit.",
    admissionProcess:
      "Direct online admission via sol.du.ac.in. Register, fill personal and educational details, upload graduation marksheet and ID, pay fees online, and download admission confirmation.",
    content: blisContent,
    faqs: blisFaqs,
    fees: blisFees,
    careerOpportunities: [
      "Librarian / Assistant Librarian (Schools, Colleges, Universities)",
      "Library & Information Officer",
      "Documentation Officer (Research Institutes & CSIR)",
      "Archivist & Records Manager",
      "Digital Library & E-Resource Manager",
      "Information & Knowledge Analyst (Corporate Law & Research Firms)",
      "Progression to MLIS (Master of Library & Information Science)",
    ],
    updatedAt: new Date().toISOString(),
  };

  const docRef = db.collection("ugPrograms").doc("bachelor-of-library-and-information-science");
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    await docRef.set(updateData, { merge: true });
    console.log("✅ Successfully updated bachelor-of-library-and-information-science in ugPrograms!");
  } else {
    await docRef.set({
      id: "bachelor-of-library-and-information-science",
      slug: "bachelor-of-library-and-information-science",
      type: "ug",
      status: "published",
      createdAt: new Date().toISOString(),
      ...updateData,
    });
    console.log("✅ Created bachelor-of-library-and-information-science in ugPrograms!");
  }
}

updateBLIS().catch(console.error);
