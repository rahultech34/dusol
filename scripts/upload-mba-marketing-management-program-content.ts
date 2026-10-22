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

export const mbaMarketingManagementContent = `<h2>DU SOL MBA in Marketing Management: Syllabus, Eligibility and Admission Guide</h2>
<p>Marketing is one of those domains where experience often speaks louder than theoretical knowledge, making the majority of working professionals consider pursuing an MBA in Marketing Management. The School of Open Learning at the University of Delhi offers a two-year, four-semester distance learning programme that empowers aspirants to continue their career while studying. To help you understand better if an MBA in Marketing through SOL is worth your time and effort, we have prepared this informative guide to the syllabus, eligibility, admission process, and career prospects.</p>

<h3>What Is DU SOL MBA in Marketing Management?</h3>
<p>DU SOL MBA in Marketing Management is a postgraduate management programme with marketing as the chosen specialisation. You first study core management subjects, then move into marketing-focused papers in the later semesters. The degree comes from the University of Delhi, a name employers recognise easily. Compared with a full-time campus MBA, the fees are lower and the schedule is far more flexible, which suits professionals who can't pause their careers.</p>

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
      <td>Master of Business Administration (MBA) in Marketing Management</td>
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
      <td>Graduation in any discipline from a recognized university with minimum required marks</td>
    </tr>
    <tr>
      <td><strong>Approximate Course Fee</strong></td>
      <td>₹52,570 per year (plus nominal exam &amp; registration fees)</td>
    </tr>
    <tr>
      <td><strong>Key Competencies</strong></td>
      <td>Consumer Behaviour, Brand Strategy, Digital Marketing, Market Research, Advertising &amp; Sales Management</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Why Choose an MBA in Marketing Management?</h3>
<p>Every business needs customers, so marketing skills travel across industries. An MBA in Marketing Management trains you to understand buyer behaviour, plan campaigns, build brands, and read market data. It's also a good fit if you're already in sales, advertising, or digital work and want a formal qualification to go with your experience.</p>

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
      <td><strong>Delhi University brand value</strong></td>
      <td>The degree carries the prestigious Delhi University name, universally recognised by employers at an affordable cost.</td>
    </tr>
    <tr>
      <td><strong>Anytime study resources</strong></td>
      <td>Access high-quality study materials, digital e-books, and online library resources you can use whenever your schedule allows.</td>
    </tr>
    <tr>
      <td><strong>Freedom around a full-time job</strong></td>
      <td>Flexible weekend counselling and digital modules allow you to gain a respected credential without interrupting your employment.</td>
    </tr>
    <tr>
      <td><strong>Cross-industry marketing skills</strong></td>
      <td>Marketing, brand management, digital outreach, and analytics apply to FMCG, tech, banking, healthcare, retail, and media.</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Who Should Apply?</h3>
<p>This programme is suitable for a select group of motivated candidates:</p>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li><strong>Graduates Switching to Marketing:</strong> Fresh degree holders in Arts, Science, Commerce, or Engineering looking to build a high-demand commercial qualification.</li>
  <li><strong>Career Marketers Seeking Growth:</strong> Executives with prior experience in sales, advertising, PR, or customer relations aiming to step up to brand director or marketing manager roles.</li>
  <li><strong>Entrepreneurs &amp; Business Owners:</strong> Founders who need practical know-how for market research, dynamic pricing, customer acquisition, and brand building.</li>
  <li><strong>Working Professionals:</strong> Individuals with a few hours to spare each week who want to upgrade their credentials without taking a career sabbatical.</li>
</ul>

<h3>DU SOL MBA in Marketing Management Syllabus</h3>
<p>The programme runs for four semesters. The first year builds a comprehensive management base, while the second year dives into specialized marketing papers:</p>

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
      <td>Marketing Management, Management Principles &amp; Organizational Behaviour, Managerial Economics, Management Accounting</td>
    </tr>
    <tr>
      <td><strong>Semester 2</strong></td>
      <td>Human Resource Management, Production and Operations Management, Financial Management, Business Research Methods</td>
    </tr>
    <tr>
      <td><strong>Semester 3</strong></td>
      <td>Marketing Research, Advertising Management, Services Marketing, Brand Management</td>
    </tr>
    <tr>
      <td><strong>Semester 4</strong></td>
      <td>Digital Marketing, Sales Force Management, International Marketing, Strategic Marketing Capstone Dissertation / Major Project</td>
    </tr>
  </tbody>
</table>
</div>
<p><em>Exact paper names and their sequencing may be updated by the university, so candidates should check the latest curriculum on the official portal.</em></p>

<h3>Eligibility Criteria</h3>
<p>Generally, candidates must have a bachelor's degree from a recognised university with minimum marks deemed satisfactory (typically 50% aggregate marks, with relaxation to 45% for reserved categories as per government norms). Selection criteria such as merit lists or entrance test scores (such as OPENMAT) may vary for different admission cycles, so confirm the active guidelines on the official SOL website before applying.</p>

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
      <td><strong>Minimum Aggregate Marks</strong></td>
      <td>Minimum 50% marks (45% for reserved categories as per statutory rules).</td>
    </tr>
    <tr>
      <td><strong>Selection Mode</strong></td>
      <td>Merit-based admission / OPENMAT entrance score as per annual DU SOL guidelines.</td>
    </tr>
    <tr>
      <td><strong>Age Criteria</strong></td>
      <td>No age limit (No age bar for enrollment).</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Fees and Important Points</h3>
<p>Fees are charged per annum and are significantly lower than those of private business schools. The approximate fee breakdown is:</p>

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
      <td>One-time upon entrance exam registration (if applicable)</td>
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
<p><em>Note: Fees may vary from session to session. Always check the official prospectus before paying. University fees must be paid only through the official university portal.</em></p>

<h3>Documents Required</h3>
<p>Ensure you have scanned copies of the following documents ready before beginning the application:</p>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li>Graduation marksheets (all semesters/years) and degree certificate</li>
  <li>Class 10 and 12 marksheets and certificates</li>
  <li>Recent passport-sized photograph and scanned signature</li>
  <li>Valid government ID proof such as Aadhaar Card, Voter ID, or Passport</li>
  <li>Category certificate (SC/ST/OBC/EWS/PwD), if applicable</li>
</ul>

<h3>How to Apply for DU SOL MBA in Marketing Management</h3>
<p>The entire admission process is conducted online via the official DU SOL portal:</p>
<ol class="list-decimal pl-6 space-y-2 my-3">
  <li><strong>Register:</strong> Open the official SOL admission portal at <code>sol.du.ac.in</code> and register with your email and mobile number.</li>
  <li><strong>Select Specialisation:</strong> Choose the Master of Business Administration (MBA) programme and select Marketing Management.</li>
  <li><strong>Enter Details:</strong> Fill in your personal, academic, and contact details accurately.</li>
  <li><strong>Upload Documents:</strong> Upload your photograph, signature, graduation marksheets, and ID proof.</li>
  <li><strong>Pay Online:</strong> Complete the registration and application fee payment online via net banking, UPI, or debit/credit card.</li>
  <li><strong>Submit &amp; Download:</strong> Submit the application form and download the confirmation slip and fee receipt for future reference.</li>
</ol>

<h3>Career Scope After an MBA in Marketing Management</h3>
<p>Marketing roles exist across every commercial sector including FMCG, telecom, banking, retail, technology, and e-commerce:</p>

<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Career Role</th>
      <th>Key Professional Responsibilities</th>
      <th>Expected Salary Range</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Marketing Manager / Executive</strong></td>
      <td>Formulate brand campaigns, plan product launches, oversee promotional budgets, and coordinate cross-channel execution.</td>
      <td>₹6.5 - 13.0 LPA</td>
    </tr>
    <tr>
      <td><strong>Brand Manager</strong></td>
      <td>Build brand equity, guide visual identity, run consumer perception surveys, and execute positioning strategies.</td>
      <td>₹7.0 - 14.5 LPA</td>
    </tr>
    <tr>
      <td><strong>Digital Marketing Manager</strong></td>
      <td>Steer SEO, SEM, performance marketing, social media campaigns, and conversion rate optimization across digital touchpoints.</td>
      <td>₹6.0 - 13.5 LPA</td>
    </tr>
    <tr>
      <td><strong>Sales &amp; Business Development Manager</strong></td>
      <td>Drive B2B/B2C revenue pipelines, manage distributor networks, lead client acquisition, and hit organizational sales targets.</td>
      <td>₹6.0 - 14.0 LPA</td>
    </tr>
    <tr>
      <td><strong>Market Research Analyst</strong></td>
      <td>Analyze consumer survey data, benchmark competitors, evaluate price elasticity, and produce actionable strategic insights.</td>
      <td>₹5.5 - 11.0 LPA</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Tips to Succeed in a Distance MBA</h3>
<p>Distance learning rewards self-discipline. Here are actionable tips to maximize your learning return:</p>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li><strong>Block Fixed Study Hours:</strong> Set aside 6 to 8 hours each week consistently to review e-books and recorded lectures.</li>
  <li><strong>Complete Assignments Early:</strong> Submit assignments well ahead of deadlines to get constructive feedback.</li>
  <li><strong>Join Peer Study Groups:</strong> Connect with fellow DU SOL learners to share notes, debate case studies, and network.</li>
  <li><strong>Apply Learning at Work:</strong> Implement campaign ideas, customer surveys, or analytics tools directly into your day job to convert theory into practical skills.</li>
</ul>

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
      <td><strong>Is DU SOL MBA in Marketing Management a recognised degree?</strong></td>
      <td>Yes, it is offered by the School of Open Learning, University of Delhi, carrying the prestigious DU name with UGC-DEB entitlement and NAAC accreditation.</td>
    </tr>
    <tr>
      <td><strong>How long does an MBA in Marketing Management take?</strong></td>
      <td>The programme is two years, divided into four semesters. Check the official site for flexible completion limits.</td>
    </tr>
    <tr>
      <td><strong>Can I do DU SOL MBA in Marketing Management while working?</strong></td>
      <td>Yes. The study material is online and you can plan your study time around your job with weekend counselling sessions.</td>
    </tr>
    <tr>
      <td><strong>What is the fee for DU SOL MBA in Marketing Management?</strong></td>
      <td>Roughly ₹52,570 per year, plus a ₹300 registration fee, ₹200 per subject examination fee, and the OPEN MAT fee.</td>
    </tr>
    <tr>
      <td><strong>What documents are required to apply?</strong></td>
      <td>Graduation marksheets, Class 10 and 12 certificates, photo, signature, ID proof (Aadhaar), and category certificate if applicable.</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Conclusion</h3>
<p>The DU SOL MBA in Marketing Management degree offers working professionals a cost-effective and flexible approach to obtaining a respected postgraduate qualification. For those interested in marketing and wishing to pursue their professions within this sector, the DU SOL MBA in Marketing Management is ideally suited. Check the latest eligibility criteria, get your documents ready, and apply on the official portal today!</p>`;

export const mbaMarketingManagementFaqs = [
  {
    question: "Is DU SOL MBA in Marketing Management a recognised degree?",
    answer: "Yes, it is offered by the School of Open Learning, University of Delhi, carrying the prestigious DU name with UGC-DEB entitlement and NAAC accreditation.",
  },
  {
    question: "How long does an MBA in Marketing Management take?",
    answer: "The programme is two years, divided into four semesters. Check the official site for flexible completion limits.",
  },
  {
    question: "Can I do DU SOL MBA in Marketing Management while working?",
    answer: "Yes. The study material is online and you can plan your study time around your job with weekend counselling sessions.",
  },
  {
    question: "What is the fee for DU SOL MBA in Marketing Management?",
    answer: "Roughly ₹52,570 per year, plus a ₹300 registration fee, ₹200 per subject examination fee, and the OPEN MAT fee.",
  },
  {
    question: "What documents are required to apply?",
    answer: "Graduation marksheets, Class 10 and 12 certificates, photo, signature, ID proof (Aadhaar), and category certificate if applicable.",
  },
];

export const mbaMarketingManagementFees = [
  { title: "Course Fee (Annual)", amount: "₹52,570", note: "Annual course fee covering tuition, study material, LMS, and digital library" },
  { title: "Registration Fee", amount: "₹300", note: "One-time online registration fee at the time of application" },
  { title: "OPEN MAT Entrance Fee", amount: "₹800 / ₹600", note: "₹800 for Open category, ₹600 for Reserved category" },
  { title: "Examination Fee", amount: "₹200", note: "Per subject semester exam fee" },
];

async function updateMBAMarketingManagement() {
  const updateData = {
    name: "MBA in Marketing Management",
    slug: "mba-marketing-management",
    type: "mba",
    degree: "Master of Business Administration (Marketing Management)",
    duration: "2 Years (4 Semesters)",
    seoTitle: "DU SOL MBA in Marketing Management: Syllabus & Admission",
    seoDescription:
      "Explore DU SOL MBA in Marketing Management: syllabus, eligibility, career scope and how to apply for this flexible MBA in Marketing Management.",
    overview:
      "Marketing is one of those domains where experience often speaks louder than theoretical knowledge, making the majority of working professionals consider pursuing an MBA in Marketing Management. The School of Open Learning at the University of Delhi offers a two-year, four-semester distance learning programme that empowers aspirants to continue their career while studying. This guide covers syllabus, eligibility, admission process, and career prospects.",
    description:
      "DU SOL MBA in Marketing Management is a postgraduate management programme with marketing as the chosen specialisation. You first study core management subjects, then move into marketing-focused papers in the later semesters. The degree comes from the University of Delhi, combining prestigious brand value with low fees and schedule flexibility.",
    eligibility:
      "Generally, candidates require a bachelor's degree from a recognised university with minimum satisfactory marks (typically 50% aggregate marks, 45% for reserved categories). Selection criteria such as merit or an entrance score (OPENMAT) may vary for different admission cycles.",
    admissionProcess:
      "The entire DU SOL MBA in Marketing Management admission process is online: 1. Open the official SOL admission portal at sol.du.ac.in and register. 2. Select MBA in Marketing Management. 3. Fill in personal and academic details. 4. Upload photograph, signature, and marksheets. 5. Pay the fee online. 6. Submit the form and keep the confirmation safe.",
    curriculum: [
      {
        semesterOrYear: "Semester 1",
        subjects: [
          "Marketing Management",
          "Management Principles & Organizational Behaviour",
          "Managerial Economics",
          "Management Accounting",
        ],
      },
      {
        semesterOrYear: "Semester 2",
        subjects: [
          "Human Resource Management",
          "Production and Operations Management",
          "Financial Management",
          "Business Research Methods",
        ],
      },
      {
        semesterOrYear: "Semester 3",
        subjects: [
          "Marketing Research",
          "Advertising Management",
          "Services Marketing",
          "Brand Management",
        ],
      },
      {
        semesterOrYear: "Semester 4",
        subjects: [
          "Digital Marketing",
          "Sales Force Management",
          "International Marketing",
          "Strategic Marketing Capstone Dissertation / Major Project",
        ],
      },
    ],
    content: mbaMarketingManagementContent,
    faqs: mbaMarketingManagementFaqs,
    fees: mbaMarketingManagementFees,
    careerOpportunities: [
      "Marketing Manager or Executive",
      "Brand Manager",
      "Digital Marketing Manager",
      "Sales and Business Development Manager",
      "Market Research Analyst",
    ],
    updatedAt: new Date().toISOString(),
  };

  const docRef = db.collection("mbaSpecializations").doc("mba-marketing-management");
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    await docRef.set(updateData, { merge: true });
    console.log("✅ Successfully updated mba-marketing-management in mbaSpecializations!");
  } else {
    await docRef.set({
      id: "mba-marketing-management",
      status: "published",
      createdAt: new Date().toISOString(),
      ...updateData,
    });
    console.log("✅ Created mba-marketing-management in mbaSpecializations!");
  }
}

updateMBAMarketingManagement().catch(console.error);
