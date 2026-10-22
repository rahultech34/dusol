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

export const mbaHospitalAdministrationContent = `<h2>DU SOL MBA in Hospital Administration Management: Eligibility, Subjects and Admission Guide</h2>
<p>Your hospital needs more than doctors. In fact, there are managers behind every OPD, billing counter, and emergency department. That’s why graduates from any stream and healthcare professionals look out for the DU SOL MBA in Hospital Administration Management. The School of Open Learning, University of Delhi runs the distance mode program, so you can pursue the MBA while working. If you want to know whether the DU SOL MBA in Hospital Administration Management is the right fit for you, let us look at this guide to the subjects, eligibility, admission process, and scope of career.</p>

<h3>What Is DU SOL MBA in Hospital Administration Management?</h3>
<p>DU SOL MBA in Hospital Administration Management is a postgraduate management degree that applies business skills to healthcare settings. Alongside core management papers, you learn how hospitals plan services, handle staff, control costs, and maintain quality. The degree is awarded by the University of Delhi, a name that carries weight with employers. Compared with a full-time MBA, it costs less and lets you keep your job.</p>

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
      <td>Master of Business Administration (MBA) in Hospital Administration Management</td>
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
      <td>Graduation in any discipline (health sciences, arts, commerce, science) with minimum required marks</td>
    </tr>
    <tr>
      <td><strong>Approximate Course Fee</strong></td>
      <td>₹52,570 per year (plus nominal exam &amp; registration fees)</td>
    </tr>
    <tr>
      <td><strong>Key Competencies</strong></td>
      <td>Hospital Operations, NABH/JCI Accreditation, Medical Ethics, Health Information Systems &amp; Healthcare Supply Chain</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Why Choose an MBA in Hospital Administration Management?</h3>
<p>India's healthcare sector keeps growing, and hospitals need people who understand both patient care and business. An MBA in Hospital Administration Management prepares you for exactly that gap. It's useful for nurses, pharmacists, lab technicians, and other healthcare staff who want to move into management. It also works for commerce and arts graduates who want to enter a stable, fast-growing industry:</p>

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
      <td><strong>Delhi University name</strong></td>
      <td>Earn a prestigious University of Delhi degree respected by multi-speciality hospital networks and healthcare employers at a modest cost.</td>
    </tr>
    <tr>
      <td><strong>Flexible shift-friendly learning</strong></td>
      <td>Study material and recorded online lectures are accessible 24/7, making it easy to learn around hospital shift rotations and work schedules.</td>
    </tr>
    <tr>
      <td><strong>A growing healthcare job market</strong></td>
      <td>Rapid nationwide expansion of private hospital networks, diagnostics chains, and health-tech platforms drives constant executive demand.</td>
    </tr>
    <tr>
      <td><strong>Versatile healthcare career skills</strong></td>
      <td>Acquired management skills apply seamlessly across hospitals, diagnostic centers, wellness chains, health insurers, TPAs, and consultancies.</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Who Should Apply?</h3>
<p>This programme is structured for professionals and graduates aiming for leadership in the healthcare domain:</p>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li><strong>Healthcare Practitioners:</strong> Nurses, pharmacists, physiotherapists, doctors, and lab technicians seeking to transition from clinical duties into administrative management.</li>
  <li><strong>Hospital Administrative Staff:</strong> Personnel currently working in billing, admissions, front desk, and patient coordination aiming for managerial promotions.</li>
  <li><strong>Graduates from Any Stream:</strong> Ambitious Science, Commerce, and Arts graduates seeking to build a lucrative management career in the resilient healthcare industry.</li>
  <li><strong>Health-Tech &amp; Insurance Professionals:</strong> Executives in health insurance, TPAs, and pharmaceutical supply chains needing structured healthcare administration credentials.</li>
</ul>

<h3>DU SOL MBA in Hospital Administration Management Subjects</h3>
<p>The curriculum spans two years and four semesters. The first year establishes a solid management base, while the second year focuses on specialized healthcare administration:</p>

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
      <td>Healthcare Management &amp; Organizational Behaviour, Hospital Planning &amp; Architecture, Health Economics &amp; Policy, Management Accounting</td>
    </tr>
    <tr>
      <td><strong>Semester 2</strong></td>
      <td>Hospital Operations &amp; Clinical Services Management, Healthcare Quality Management (NABH/JCI), Health Laws &amp; Medical Ethics, Epidemiology &amp; Public Health</td>
    </tr>
    <tr>
      <td><strong>Semester 3</strong></td>
      <td>Hospital Information Systems &amp; Telemedicine, Healthcare Marketing &amp; Patient Relations, Materials &amp; Supply Chain Management in Hospitals, Human Resource Management in Healthcare</td>
    </tr>
    <tr>
      <td><strong>Semester 4</strong></td>
      <td>Health Insurance &amp; TPA Operations, Disaster &amp; Emergency Management in Hospitals, Strategic Healthcare Leadership, Capstone Hospital Administration Dissertation / Field Project</td>
    </tr>
  </tbody>
</table>
</div>
<p><em>Note: The exact paper list and module names may be updated by the university. Always cross-check with the latest syllabus on the official portal.</em></p>

<h3>Eligibility Criteria</h3>
<p>Candidates must hold a bachelor's degree in any discipline from a recognized university. While graduates with backgrounds in medicine, nursing, pharmacy, and allied health sciences find this course highly synergistic, graduates from science, commerce, and humanities are equally eligible to apply:</p>

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
      <td>Bachelor's degree in any discipline (MBBS, BDS, B.Pharm, B.Sc Nursing, B.Sc, B.Com, BA, etc.) from a recognized university.</td>
    </tr>
    <tr>
      <td><strong>Minimum Aggregate Marks</strong></td>
      <td>Typically 50% aggregate marks in graduation (45% for reserved categories as per government norms).</td>
    </tr>
    <tr>
      <td><strong>Admission Basis</strong></td>
      <td>Merit-based admission or OPENMAT entrance score as specified in the annual DU SOL postgraduate notification.</td>
    </tr>
    <tr>
      <td><strong>Age Criteria</strong></td>
      <td>No age limit (No age bar for enrollment).</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Fees and Important Points</h3>
<p>Fees are paid per year and tend to be much more affordable than private business schools. The approximate fee breakdown is:</p>

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
<p><em>Note: Fees can vary from year to year. Please check the current fees in the officially published prospectus before applying.</em></p>

<h3>Documents Required</h3>
<p>Keep scanned digital copies of the following documents ready before applying:</p>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li>Graduation marksheets (all years/semesters) and degree certificate</li>
  <li>Class 10 and 12 marksheets and passing certificates</li>
  <li>Recent passport-sized photograph and scanned signature</li>
  <li>Valid government ID proof (Aadhaar Card, Voter ID, or Passport)</li>
  <li>Category certificate (SC/ST/OBC/EWS/PwD), if applicable</li>
</ul>

<h3>How to Apply for DU SOL MBA in Hospital Administration Management</h3>
<p>The entire application process is conducted smoothly online via the official DU SOL admission portal:</p>
<ol class="list-decimal pl-6 space-y-2 my-3">
  <li><strong>Register:</strong> Open the official SOL admission portal at <code>sol.du.ac.in</code> and register with your email and mobile number.</li>
  <li><strong>Select Specialisation:</strong> Choose the MBA programme and select Hospital Administration Management as your specialisation.</li>
  <li><strong>Fill Academic Details:</strong> Enter your personal, contact, and graduation marks carefully.</li>
  <li><strong>Upload Documents:</strong> Upload your scanned photograph, signature, graduation marksheets, and ID proof.</li>
  <li><strong>Pay Online:</strong> Complete the registration fee payment online via UPI, net banking, or debit/credit card.</li>
  <li><strong>Submit &amp; Download:</strong> Submit the application form and download the confirmation slip for your records.</li>
</ol>

<h3>Career Scope After an MBA in Hospital Administration Management</h3>
<p>Healthcare management jobs exist across hospitals, diagnostic chains, health insurers, medical device manufacturers, and health consultancies:</p>

<div class="overflow-x-auto my-4">
<table>
  <thead>
    <tr>
      <th>Career Designation</th>
      <th>Core Professional Responsibilities</th>
      <th>Expected Salary Range</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Hospital Administrator / Manager</strong></td>
      <td>Supervise day-to-day administrative functions, clinical coordination, patient experience, and department budgets.</td>
      <td>₹6.5 - 13.5 LPA</td>
    </tr>
    <tr>
      <td><strong>Healthcare Operations Manager</strong></td>
      <td>Direct OPD/IPD workflows, emergency response, OT scheduling, bed management, and clinical resource allocation.</td>
      <td>₹6.0 - 12.5 LPA</td>
    </tr>
    <tr>
      <td><strong>Quality &amp; Accreditation Officer</strong></td>
      <td>Maintain NABH, JCI, and NABL clinical standards, oversee infection control audits, and drive compliance protocols.</td>
      <td>₹5.8 - 11.5 LPA</td>
    </tr>
    <tr>
      <td><strong>Health Insurance &amp; TPA Manager</strong></td>
      <td>Manage cashless hospital claims processing, insurer empanelment, billing audits, and regulatory coordination.</td>
      <td>₹5.5 - 11.0 LPA</td>
    </tr>
    <tr>
      <td><strong>Healthcare Consultant</strong></td>
      <td>Advise hospital networks, diagnostic chains, and medical startups on operational efficiency, accreditation, and expansion.</td>
      <td>₹7.0 - 15.0 LPA</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Tips to Succeed in a Distance MBA</h3>
<p>Distance learning rewards discipline and consistency:</p>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li><strong>Set Fixed Study Hours:</strong> Dedicate 6 to 8 hours each week to review study modules, e-books, and recorded webinars.</li>
  <li><strong>Submit Assignments on Time:</strong> Complete assignments early to receive faculty feedback and internal assessment scores.</li>
  <li><strong>Connect Theory to Real Scenarios:</strong> If you work in healthcare, link topics directly to patient flow, staff rostering, or billing delays to build genuine operational mastery.</li>
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
      <td><strong>Is DU SOL MBA in Hospital Administration Management a recognised degree?</strong></td>
      <td>Yes, it is offered by the School of Open Learning, University of Delhi, carrying the university's prestigious name with UGC-DEB approval and NAAC accreditation.</td>
    </tr>
    <tr>
      <td><strong>How long does an MBA in Hospital Administration Management take?</strong></td>
      <td>The programme is two years, divided into four semesters. Check the official website for maximum permitted completion limits.</td>
    </tr>
    <tr>
      <td><strong>Can I do DU SOL MBA in Hospital Administration Management while working?</strong></td>
      <td>Yes. The study material is online and you can plan your study time around your job or hospital shift rotations with weekend academic sessions.</td>
    </tr>
    <tr>
      <td><strong>What is the fee for DU SOL MBA in Hospital Administration Management?</strong></td>
      <td>Roughly ₹52,570 per year, plus a ₹300 registration fee, ₹200 per subject examination fee, and the OPEN MAT fee.</td>
    </tr>
    <tr>
      <td><strong>Who is eligible to apply for this programme?</strong></td>
      <td>Graduates in any discipline (including MBBS, BDS, B.Pharm, B.Sc Nursing, Science, Commerce, Arts) with minimum qualifying aggregate marks.</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Conclusion</h3>
<p>The DU SOL MBA in Hospital Administration Management offers an affordable, fact-based, and flexible route for working professionals and graduates to earn a sought-after postgraduate qualification. If healthcare management is your future, Delhi University's hospital administration management MBA programme can be a transformative career booster. Review the latest eligibility, get your documents sorted, and apply on the official portal today!</p>`;

export const mbaHospitalAdministrationFaqs = [
  {
    question: "Is DU SOL MBA in Hospital Administration Management a recognised degree?",
    answer: "Yes, it is offered by the School of Open Learning, University of Delhi, carrying the university's prestigious name with UGC-DEB approval and NAAC accreditation.",
  },
  {
    question: "How long does an MBA in Hospital Administration Management take?",
    answer: "The programme is two years, divided into four semesters. Check the official website for maximum permitted completion limits.",
  },
  {
    question: "Can I do DU SOL MBA in Hospital Administration Management while working?",
    answer: "Yes. The study material is online and you can plan your study time around your job or hospital shift rotations with weekend academic sessions.",
  },
  {
    question: "What is the fee for DU SOL MBA in Hospital Administration Management?",
    answer: "Roughly ₹52,570 per year, plus a ₹300 registration fee, ₹200 per subject examination fee, and the OPEN MAT fee.",
  },
  {
    question: "Who is eligible to apply for this programme?",
    answer: "Graduates in any discipline (including MBBS, BDS, B.Pharm, B.Sc Nursing, Science, Commerce, Arts) with minimum qualifying aggregate marks.",
  },
];

export const mbaHospitalAdministrationFees = [
  { title: "Course Fee (Annual)", amount: "₹52,570", note: "Annual course fee covering tuition, study material, LMS, and digital library" },
  { title: "Registration Fee", amount: "₹300", note: "One-time online registration fee at the time of application" },
  { title: "OPEN MAT Entrance Fee", amount: "₹800 / ₹600", note: "₹800 for Open category, ₹600 for Reserved category" },
  { title: "Examination Fee", amount: "₹200", note: "Per subject semester exam fee" },
];

async function updateMBAHospitalAdministration() {
  const updateData = {
    name: "MBA in Hospital Administration Management",
    slug: "mba-hospital-administration",
    type: "mba",
    degree: "Master of Business Administration (Hospital Administration Management)",
    duration: "2 Years (4 Semesters)",
    seoTitle: "DU SOL MBA in Hospital Administration Management Guide",
    seoDescription:
      "DU SOL MBA in Hospital Administration Managementexplained: eligibility, subjects, career scope and admission steps for this flexible MBA.",
    overview:
      "Your hospital needs more than doctors. In fact, there are managers behind every OPD, billing counter, and emergency department. That’s why graduates from any stream and healthcare professionals look out for the DU SOL MBA in Hospital Administration Management. The School of Open Learning, University of Delhi runs the distance mode program, so you can pursue the MBA while working. If you want to know whether the DU SOL MBA in Hospital Administration Management is the right fit for you, let us look at this guide to the subjects, eligibility, admission process, and scope of career.",
    description:
      "DU SOL MBA in Hospital Administration Management is a postgraduate management degree that applies business skills to healthcare settings. Alongside core management papers, you learn how hospitals plan services, handle staff, control costs and maintain quality. The degree is awarded by the University of Delhi, combining prestigious brand value with low fees and schedule flexibility.",
    eligibility:
      "Usually, you need a bachelor's degree from a recognised university with minimum qualifying marks (typically 50% for open category, 45% for reserved categories). Open to graduates from any stream (MBBS, BDS, B.Pharm, B.Sc Nursing, Science, Commerce, Arts). Selection can be through merit or an entrance score (such as OPENMAT).",
    admissionProcess:
      "The entire DU SOL MBA in Hospital Administration Management admission process is online: 1. Open the official SOL admission portal at sol.du.ac.in and register. 2. Select MBA in Hospital Administration Management. 3. Fill in personal and academic details. 4. Upload photograph, signature, and marksheets. 5. Pay the fee online. 6. Submit the form and keep the confirmation receipt safe.",
    curriculum: [
      {
        semesterOrYear: "Semester 1",
        subjects: [
          "Healthcare Management & Organizational Behaviour",
          "Hospital Planning & Architecture",
          "Health Economics & Policy",
          "Management Accounting",
        ],
      },
      {
        semesterOrYear: "Semester 2",
        subjects: [
          "Hospital Operations & Clinical Services Management",
          "Healthcare Quality Management (NABH/JCI)",
          "Health Laws & Medical Ethics",
          "Epidemiology & Public Health",
        ],
      },
      {
        semesterOrYear: "Semester 3",
        subjects: [
          "Hospital Information Systems & Telemedicine",
          "Healthcare Marketing & Patient Relations",
          "Materials & Supply Chain Management in Hospitals",
          "Human Resource Management in Healthcare",
        ],
      },
      {
        semesterOrYear: "Semester 4",
        subjects: [
          "Health Insurance & TPA Operations",
          "Disaster & Emergency Management in Hospitals",
          "Strategic Healthcare Leadership",
          "Capstone Hospital Administration Dissertation / Field Project",
        ],
      },
    ],
    content: mbaHospitalAdministrationContent,
    faqs: mbaHospitalAdministrationFaqs,
    fees: mbaHospitalAdministrationFees,
    careerOpportunities: [
      "Hospital Administrator / Manager",
      "Healthcare Operations Manager",
      "Quality & Accreditation Officer",
      "Health Insurance & TPA Manager",
      "Healthcare Consultant",
    ],
    updatedAt: new Date().toISOString(),
  };

  const docRef = db.collection("mbaSpecializations").doc("mba-hospital-administration");
  const docSnap = await docRef.get();
  if (docSnap.exists) {
    await docRef.set(updateData, { merge: true });
    console.log("✅ Successfully updated mba-hospital-administration in mbaSpecializations!");
  } else {
    await docRef.set({
      id: "mba-hospital-administration",
      status: "published",
      createdAt: new Date().toISOString(),
      ...updateData,
    });
    console.log("✅ Created mba-hospital-administration in mbaSpecializations!");
  }
}

updateMBAHospitalAdministration().catch(console.error);
