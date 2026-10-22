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

const maContent = `<h2>MA from DU SOL: Course Details, Fees, Eligibility and Admission</h2>
<p>Looking to attain a postgraduate degree without compromising on your profession and living? An MA from DU SOL is a perfect solution to your dilemma. The School of Open Learning, University of Delhi offers an affordable and convenient way for graduates to pursue a postgraduate degree online from Delhi University.</p>
<p>This guide will inform you about all the details of an MA from DU SOL including eligibility, syllabus, fee, career scope, and everything else that will help you in your decision-making.</p>

<h3>MA Distance Education at DU SOL: Overview</h3>
<p>The School of Open Learning (DU SOL) is the Distance Education wing of Delhi University. The distance education MA programme of Delhi University is ideal for working professionals, homemakers, and students who have problems in attending regular classes. DU SOL courses are approved by UGC-DEB and give the degree from one of India's renowned universities.</p>
<p>Students can select Hindi, History, Political Science, and Sanskrit or a general MA. Study material is available in both print and digital formats, and students can access lectures and learning support via the official website. DU SOL MA distance education truly is a self-paced model of higher education for those managing education along with other responsibilities.</p>

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
      <td>Master of Arts (MA)</td>
    </tr>
    <tr>
      <td><strong>University</strong></td>
      <td>University of Delhi, School of Open Learning (DU SOL)</td>
    </tr>
    <tr>
      <td><strong>Duration</strong></td>
      <td>2 years (4 semesters)</td>
    </tr>
    <tr>
      <td><strong>Mode</strong></td>
      <td>Distance education, blended learning</td>
    </tr>
    <tr>
      <td><strong>Approvals</strong></td>
      <td>UGC-DEB entitled, NAAC accredited</td>
    </tr>
    <tr>
      <td><strong>Specializations</strong></td>
      <td>Hindi, History, Political Science, Sanskrit, General MA</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Why Choose an MA from DU SOL?</h3>
<p>An MA from DU SOL offers several practical advantages:</p>
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
      <td><strong>Renowned degree</strong></td>
      <td>The degree is awarded by the University of Delhi, recognized by employers and global universities alike</td>
    </tr>
    <tr>
      <td><strong>Affordable fees</strong></td>
      <td>Economical charges (approx. ₹10,870/year) compared against high tuition at private universities</td>
    </tr>
    <tr>
      <td><strong>Flexible learning</strong></td>
      <td>You choose when and where to study—ideal for fitting studies around a job or family</td>
    </tr>
    <tr>
      <td><strong>Digital assets</strong></td>
      <td>E-books, live interactive sessions, LMS portal, and online academic support</td>
    </tr>
    <tr>
      <td><strong>Career advancement</strong></td>
      <td>Enables eligibility for UGC NET, college lecturing, civil services, and government jobs</td>
    </tr>
  </tbody>
</table>
</div>

<h3>MA from DU SOL Duration and Eligibility</h3>
<p>The programme runs for two years, divided into four semesters. This structure gives students enough time to understand each subject without the pressure of a fast-track schedule.</p>
<p>To apply, candidates need a bachelor's degree from a recognized university. Graduates generally need at least 50% marks, while the requirement is 45% for SC, ST, and PwBD candidates. Admission is merit-based and can be taken with or without a CUET-PG score. If seats remain unfilled after the CUET round, admission is offered on the basis of graduation marks. Since requirements may differ by specialization, always confirm the latest criteria on the official DU SOL website before applying.</p>

<h3>Specializations Offered</h3>
<p>The MA distance education programme at DU SOL includes these key options:</p>
<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Specialization</th>
      <th>Focus Area &amp; Career Orientation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>MA Political Science</strong></td>
      <td>International relations, Indian political thought, public administration (popular for UPSC &amp; policy roles)</td>
    </tr>
    <tr>
      <td><strong>MA History</strong></td>
      <td>Ancient, medieval &amp; modern Indian history, world history, historiography (popular for civil services &amp; research)</td>
    </tr>
    <tr>
      <td><strong>MA Hindi</strong></td>
      <td>Hindi literature, linguistics, translation studies, criticism (ideal for teaching &amp; media)</td>
    </tr>
    <tr>
      <td><strong>MA Sanskrit</strong></td>
      <td>Classical literature, Vedic studies, philosophy, grammar (ideal for academia &amp; linguistics)</td>
    </tr>
    <tr>
      <td><strong>General MA</strong></td>
      <td>Broad interdisciplinary humanities grounding for administrative and social careers</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Accreditation and Recognition</h3>
<p>Approvals matter when choosing any distance programme. DU SOL is UGC-DEB approved, and the University of Delhi is NAAC accredited. The degree holds the same academic value as a regular Delhi University MA, which means it is accepted for higher studies, competitive exams (UPSC, State PSC), UGC NET, and government recruitment.</p>

<h3>Curriculum and Learning Methodology</h3>
<p>The curriculum is spread across four semesters and covers core papers along with specialization-specific subjects. The syllabus is designed for independent learning, and students submit assignments and appear for semester-end examinations. DU SOL supports learners through:</p>
<ul>
  <li>E-books and printed study material</li>
  <li>Live interactive sessions with experienced Delhi University faculty</li>
  <li>Projects and assignments to test understanding</li>
  <li>A learning management system (LMS)</li>
  <li>Study centres across Delhi and worldwide learner reach</li>
</ul>

<h3>MA from DU SOL Fee Structure</h3>
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
      <td>Approximately ₹10,870 per year</td>
      <td>Tuition, LMS access, and comprehensive study material</td>
    </tr>
    <tr>
      <td><strong>Examination fee</strong></td>
      <td>₹200 per subject</td>
      <td>Semester-end university examination fee</td>
    </tr>
  </tbody>
</table>
</div>
<p><em>Fees can change each session, so check the official portal at sol.du.ac.in for current figures before paying. University fees must be paid only to the university.</em></p>

<h3>Career Scope After an MA from DU SOL</h3>
<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Career Domain</th>
      <th>Opportunities &amp; Job Roles</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Teaching &amp; Academia</strong></td>
      <td>Assistant Professor (via UGC NET), PGT School Teacher (via B.Ed/DSSSB/KVS)</td>
    </tr>
    <tr>
      <td><strong>Civil Services &amp; Government</strong></td>
      <td>UPSC Civil Services, State PSC, SSC CGL, Ministry Research Officers</td>
    </tr>
    <tr>
      <td><strong>Research &amp; Higher Studies</strong></td>
      <td>M.Phil, Ph.D., Research Fellows in think tanks (ICSSR, IDSA, CPR)</td>
    </tr>
    <tr>
      <td><strong>Journalism &amp; Media</strong></td>
      <td>Political Analyst, Senior Editor, Content Strategist, News Reporter</td>
    </tr>
    <tr>
      <td><strong>Public Sector &amp; NGOs</strong></td>
      <td>Policy Analyst, Program Coordinator, Cultural Heritage Officer</td>
    </tr>
  </tbody>
</table>
</div>

<h3>How to Apply for DU SOL MA Admission</h3>
<ol>
  <li><strong>Visit the official portal:</strong> Go to the official DU SOL admission portal at sol.du.ac.in.</li>
  <li><strong>Register:</strong> Fill in the online registration form with your active email ID and phone number.</li>
  <li><strong>Upload documents:</strong> Attach graduation marksheets, ID proof, photograph, and signature.</li>
  <li><strong>Pay fee online:</strong> Pay the registration fee through the secure payment gateway.</li>
  <li><strong>Check merit list:</strong> Review the admission list, complete verification, and pay the annual course fee.</li>
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
      <td><strong>Is an MA from DU SOL valid for UGC NET and PhD?</strong></td>
      <td>Yes. The degree is UGC-DEB approved and awarded by Delhi University, making you completely eligible for the UGC NET examination, Assistant Professorship, and PhD admissions.</td>
    </tr>
    <tr>
      <td><strong>What specializations are offered in DU SOL MA?</strong></td>
      <td>Specializations include Political Science, History, Hindi, Sanskrit, and General MA.</td>
    </tr>
    <tr>
      <td><strong>Is CUET-PG compulsory for DU SOL MA admission?</strong></td>
      <td>No. While CUET-PG scores are accepted, admissions are also offered directly on the basis of graduation merit if seats remain.</td>
    </tr>
    <tr>
      <td><strong>Can I pursue an MA while working full-time?</strong></td>
      <td>Yes. DU SOL is specifically tailored for working professionals, providing self-paced digital/printed material, recorded lectures, and weekend classes.</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Conclusion</h3>
<p>If you are looking to get a recognized postgraduate degree without disturbing your daily life, an MA from DU SOL is the best option for you. It offers convenient study hours, affordable course fee, practical curriculum and provides eligibility for various government jobs and higher studies. Compare the specializations, pick the subject that matches your career vision, and apply before the admission deadline. For personalized guidance, connect with our counsellors for free.</p>`;

const maFaqs = [
  {
    question: "Is an MA from DU SOL valid for UGC NET and PhD?",
    answer: "Yes. The degree is UGC-DEB approved and awarded by Delhi University, making you completely eligible for the UGC NET examination, Assistant Professorship, and PhD admissions.",
  },
  {
    question: "What specializations are offered in DU SOL MA?",
    answer: "DU SOL offers Master of Arts in Political Science, History, Hindi, Sanskrit, and General MA.",
  },
  {
    question: "Is CUET-PG compulsory for DU SOL MA admission?",
    answer: "No. While CUET-PG scores are accepted, direct merit admissions based on bachelor's graduation marks are also conducted.",
  },
  {
    question: "Can I pursue an MA while working full-time?",
    answer: "Yes. The program is self-paced with digital learning resources, printed materials, LMS access, and weekend counselling sessions suited for working professionals.",
  },
];

const maFees = [
  { title: "Application Fee", amount: "₹500", note: "One-time online registration fee" },
  { title: "Course Fee (Annual)", amount: "₹10,870", note: "Approximate tuition & comprehensive study material per year" },
  { title: "Examination Fee", amount: "₹200", note: "Per subject semester examination fee" },
];

async function updateMA() {
  console.log("Updating MA program in Firestore...");
  const updateData = {
    name: "Master of Arts (MA) - Hindi, History, Pol Science & Sanskrit",
    seoTitle: "MA from DU SOL: Fees, Eligibility & Admission 2026",
    seoDescription:
      "Explore MA from DU SOL, including eligibility, fees, specializations, syllabus, admission process, and career opportunities through distance education.",
    duration: "2 years (4 semesters)",
    degree: "Master of Arts",
    type: "pg",
    overview:
      "Looking to attain a postgraduate degree without compromising your job? DU SOL offers an affordable, UGC-DEB approved MA with specializations in Political Science, History, Hindi, and Sanskrit.",
    description:
      "Looking to attain a postgraduate degree without compromising on your profession and living? An MA from DU SOL is a perfect solution to your dilemma. The School of Open Learning, University of Delhi offers an affordable and convenient way for graduates to pursue a postgraduate degree online from Delhi University.\n\nStudents can select Hindi, History, Political Science, and Sanskrit or a general MA. Study material is available in both print and digital formats, and students can access lectures and learning support via the official website. DU SOL MA distance education truly is a self-paced model of higher education for those managing education along with other responsibilities.",
    eligibility:
      "Bachelor's degree from a recognized university with at least 50% marks (45% for SC/ST/PwBD). Admission is merit-based with or without CUET-PG.",
    admissionProcess:
      "Online registration on sol.du.ac.in. Upload graduation marksheets and ID proof, pay the application fee online, check the merit list, and complete annual fee payment.",
    content: maContent,
    faqs: maFaqs,
    fees: maFees,
    careerOpportunities: [
      "College & University Assistant Professor (via UGC NET)",
      "PGT School Teacher (via B.Ed, KVS, DSSSB, NVS)",
      "Civil Services (UPSC, State PSC, SSC CGL)",
      "Policy Analyst & Researcher in Think Tanks",
      "Journalism, Media & Content Writing",
      "Doctoral Studies (Ph.D.) in Humanities",
    ],
    updatedAt: new Date().toISOString(),
  };

  const docRef = db.collection("pgPrograms").doc("master-of-arts");
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    await docRef.set(updateData, { merge: true });
    console.log("✅ Successfully updated master-of-arts in pgPrograms!");
  } else {
    await docRef.set({
      id: "master-of-arts",
      slug: "master-of-arts",
      status: "published",
      createdAt: new Date().toISOString(),
      ...updateData,
    });
    console.log("✅ Created master-of-arts in pgPrograms!");
  }
}

updateMA().catch(console.error);
