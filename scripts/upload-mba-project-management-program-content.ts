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

export const mbaProjectManagementContent = `<h2>DU SOL MBA in Project Management: Fees, Eligibility and Admission</h2>
<p>Want to lead projects and teams without leaving your job? The DU SOL MBA in Project Management could be the right step. Offered by the School of Open Learning, University of Delhi, it is a flexible and affordable postgraduate programme for graduates and working professionals. This guide covers the DU SOL MBA in Project Management in detail, including eligibility, fees, curriculum, and career scope.</p>

<h3>MBA in Project Management at DU SOL: Overview</h3>
<p>The programme is a distance learning online MBA focusing on core project skills. This programme provides you with a comprehensive understanding of project planning, execution and evaluation. You will learn how to manage time and risk, lead teams and complete projects to time and cost in real-world scenarios and situations.</p>
<p>With this MBA in Project Management you will gain important skills through real-life case studies and hands-on assignments. Our online programs make it possible for working professionals to learn at their own pace and advance their careers. Whether you’re just starting your career or you want to sharpen your skillset, MBA Project Management at DU SOL is a versatile program.</p>

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
      <td>Master of Business Administration (MBA) in Project Management</td>
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
      <td>Graduation in any discipline with min. 50% marks (relaxation for reserved categories) and valid OPENMAT score</td>
    </tr>
    <tr>
      <td><strong>Approximate Course Fee</strong></td>
      <td>₹52,570 per year (plus nominal exam &amp; registration fees)</td>
    </tr>
    <tr>
      <td><strong>Key Competencies</strong></td>
      <td>Project Lifecycle Planning, Agile &amp; Scrum Methodologies, Risk Mitigation, Resource Allocation &amp; Budget Control</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Why Choose the DU SOL MBA in Project Management?</h3>
<p>The DU SOL MBA in Project Management offers several practical advantages:</p>
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
      <td>The degree carries the Delhi University name, highly respected by employers and corporate organizations.</td>
    </tr>
    <tr>
      <td><strong>Complete project cycle</strong></td>
      <td>You learn end-to-end initiation, planning, execution, monitoring, and evaluation across diverse business scales.</td>
    </tr>
    <tr>
      <td><strong>Self-paced study</strong></td>
      <td>Online learning, weekend academic counselling, and digital materials fit seamlessly around your work schedule.</td>
    </tr>
    <tr>
      <td><strong>Open to all graduates</strong></td>
      <td>Candidates from any discipline (Engineering, IT, Commerce, Arts, Science) can apply to pivot into project leadership.</td>
    </tr>
    <tr>
      <td><strong>Practical learning</strong></td>
      <td>Case studies, real-world frameworks, and hands-on assignments connect management theory with tangible project outcomes.</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Who Should Pursue This Programme?</h3>
<p>This programme is structured for professionals and aspiring managers across diverse domains:</p>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li><strong>Team Leaders &amp; Coordinators:</strong> Professionals aspiring to transition into full-scale project management and program director roles.</li>
  <li><strong>Engineers &amp; IT Professionals:</strong> Technical experts who take ownership of deliverables, software releases, infrastructure setups, and client SLAs.</li>
  <li><strong>Graduates from Any Stream:</strong> Ambitious graduates willing to build a lucrative, high-growth career in corporate project leadership.</li>
  <li><strong>Entrepreneurs &amp; Business Founders:</strong> Founders and business leaders managing several projects, product launches, and operational expansions simultaneously.</li>
</ul>
<p>You can study along with your job at your convenience through flexible digital learning and recorded lectures.</p>

<h3>DU SOL MBA in Project Management Duration and Eligibility</h3>
<p>The programme is a two-year course divided into four semesters. This structure gives students time to apply each concept at work before moving on.</p>

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
      <td>Minimum of 50% aggregate marks (relaxation for reserved categories as per government norms).</td>
    </tr>
    <tr>
      <td><strong>Entrance Examination</strong></td>
      <td>Clearing the OPENMAT entrance exam conducted by DU SOL.</td>
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
<p>DU SOL is UGC-DEB approved and the University of Delhi is NAAC accredited with top-tier distinction. It also has AICTE accreditation as seen in the listing. Please double-check approvals at the official UGC-DEB website and the university website before enrolling. These accreditations make the DU SOL MBA in Project Management a recognized, high-value postgraduate degree across government and corporate sectors.</p>

<h3>Curriculum and Learning Methodology</h3>
<p>The curriculum runs across four semesters and combines core management papers with project-focused learning:</p>

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
      <td>Principles of Management &amp; Organizational Behaviour, Managerial Economics, Project Planning &amp; Scope Definition, Business Communication</td>
    </tr>
    <tr>
      <td><strong>Semester 2</strong></td>
      <td>Project Scheduling &amp; Cost Management, Risk Analysis &amp; Mitigation, Agile &amp; Scrum Methodologies, Procurement &amp; Contract Management</td>
    </tr>
    <tr>
      <td><strong>Semester 3</strong></td>
      <td>Project Quality &amp; Compliance, Resource Management &amp; Team Leadership, Advanced Project Analytics &amp; MS Project, Research Methodology</td>
    </tr>
    <tr>
      <td><strong>Semester 4</strong></td>
      <td>Strategic Program &amp; Portfolio Management, International Project Management, Project Ethics &amp; Governance, Capstone Project Management Dissertation / Live Simulation</td>
    </tr>
  </tbody>
</table>
</div>

<p>Learners benefit from comprehensive resources that make studying manageable alongside a full-time job:</p>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li><strong>E-books &amp; Printed Study Material:</strong> High-quality course booklets authored by experienced project directors and Delhi University faculty.</li>
  <li><strong>Live Interactive Sessions:</strong> Weekend academic counselling and online lectures with certified industry professionals.</li>
  <li><strong>Projects &amp; Assignments:</strong> Hands-on project scheduling simulations, risk assessment matrices, and cost-benefit analyses.</li>
  <li><strong>LMS Portal &amp; Digital Library:</strong> Round-the-clock access to recorded video lectures, project toolkits, and academic journals.</li>
</ul>

<h3>DU SOL MBA in Project Management Fee Structure</h3>
<p>The fee structure of the DU SOL MBA in Project Management is remarkably economical:</p>

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
<p><em>Note: Fees may change each session, so check the official portal before paying. University fees must be paid only to the university.</em></p>

<h3>Career Scope After the Programme</h3>
<p>This degree is a pathway to high-impact career opportunities across industries such as construction, IT, manufacturing, consulting, and public sector services. Employers seek professionals who can deliver projects on time, within scope, and within budget:</p>

<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Job Role</th>
      <th>Core Professional Responsibilities</th>
      <th>Expected Salary Range</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Project Manager</strong></td>
      <td>Define project scope, manage cross-functional teams, track milestones, control budgets, and deliver on SLAs.</td>
      <td>₹7.0 - 14.0 LPA</td>
    </tr>
    <tr>
      <td><strong>Programme Manager</strong></td>
      <td>Oversee multiple interconnected projects, harmonize resources, manage stakeholder relations, and align with business strategy.</td>
      <td>₹9.0 - 18.0 LPA</td>
    </tr>
    <tr>
      <td><strong>Project Analyst</strong></td>
      <td>Analyze project performance indicators, evaluate variances, perform cost-benefit analysis, and prepare executive dashboards.</td>
      <td>₹5.5 - 10.5 LPA</td>
    </tr>
    <tr>
      <td><strong>Operations Manager</strong></td>
      <td>Supervise organizational process execution, resource optimization, workflow quality, and cross-departmental coordination.</td>
      <td>₹6.5 - 12.0 LPA</td>
    </tr>
    <tr>
      <td><strong>Delivery Lead</strong></td>
      <td>Ensure end-to-end client deliverable quality, manage client escalations, maintain sprint velocities, and lead deployment.</td>
      <td>₹8.0 - 16.0 LPA</td>
    </tr>
    <tr>
      <td><strong>Scrum Master / Agile Transformation Lead</strong></td>
      <td>Facilitate sprint ceremonies, coach teams in Agile/Scrum best practices, and remove process bottlenecks.</td>
      <td>₹7.5 - 15.0 LPA</td>
    </tr>
  </tbody>
</table>
</div>

<h3>How to Apply for DU SOL MBA in Project Management</h3>
<p>The entire DU SOL MBA in Project Management admission process is online, so you can apply from anywhere:</p>
<ol class="list-decimal pl-6 space-y-2 my-3">
  <li><strong>Visit the Official Portal:</strong> Navigate to the official DU SOL admission portal at <code>sol.du.ac.in</code>.</li>
  <li><strong>Register &amp; Fill Form:</strong> Register with a valid email and mobile number, and enter your personal and academic details.</li>
  <li><strong>Upload Mandatory Documents:</strong> Upload scanned marksheets, graduation certificates, ID proof, and photographs.</li>
  <li><strong>Pay Registration Fee:</strong> Complete the registration fee payment online via net banking, UPI, or debit/credit card.</li>
  <li><strong>Check Merit List &amp; Pay Course Fee:</strong> Follow the published merit lists and pay your course fee once admitted to confirm your seat.</li>
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
      <td><strong>What is the duration of the DU SOL MBA in Project Management?</strong></td>
      <td>It is a two-year programme divided into four semesters.</td>
    </tr>
    <tr>
      <td><strong>Who can apply for the MBA in Project Management at DU SOL?</strong></td>
      <td>Graduates in any discipline with at least 50% marks who clear the OPENMAT exam.</td>
    </tr>
    <tr>
      <td><strong>What is the fee?</strong></td>
      <td>Roughly ₹52,570 per year, plus a ₹300 registration fee, ₹200 per subject examination fee, and the OPEN MAT fee.</td>
    </tr>
    <tr>
      <td><strong>Is the degree recognized?</strong></td>
      <td>The listing says UGC-DEB approved. Verify details on the official website.</td>
    </tr>
    <tr>
      <td><strong>How do I get study material?</strong></td>
      <td>Through printed books and digital resources, including the university's digital library.</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Conclusion</h3>
<p>If you want to advance your career without taking a break, consider the DU SOL MBA in Project Management. It offers Delhi University’s reputation, UGC-DEB recognition, flexible study options, and practical case studies. Whether you’re seeking a promotion or a move into project leadership, the DU SOL MBA in Project Management provides a dependable path. Compare your options, check eligibility, and take advantage of free counseling to start your DU SOL MBA in Project Management journey today.</p>`;

export const mbaProjectManagementFaqs = [
  {
    question: "What is the duration of the DU SOL MBA in Project Management?",
    answer: "It is a two-year programme divided into four semesters.",
  },
  {
    question: "Who can apply for the MBA in Project Management at DU SOL?",
    answer: "Graduates in any discipline with at least 50% marks who clear the OPENMAT exam.",
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

export const mbaProjectManagementFees = [
  { title: "Course Fee (Annual)", amount: "₹52,570", note: "Annual course fee covering tuition, study material, LMS, and digital library" },
  { title: "Registration Fee", amount: "₹300", note: "One-time online registration fee at the time of application" },
  { title: "OPEN MAT Entrance Fee", amount: "₹800 / ₹600", note: "₹800 for Open category, ₹600 for Reserved category" },
  { title: "Examination Fee", amount: "₹200", note: "Per subject semester exam fee" },
];

async function updateMBAProjectManagement() {
  const updateData = {
    name: "MBA in Project Management",
    slug: "mba-project-management",
    type: "mba",
    degree: "Master of Business Administration (Project Management)",
    duration: "2 Years (4 Semesters)",
    seoTitle: "DU SOL MBA in Project Management: Fees & Eligibility",
    seoDescription:
      "Explore the DU SOL MBA in Project Management: fees, eligibility, curriculum and admission. A flexible MBA in Project Management from Delhi University.",
    overview:
      "Want to lead projects and teams without leaving your job? The DU SOL MBA in Project Management could be the right step. Offered by the School of Open Learning, University of Delhi, it is a flexible and affordable postgraduate programme for graduates and working professionals. This guide covers the DU SOL MBA in Project Management in detail, including eligibility, fees, curriculum, and career scope.",
    description:
      "Want to lead projects and teams without leaving your job? The DU SOL MBA in Project Management could be the right step. Offered by the School of Open Learning, University of Delhi, it is a flexible and affordable postgraduate programme for graduates and working professionals. This guide covers the DU SOL MBA in Project Management in detail, including eligibility, fees, curriculum, and career scope.\n\nThe programme is a distance learning online MBA focusing on core project skills. This programme provides you with a comprehensive understanding of project planning, execution and evaluation. You will learn how to manage time and risk, lead teams and complete projects to time and cost in real-world scenarios and situations.",
    eligibility:
      "Candidates need a bachelor's degree in any discipline with a minimum of 50% marks. Clearing the OPENMAT entrance exam conducted by DU SOL is also listed as a requirement. Criteria can change each session, so always check the latest guidelines on the official DU SOL website before applying.",
    admissionProcess:
      "The entire DU SOL MBA in Project Management admission process is online: 1. Visit the official admission portal at sol.du.ac.in. 2. Register and fill in the online application form. 3. Upload documents such as marksheets and ID proof. 4. Pay the registration fee online. 5. Check the merit list and pay the course fee once admitted.",
    curriculum: [
      {
        semesterOrYear: "Semester 1",
        subjects: [
          "Principles of Management & Organizational Behaviour",
          "Managerial Economics",
          "Project Planning & Scope Definition",
          "Business Communication",
        ],
      },
      {
        semesterOrYear: "Semester 2",
        subjects: [
          "Project Scheduling & Cost Management",
          "Risk Analysis & Mitigation",
          "Agile & Scrum Methodologies",
          "Procurement & Contract Management",
        ],
      },
      {
        semesterOrYear: "Semester 3",
        subjects: [
          "Project Quality & Compliance",
          "Resource Management & Team Leadership",
          "Advanced Project Analytics & MS Project",
          "Research Methodology",
        ],
      },
      {
        semesterOrYear: "Semester 4",
        subjects: [
          "Strategic Program & Portfolio Management",
          "International Project Management",
          "Project Ethics & Governance",
          "Capstone Project Management Dissertation / Live Simulation",
        ],
      },
    ],
    content: mbaProjectManagementContent,
    faqs: mbaProjectManagementFaqs,
    fees: mbaProjectManagementFees,
    careerOpportunities: [
      "Project Manager",
      "Programme Manager",
      "Project Analyst",
      "Operations Manager",
      "Delivery Lead",
      "Scrum Master / Agile Transformation Lead",
    ],
    updatedAt: new Date().toISOString(),
  };

  const docRef = db.collection("mbaSpecializations").doc("mba-project-management");
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    await docRef.set(updateData, { merge: true });
    console.log("✅ Successfully updated mba-project-management in mbaSpecializations!");
  } else {
    await docRef.set({
      id: "mba-project-management",
      status: "published",
      createdAt: new Date().toISOString(),
      ...updateData,
    });
    console.log("✅ Created mba-project-management in mbaSpecializations!");
  }
}

updateMBAProjectManagement().catch(console.error);
