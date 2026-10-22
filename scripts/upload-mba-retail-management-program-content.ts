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

export const mbaRetailManagementContent = `<h2>DU SOL MBA in Retail Management: Fees, Eligibility and Admission</h2>
<p>Want to lead in the fast-moving world of retail while continuing your job? The DU SOL MBA in Retail Management could be the right step. Offered by the School of Open Learning, University of Delhi, it is a flexible and affordable postgraduate programme for graduates and working professionals. This guide covers the DU SOL MBA in Retail Management in detail, including eligibility, fees, curriculum, and career scope.</p>

<h3>MBA in Retail Management at DU SOL: Overview</h3>
<p>The programme is an online, distance MBA for those who are passionate about retail and want to develop into leadership roles. It gives you the ability to build your retail, merchandising, and customer skills, which are more important than ever as you adapt to ongoing changing customer trends.</p>
<p>An MBA in Retail Management equips learners with the knowledge to become leaders in the retail chain, brand management, and e-commerce. It is an online programme that is apt for working professionals who do not have the bandwidth for regular classes. For someone looking to develop their career in the retail industry, this course is appropriate.</p>

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
      <td>Master of Business Administration (MBA) in Retail Management</td>
    </tr>
    <tr>
      <td><strong>University</strong></td>
      <td>School of Open Learning, University of Delhi (DU SOL)</td>
    </tr>
    <tr>
      <td><strong>Duration</strong></td>
      <td>2 to 5 Years (4 Semesters, flexible completion time)</td>
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
      <td>Bachelor’s degree in any discipline from a government-recognized university. No age limit.</td>
    </tr>
    <tr>
      <td><strong>Approximate Course Fee</strong></td>
      <td>₹52,570 per year (plus nominal exam &amp; registration fees)</td>
    </tr>
    <tr>
      <td><strong>Key Competencies</strong></td>
      <td>Retail Store Operations, Visual Merchandising, Category Management, E-Commerce &amp; Retail Analytics</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Why Choose the DU SOL MBA in Retail Management?</h3>
<p>The DU SOL MBA in Retail Management offers several practical advantages for students and working retail professionals:</p>
<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Advantage</th>
      <th>What It Means For You</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Trusted university</strong></td>
      <td>The degree carries the prestigious Delhi University name, universally respected by retail chains, corporate brands, and multinational employers.</td>
    </tr>
    <tr>
      <td><strong>Industry-relevant skills</strong></td>
      <td>You master modern retail operations, visual merchandising, inventory management, and customer experience.</td>
    </tr>
    <tr>
      <td><strong>Flexible completion time</strong></td>
      <td>The listing mentions two to five years to finish the programme, giving you the freedom to balance work schedules and learning pace.</td>
    </tr>
    <tr>
      <td><strong>Open to all graduates</strong></td>
      <td>Candidates from any discipline (Commerce, Arts, Science, Engineering, Management) can apply and transition to retail management.</td>
    </tr>
    <tr>
      <td><strong>Study while working</strong></td>
      <td>Self-paced digital resources, recorded sessions, and weekend support let you keep your full-time job while earning a master's degree.</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Who Should Pursue This Programme?</h3>
<p>This course is ideal for ambitious individuals aiming for strategic growth in consumer-facing businesses:</p>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li><strong>Store Managers &amp; Retail Executives:</strong> Professionals looking to transition from floor operations into regional leadership, category management, or retail strategy.</li>
  <li><strong>E-Commerce &amp; D2C Professionals:</strong> Individuals needing to hone marketplace merchandising, supply chain logistics, and digital consumer analytics skills.</li>
  <li><strong>Brand &amp; Marketing Executives:</strong> Marketers who interact with modern trade, distributor networks, franchised chains, and retail marketing campaigns.</li>
  <li><strong>Entrepreneurs &amp; Family Business Owners:</strong> Business owners looking to scale single stores into organized multi-city chains or omnichannel formats.</li>
</ul>
<p>Because you can study from anywhere online, you can remain in your job while studying. This course is suitable for graduates from any stream.</p>

<h3>DU SOL MBA in Retail Management Duration and Eligibility</h3>
<p>The programme comprises four semesters. According to the listing, students will be able to study this programme between two to five years, which is highly useful for learners who need to juggle work commitments and academic studies.</p>

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
      <td>Bachelor's Degree in any subject from a government accredited university.</td>
    </tr>
    <tr>
      <td><strong>Minimum Percentage</strong></td>
      <td>Standards may vary per admission session; candidates from all disciplines are eligible to apply. Cross-check latest guidelines on the official portal.</td>
    </tr>
    <tr>
      <td><strong>Age Limit</strong></td>
      <td>No age limit (No age bar for enrollment).</td>
    </tr>
    <tr>
      <td><strong>Work Experience</strong></td>
      <td>Professional retail or corporate experience is beneficial, though not strictly mandatory for application.</td>
    </tr>
    <tr>
      <td><strong>Admission Basis</strong></td>
      <td>Merit-based admission / OPEN MAT as per annual DU SOL postgraduate admission guidelines.</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Accreditation and Recognition</h3>
<p>DU SOL is UGC-DEB approved and the University of Delhi is NAAC accredited with top distinction, while the listing also mentions AICTE accreditation. Candidates can verify statutory approvals on the official UGC-DEB and university websites before enrolling. With these recognitions, the DU SOL MBA in Retail Management carries real academic value and corporate credibility across national and international brands.</p>

<h3>Curriculum and Learning Methodology</h3>
<p>The curriculum runs across four semesters and combines core management papers with specialized retail and omnichannel topics:</p>

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
      <td>Principles of Retail Management, Consumer Behaviour in Retail, Retail Accounting &amp; Financial Control, Retail Store Operations</td>
    </tr>
    <tr>
      <td><strong>Semester 2</strong></td>
      <td>Visual Merchandising &amp; Space Planning, Retail Category Management, Omnichannel &amp; E-Commerce Operations, Retail Logistics &amp; Inventory Control</td>
    </tr>
    <tr>
      <td><strong>Semester 3</strong></td>
      <td>Retail Brand Management, Customer Experience &amp; Loyalty Programs, Retail Analytics &amp; Dynamic Pricing, Research Methodology &amp; Retail Field Study</td>
    </tr>
    <tr>
      <td><strong>Semester 4</strong></td>
      <td>Luxury &amp; International Retailing, Mall &amp; Franchise Operations, Strategic Retail Leadership, Capstone Retail Management Dissertation &amp; Project</td>
    </tr>
  </tbody>
</table>
</div>

<p>Learners benefit from comprehensive resources that make studying manageable alongside a full-time job:</p>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li><strong>E-books &amp; Printed Study Material:</strong> Well-structured course booklets authored by seasoned retail educators and Delhi University professors.</li>
  <li><strong>Live Interactive Sessions:</strong> Weekend academic counselling and webinars led by retail and e-commerce leaders.</li>
  <li><strong>Projects &amp; Assignments:</strong> Hands-on store evaluations, category audits, and omnichannel case assignments.</li>
  <li><strong>LMS Portal &amp; Digital Library:</strong> Round-the-clock online access to recorded lectures, e-journals, and case studies.</li>
</ul>

<h3>DU SOL MBA in Retail Management Fee Structure</h3>
<p>The fee structure of the DU SOL MBA in Retail Management is extremely affordable compared to conventional private business colleges:</p>

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
<p><em>Note: Fees may change each session, so check the official portal before paying. University fees must be paid only through the official university website.</em></p>

<h3>Career Scope After the Programme</h3>
<p>The program prepares graduates for high-growth management positions across retail chains, e-commerce firms, supermarkets, luxury brands, and product organizations:</p>

<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Designation</th>
      <th>Core Industry Roles</th>
      <th>Expected Salary Range</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Store Manager / Area Manager</strong></td>
      <td>Lead daily store performance, visual standards, team targets, footfall conversion, and customer service.</td>
      <td>₹5.5 - 9.5 LPA</td>
    </tr>
    <tr>
      <td><strong>Category Manager</strong></td>
      <td>Own product category P&amp;L, assortment planning, pricing, vendor negotiations, and promotion calendars.</td>
      <td>₹6.0 - 12.0 LPA</td>
    </tr>
    <tr>
      <td><strong>Merchandise Manager</strong></td>
      <td>Manage seasonal stock planning, demand forecasting, sell-through rates, and distribution logistics.</td>
      <td>₹5.8 - 11.5 LPA</td>
    </tr>
    <tr>
      <td><strong>E-Commerce Manager</strong></td>
      <td>Oversee online marketplace channels, direct-to-consumer store operations, cataloguing, and fulfillment.</td>
      <td>₹6.5 - 13.0 LPA</td>
    </tr>
    <tr>
      <td><strong>Brand Manager</strong></td>
      <td>Drive brand awareness, store launch campaigns, consumer insight programs, and experiential marketing.</td>
      <td>₹6.0 - 12.5 LPA</td>
    </tr>
    <tr>
      <td><strong>Retail Operations Director</strong></td>
      <td>Steer multi-unit expansion, national store networks, franchise systems, and corporate retail strategy.</td>
      <td>₹9.0 - 18.0 LPA</td>
    </tr>
  </tbody>
</table>
</div>

<h3>How to Apply for DU SOL MBA in Retail Management</h3>
<p>The entire DU SOL MBA in Retail Management admission process is online, so you can apply from anywhere without visiting the campus:</p>
<ol class="list-decimal pl-6 space-y-2 my-3">
  <li><strong>Visit the Official Portal:</strong> Go to the official admission portal at <code>sol.du.ac.in</code>.</li>
  <li><strong>Register &amp; Fill Form:</strong> Register with your primary email and phone number, and fill in your academic details.</li>
  <li><strong>Upload Mandatory Documents:</strong> Upload clear scanned copies of marksheets, certificates, and ID proof.</li>
  <li><strong>Pay Registration Fee:</strong> Complete the initial registration fee payment online.</li>
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
      <td><strong>What is the duration of the DU SOL MBA in Retail Management?</strong></td>
      <td>It has four semesters, and the listing says it can be completed flexibly within two to five years.</td>
    </tr>
    <tr>
      <td><strong>Who can apply for the MBA in Retail Management at DU SOL?</strong></td>
      <td>Graduates in any discipline from a recognized university. Candidates from all streams are eligible.</td>
    </tr>
    <tr>
      <td><strong>What is the fee?</strong></td>
      <td>Roughly ₹52,570 per year, plus a ₹300 registration fee, ₹200 per subject examination fee, and the OPEN MAT fee.</td>
    </tr>
    <tr>
      <td><strong>Is the degree recognized?</strong></td>
      <td>Yes, the listing notes UGC-DEB approval and NAAC accreditation, with degrees awarded directly by Delhi University.</td>
    </tr>
    <tr>
      <td><strong>How do I get study material?</strong></td>
      <td>Through printed books and digital resources, including the university's online LMS and digital library.</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Conclusion</h3>
<p>If you want to grow in retail without stopping your job, the DU SOL MBA in Retail Management is worth looking into. It comes from Delhi University, which is well-known and recognized by UGC-DEB. You can study at your pace and the courses focus on real-world skills used in the industry. Whether you want to work in a retail chain, e-commerce, or brand management, this MBA program gives you a solid path forward. Take your time to compare options, check if you meet the requirements, and sign up for free counseling to start your DU SOL MBA in Retail Management journey today.</p>`;

export const mbaRetailManagementFaqs = [
  {
    question: "What is the duration of the DU SOL MBA in Retail Management?",
    answer: "It has four semesters, and the listing says it can be completed within two to five years.",
  },
  {
    question: "Who can apply for the MBA in Retail Management at DU SOL?",
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

export const mbaRetailManagementFees = [
  { title: "Course Fee (Annual)", amount: "₹52,570", note: "Annual course fee covering tuition, study material, LMS, and digital library" },
  { title: "Registration Fee", amount: "₹300", note: "One-time online registration fee at the time of application" },
  { title: "OPEN MAT Entrance Fee", amount: "₹800 / ₹600", note: "₹800 for Open category, ₹600 for Reserved category" },
  { title: "Examination Fee", amount: "₹200", note: "Per subject semester exam fee" },
];

async function updateMBARetailManagement() {
  const updateData = {
    name: "MBA in Retail Management",
    slug: "mba-retail-management",
    type: "mba",
    degree: "Master of Business Administration (Retail Management)",
    duration: "2 to 5 Years (4 Semesters)",
    seoTitle: "DU SOL MBA in Retail Management: Fees & Eligibility",
    seoDescription:
      "Explore the DU SOL MBA in Retail Management: fees, eligibility, curriculum and admission. A flexible MBA in Retail Management from Delhi University.",
    overview:
      "Want to lead in the fast-moving world of retail while continuing your job? The DU SOL MBA in Retail Management is a flexible and affordable postgraduate programme from Delhi University designed for working professionals and graduates.",
    description:
      "Want to lead in the fast-moving world of retail while continuing your job? The DU SOL MBA in Retail Management could be the right step. Offered by the School of Open Learning, University of Delhi, it is a flexible and affordable postgraduate programme for graduates and working professionals. This guide covers the DU SOL MBA in Retail Management in detail, including eligibility, fees, curriculum, and career scope.\n\nThe programme is an online, distance MBA for those who are passionate about retail and want to develop into leadership roles. It gives you the ability to build your retail, merchandising and customer skills which are more important than ever as you adapt to ongoing changing customer trends.",
    eligibility:
      "Candidates should have a Bachelor's Degree in any subject from a government accredited university. Open to all graduates from any stream. Candidates can complete the degree flexibly between two to five years.",
    admissionProcess:
      "The entire DU SOL MBA in Retail Management admission process is online via sol.du.ac.in. Register on the portal, upload marksheets and ID proof, pay the registration fee, check the merit list, and pay the course fee once admitted.",
    curriculum: [
      {
        semesterOrYear: "Semester 1",
        subjects: [
          "Principles of Retail Management",
          "Consumer Behaviour in Retail",
          "Retail Accounting & Financial Control",
          "Retail Store Operations & Customer Service",
        ],
      },
      {
        semesterOrYear: "Semester 2",
        subjects: [
          "Visual Merchandising & Space Planning",
          "Retail Category & Inventory Management",
          "Omnichannel & E-Commerce Operations",
          "Retail Logistics & Supply Chain Management",
        ],
      },
      {
        semesterOrYear: "Semester 3",
        subjects: [
          "Retail Brand Management",
          "Customer Experience & Loyalty Programs",
          "Retail Analytics & Dynamic Pricing",
          "Research Methodology & Retail Field Study",
        ],
      },
      {
        semesterOrYear: "Semester 4",
        subjects: [
          "Luxury & International Retailing",
          "Mall & Franchise Operations",
          "Strategic Retail Leadership",
          "Capstone Retail Management Dissertation & Project",
        ],
      },
    ],
    content: mbaRetailManagementContent,
    faqs: mbaRetailManagementFaqs,
    fees: mbaRetailManagementFees,
    careerOpportunities: [
      "Store Manager / Area Manager",
      "Category Manager",
      "Merchandise Manager",
      "E-Commerce Manager",
      "Brand Manager",
      "Retail Operations Director",
    ],
    updatedAt: new Date().toISOString(),
  };

  const docRef = db.collection("mbaSpecializations").doc("mba-retail-management");
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    await docRef.set(updateData, { merge: true });
    console.log("✅ Successfully updated mba-retail-management in mbaSpecializations!");
  } else {
    await docRef.set({
      id: "mba-retail-management",
      status: "published",
      createdAt: new Date().toISOString(),
      ...updateData,
    });
    console.log("✅ Created mba-retail-management in mbaSpecializations!");
  }
}

updateMBARetailManagement().catch(console.error);
