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

export const mbaInternationalTradeContent = `<h2>DU SOL MBA in International Trade Management: Fees, Eligibility and Admission</h2>
<p>Want to build a global career in trade without leaving your job? The DU SOL MBA in International Trade Management could be the right step. Offered by the School of Open Learning, University of Delhi, it is a flexible and affordable postgraduate programme for graduates and working professionals. This guide covers the DU SOL MBA in International Trade Management in detail, including eligibility, fees, curriculum, and career scope.</p>

<h3>MBA in International Trade Management at DU SOL: Overview</h3>
<p>The programme is an online and distance MBA open to anyone with a bachelor's degree who wants to explore global business. It develops skills in export-import regulations, global marketing, and cross-border operations, helping learners understand how goods and services move across borders.</p>
<p>This MBA in International Trade Management prepares learners for roles in international business, logistics, and trade compliance. Its flexible structure suits working professionals who cannot attend regular classes. For anyone aiming to succeed in the global marketplace, the MBA in International Trade Management at DU SOL is a practical and flexible choice.</p>

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
      <td>Master of Business Administration (MBA) in International Trade Management</td>
    </tr>
    <tr>
      <td><strong>University</strong></td>
      <td>School of Open Learning, University of Delhi (DU SOL)</td>
    </tr>
    <tr>
      <td><strong>Duration</strong></td>
      <td>2 to 5 Years (4 Semesters, flexible completion)</td>
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
      <td>Bachelor’s degree in any discipline from a recognized university</td>
    </tr>
    <tr>
      <td><strong>Approximate Course Fee</strong></td>
      <td>₹52,570 per year (plus nominal exam &amp; registration fees)</td>
    </tr>
    <tr>
      <td><strong>Key Competencies</strong></td>
      <td>EXIM Documentation, Global Logistics, Trade Compliance, Foreign Exchange &amp; Cross-Border E-Commerce</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Why Choose the DU SOL MBA in International Trade Management?</h3>
<p>The DU SOL MBA in International Trade Management offers several practical advantages:</p>
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
      <td>The degree carries the prestigious Delhi University name, widely respected by multinational corporations, shipping lines, and export councils.</td>
    </tr>
    <tr>
      <td><strong>Global skills</strong></td>
      <td>You master export-import rules, international customs procedures, global marketing, and cross-border commercial operations.</td>
    </tr>
    <tr>
      <td><strong>Flexible completion time</strong></td>
      <td>The programme allows between two to five years for completion, giving you the freedom to balance work commitments and exam timelines.</td>
    </tr>
    <tr>
      <td><strong>Open to all graduates</strong></td>
      <td>Candidates from any discipline (Commerce, Arts, Science, Engineering) can apply to enter the lucrative world of international business.</td>
    </tr>
    <tr>
      <td><strong>Study while working</strong></td>
      <td>Online digital study resources and weekend academic counselling fit effortlessly around your job.</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Who Should Pursue This Programme?</h3>
<p>This programme is structured for professionals and aspiring managers seeking cross-border career growth:</p>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li><strong>Export-Import Professionals:</strong> Executives in export houses, international trading firms, and customs brokerage agencies needing formal management qualifications.</li>
  <li><strong>Shipping &amp; Logistics Personnel:</strong> Staff in freight forwarding, shipping lines, port operations, and container logistics aiming for managerial roles.</li>
  <li><strong>Entrepreneurs &amp; Business Owners:</strong> Founders eyeing overseas market expansion, cross-border sourcing, and global distribution.</li>
  <li><strong>Commerce &amp; General Graduates:</strong> Degree holders seeking high-growth international careers in trade compliance, global banking, and trade finance.</li>
</ul>

<h3>DU SOL MBA in International Trade Management Duration and Eligibility</h3>
<p>The programme runs across four semesters with flexible completion spanning two to five years. Candidates must have obtained a bachelor's degree in any stream from a recognised university. Specific minimum percentage criteria may vary each academic session; always refer to the official DU SOL website for active guidelines before applying.</p>

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
      <td>Graduates from all streams are eligible; check current year guidelines on the official portal.</td>
    </tr>
    <tr>
      <td><strong>Age Criteria</strong></td>
      <td>No age limit (No age bar for enrollment).</td>
    </tr>
    <tr>
      <td><strong>Admission Basis</strong></td>
      <td>Merit-based admission / OPENMAT entrance score as per annual DU SOL guidelines.</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Accreditation and Recognition</h3>
<p>DU SOL is UGC-DEB approved, and the University of Delhi is accredited by NAAC with top-tier distinction and recognized by AICTE. These statutory approvals confirm that the DU SOL MBA in International Trade Management holds authentic academic standing and high corporate credibility worldwide.</p>

<h3>Curriculum and Learning Methodology</h3>
<p>The curriculum runs across four semesters and combines foundational management principles with specialized international trade subjects:</p>

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
      <td>International Business Environment, Foreign Exchange Management, Global Marketing, EXIM Documentation &amp; Procedures</td>
    </tr>
    <tr>
      <td><strong>Semester 2</strong></td>
      <td>WTO &amp; Regional Trade Agreements, International Logistics &amp; Supply Chain, Cross-Cultural Management, International Commercial Law</td>
    </tr>
    <tr>
      <td><strong>Semester 3</strong></td>
      <td>Global Sourcing &amp; Procurement, Export Finance &amp; Risk Hedging, International Trade Compliance &amp; Customs, Research Methodology in Global Trade</td>
    </tr>
    <tr>
      <td><strong>Semester 4</strong></td>
      <td>Strategic Global Enterprise Leadership, Cross-Border E-Commerce Operations, Global Commodity &amp; Derivatives Trading, Capstone International Trade Dissertation / Project</td>
    </tr>
  </tbody>
</table>
</div>

<p>Learners benefit from comprehensive resources that make studying manageable alongside a full-time job:</p>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li><strong>E-books &amp; Printed Study Material:</strong> High-quality course booklets prepared by experienced international trade educators.</li>
  <li><strong>Live Interactive Sessions:</strong> Weekend academic counselling and online lectures with industry experts.</li>
  <li><strong>Projects &amp; Assignments:</strong> Hands-on export case studies, customs duty calculations, and international market research.</li>
  <li><strong>LMS Portal &amp; Digital Library:</strong> 24/7 access to e-journals, recorded lectures, trade repositories, and reference documents.</li>
</ul>

<h3>DU SOL MBA in International Trade Management Fee Structure</h3>
<p>The fee structure of the DU SOL MBA in International Trade Management is remarkably economical:</p>

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
<p><em>Note: Fees may change each session, so check the official portal before paying. University fees must be paid only to the university.</em></p>

<h3>Career Scope After the Programme</h3>
<p>Graduates can take up leadership and analytical roles in multinational corporations, export houses, freight forwarders, shipping companies, and international trade agencies:</p>

<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Designation</th>
      <th>Core Professional Responsibilities</th>
      <th>Expected Salary Range</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Export-Import (EXIM) Manager</strong></td>
      <td>Direct international shipping documentation, customs clearance, freight negotiations, and distributor relations.</td>
      <td>₹6.5 - 13.5 LPA</td>
    </tr>
    <tr>
      <td><strong>Logistics Coordinator / Manager</strong></td>
      <td>Manage global cargo freight, multi-modal transport lines, port operations, and container tracking.</td>
      <td>₹5.8 - 11.5 LPA</td>
    </tr>
    <tr>
      <td><strong>Trade Compliance Officer</strong></td>
      <td>Ensure legal adherence to cross-border tariff codes, foreign trade policies, customs duties, and export sanctions.</td>
      <td>₹6.0 - 12.0 LPA</td>
    </tr>
    <tr>
      <td><strong>International Marketing Manager</strong></td>
      <td>Expand brand footprint into foreign territories, lead global channel distribution, and handle overseas client accounts.</td>
      <td>₹6.5 - 14.0 LPA</td>
    </tr>
    <tr>
      <td><strong>Supply Chain Analyst</strong></td>
      <td>Optimize cross-border supply networks, reduce turnaround times, and mitigate shipping bottleneck risks.</td>
      <td>₹5.5 - 11.0 LPA</td>
    </tr>
    <tr>
      <td><strong>Foreign Exchange Specialist</strong></td>
      <td>Monitor global currency fluctuations, hedge FX exposures, and structure trade credit finance.</td>
      <td>₹6.0 - 12.5 LPA</td>
    </tr>
  </tbody>
</table>
</div>

<h3>How to Apply for DU SOL MBA in International Trade Management</h3>
<p>The entire admission process is conducted online via the official DU SOL admission portal:</p>
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
      <td><strong>What is the duration of the DU SOL MBA in International Trade Management?</strong></td>
      <td>It has four semesters, and the listing says it can be completed within two to five years.</td>
    </tr>
    <tr>
      <td><strong>Who can apply for the MBA in International Trade Management at DU SOL?</strong></td>
      <td>Graduates in any discipline from a recognized university.</td>
    </tr>
    <tr>
      <td><strong>What is the fee?</strong></td>
      <td>Roughly ₹52,570 per year, plus ₹300 registration, ₹200 per subject, and the OPEN MAT fee.</td>
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
<p>Thinking of a global career without taking a break from your existing one? Consider the DU SOL MBA in International Trade Management. Choose DU's reputation, UGC-DEB approval, flexible study mode, and focus on trade skills. Whether you plan a career in logistics, compliance, or international trade, DU SOL MBA in International Trade Management is a dependable option. Explore alternatives, verify your qualifications, and avail of free counseling to start your DU SOL MBA in International Trade Management journey today.</p>`;

export const mbaInternationalTradeFaqs = [
  {
    question: "What is the duration of the DU SOL MBA in International Trade Management?",
    answer: "It has four semesters, and the listing says it can be completed within two to five years.",
  },
  {
    question: "Who can apply for the MBA in International Trade Management at DU SOL?",
    answer: "Graduates in any discipline from a recognized university.",
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

export const mbaInternationalTradeFees = [
  { title: "Course Fee (Annual)", amount: "₹52,570", note: "Annual course fee covering tuition, study material, LMS, and digital library" },
  { title: "Registration Fee", amount: "₹300", note: "One-time online registration fee at the time of application" },
  { title: "OPEN MAT Entrance Fee", amount: "₹800 / ₹600", note: "₹800 for Open category, ₹600 for Reserved category" },
  { title: "Examination Fee", amount: "₹200", note: "Per subject semester exam fee" },
];

async function updateMBAInternationalTrade() {
  const updateData = {
    name: "MBA in International Trade Management",
    slug: "mba-international-trade",
    type: "mba",
    degree: "Master of Business Administration (International Trade Management)",
    duration: "2 to 5 Years (4 Semesters)",
    seoTitle: "DU SOL MBA in International Trade Management: Fees",
    seoDescription:
      "Explore the DU SOL MBA in International Trade Management: fees, eligibility and admission. A flexible MBA in International Trade Management option.",
    overview:
      "Want to build a global career in trade without leaving your job? The DU SOL MBA in International Trade Management could be the right step. Offered by the School of Open Learning, University of Delhi, it is a flexible and affordable postgraduate programme for graduates and working professionals. This guide covers the DU SOL MBA in International Trade Management in detail, including eligibility, fees, curriculum, and career scope.",
    description:
      "The programme is an online and distance MBA open to anyone with a bachelor's degree who wants to explore global business. It develops skills in export-import regulations, global marketing, and cross-border operations, helping learners understand how goods and services move across borders.\n\nThis MBA in International Trade Management prepares learners for roles in international business, logistics, and trade compliance. Its flexible structure suits working professionals who cannot attend regular classes. For anyone aiming to succeed in the global marketplace, the MBA in International Trade Management at DU SOL is a practical and flexible choice.",
    eligibility:
      "Candidates must have obtained a bachelor's degree in any stream from a recognised university. Open to all graduates from any discipline. Check the official DU SOL website for any session-specific percentage updates before applying.",
    admissionProcess:
      "The entire DU SOL MBA in International Trade Management admission process is online: 1. Visit the official admission portal at sol.du.ac.in. 2. Register and fill in the online application form. 3. Upload documents such as marksheets and ID proof. 4. Pay the registration fee online. 5. Check the merit list and pay the course fee once admitted.",
    curriculum: [
      {
        semesterOrYear: "Semester 1",
        subjects: [
          "International Business Environment",
          "Foreign Exchange Management",
          "Global Marketing",
          "EXIM Documentation & Procedures",
        ],
      },
      {
        semesterOrYear: "Semester 2",
        subjects: [
          "WTO & Regional Trade Agreements",
          "International Logistics & Supply Chain",
          "Cross-Cultural Management",
          "International Commercial Law",
        ],
      },
      {
        semesterOrYear: "Semester 3",
        subjects: [
          "Global Sourcing & Procurement",
          "Export Finance & Risk Hedging",
          "International Trade Compliance & Customs",
          "Research Methodology in Global Trade",
        ],
      },
      {
        semesterOrYear: "Semester 4",
        subjects: [
          "Strategic Global Enterprise Leadership",
          "Cross-Border E-Commerce Operations",
          "Global Commodity & Derivatives Trading",
          "Capstone International Trade Dissertation / Project",
        ],
      },
    ],
    content: mbaInternationalTradeContent,
    faqs: mbaInternationalTradeFaqs,
    fees: mbaInternationalTradeFees,
    careerOpportunities: [
      "Export-Import (EXIM) Manager",
      "Logistics Coordinator / Manager",
      "Trade Compliance Officer",
      "International Marketing Manager",
      "Supply Chain Analyst",
      "Foreign Exchange Specialist",
    ],
    updatedAt: new Date().toISOString(),
  };

  const docRef = db.collection("mbaSpecializations").doc("mba-international-trade");
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    await docRef.set(updateData, { merge: true });
    console.log("✅ Successfully updated mba-international-trade in mbaSpecializations!");
  } else {
    await docRef.set({
      id: "mba-international-trade",
      status: "published",
      createdAt: new Date().toISOString(),
      ...updateData,
    });
    console.log("✅ Created mba-international-trade in mbaSpecializations!");
  }
}

updateMBAInternationalTrade().catch(console.error);
