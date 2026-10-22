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

export const mbaBusinessManagementContent = `<h2>DU SOL MBA in Business Management: Fees, Eligibility and Admission</h2>
<p>Want to lead teams and manage businesses without leaving your job? The DU SOL MBA in Business Management could be the right step. Offered by the School of Open Learning, University of Delhi, it is a flexible and affordable postgraduate programme for graduates and working professionals. This guide covers the DU SOL MBA in Business Management in detail, including eligibility, fees, curriculum, and career scope.</p>

<h3>MBA in Business Management at DU SOL: Overview</h3>
<p>It is an online and distance learning MBA for working professionals and other individuals seeking to acquire a high-quality management qualification without the need to visit the campus. It is a programme which addresses core business concepts including finance, marketing, human resources, operations, and leadership.</p>
<p>Through the MBA in Business Management you will get online lectures, study material, and examination support that allows you to study along with your professional and personal commitments. An industry-ready syllabus is designed to give you a practical as well as holistic education. Be it for career enhancement or career change, the MBA in Business Management at DU SOL shall help you acquire the necessary skills to excel.</p>

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
      <td>Master of Business Administration (MBA) in Business Management</td>
    </tr>
    <tr>
      <td><strong>University</strong></td>
      <td>School of Open Learning, University of Delhi (DU SOL)</td>
    </tr>
    <tr>
      <td><strong>Duration</strong></td>
      <td>2 Years (4 Semesters)</td>
    </tr>
    <tr>
      <td><strong>Mode of Learning</strong></td>
      <td>Distance Learning / Online with weekend academic counselling</td>
    </tr>
    <tr>
      <td><strong>Approvals &amp; Accreditation</strong></td>
      <td>UGC-DEB approved, NAAC 'A++' Accredited University, AICTE recognized</td>
    </tr>
    <tr>
      <td><strong>Eligibility</strong></td>
      <td>Graduation in any discipline with min. 50% marks (45% for reserved) and valid OPENMAT score</td>
    </tr>
    <tr>
      <td><strong>Approximate Course Fee</strong></td>
      <td>₹52,570 per year (plus nominal exam &amp; registration fees)</td>
    </tr>
    <tr>
      <td><strong>Key Competencies</strong></td>
      <td>Corporate Finance, Marketing Strategy, HR Management, Operations &amp; Enterprise Leadership</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Why Choose the DU SOL MBA in Business Management?</h3>
<p>The DU SOL MBA in Business Management offers several practical advantages for graduates and professionals:</p>
<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Advantage</th>
      <th>What It Delivers For You</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Trusted university</strong></td>
      <td>The degree carries the prestigious Delhi University name, widely respected by corporate employers, MNCs, and public institutions.</td>
    </tr>
    <tr>
      <td><strong>Broad syllabus</strong></td>
      <td>It provides comprehensive, multi-disciplinary coverage of finance, marketing, human resources, operations, and strategic leadership.</td>
    </tr>
    <tr>
      <td><strong>Flexible learning</strong></td>
      <td>Online lectures, digital study modules, and weekend counselling sessions fit seamlessly around your professional work schedule.</td>
    </tr>
    <tr>
      <td><strong>Open to all graduates</strong></td>
      <td>Candidates from any discipline (Commerce, Arts, Science, Engineering, Law) can apply to build strong management acumen.</td>
    </tr>
    <tr>
      <td><strong>Career flexibility</strong></td>
      <td>It accelerates internal promotions into managerial ranks and facilitates transitions into cross-functional leadership roles.</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Who Should Pursue This Programme?</h3>
<p>This programme is structured to benefit diverse profiles seeking broad-based management excellence:</p>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li><strong>Recent Graduates:</strong> Fresh degree holders in Arts, Science, or Commerce who want to enter the corporate management space with high-value qualifications.</li>
  <li><strong>Working Professionals:</strong> Executives in technical, operational, or sales positions aiming to step up into general management and department leadership.</li>
  <li><strong>Entrepreneurs &amp; Business Founders:</strong> Startup founders and family business managers who require structured finance, marketing, and organizational design knowledge.</li>
  <li><strong>Career Switchers:</strong> Professionals from non-business backgrounds seeking to pivot into corporate strategy, consulting, or project management.</li>
</ul>
<p>Because you can study online with flexible schedules, you can maintain your full-time job while earning a prestigious master's degree from Delhi University.</p>

<h3>DU SOL MBA in Business Management Duration and Eligibility</h3>
<p>The programme is a two-year course divided into four semesters. This structure gives students ample time to master each business subject while continuing to work full-time.</p>

<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Criterion</th>
      <th>Requirement Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Educational Qualification</strong></td>
      <td>Bachelor's degree in any discipline from a recognized university.</td>
    </tr>
    <tr>
      <td><strong>Minimum Percentage</strong></td>
      <td>Normally requires a minimum of 50% aggregate marks (relaxation to 45% for reserved categories as per government norms).</td>
    </tr>
    <tr>
      <td><strong>Entrance Examination</strong></td>
      <td>Requires a valid OPENMAT score (distance education entrance test conducted by DU SOL).</td>
    </tr>
    <tr>
      <td><strong>Age Criteria</strong></td>
      <td>No age limit (No age bar for enrollment).</td>
    </tr>
    <tr>
      <td><strong>Admission Basis</strong></td>
      <td>Merit list based on graduation performance and OPENMAT results as per annual DU SOL guidelines.</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Accreditation and Recognition</h3>
<p>DU SOL has been approved by UGC-DEB, and the University of Delhi is accredited by NAAC with top-tier ratings. The programme listing also mentions AICTE accreditation. Candidates should verify statutory approvals on the official UGC-DEB and Delhi University websites before enrolling. The DU SOL MBA in Business Management carries authentic academic value across public and private sector organizations.</p>

<h3>Curriculum and Learning Methodology</h3>
<p>The curriculum runs across four semesters and combines foundational management papers with strategic applications:</p>

<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Semester</th>
      <th>Key Focus Papers &amp; Modules</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Semester 1</strong></td>
      <td>Management Principles &amp; Organizational Behaviour, Managerial Economics, Financial Accounting &amp; Reporting, Marketing Management</td>
    </tr>
    <tr>
      <td><strong>Semester 2</strong></td>
      <td>Corporate Finance, Human Resource Management, Operations &amp; Supply Chain Management, Business Research Methods</td>
    </tr>
    <tr>
      <td><strong>Semester 3</strong></td>
      <td>Strategic Management &amp; Business Policy, Digital Business &amp; E-Commerce, International Business Environment, Enterprise Leadership &amp; Change Management</td>
    </tr>
    <tr>
      <td><strong>Semester 4</strong></td>
      <td>Corporate Governance &amp; Business Ethics, Entrepreneurship &amp; Innovation, Cross-Functional Strategic Management, Capstone Business Management Dissertation / Major Project</td>
    </tr>
  </tbody>
</table>
</div>

<p>Learners benefit from comprehensive resources that make studying manageable alongside a full-time job:</p>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li><strong>E-books &amp; Printed Study Material:</strong> High-quality course booklets prepared by senior Delhi University faculty.</li>
  <li><strong>Live Interactive Sessions:</strong> Weekend academic counselling and online lectures with subject-matter experts.</li>
  <li><strong>Projects &amp; Assignments:</strong> Hands-on business case evaluations, financial analyses, and management simulations.</li>
  <li><strong>LMS Portal &amp; Digital Library:</strong> 24/7 access to e-journals, recorded lectures, repository archives, and reference materials.</li>
</ul>

<h3>DU SOL MBA in Business Management Fee Structure</h3>
<p>The fee structure of the DU SOL MBA in Business Management is remarkably affordable compared to conventional private MBA colleges:</p>

<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Fee Component</th>
      <th>Approximate Amount</th>
      <th>Frequency / Remarks</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>OPEN MAT Entrance Fee</strong></td>
      <td>₹800 (Open Category) / ₹600 (Reserved Category)</td>
      <td>One-time upon entrance exam registration</td>
    </tr>
    <tr>
      <td><strong>Registration Fee</strong></td>
      <td>₹300</td>
      <td>One-time online registration fee at the time of application</td>
    </tr>
    <tr>
      <td><strong>Annual Course Fee</strong></td>
      <td>₹52,570 per year</td>
      <td>Tuition, LMS access, digital library, and study materials</td>
    </tr>
    <tr>
      <td><strong>Examination Fee</strong></td>
      <td>₹200 per subject</td>
      <td>Payable per semester prior to term-end examinations</td>
    </tr>
  </tbody>
</table>
</div>
<p><em>Note: Fees may change each session, so check the official portal before paying. University fees must be paid only through the official university website.</em></p>

<h3>Career Scope After the Programme</h3>
<p>Graduates can take up leadership and functional management roles across diverse industries including IT, manufacturing, banking, FMCG, and consulting:</p>

<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Job Title</th>
      <th>Core Professional Responsibilities</th>
      <th>Expected Salary Range</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Business Manager</strong></td>
      <td>Oversee business unit performance, profit &amp; loss responsibility, operational strategy, and team leadership.</td>
      <td>₹6.5 - 12.0 LPA</td>
    </tr>
    <tr>
      <td><strong>Operations Manager</strong></td>
      <td>Direct workflow optimization, logistics, resource allocation, and quality management protocols.</td>
      <td>₹6.0 - 11.5 LPA</td>
    </tr>
    <tr>
      <td><strong>Marketing Manager</strong></td>
      <td>Formulate brand strategy, manage advertising campaigns, lead market research, and drive customer acquisition.</td>
      <td>₹6.2 - 12.5 LPA</td>
    </tr>
    <tr>
      <td><strong>HR Manager</strong></td>
      <td>Oversee talent management, workforce planning, performance appraisal systems, and corporate employee relations.</td>
      <td>₹5.8 - 11.0 LPA</td>
    </tr>
    <tr>
      <td><strong>Finance Executive / Manager</strong></td>
      <td>Drive corporate financial planning, capital budgeting, risk management, and regulatory compliance.</td>
      <td>₹6.5 - 13.0 LPA</td>
    </tr>
    <tr>
      <td><strong>Business Development Manager</strong></td>
      <td>Identify strategic expansion opportunities, cultivate B2B corporate partnerships, and drive institutional revenue.</td>
      <td>₹6.0 - 13.5 LPA</td>
    </tr>
  </tbody>
</table>
</div>

<h3>How to Apply for DU SOL MBA in Business Management</h3>
<p>The entire DU SOL MBA in Business Management admission process is handled online, allowing you to apply comfortably from any location:</p>
<ol class="list-decimal pl-6 space-y-2 my-3">
  <li><strong>Visit the Official Portal:</strong> Navigate to the official DU SOL admission portal at <code>sol.du.ac.in</code>.</li>
  <li><strong>Register &amp; Fill Form:</strong> Register with a valid email and mobile number, and enter your personal and academic details.</li>
  <li><strong>Upload Mandatory Documents:</strong> Upload scanned marksheets, graduation certificates, ID proof, and photographs.</li>
  <li><strong>Pay Registration Fee:</strong> Complete the registration fee payment online via net banking, UPI, or debit/credit card.</li>
  <li><strong>Check Merit List &amp; Confirm Admission:</strong> Review the merit list based on OPENMAT scores and complete the course fee payment to confirm admission.</li>
</ol>

<h3>Frequently Asked Questions</h3>
<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Question</th>
      <th>Official Answer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>What is the duration of the DU SOL MBA in Business Management?</strong></td>
      <td>It is a two-year programme divided into four semesters.</td>
    </tr>
    <tr>
      <td><strong>Who can apply for the MBA in Business Management at DU SOL?</strong></td>
      <td>Graduates in any discipline with 50% marks (45% for reserved categories) and a valid OPENMAT score.</td>
    </tr>
    <tr>
      <td><strong>What is the fee?</strong></td>
      <td>Roughly ₹52,570 per year, plus a ₹300 registration fee, ₹200 per subject examination fee, and the OPEN MAT fee.</td>
    </tr>
    <tr>
      <td><strong>Is the degree recognized?</strong></td>
      <td>Yes, the listing says UGC-DEB approved. Verify details on the official website.</td>
    </tr>
    <tr>
      <td><strong>How do I get study material?</strong></td>
      <td>Through printed books and digital resources, including the university's online LMS and digital library.</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Conclusion</h3>
<p>If you are looking at carving out a place for yourself in the management space without a break in your career, then the DU SOL MBA in Business Management should feature in your top choices. DU SOL MBA Business Management has Delhi University legacy, recognition with UGC-DEB, flexible process and admission, and an industry-oriented syllabus. Whether it’s for getting a promotion, switching sectors, or starting up on your own, DU SOL MBA Business Management is a safe and high-ROI choice. Compare options, check eligibility, and take free counselling today to start your DU SOL MBA in Business Management journey.</p>`;

export const mbaBusinessManagementFaqs = [
  {
    question: "What is the duration of the DU SOL MBA in Business Management?",
    answer: "It is a two-year programme divided into four semesters.",
  },
  {
    question: "Who can apply for the MBA in Business Management at DU SOL?",
    answer: "Graduates in any discipline with 50% marks (45% for reserved categories) and a valid OPENMAT score.",
  },
  {
    question: "What is the fee?",
    answer: "Roughly ₹52,570 per year, plus ₹300 registration, ₹200 per subject, and the OPEN MAT fee.",
  },
  {
    question: "Is the degree recognized?",
    answer: "The listing says UGC-DEB approved. Verify details on the official website.",
  },
  {
    question: "How do I get study material?",
    answer: "Through printed books and digital resources, including the university's digital library.",
  },
];

export const mbaBusinessManagementFees = [
  { title: "Course Fee (Annual)", amount: "₹52,570", note: "Annual course fee covering tuition, study material, LMS, and digital library" },
  { title: "Registration Fee", amount: "₹300", note: "One-time online registration fee at the time of application" },
  { title: "OPEN MAT Entrance Fee", amount: "₹800 / ₹600", note: "₹800 for Open category, ₹600 for Reserved category" },
  { title: "Examination Fee", amount: "₹200", note: "Per subject semester exam fee" },
];

async function updateMBABusinessManagement() {
  const updateData = {
    name: "MBA in Business Management",
    slug: "mba-business-management",
    type: "mba",
    degree: "Master of Business Administration (Business Management)",
    duration: "2 Years (4 Semesters)",
    seoTitle: "DU SOL MBA in Business Management: Fees & Eligibility",
    seoDescription:
      "Explore the DU SOL MBA in Business Management: fees, eligibility, curriculum and admission. A flexible MBA in Business Management from Delhi University.",
    overview:
      "Want to lead teams and manage businesses without leaving your job? The DU SOL MBA in Business Management could be the right step. Offered by the School of Open Learning, University of Delhi, it is a flexible and affordable postgraduate programme for graduates and working professionals. This guide covers the DU SOL MBA in Business Management in detail, including eligibility, fees, curriculum, and career scope.",
    description:
      "Want to lead teams and manage businesses without leaving your job? The DU SOL MBA in Business Management could be the right step. Offered by the School of Open Learning, University of Delhi, it is a flexible and affordable postgraduate programme for graduates and working professionals. This guide covers the DU SOL MBA in Business Management in detail, including eligibility, fees, curriculum, and career scope.\n\nIt is an online and distance learning MBA for working professionals and other individuals seeking to acquire a high-quality management qualification without the need to visit the campus. It is a programme which addresses core business concepts including finance, marketing, human resources, operations and leadership.",
    eligibility:
      "Candidates normally require a bachelor's degree of minimum 50% marks (relaxation for reserved categories as per government norms) in any discipline. It also asks for OPENMAT score (distance education entrance conducted by DU SOL). Make sure to check eligibility criteria of the current year before applying as it may vary from session to session.",
    admissionProcess:
      "The entire DU SOL MBA in Business Management admission process is online: 1. Visit the official admission portal at sol.du.ac.in. 2. Register and fill in the online application form. 3. Upload documents such as marksheets and ID proof. 4. Pay the registration fee online. 5. Check the merit list and pay the course fee once admitted.",
    curriculum: [
      {
        semesterOrYear: "Semester 1",
        subjects: [
          "Management Principles & Organizational Behaviour",
          "Managerial Economics",
          "Financial Accounting & Reporting",
          "Marketing Management",
        ],
      },
      {
        semesterOrYear: "Semester 2",
        subjects: [
          "Corporate Finance",
          "Human Resource Management",
          "Operations & Supply Chain Management",
          "Business Research Methods",
        ],
      },
      {
        semesterOrYear: "Semester 3",
        subjects: [
          "Strategic Management & Business Policy",
          "Digital Business & E-Commerce",
          "International Business Environment",
          "Enterprise Leadership & Change Management",
        ],
      },
      {
        semesterOrYear: "Semester 4",
        subjects: [
          "Corporate Governance & Business Ethics",
          "Entrepreneurship & Innovation",
          "Cross-Functional Strategic Management",
          "Capstone Business Management Dissertation / Major Project",
        ],
      },
    ],
    content: mbaBusinessManagementContent,
    faqs: mbaBusinessManagementFaqs,
    fees: mbaBusinessManagementFees,
    careerOpportunities: [
      "Business Manager",
      "Operations Manager",
      "Marketing Manager",
      "HR Manager",
      "Finance Executive / Manager",
      "Business Development Manager",
    ],
    updatedAt: new Date().toISOString(),
  };

  const docRef = db.collection("mbaSpecializations").doc("mba-business-management");
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    await docRef.set(updateData, { merge: true });
    console.log("✅ Successfully updated mba-business-management in mbaSpecializations!");
  } else {
    await docRef.set({
      id: "mba-business-management",
      status: "published",
      createdAt: new Date().toISOString(),
      ...updateData,
    });
    console.log("✅ Created mba-business-management in mbaSpecializations!");
  }
}

updateMBABusinessManagement().catch(console.error);
