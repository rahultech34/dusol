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

export const duSolAdmission2026Content = `<h2>DU SOL Admission 2026: Last Date, Eligibility, Fees and How to Apply</h2>
<p>Want a Delhi University degree without attending regular classes? DU SOL Admission is your gateway. The School of Open Learning, University of Delhi, offers undergraduate, postgraduate, diploma, and certificate programmes in open and distance learning mode. This guide explains DU SOL Admission 2026, including the last date, eligibility, fees, and the steps to apply.</p>

<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Particular</th>
      <th>Details &amp; Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>University</strong></td>
      <td>School of Open Learning, University of Delhi (DU SOL)</td>
    </tr>
    <tr>
      <td><strong>Admission Academic Session</strong></td>
      <td>Academic Session 2026-27 (January &amp; July Intakes)</td>
    </tr>
    <tr>
      <td><strong>Final Application Last Date</strong></td>
      <td><strong>31 October 2026</strong> (Subject to university extension)</td>
    </tr>
    <tr>
      <td><strong>Programmes Offered</strong></td>
      <td>Undergraduate (BA, B.Com, BMS, BBA, BLIS) &amp; Postgraduate (MA, M.Com, MBA, MLIS)</td>
    </tr>
    <tr>
      <td><strong>Mode of Application</strong></td>
      <td>100% Online via official portal (<code>sol.du.ac.in</code>)</td>
    </tr>
    <tr>
      <td><strong>Approvals &amp; Accreditation</strong></td>
      <td>UGC-DEB entitled, NAAC 'A++' Accredited University of Delhi, AICTE approved for MBA</td>
    </tr>
    <tr>
      <td><strong>UG Course Fee Range</strong></td>
      <td>₹7,000 to ₹12,000 per year</td>
    </tr>
    <tr>
      <td><strong>PG Course Fee Range</strong></td>
      <td>₹10,000 to ₹55,000 per year (MBA at top of range: ₹52,570)</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Final Date for DU SOL Admission 2026</h3>
<p>According to the official listing, the last date for all programmes is <strong>31 October 2026</strong>. With the deadline approaching rapidly, students are strongly advised not to wait until the final hours. Keep your academic documents, scanned certificates, and payment cards ready to complete your online application smoothly. The university conducts course admissions across two cycles annually (January and July sessions), and all applications must be submitted strictly online via the official DU SOL admission portal at <code>sol.du.ac.in</code>. Note that official deadlines may be extended by university notification; always confirm active announcements on the official website.</p>

<h3>Reasons to Pick DU SOL</h3>
<p>The School of Open Learning caters to students and working executives who require academic flexibility without compromising on prestige. Here is why DU SOL is the top choice for distance education:</p>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li><strong>Trusted Name &amp; Legacy:</strong> Earn a recognized degree directly awarded by the prestigious University of Delhi, valued universally by corporate employers, UPSC, SSC, and global institutions.</li>
  <li><strong>Flexible Self-Paced Learning:</strong> Fit your studies around employment, family commitments, or competitive exam preparation with online lectures and weekend academic counselling.</li>
  <li><strong>Highly Affordable Fees:</strong> Government-subsidized tuition costs make top-tier education accessible without burdensome student loans.</li>
  <li><strong>Wide Academic Spectrum:</strong> Choose from diverse disciplines spanning arts, humanities, commerce, business management, and library science.</li>
  <li><strong>Biannual Admission Cycles:</strong> Regular admissions open twice a year, giving learners convenient entry windows.</li>
</ul>

<h3>Programmes Covered Under DU SOL Admission</h3>
<p>Candidates applying through DU SOL Admission 2026 have access to a rich portfolio of undergraduate and postgraduate degrees:</p>

<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Level</th>
      <th>Available Programmes</th>
      <th>Standard Duration</th>
      <th>Approximate Fee Range</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Undergraduate (UG)</strong></td>
      <td>BA Programme, BA (Hons) English, BA (Hons) Political Science, B.Com, B.Com (Hons), BMS, BBA, BLIS</td>
      <td>3 to 4 Years (NEP) / 1 Year for BLIS</td>
      <td>₹7,000 - ₹12,000 / year</td>
    </tr>
    <tr>
      <td><strong>Postgraduate (PG)</strong></td>
      <td>MA (History, Political Science, Hindi, Sanskrit), M.Com, MLIS</td>
      <td>2 Years (4 Semesters) / 1 Year for MLIS</td>
      <td>₹10,000 - ₹15,000 / year</td>
    </tr>
    <tr>
      <td><strong>Management (MBA)</strong></td>
      <td>MBA in Marketing, Finance, HR, IT, Business Analytics, Project Management, Healthcare Administration, International Trade, Rural Management</td>
      <td>2 Years (4 Semesters)</td>
      <td>₹52,570 / year</td>
    </tr>
  </tbody>
</table>
</div>

<h3>DU SOL Admission Eligibility</h3>
<p>Eligibility requirements differ by course and academic level:</p>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li><strong>Undergraduate (UG) Courses:</strong> Candidates must have passed Class 12 (10+2) from CBSE or any recognized national/state board. Undergraduate selection is strictly merit-based without CUET requirement for standard SOL courses.</li>
  <li><strong>Postgraduate (PG) Courses:</strong> Applicants must hold a bachelor's degree in a relevant discipline from a recognized university. PG admissions may be based on graduation merit or CUET-PG scores depending on the department.</li>
  <li><strong>MBA Specializations:</strong> Minimum 50% marks in graduation (45% for reserved categories) and valid OPENMAT score or DU SOL merit criteria.</li>
</ul>

<h3>DU SOL Admission Fees</h3>
<p>Fees are determined per program and paid annually directly to the university:</p>
<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Course Tier</th>
      <th>Annual Approximate Fee</th>
      <th>Key Inclusions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>UG Courses (BA / B.Com / BLIS)</strong></td>
      <td>₹7,000 - ₹12,000 per year</td>
      <td>Tuition, study material, digital library, and student support</td>
    </tr>
    <tr>
      <td><strong>PG Courses (MA / M.Com / MLIS)</strong></td>
      <td>₹10,000 - ₹15,000 per year</td>
      <td>Academic counselling, course modules, LMS access</td>
    </tr>
    <tr>
      <td><strong>Master of Business Administration (MBA)</strong></td>
      <td>₹52,570 per year</td>
      <td>Specialization coursework, LMS portal, case study kits</td>
    </tr>
    <tr>
      <td><strong>Examination Fee</strong></td>
      <td>₹200 per subject</td>
      <td>Payable each semester before term-end examinations</td>
    </tr>
  </tbody>
</table>
</div>
<p><em>Important Note: Fees are subject to official revision and must be paid exclusively through the official university payment gateway on <code>sol.du.ac.in</code>. Never transfer money to unauthorized third-party accounts.</em></p>

<h3>How to Apply for DU SOL Admission 2026</h3>
<p>Follow these 5 verified steps to complete your online registration smoothly:</p>
<ol class="list-decimal pl-6 space-y-2 my-3">
  <li><strong>Step 1 — Portal Registration:</strong> Go to the official DU SOL admission portal at <code>sol.du.ac.in</code> and click on <strong>DU SOL New Registration</strong>.</li>
  <li><strong>Step 2 — Personal &amp; Academic Details:</strong> Fill in your name, contact information, email, and 10th/12th/Graduation marks exactly as recorded on your certificates.</li>
  <li><strong>Step 3 — Select Programme:</strong> Choose your desired degree course and specialisation, then upload scanned copies of all required documents.</li>
  <li><strong>Step 4 — Review &amp; Submit:</strong> Carefully preview your complete application form to ensure zero errors before submitting.</li>
  <li><strong>Step 5 — Fee Payment &amp; Confirmation:</strong> Pay the online application fee via UPI, debit/credit card, or net banking. Check your registered email for official confirmation, student roll number, and fee receipt.</li>
</ol>

<h3>Items Required for DU SOL Admission (Document Checklist)</h3>
<p>Keep clear, scanned digital copies (PDF/JPEG) ready before starting your application:</p>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li>Class 10 marksheet and certificate (for date of birth verification)</li>
  <li>Class 12 marksheet and provisional/original passing certificate</li>
  <li>Graduation marksheets (all semesters) and degree/provisional certificate (for PG &amp; MBA applicants)</li>
  <li>Recent passport-sized colour photograph (white background preferred)</li>
  <li>Scanned clear signature on white paper with dark ink</li>
  <li>Valid government photo identity proof (Aadhaar Card, Passport, Voter ID)</li>
  <li>Category / Caste Certificate (SC, ST, OBC-NCL, EWS, PwD), if claiming reservation benefit</li>
</ul>

<h3>How to Complete DU SOL Admission Easily</h3>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li><strong>Apply Early:</strong> Submit your application days ahead of the 31 October 2026 deadline to avoid last-minute portal server congestion.</li>
  <li><strong>Accurate Details:</strong> Provide active mobile numbers and personal email IDs to receive roll numbers, admission letters, and exam updates.</li>
  <li><strong>Legible Uploads:</strong> Upload high-resolution scans of original certificates rather than blurred photocopies.</li>
  <li><strong>Download Receipts:</strong> Immediately save your PDF acknowledgement slip and transaction receipt upon payment.</li>
</ul>

<h3>Support and Study Centres</h3>
<p>DU SOL maintains state-of-the-art academic infrastructure, learning tools, e-libraries, and regional study centres across Delhi NCR for optional weekend counselling sessions and administrative help:</p>

<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Department</th>
      <th>Official Contact Email</th>
      <th>Helpline Phone Numbers</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Student Service Center (SSC)</strong></td>
      <td><code>ssc@du.ac.in</code></td>
      <td>011-29572513 / 011-29572514</td>
    </tr>
    <tr>
      <td><strong>Student Registration Division (CSRC)</strong></td>
      <td><code>csrc@du.ac.in</code></td>
      <td>011-29571301 / 011-29571528</td>
    </tr>
    <tr>
      <td><strong>Main Campus Address</strong></td>
      <td colspan="2">School of Open Learning, 5 Cavalry Lane, University of Delhi, Delhi – 110007</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Check Your Application Status</h3>
<p>After submitting your online form, track your admission progress anytime by logging into the DU SOL student dashboard using your registered credentials. The confirmation acknowledgment and registration number will help you monitor merit list allotments, document approvals, and provisional ID card generation. For any discrepancies, contact the student helpline numbers listed above.</p>

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
      <td><strong>When is the final date for DU SOL Admission 2026?</strong></td>
      <td>The date listed for all programmes is <strong>31 October 2026</strong>. Candidates should check the official web page at <code>sol.du.ac.in</code> for any date extensions.</td>
    </tr>
    <tr>
      <td><strong>How to Apply for DU SOL Admission?</strong></td>
      <td>Register through the official portal at <code>sol.du.ac.in</code>, fill in the application form, upload required documents, and pay the fee online to confirm admission.</td>
    </tr>
    <tr>
      <td><strong>What is the eligibility for DU SOL Admission?</strong></td>
      <td>Generally, 10+2 passing certificate for Undergraduate (UG) courses and a Bachelor's degree in any discipline for Postgraduate (PG) courses.</td>
    </tr>
    <tr>
      <td><strong>How much are the fees for DU SOL courses?</strong></td>
      <td>Between approximately ₹7,000 to ₹12,000 per year for undergraduate courses, and between ₹10,000 to ₹55,000 per year for postgraduate courses (with MBA at ₹52,570).</td>
    </tr>
    <tr>
      <td><strong>Is an entrance exam required for DU SOL admission?</strong></td>
      <td>Undergraduate admission is generally direct and merit-based on Class 12 marks (no CUET required). Postgraduate admission may require CUET-PG or OPENMAT for MBA.</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Conclusion</h3>
<p>The deadline is approaching. Choose the programme that aligns with your educational goals, verify eligibility requirements, keep your documents ready, and register through the official DU SOL admission portal. Completing your DU SOL Admission 2026 on time unlocks flexible, affordable, and prestigious Delhi University higher education without leaving your job or daily commitments.</p>`;

async function uploadAdmissionGuide() {
  const commonData = {
    title: "DU SOL Admission 2026: Last Date, Eligibility, Fees and How to Apply",
    summary: "Check DU SOL Admission 2026 details: last date, eligibility, fees and how to apply online for UG and PG programmes at Delhi University SOL.",
    content: duSolAdmission2026Content,
    category: "Admissions 2026",
    externalLink: "https://sol.du.ac.in",
    quickSteps: [
      "Go to the official website of DU SOL (sol.du.ac.in) and click on DU SOL Registration.",
      "Provide all necessary information on the application form.",
      "Choose your programme and attach the required documents.",
      "Review the form thoroughly and submit it.",
      "Check your email for confirmation and payment receipt.",
    ],
    status: "published",
    seoTitle: "DU SOL Admission 2026: Last Date, Eligibility & Fees",
    seoDescription: "Check DU SOL Admission 2026 details: last date, eligibility, fees and how to apply online for UG and PG programmes at Delhi University SOL.",
    updatedAt: new Date().toISOString(),
  };

  // 1. Update Student Zone doc 'admission' (URL: /student-zone/admission)
  const szRefAdmission = db.collection("studentZone").doc("admission");
  await szRefAdmission.set(
    {
      id: "admission",
      slug: "admission",
      createdAt: new Date().toISOString(),
      ...commonData,
    },
    { merge: true }
  );
  console.log("✅ Successfully updated studentZone 'admission' (/student-zone/admission)");

  // 2. Also set studentZone doc 'du-sol-admission-2026' (URL: /student-zone/du-sol-admission-2026)
  const szRefSlug = db.collection("studentZone").doc("du-sol-admission-2026");
  await szRefSlug.set(
    {
      id: "du-sol-admission-2026",
      slug: "du-sol-admission-2026",
      createdAt: new Date().toISOString(),
      ...commonData,
    },
    { merge: true }
  );
  console.log("✅ Successfully set studentZone 'du-sol-admission-2026' (/student-zone/du-sol-admission-2026)");

  // 3. Add to Blogs collection (URL: /blogs/du-sol-admission-2026)
  const blogRef = db.collection("blogs").doc("du-sol-admission-2026");
  await blogRef.set(
    {
      id: "du-sol-admission-2026",
      slug: "du-sol-admission-2026",
      title: commonData.title,
      excerpt: commonData.summary,
      content: commonData.content,
      category: "Admissions 2026",
      tags: ["DU SOL Admission", "DU SOL 2026", "DU SOL Fees", "DU SOL Last Date", "Delhi University"],
      author: "DU SOL Editorial Team",
      status: "published",
      isPublished: true,
      seoTitle: commonData.seoTitle,
      seoDescription: commonData.seoDescription,
      seoKeywords: "DU SOL Admission 2026, DU SOL last date, DU SOL fees, DU SOL eligibility, apply online DU SOL",
      createdAt: new Date().toISOString(),
      publishedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    { merge: true }
  );
  console.log("✅ Successfully published blog 'du-sol-admission-2026' (/blogs/du-sol-admission-2026)");
}

uploadAdmissionGuide().catch(console.error);
