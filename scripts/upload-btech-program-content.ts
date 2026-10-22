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

export const btechContent = `<h2>BTech from DU SOL: Fees, Eligibility, Duration and Admission</h2>
<p>Want an engineering degree while holding down a job? A BTech from DU SOL could be an option worth exploring. The School of Open Learning, University of Delhi, is listed as offering a flexible technical programme for diploma holders, working professionals, and students who cannot attend regular classes. This guide covers the BTech from DU SOL, including eligibility, fees, specializations, and approvals, so you can check every detail before applying.</p>

<h3>Online BTech at DU SOL: Overview</h3>
<p>The DU SOL programme is an undergraduate engineering course offered in online or distance mode. It focuses on core engineering subjects and helps students build a strong foundation in technology, design, and practical applications. It is especially useful for diploma holders and working professionals who want to upgrade their qualifications without leaving their jobs.</p>
<p>Get hands-on with virtual labs and digital devices. The programme is spread over semesters. Online BTech studies provide learners the freedom to learn anytime, anywhere, with aid from academic counselling, webinars, and doubt clearance sessions. Learn from anywhere with access to lectures, study material, assignment help, and more with Online BTech study at DU SOL.</p>

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
      <td>Bachelor of Technology (B.Tech / Online B.Tech)</td>
    </tr>
    <tr>
      <td><strong>University</strong></td>
      <td>University of Delhi, School of Open Learning (DU SOL)</td>
    </tr>
    <tr>
      <td><strong>Duration</strong></td>
      <td>4 Years (Direct Entry) / 3 Years (Lateral Entry for Diploma Holders); Max 6 Years</td>
    </tr>
    <tr>
      <td><strong>Mode</strong></td>
      <td>Online / Distance Learning with Virtual Labs</td>
    </tr>
    <tr>
      <td><strong>Approvals</strong></td>
      <td>UGC-DEB approved, NAAC accredited; AICTE norm compliance</td>
    </tr>
    <tr>
      <td><strong>Eligibility</strong></td>
      <td>10+2 with PCM (Direct Entry) or 3-Year Polytechnic Engineering Diploma (Lateral Entry)</td>
    </tr>
    <tr>
      <td><strong>Annual Course Fee</strong></td>
      <td>Approximately ₹20,000 per year</td>
    </tr>
    <tr>
      <td><strong>Core Specializations</strong></td>
      <td>Computer Science, Civil, Mechanical, Electrical, Electronics &amp; Communication, Automobile</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Why Choose a BTech from DU SOL?</h3>
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
      <td><strong>Trusted university name</strong></td>
      <td>The programme is linked to the prestigious University of Delhi, respected across public and private industries</td>
    </tr>
    <tr>
      <td><strong>Flexible learning</strong></td>
      <td>Lectures, digital study material, recorded sessions, and assignments are accessible 24/7 on the LMS</td>
    </tr>
    <tr>
      <td><strong>Lateral entry route</strong></td>
      <td>Polytechnic diploma holders can join directly into the 2nd year (3rd semester), completing their degree in 3 years</td>
    </tr>
    <tr>
      <td><strong>Practical exposure</strong></td>
      <td>Interactive virtual simulation labs and modern digital tools support hands-on technical understanding</td>
    </tr>
    <tr>
      <td><strong>Affordable fees</strong></td>
      <td>Tuition of roughly ₹20,000/year makes engineering education accessible without hefty private college loans</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Who Should Pursue This Programme?</h3>
<p>This course suits a wide variety of technical aspirants:</p>
<ul>
  <li><strong>Engineering diploma holders</strong> who want to elevate their credentials to a full bachelor’s degree for promotions.</li>
  <li><strong>Working technicians and junior engineers</strong> seeking grade elevation to gazetted, executive, or managerial engineering posts.</li>
  <li><strong>Class 12th science students</strong> with PCM who need a flexible schedule to balance preparations or employment.</li>
  <li><strong>Professionals in civil, mechanical, computer, electrical, or electronics fields</strong> who cannot take a multi-year break from their careers.</li>
</ul>

<h3>BTech from DU SOL Duration and Eligibility</h3>
<p>Duration depends on your entry route. The listing mentions about four years (eight semesters) for direct entry and three years (six semesters) for lateral entry after an engineering diploma, with a maximum of six years to complete the programme.</p>
<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Entry Route</th>
      <th>Duration</th>
      <th>Eligibility Criteria</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Direct Entry (1st Year)</strong></td>
      <td>4 Years (8 Semesters)</td>
      <td>Passed 10+2 from a recognized board, preferably with Physics, Chemistry, and Mathematics (PCM)</td>
    </tr>
    <tr>
      <td><strong>Lateral Entry (2nd Year)</strong></td>
      <td>3 Years (6 Semesters)</td>
      <td>Completed a 3-Year Engineering Diploma from a recognized State Board of Technical Education / AICTE approved institute</td>
    </tr>
  </tbody>
</table>
</div>
<p><em>Because technical course regulations can vary across sessions, always confirm current eligibility and admission notices on the official DU SOL website before applying.</em></p>

<h3>Available Specializations</h3>
<p>The listed specializations encompass core and modern technology branches:</p>
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
      <td><strong>Computer Science Engineering (CSE)</strong></td>
      <td>Data structures, algorithms, cloud computing, software engineering, AI basics, web technologies</td>
    </tr>
    <tr>
      <td><strong>Civil Engineering</strong></td>
      <td>Structural analysis, surveying, concrete technology, geotechnical engineering, construction management</td>
    </tr>
    <tr>
      <td><strong>Mechanical Engineering</strong></td>
      <td>Thermodynamics, fluid mechanics, CAD/CAM, manufacturing processes, machine design</td>
    </tr>
    <tr>
      <td><strong>Electrical Engineering</strong></td>
      <td>Power systems, electrical machines, control engineering, circuit theory, renewable energy systems</td>
    </tr>
    <tr>
      <td><strong>Electronics &amp; Communication (ECE)</strong></td>
      <td>Digital electronics, microprocessors, communication systems, signal processing, VLSI fundamentals</td>
    </tr>
    <tr>
      <td><strong>Automobile Engineering</strong></td>
      <td>Vehicle dynamics, automotive electronics, IC engines, hybrid &amp; electric vehicles, automotive design</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Accreditation and Recognition</h3>
<p>DU SOL is UGC-DEB approved and the University of Delhi is NAAC accredited with top honors. Because technical courses require adherence to AICTE regulatory frameworks, students should double-check the latest approval notifications on the official AICTE and DU SOL websites to confirm current session accreditation prior to enrollment.</p>

<h3>Curriculum and Learning Methodology</h3>
<p>The curriculum is semester-based and combines core engineering theory with digital practical sessions. Learners benefit from:</p>
<ul>
  <li>E-books and comprehensive digital engineering study material</li>
  <li>Live interactive sessions and subject expert webinars</li>
  <li>Virtual laboratories and digital simulation tools for practical experiments</li>
  <li>Continuous evaluation via projects, case studies, and online assignments</li>
  <li>Weekend academic counselling and doubt-clearing forums</li>
</ul>
<p>These resources make Online BTech learning manageable alongside full-time work commitments.</p>

<h3>BTech from DU SOL Fee Structure</h3>
<p>Students can pay fees semester-wise or annually, keeping costs predictable and manageable:</p>
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
      <td>Approximately ₹20,000 per year</td>
      <td>Includes tuition, virtual lab simulation licenses, LMS access, and study materials</td>
    </tr>
    <tr>
      <td><strong>Examination fee</strong></td>
      <td>₹200 per subject</td>
      <td>Per-subject semester examination fee</td>
    </tr>
  </tbody>
</table>
</div>
<p><em>Fees may change each session, so check the official portal before paying. University fees must be paid only to the university.</em></p>

<h3>Career Scope After the Programme</h3>
<p>Graduates can work in both private industries and public sector undertakings (PSUs) relevant to their engineering discipline:</p>
<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Branch / Sector</th>
      <th>Target Career Roles</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Computer Science &amp; IT</strong></td>
      <td>Software Engineer, Full Stack Web Developer, System Analyst, Database Engineer</td>
    </tr>
    <tr>
      <td><strong>Civil &amp; Infrastructure</strong></td>
      <td>Civil Site Engineer, Assistant Project Engineer, Quantity Surveyor, Structural Drafter</td>
    </tr>
    <tr>
      <td><strong>Mechanical &amp; Manufacturing</strong></td>
      <td>Assistant Mechanical Design Engineer, Production Supervisor, Quality Assurance Lead</td>
    </tr>
    <tr>
      <td><strong>Electrical &amp; Energy</strong></td>
      <td>Electrical Maintenance Engineer, Power Distribution Technician, Automation Assistant</td>
    </tr>
    <tr>
      <td><strong>Electronics &amp; Hardware</strong></td>
      <td>Electronics Engineer, Telecom Network Executive, Embedded Systems Assistant</td>
    </tr>
    <tr>
      <td><strong>Automotive Industry</strong></td>
      <td>Automotive Design Engineer, Fleet Maintenance Lead, Testing &amp; Homologation Specialist</td>
    </tr>
  </tbody>
</table>
</div>

<h3>How to Apply</h3>
<ol>
  <li><strong>Visit the official portal:</strong> Go to the official admission portal at sol.du.ac.in.</li>
  <li><strong>Register online:</strong> Create an applicant account with your valid email ID and mobile number.</li>
  <li><strong>Fill application form:</strong> Choose your branch and entry route (Direct or Lateral), then enter academic details.</li>
  <li><strong>Upload documents:</strong> Attach 10th, 12th / Diploma marksheets, ID proof, photo, and signature.</li>
  <li><strong>Pay registration fee online:</strong> Pay the non-refundable ₹300 registration fee.</li>
  <li><strong>Check merit list:</strong> Upon verification, accept your seat and pay the course fee to confirm admission.</li>
</ol>
<p>The entire BTech from DU SOL admission process is conducted online, allowing you to apply from anywhere.</p>

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
      <td><strong>What is the duration of the BTech from DU SOL?</strong></td>
      <td>About four years (eight semesters) for direct entry and three years (six semesters) for lateral entry after an engineering diploma, with a maximum of six years.</td>
    </tr>
    <tr>
      <td><strong>Who can apply for Online BTech at DU SOL?</strong></td>
      <td>12th-pass students, preferably with PCM for direct entry, and polytechnic diploma holders in relevant branches for lateral entry.</td>
    </tr>
    <tr>
      <td><strong>What is the fee?</strong></td>
      <td>Roughly ₹20,000 per year, plus a ₹300 registration fee and ₹200 per subject for examinations.</td>
    </tr>
    <tr>
      <td><strong>Is the programme approved by UGC and AICTE?</strong></td>
      <td>The university is UGC-DEB approved and NAAC accredited. AICTE approval applies to technical engineering programs, so applicants should verify the latest session circular on the official portal.</td>
    </tr>
    <tr>
      <td><strong>Which specializations are offered?</strong></td>
      <td>Civil, Mechanical, Computer Science, Automobile, Electrical, and Electronics and Communication Engineering.</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Conclusion</h3>
<p>If you are looking to pursue an engineering degree without having to put your career on hold, then a BTech from DU SOL is worth considering. The programme associated with Delhi University provides the prestige of the university along with the flexibility of online mode of study, access to virtual lab facilities, and a manageable semester fee structure. For candidates with a diploma or those looking to upgrade their qualifications after 12th, Online BTech from Delhi University SOL can be a strong option, provided they confirm current course approvals. Compare the specialisations on offer, check eligibility criteria, and connect with free counselling to get started this admission cycle.</p>`;

export const btechFaqs = [
  {
    question: "What is the duration of the BTech from DU SOL?",
    answer:
      "About four years (eight semesters) for direct entry and three years (six semesters) for lateral entry after an engineering diploma, with a maximum of six years.",
  },
  {
    question: "Who can apply for Online BTech at DU SOL?",
    answer:
      "12th-pass students, preferably with PCM for direct entry, and polytechnic diploma holders in relevant branches for lateral entry.",
  },
  {
    question: "What is the fee for DU SOL BTech?",
    answer: "Roughly ₹20,000 per year, plus a ₹300 registration fee and ₹200 per subject for exams.",
  },
  {
    question: "Is the programme approved by UGC and AICTE?",
    answer:
      "DU SOL is UGC-DEB approved and NAAC accredited. For technical engineering courses, AICTE approval norms apply; check the official DU SOL portal for session-specific accreditation notices.",
  },
  {
    question: "Which specializations are offered in BTech?",
    answer:
      "Specializations include Civil, Mechanical, Computer Science, Automobile, Electrical, and Electronics and Communication Engineering.",
  },
];

export const btechFees = [
  { title: "Registration Fee", amount: "₹300", note: "One-time online registration fee at application" },
  { title: "Course Fee (Annual)", amount: "₹20,000", note: "Tuition, virtual simulation lab licenses, and LMS access per year" },
  { title: "Examination Fee", amount: "₹200", note: "Per subject semester exam fee" },
];

async function updateBTech() {
  console.log("Updating BTech program in Firestore...");
  const updateData = {
    name: "Bachelor of Technology (B.Tech)",
    seoTitle: "BTech from DU SOL: Fees, Eligibility & Admission 2026",
    seoDescription:
      "Explore the BTech from DU SOL: fees, duration, eligibility and specializations. A flexible Online BTech option from Delhi University.",
    duration: "4 Years (Direct) / 3 Years (Lateral Entry)",
    degree: "Bachelor of Technology (B.Tech)",
    type: "ug",
    overview:
      "Want an engineering degree while holding down a job? A BTech from DU SOL is a flexible technical programme for diploma holders, working professionals, and students seeking a recognized engineering degree from Delhi University.",
    description:
      "Want an engineering degree while holding down a job? A BTech from DU SOL could be an option worth exploring. The School of Open Learning, University of Delhi, is listed as offering a flexible technical programme for diploma holders, working professionals, and students who cannot attend regular classes. This guide covers the BTech from DU SOL, including eligibility, fees, specializations, and approvals, so you can check every detail before applying.\n\nThe DU SOL programme is an undergraduate engineering course offered in online or distance mode. It focuses on core engineering subjects and helps students build a strong foundation in technology, design, and practical applications, supported by virtual labs, webinars, and digital study tools.",
    eligibility:
      "Direct Entry: 10+2 passed from a recognized board, preferably with Physics, Chemistry, and Mathematics (PCM). Lateral Entry: 3-Year Engineering Diploma from a recognized State Technical Board / AICTE-approved institution. Merit-based admission.",
    admissionProcess:
      "Direct online application via sol.du.ac.in. Register online, select specialization and entry route (Direct or Lateral), upload 10+2 / Diploma marksheets and ID proof, pay the registration fee, verify documents on the merit list, and confirm admission by paying the course fee.",
    curriculum: [
      {
        semesterOrYear: "Semester 1 & 2 (Foundation)",
        subjects: [
          "Engineering Mathematics I & II",
          "Applied Physics & Chemistry",
          "Basic Electrical & Electronics Engineering",
          "Engineering Graphics & Computer-Aided Design",
          "Computer Programming in C / Python",
        ],
      },
      {
        semesterOrYear: "Semester 3 & 4 (Core & Lateral Entry Start)",
        subjects: [
          "Branch-Specific Core Subjects (Data Structures / Thermodynamics / Structural Analysis / Circuits)",
          "Applied Numerical Methods",
          "Virtual Engineering Simulation Lab",
          "Material Science & Engineering Mechanics",
        ],
      },
      {
        semesterOrYear: "Semester 5 & 6 (Advanced Engineering)",
        subjects: [
          "Branch Electives & Modern System Design",
          "Control Systems & Signal Processing",
          "Industrial Seminar & Mini-Project",
          "Engineering Economics & Management",
        ],
      },
      {
        semesterOrYear: "Semester 7 & 8 (Specialization & Capstone)",
        subjects: [
          "Advanced Domain Electives (Cloud / Robotics / Smart Grids / IoT)",
          "Professional Ethics & Environmental Engineering",
          "Major Capstone Project Work",
          "Industry Internship & Portfolio Defense",
        ],
      },
    ],
    content: btechContent,
    faqs: btechFaqs,
    fees: btechFees,
    careerOpportunities: [
      "Software Engineer & Full Stack Developer",
      "Civil Site Engineer & Construction Manager",
      "Mechanical Design Engineer & CAD Analyst",
      "Electrical Systems & Power Engineer",
      "Electronics & Communications Specialist",
      "Automotive Design & Testing Engineer",
    ],
    updatedAt: new Date().toISOString(),
  };

  const docRef = db.collection("ugPrograms").doc("bachelor-of-technology");
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    await docRef.set(updateData, { merge: true });
    console.log("✅ Successfully updated bachelor-of-technology in ugPrograms!");
  } else {
    await docRef.set({
      id: "bachelor-of-technology",
      slug: "bachelor-of-technology",
      status: "published",
      createdAt: new Date().toISOString(),
      ...updateData,
    });
    console.log("✅ Created bachelor-of-technology in ugPrograms!");
  }
}

updateBTech().catch(console.error);
