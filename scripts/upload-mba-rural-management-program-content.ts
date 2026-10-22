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

export const mbaRuralManagementContent = `<h2>DU SOL MBA in Rural Management: Fees, Eligibility and Admission</h2>
<p>Looking for a fulfilling career in rural development without giving up your job? Your next move could be the DU SOL MBA in Rural Management. Brought to you by the School of Open Learning, University of Delhi, it is an affordable, flexible, postgraduate degree programme for working professionals and graduates. Here is everything you need to know about DU SOL MBA in Rural Management.</p>

<h3>MBA in Rural Management at DU SOL: Overview</h3>
<p>The program is an online and distance learning degree created to develop the knowledge and skills required to do well in rural development and management. It includes economics, agriculture management, community development, and environmentally friendly methods, getting students ready for meaningful jobs in rural areas.</p>
<p>This MBA in Rural Management brings together hands-on work in the field, real-life examples, and engaging online classes to give a balanced education. Learners can take the classes from any location, which is perfect for people who work and students who live in faraway places. For any person who wants to make a difference, the MBA in Rural Management at DU SOL is a smart and easy option.</p>

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
      <td>Master of Business Administration (MBA) in Rural Management</td>
    </tr>
    <tr>
      <td><strong>University</strong></td>
      <td>School of Open Learning, University of Delhi (DU SOL)</td>
    </tr>
    <tr>
      <td><strong>Duration</strong></td>
      <td>2 Years (4 Semesters, ~6 months per semester)</td>
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
      <td>Bachelor's degree in any discipline from a recognized university. No age bar.</td>
    </tr>
    <tr>
      <td><strong>Approximate Course Fee</strong></td>
      <td>₹52,570 per year (plus nominal exam &amp; registration fees)</td>
    </tr>
    <tr>
      <td><strong>Key Competencies</strong></td>
      <td>Rural Economics, Agribusiness Management, Microfinance, Community Leadership &amp; Sustainable Livelihoods</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Why Choose the DU SOL MBA in Rural Management?</h3>
<p>The DU SOL MBA in Rural Management offers several practical advantages for students and working professionals:</p>
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
      <td>The degree carries the prestigious Delhi University name, universally respected by NGOs, CSR wings, and corporate employers.</td>
    </tr>
    <tr>
      <td><strong>Purpose-driven syllabus</strong></td>
      <td>It comprehensively covers rural economics, agriculture management, and community development frameworks.</td>
    </tr>
    <tr>
      <td><strong>Study from anywhere</strong></td>
      <td>Online sessions, downloadable modules, and weekend support suit working professionals and remote learners across India.</td>
    </tr>
    <tr>
      <td><strong>No age bar</strong></td>
      <td>Learners of any age can enroll, enabling career pivots and mature leadership development.</td>
    </tr>
    <tr>
      <td><strong>Practical learning</strong></td>
      <td>Fieldwork, live case studies, and grassroots project evaluations connect academic theory with ground reality.</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Who Should Pursue This Programme?</h3>
<p>This programme is tailored to meet the needs of diverse learners committed to rural transformation:</p>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li><strong>Development Professionals:</strong> Individuals working in NGOs, CSR divisions, grassroots foundations, and government departments who want formal management training to assume leadership roles.</li>
  <li><strong>Graduates from Any Stream:</strong> Fresh or recent graduates passionate about sustainable livelihoods, rural economics, and community leadership.</li>
  <li><strong>Agribusiness Workers &amp; Cooperatives:</strong> Executives in agricultural supply chains, seed/fertilizer companies, and dairy or farmer producer organizations (FPOs).</li>
  <li><strong>Social Entrepreneurs:</strong> Innovators launching ventures, social enterprises, or self-help federations in tier-2, tier-3, and rural clusters.</li>
</ul>
<p>Because you can study from anywhere with flexible schedules, you can maintain your full-time job while earning a top-tier Delhi University master's degree.</p>

<h3>DU SOL MBA in Rural Management Duration and Eligibility</h3>
<p>The programme runs for two years and is divided into four semesters. Each semester typically lasts six months, making the academic schedule manageable for working learners.</p>

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
      <td><strong>Age Criteria</strong></td>
      <td>No age limit (No age bar for enrollment).</td>
    </tr>
    <tr>
      <td><strong>Work Experience</strong></td>
      <td>Applicants with relevant experience in the rural development or NGO sector are encouraged to apply, as practical insight enriches the learning experience.</td>
    </tr>
    <tr>
      <td><strong>Admission Basis</strong></td>
      <td>Merit-based admission / OPEN MAT as per annual DU SOL postgraduate admission guidelines.</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Accreditation and Recognition</h3>
<p>DU SOL is UGC-DEB approved, and the University of Delhi is NAAC accredited with the highest standards. The programme listing also mentions AICTE accreditation. Candidates can verify statutory approvals on the official UGC-DEB and Delhi University portals before enrolling. With these recognitions, the DU SOL MBA in Rural Management carries genuine academic and industry value across government and private sectors.</p>

<h3>Curriculum and Learning Methodology</h3>
<p>The curriculum runs across four semesters and combines foundational management papers with specialized rural development modules. Learners gain thorough conceptual clarity and field exposure:</p>

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
      <td>Rural Society &amp; Economy, Agribusiness Supply Chain, Microfinance &amp; Rural Banking, Development Communication</td>
    </tr>
    <tr>
      <td><strong>Semester 2</strong></td>
      <td>Cooperative Management, Commodity Trading, Rural Marketing Strategy, Project Formulation &amp; Appraisal</td>
    </tr>
    <tr>
      <td><strong>Semester 3</strong></td>
      <td>Sustainable Livelihoods &amp; Natural Resource Management, Rural Infrastructure &amp; Enterprise, Public Policy &amp; Rural Governance, Research Methodology &amp; Fieldwork</td>
    </tr>
    <tr>
      <td><strong>Semester 4</strong></td>
      <td>Agribusiness Entrepreneurship, CSR &amp; Social Impact Assessment, Strategic Rural Management, Capstone Rural Dissertation &amp; Field Project</td>
    </tr>
  </tbody>
</table>
</div>

<p>Learners benefit from comprehensive instructional resources designed for flexible self-paced study:</p>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li><strong>E-books &amp; Printed Study Material:</strong> High-quality course booklets prepared by renowned Delhi University faculty.</li>
  <li><strong>Live Interactive Sessions:</strong> Weekend academic counselling and online lectures with subject-matter experts.</li>
  <li><strong>Projects &amp; Fieldwork Assignments:</strong> Practical assignments that evaluate real-world rural challenges and solutions.</li>
  <li><strong>LMS Portal &amp; Digital Library:</strong> 24/7 access to e-journals, recorded lectures, repository archives, and reference materials.</li>
</ul>

<h3>DU SOL MBA in Rural Management Fee Structure</h3>
<p>The fee structure of the DU SOL MBA in Rural Management is remarkably affordable compared to conventional private business schools:</p>

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
      <td>One-time online registration charge at application</td>
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
<p><em>Note: Fees may change each session, so always check the official portal before paying. University fees must be paid only through the official university website.</em></p>

<h3>Career Scope After the Programme</h3>
<p>Graduates of the DU SOL MBA in Rural Management can step into high-impact roles across international development agencies, national NGOs, government missions, agribusiness conglomerates, and rural banking institutions:</p>

<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Career Designation</th>
      <th>Core Responsibilities</th>
      <th>Expected Salary Range</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Rural Development Officer</strong></td>
      <td>Formulate, execute, and monitor government and institutional rural welfare schemes.</td>
      <td>₹5.0 - 8.5 LPA</td>
    </tr>
    <tr>
      <td><strong>Project Coordinator (NGO / Agency)</strong></td>
      <td>Lead multi-stakeholder community projects in sanitation, water, education, and livelihood generation.</td>
      <td>₹4.8 - 9.0 LPA</td>
    </tr>
    <tr>
      <td><strong>Community Development Manager</strong></td>
      <td>Drive grassroots engagement, self-help group (SHG) federations, and women empowerment initiatives.</td>
      <td>₹5.2 - 9.5 LPA</td>
    </tr>
    <tr>
      <td><strong>Agribusiness Executive</strong></td>
      <td>Manage farm-to-consumer supply chains, cold storage logistics, crop procurement, and cooperative marketing.</td>
      <td>₹5.5 - 10.0 LPA</td>
    </tr>
    <tr>
      <td><strong>Sustainability &amp; CSR Consultant</strong></td>
      <td>Advise corporations on corporate social responsibility projects, ESG compliance, and community impact.</td>
      <td>₹6.0 - 12.0 LPA</td>
    </tr>
    <tr>
      <td><strong>Microfinance &amp; Rural Banking Lead</strong></td>
      <td>Manage priority sector lending, Kisan credit facilities, micro-insurance, and financial inclusion drives.</td>
      <td>₹5.0 - 11.0 LPA</td>
    </tr>
  </tbody>
</table>
</div>

<h3>How to Apply for DU SOL MBA in Rural Management</h3>
<p>The entire DU SOL MBA in Rural Management admission process is handled online, allowing you to apply comfortably from any location:</p>
<ol class="list-decimal pl-6 space-y-2 my-3">
  <li><strong>Visit the Official Portal:</strong> Navigate to the official DU SOL admission portal at <code>sol.du.ac.in</code>.</li>
  <li><strong>Register Online:</strong> Create your applicant profile with a valid email ID and mobile number, and fill in the online application form.</li>
  <li><strong>Upload Mandatory Documents:</strong> Upload scanned copies of graduation marksheets, certificates, government ID proof, and passport-size photographs.</li>
  <li><strong>Pay Registration Fee:</strong> Complete the registration fee payment online using net banking, UPI, debit, or credit card.</li>
  <li><strong>Check Merit List &amp; Confirm Admission:</strong> Review the announced merit lists and complete the course fee payment once admitted to secure your seat.</li>
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
      <td><strong>What is the duration of the DU SOL MBA in Rural Management?</strong></td>
      <td>It is a two-year programme divided into four semesters of about six months each.</td>
    </tr>
    <tr>
      <td><strong>Who can apply for the MBA in Rural Management at DU SOL?</strong></td>
      <td>Graduates from a recognized university in any discipline. There is no age bar, and rural development sector experience is encouraged.</td>
    </tr>
    <tr>
      <td><strong>What is the fee?</strong></td>
      <td>Roughly ₹52,570 per year, plus a ₹300 registration fee, ₹200 per subject examination fee, and the OPEN MAT fee.</td>
    </tr>
    <tr>
      <td><strong>Is the degree recognized?</strong></td>
      <td>Yes, the listing notes UGC-DEB approval and NAAC accreditation, with degrees awarded directly by the University of Delhi.</td>
    </tr>
    <tr>
      <td><strong>How do I get study material?</strong></td>
      <td>Through printed books and digital resources, including the university's online LMS and digital library.</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Conclusion</h3>
<p>If you are looking to drive change in rural communities without taking a break from your career, the DU SOL MBA in Rural Management is a great program for you. You get the benefits of the prestigious Delhi University brand, UGC-DEB approval, distance-based learning, and hands-on fieldwork. Whether you want to work in an NGO, government body, or social enterprise, the DU SOL MBA in Rural Management can help you achieve your goal. Compare and contrast the different programs, determine the right eligibility, and get your free counseling today to begin your DU SOL MBA in Rural Management journey.</p>`;

export const mbaRuralManagementFaqs = [
  {
    question: "What is the duration of the DU SOL MBA in Rural Management?",
    answer: "It is a two-year programme divided into four semesters of about six months each.",
  },
  {
    question: "Who can apply for the MBA in Rural Management at DU SOL?",
    answer: "Graduates from a recognized university in any discipline. There is no age bar, and rural sector experience is encouraged.",
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

export const mbaRuralManagementFees = [
  { title: "Course Fee (Annual)", amount: "₹52,570", note: "Annual course fee covering tuition, study material, LMS, and digital library" },
  { title: "Registration Fee", amount: "₹300", note: "One-time online registration fee at the time of application" },
  { title: "OPEN MAT Entrance Fee", amount: "₹800 / ₹600", note: "₹800 for Open category, ₹600 for Reserved category" },
  { title: "Examination Fee", amount: "₹200", note: "Per subject semester exam fee" },
];

async function updateMBARuralManagement() {
  const updateData = {
    name: "MBA in Rural Management",
    slug: "mba-rural-management",
    type: "mba",
    degree: "Master of Business Administration (Rural Management)",
    duration: "2 Years (4 Semesters)",
    seoTitle: "DU SOL MBA in Rural Management: Fees & Eligibility",
    seoDescription:
      "Explore the DU SOL MBA in Rural Management: fees, eligibility, curriculum and admission. A flexible MBA in Rural Management from Delhi University.",
    overview:
      "Looking for a fulfilling career in rural development without giving up your job? Your next move could be the DU SOL MBA in Rural Management. Brought to you by the School of Open Learning, University of Delhi, it is an affordable, flexible, postgraduate degree programme for working professionals and graduates.",
    description:
      "Looking for a fulfilling career in rural development without giving up your job? Your next move could be the DU SOL MBA in Rural Management. Brought to you by the School of Open Learning, University of Delhi, it is an affordable, flexible, postgraduate degree programme for working professionals and graduates. Here is everything you need to know about DU SOL MBA in Rural Management.\n\nThe program is an online and distance learning degree created to develop the knowledge and skills required to do well in rural development and management. It includes economics, agriculture management, community development and environmentally friendly methods getting students ready for meaningful jobs in rural areas.",
    eligibility:
      "Candidates need a bachelor's degree from a recognized university, and there is no age bar. Applicants with relevant work experience in the rural development sector are encouraged to apply, as practical knowledge enriches the learning experience.",
    admissionProcess:
      "The entire DU SOL MBA in Rural Management admission process is online via sol.du.ac.in. Register on the portal, upload marksheets and ID proof, pay the registration fee, check the merit list, and pay the course fee once admitted.",
    curriculum: [
      {
        semesterOrYear: "Semester 1",
        subjects: [
          "Rural Society & Economy",
          "Agribusiness Supply Chain Management",
          "Microfinance & Rural Banking Institutions",
          "Development Communication & Extension",
        ],
      },
      {
        semesterOrYear: "Semester 2",
        subjects: [
          "Cooperative Management & Collective Enterprises",
          "Agricultural Commodity Trading & Pricing",
          "Rural Marketing Strategy & Consumer Behaviour",
          "Development Project Formulation & Appraisal",
        ],
      },
      {
        semesterOrYear: "Semester 3",
        subjects: [
          "Sustainable Livelihoods & Natural Resource Management",
          "Rural Infrastructure & Micro-Enterprise Development",
          "Public Policy, Panchayati Raj & Rural Governance",
          "Research Methodology & Rural Fieldwork Practicum",
        ],
      },
      {
        semesterOrYear: "Semester 4",
        subjects: [
          "Agribusiness Entrepreneurship & Incubation",
          "Corporate Social Responsibility (CSR) & Social Impact",
          "Strategic Rural Management",
          "Capstone Rural Dissertation & Major Field Project",
        ],
      },
    ],
    content: mbaRuralManagementContent,
    faqs: mbaRuralManagementFaqs,
    fees: mbaRuralManagementFees,
    careerOpportunities: [
      "Rural Development Officer",
      "Project Coordinator (NGOs / Development Agencies)",
      "Community Development Manager",
      "Agribusiness Executive",
      "Sustainability & CSR Consultant",
      "Microfinance & Rural Banking Lead",
    ],
    updatedAt: new Date().toISOString(),
  };

  const docRef = db.collection("mbaSpecializations").doc("mba-rural-management");
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    await docRef.set(updateData, { merge: true });
    console.log("✅ Successfully updated mba-rural-management in mbaSpecializations!");
  } else {
    await docRef.set({
      id: "mba-rural-management",
      status: "published",
      createdAt: new Date().toISOString(),
      ...updateData,
    });
    console.log("✅ Created mba-rural-management in mbaSpecializations!");
  }
}

updateMBARuralManagement().catch(console.error);
