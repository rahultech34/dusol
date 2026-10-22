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

export const mbaAnalyticsContent = `<h2>DU SOL MBA in Business Analytics: Fees, Eligibility and Admission</h2>
<p>Looking to switch your career to data &amp; insights and yet want to keep your current job? The DU SOL MBA in Business Analytics might be your next move. Conducted by the School of Open Learning, University of Delhi, DU SOL MBA Business Analytics is an affordable and flexible postgraduate programme for working individuals and fresh graduates. Here is a detailed guide to the DU SOL MBA Business Analytics programme.</p>

<h3>MBA in Business Analytics at DU SOL: Overview</h3>
<p>The program is a distance MBA created for working professionals and students who require flexible learning. It helps develop skills in understanding data, predicting trends, and making strategic plans, getting students ready for jobs in analysis, technology, and advisory consulting.</p>
<p>This MBA in Business Analytics uses interactive classes, curated learning materials, and live sessions to help students gain a strong grasp of analysis topics, tools, and industrial uses. Learners can study at their own speed, which works well with tight work schedules. For anyone who wants to make decisions based on data, the MBA in Business Analytics at DU SOL is an accessible, high-ROI option.</p>

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
      <td>Master of Business Administration (MBA) in Business Analytics</td>
    </tr>
    <tr>
      <td><strong>University</strong></td>
      <td>University of Delhi, School of Open Learning (DU SOL)</td>
    </tr>
    <tr>
      <td><strong>Duration</strong></td>
      <td>2 Years (4 Semesters)</td>
    </tr>
    <tr>
      <td><strong>Mode</strong></td>
      <td>Distance Learning / Online with weekend counselling</td>
    </tr>
    <tr>
      <td><strong>Approvals</strong></td>
      <td>UGC-DEB approved, NAAC accredited, AICTE listed</td>
    </tr>
    <tr>
      <td><strong>Eligibility</strong></td>
      <td>Bachelor’s degree with min. 50% marks (45% for reserved); Maths/Stats background preferred</td>
    </tr>
    <tr>
      <td><strong>Annual Course Fee</strong></td>
      <td>Approximately ₹52,570 per year</td>
    </tr>
    <tr>
      <td><strong>Core Analytics Stack</strong></td>
      <td>Predictive Analytics, Python/R, SQL, Tableau, Power BI, Machine Learning for Business</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Why Choose the DU SOL MBA in Business Analytics?</h3>
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
      <td><strong>Trusted university</strong></td>
      <td>The degree carries the prestigious Delhi University name, highly respected by top corporate recruiters</td>
    </tr>
    <tr>
      <td><strong>In-demand skills</strong></td>
      <td>You master data interpretation, statistical forecasting, machine learning models, and executive strategy</td>
    </tr>
    <tr>
      <td><strong>Self-paced study</strong></td>
      <td>Online recorded lectures and digital materials fit seamlessly around your professional work routine</td>
    </tr>
    <tr>
      <td><strong>Open to all graduates</strong></td>
      <td>Candidates from any discipline (Science, Engineering, Commerce, Arts) can apply and transition to data roles</td>
    </tr>
    <tr>
      <td><strong>Interactive support</strong></td>
      <td>Live interactive sessions, faculty mentorship, and webinars help you clear doubts and apply concepts</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Who Should Pursue This Programme?</h3>
<p>This course is designed for:</p>
<ul>
  <li><strong>Working professionals</strong> who want to transition from traditional operations to high-growth data analytics and BI roles.</li>
  <li><strong>Finance, marketing, and HR professionals</strong> who are constantly working with metrics and want to build advanced predictive models.</li>
  <li><strong>College graduates from any stream</strong> who want to enter the technology, business intelligence, and consulting domains.</li>
  <li><strong>Entrepreneurs and business leaders</strong> who want to make smarter, data-driven decisions that scale their enterprises.</li>
</ul>
<p>Because you can study at your own pace without daily physical attendance, you can keep your full-time job while completing your master’s qualification.</p>

<h3>DU SOL MBA in Business Analytics Duration and Eligibility</h3>
<p>The programme is two years long and split into four semesters. This allows students adequate time to learn, practice, and implement each analytics concept in their daily work environment.</p>
<p>Candidates must hold a bachelor’s degree in any subject from a recognized university. Key eligibility criteria include:</p>
<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Category / Parameter</th>
      <th>Eligibility Requirement</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Unreserved / General Category</strong></td>
      <td>Minimum 50% overall aggregate marks in Bachelor's Degree</td>
    </tr>
    <tr>
      <td><strong>Reserved Categories (OBC/SC/ST/PwBD)</strong></td>
      <td>Minimum 45% overall aggregate marks in Bachelor's Degree</td>
    </tr>
    <tr>
      <td><strong>Subject Preference</strong></td>
      <td>Candidates with mathematics or statistics background at 10+2 or graduation level are preferred</td>
    </tr>
    <tr>
      <td><strong>Age Limit</strong></td>
      <td>No upper age limit</td>
    </tr>
  </tbody>
</table>
</div>
<p><em>The requirements can be updated each session, so verify current notifications on the official DU SOL portal before applying.</em></p>

<h3>Accreditation and Recognition</h3>
<p>DU SOL is UGC-DEB approved and the University of Delhi is NAAC accredited with top grades, alongside AICTE technical compliance. With these recognitions, the DU SOL MBA in Business Analytics carries valid academic and corporate value across India and globally for career promotions, MNC jobs, and doctoral studies.</p>

<h3>Curriculum and Learning Methodology</h3>
<p>The curriculum runs across four semesters and covers analytics concepts, statistical algorithms, business software, and enterprise applications. Learners benefit from:</p>
<ul>
  <li>E-books and printed study materials delivered by the university</li>
  <li>Live interactive sessions and webinars by data science leaders</li>
  <li>Real-world dataset projects, case studies, and business simulations</li>
  <li>A 24/7 Learning Management System (LMS) and university digital library access</li>
</ul>
<p>These resources make MBA in Business Analytics study manageable alongside a demanding full-time job.</p>

<h3>DU SOL MBA in Business Analytics Fee Structure</h3>
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
      <td><strong>OPEN MAT Entrance Fee</strong></td>
      <td>₹800 (Open category) / ₹600 (Reserved category)</td>
      <td>Applicable if entrance evaluation is administered for the session</td>
    </tr>
    <tr>
      <td><strong>Registration fee</strong></td>
      <td>₹300</td>
      <td>One-time online registration fee at application</td>
    </tr>
    <tr>
      <td><strong>Course fee (Annual)</strong></td>
      <td>Approximately ₹52,570 per year</td>
      <td>Tuition, LMS access, digital library, and study material per academic year</td>
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
<p>Graduates can move into high-paying analytics, technology, and strategic consulting roles:</p>
<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Career Domain</th>
      <th>Target Job Roles</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Business &amp; Operations Analysis</strong></td>
      <td>Business Analyst, Operations Analyst, Requirements Engineer</td>
    </tr>
    <tr>
      <td><strong>Data Science &amp; Intelligence</strong></td>
      <td>Data Analyst, Business Intelligence (BI) Developer, Analytics Manager</td>
    </tr>
    <tr>
      <td><strong>Management &amp; Strategy</strong></td>
      <td>Strategy Consultant, Management Consultant, Data Strategist</td>
    </tr>
    <tr>
      <td><strong>Marketing &amp; Consumer Insights</strong></td>
      <td>Marketing Intelligence Lead, Consumer Insights Manager, Market Research Lead</td>
    </tr>
    <tr>
      <td><strong>Finance &amp; Risk Modelling</strong></td>
      <td>Financial Risk Analyst, Credit Risk Modeller, Investment Analytics Associate</td>
    </tr>
  </tbody>
</table>
</div>
<p>Working professionals often use the degree to secure promotions or shift from operational roles to data-driven management tracks. The mix of statistical understanding and business thinking is valuable across banks, retail firms, consulting companies, and technology startups.</p>

<h3>How to Apply</h3>
<ol>
  <li><strong>Visit the official portal:</strong> Go to the official admission portal at sol.du.ac.in.</li>
  <li><strong>Register online:</strong> Create your applicant profile using your email ID and mobile number.</li>
  <li><strong>Fill application form:</strong> Select MBA (Business Analytics) and complete your academic details.</li>
  <li><strong>Upload documents:</strong> Attach graduation marksheets, certificates, ID proof, photo, and signature.</li>
  <li><strong>Pay registration fee online:</strong> Submit the ₹300 registration fee through the payment gateway.</li>
  <li><strong>Check merit list:</strong> Once selected on the merit list, verify your documents and pay the annual course fee.</li>
</ol>
<p>The entire DU SOL MBA in Business Analytics admission process is online, so you can apply conveniently from anywhere.</p>

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
      <td><strong>What is the duration of the DU SOL MBA in Business Analytics?</strong></td>
      <td>It is typically a two-year programme divided into four semesters.</td>
    </tr>
    <tr>
      <td><strong>Who can apply for the MBA in Business Analytics at DU SOL?</strong></td>
      <td>Graduates in any discipline with at least 50% marks (45% for reserved categories), with preference for mathematics or statistics proficiency.</td>
    </tr>
    <tr>
      <td><strong>What is the fee?</strong></td>
      <td>Roughly ₹52,570 per year, plus a ₹300 registration fee, ₹200 per subject for examinations, and the OPEN MAT fee (₹800/₹600).</td>
    </tr>
    <tr>
      <td><strong>Is the degree recognized?</strong></td>
      <td>Yes, DU SOL is UGC-DEB approved and NAAC accredited, with degrees awarded by the University of Delhi.</td>
    </tr>
    <tr>
      <td><strong>How do I get study material?</strong></td>
      <td>Through printed books and digital resources, including the university's digital library and online LMS portal.</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Conclusion</h3>
<p>Looking to convert data into business decisions without hitting pause on your career? The DU SOL MBA in Business Analytics is worth serious consideration. Easy to do alongside your job, it leverages the strength of Delhi University, UGC-DEB accreditation, flexible learning, and a practical curriculum. Whether your goal is analytics, technology, or consulting, the MBA in Business Analytics at DU SOL is your sure-bet career path. Review options, check your eligibility, and register for free counseling to get started today.</p>`;

export const mbaAnalyticsFaqs = [
  {
    question: "What is the duration of the DU SOL MBA in Business Analytics?",
    answer: "It is typically a two-year programme divided into four semesters.",
  },
  {
    question: "Who can apply for the MBA in Business Analytics at DU SOL?",
    answer:
      "Graduates in any discipline with 50% marks (45% for reserved categories) and proficiency or background in maths or statistics.",
  },
  {
    question: "What is the fee for DU SOL MBA in Business Analytics?",
    answer:
      "Roughly ₹52,570 per year, plus ₹300 registration fee, ₹200 per subject for examinations, and the OPEN MAT fee (₹800 / ₹600).",
  },
  {
    question: "Is the degree recognized?",
    answer: "Yes, DU SOL is UGC-DEB approved and NAAC accredited, with degrees awarded directly by the University of Delhi.",
  },
  {
    question: "How do I get study material?",
    answer: "Through printed books and digital resources, including the university's digital library and online LMS portal.",
  },
];

export const mbaAnalyticsFees = [
  { title: "Registration Fee", amount: "₹300", note: "One-time online registration fee at application" },
  { title: "Course Fee (Annual)", amount: "₹52,570", note: "Tuition, printed/digital study material, LMS portal, and digital library per year" },
  { title: "OPEN MAT Entrance Fee", amount: "₹800 / ₹600", note: "₹800 for Open category, ₹600 for Reserved category" },
  { title: "Examination Fee", amount: "₹200", note: "Per subject semester exam fee" },
];

async function updateMBAAnalytics() {
  console.log("Updating MBA Business Analytics in Firestore...");
  const updateData = {
    name: "MBA in Business Analytics",
    seoTitle: "DU SOL MBA in Business Analytics: Fees & Eligibility",
    seoDescription:
      "Explore the DU SOL MBA in Business Analytics: fees, eligibility, curriculum and admission. A flexible MBA in Business Analytics from Delhi University.",
    duration: "2 Years (4 Semesters)",
    degree: "Master of Business Administration (Business Analytics)",
    type: "mba",
    overview:
      "Looking to switch your career to data & insights and yet want to keep your current job? The DU SOL MBA in Business Analytics is an affordable, flexible 2-year distance learning postgraduate programme from Delhi University.",
    description:
      "Looking to switch your career to data & insights and yet want to keep your current job? The DU SOL MBA in Business Analytics might be your next move. Conducted by School of Open Learning, University of Delhi, DU SOL MBA Business Analytics is an affordable and flexible postgraduate programme for working individuals and fresh graduates. Here is a detailed guide to DU SOL MBA Business Analytics.\n\nThe program is a distance MBA created for working professionals and students who require flexible learning. It helps develop skills in understanding data, predicting trends, and making strategic business plans, getting students ready for jobs in analysis, technology, and corporate consulting.",
    eligibility:
      "Bachelor’s degree in any discipline from a recognized university with a minimum of 50% aggregate marks for unreserved categories and 45% for reserved categories. Proficiency or background in Mathematics or Statistics is preferred. Merit-based admission.",
    admissionProcess:
      "Online admission via sol.du.ac.in. Register on the online portal, fill in the application form, upload graduation marksheets and ID proof, pay the registration fee, verify selection on the merit list, and confirm admission by paying the course fee.",
    curriculum: [
      {
        semesterOrYear: "Semester 1",
        subjects: [
          "Business Statistics & Probability Foundations",
          "Managerial Economics & Decision Accounting",
          "Data Warehousing & SQL Management",
          "Programming for Data Analytics (Python & R)",
        ],
      },
      {
        semesterOrYear: "Semester 2",
        subjects: [
          "Predictive Modelling & Business Forecasting",
          "Machine Learning for Business Applications",
          "Data Visualization & Storytelling (Tableau & Power BI)",
          "Marketing & Customer Intelligence Analytics",
        ],
      },
      {
        semesterOrYear: "Semester 3",
        subjects: [
          "Financial Analytics & Quantitative Risk Modelling",
          "Supply Chain & Logistics Operations Analytics",
          "Big Data Technologies & Cloud Architectures",
          "HR & People Analytics",
        ],
      },
      {
        semesterOrYear: "Semester 4",
        subjects: [
          "Prescriptive Analytics & Corporate Strategy",
          "Ethical AI & Enterprise Data Governance",
          "Capstone Industry Analytics Project",
          "Master's Analytics Dissertation",
        ],
      },
    ],
    content: mbaAnalyticsContent,
    faqs: mbaAnalyticsFaqs,
    fees: mbaAnalyticsFees,
    careerOpportunities: [
      "Business Analyst & Requirements Engineer",
      "Data Analyst & Quantitative Specialist",
      "Analytics Manager & Insights Director",
      "Business Strategy & Management Consultant",
      "Market Research Lead & Consumer Intelligence Specialist",
      "Risk & Financial Modelling Analyst",
    ],
    updatedAt: new Date().toISOString(),
  };

  const docRef = db.collection("mbaSpecializations").doc("mba-business-analytics");
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    await docRef.set(updateData, { merge: true });
    console.log("✅ Successfully updated mba-business-analytics in mbaSpecializations!");
  } else {
    await docRef.set({
      id: "mba-business-analytics",
      slug: "mba-business-analytics",
      status: "published",
      createdAt: new Date().toISOString(),
      ...updateData,
    });
    console.log("✅ Created mba-business-analytics in mbaSpecializations!");
  }
}

updateMBAAnalytics().catch(console.error);
