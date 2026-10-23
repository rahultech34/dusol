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

export const admissionHtmlContent = `<h2>DU SOL Admission 2026: Last Date, Eligibility, Fees and How to Apply</h2>
<p>Want a Delhi University degree without attending regular classes? DU SOL Admission is your gateway. The School of Open Learning, University of Delhi, offers undergraduate, postgraduate, diploma, and certificate programmes in open and distance learning mode. This guide explains DU SOL Admission 2026, including the last date, eligibility, fees, and the steps to apply.</p>

<div class="overflow-x-auto my-6">
  <table class="w-full border-collapse border border-slate-200 text-left text-sm">
    <thead>
      <tr class="bg-purple-50 text-[#652a7c]">
        <th class="p-3 border border-slate-200 font-bold">Key Information</th>
        <th class="p-3 border border-slate-200 font-bold">Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">University</td>
        <td class="p-3 border border-slate-200">School of Open Learning, University of Delhi (DU SOL)</td>
      </tr>
      <tr class="bg-slate-50/50">
        <td class="p-3 border border-slate-200 font-semibold">Admission Year / Session</td>
        <td class="p-3 border border-slate-200">2026 (January &amp; July Intakes)</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">Last Date to Apply</td>
        <td class="p-3 border border-slate-200"><strong class="text-rose-600 font-bold">31 October 2026</strong> (Subject to university extension)</td>
      </tr>
      <tr class="bg-slate-50/50">
        <td class="p-3 border border-slate-200 font-semibold">Programmes Offered</td>
        <td class="p-3 border border-slate-200">UG (BA, B.Com, BMS, BLIS) &amp; PG (MA, M.Com, MBA, MLIS)</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">Application Mode</td>
        <td class="p-3 border border-slate-200">100% Online via <code>sol.du.ac.in</code></td>
      </tr>
      <tr class="bg-slate-50/50">
        <td class="p-3 border border-slate-200 font-semibold">Undergraduate Fee Range</td>
        <td class="p-3 border border-slate-200">₹7,000 – ₹12,000</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">Postgraduate Fee Range</td>
        <td class="p-3 border border-slate-200">₹10,000 – ₹55,000 (MBA at top of range)</td>
      </tr>
      <tr class="bg-slate-50/50">
        <td class="p-3 border border-slate-200 font-semibold">Eligibility</td>
        <td class="p-3 border border-slate-200">10+2 for UG | Bachelor's Degree for PG</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">Official Website</td>
        <td class="p-3 border border-slate-200"><a href="https://sol.du.ac.in" target="_blank" rel="noopener noreferrer" class="text-[#652a7c] font-bold underline">sol.du.ac.in</a></td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Final Date for DU SOL Admission 2026</h3>
<p>According to the listing, the last date for all programmes is <strong>31 October 2026</strong>. This is just a few days away, so better not wait for the last moment and keep your documents ready to complete your application as early as possible. The university conducts an intake of courses twice, in the January and July sessions, and applications are submitted online via <a href="https://sol.du.ac.in" target="_blank" rel="noopener noreferrer" class="text-[#652a7c] underline font-bold">sol.du.ac.in</a>. However, the last date can be extended or changed, so always check on the official website.</p>

<h3>Reasons to Pick DU SOL:</h3>
<p>The School of Open Learning caters to students and working professionals who require flexibility. Several students opt for DU SOL Admission due to the flexibility it provides along with the prestige of the name. Here is why:</p>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li><strong>Trusted name:</strong> The degree comes from the University of Delhi.</li>
  <li><strong>Flexible learning:</strong> Learn at a time that fits in with your work or family commitments.</li>
  <li><strong>Affordable fees:</strong> Course costs are modest compared with many private institutions.</li>
  <li><strong>Wide choice:</strong> Programmes are available across arts, commerce, management, and library science.</li>
  <li><strong>Regular intake:</strong> Applications open twice a year.</li>
</ul>

<h3>Programmes Covered Under DU SOL Admission</h3>
<p>Candidates who apply through DU SOL Admission are offered various UG and PG courses.</p>
<p>At the undergrad level there are the options of BA (General and Honours), BCom (General and Honours), BMS and BLIS. At postgrads there are options of MA in Hindi, Sanskrit, History, Political Science, etc., besides MCom, MBA, MLIS. Each programme page of the university website provides details of the duration, medium, eligibility and fee structure of that programme so, make sure to check before selection.</p>

<div class="overflow-x-auto my-4">
  <table class="w-full border-collapse border border-slate-200 text-left text-sm">
    <thead>
      <tr class="bg-purple-50 text-[#652a7c]">
        <th class="p-3 border border-slate-200 font-bold">Level</th>
        <th class="p-3 border border-slate-200 font-bold">Available Programmes</th>
        <th class="p-3 border border-slate-200 font-bold">Standard Eligibility</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">Undergraduate (UG)</td>
        <td class="p-3 border border-slate-200">BA (General &amp; Honours), B.Com (General &amp; Honours), BMS, BLIS</td>
        <td class="p-3 border border-slate-200">10+2 passed (Merit-based)</td>
      </tr>
      <tr class="bg-slate-50/50">
        <td class="p-3 border border-slate-200 font-semibold">Postgraduate (PG)</td>
        <td class="p-3 border border-slate-200">MA (Hindi, Sanskrit, History, Political Science), M.Com, MLIS</td>
        <td class="p-3 border border-slate-200">Bachelor's Degree / CUET-PG</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">Management (MBA)</td>
        <td class="p-3 border border-slate-200">Master of Business Administration (Multiple Specialisations)</td>
        <td class="p-3 border border-slate-200">Graduation (Min 50% / 45% reserved)</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>DU SOL Admission Eligibility</h3>
<p>The eligibility criteria for different programmes will be different. For UG courses, aspirants need to have passed class 12th and for PG courses, graduates can apply. Undergraduate selection is usually merit-based, while postgraduate selection may require CUET-PG scores. For some courses, aspirants might need to meet specific eligibility criteria for example the marks obtained in the qualifying exam or there might be subject requirements. Aspirants should read the eligibility criteria on the programme page before they pay any fee.</p>

<h3>DU SOL Admission Fees</h3>
<p>The fees are different for each programme. According to the listings, undergraduate courses usually fall between ₹7,000-₹12,000, while postgraduate programmes are between ₹10,000 and ₹55,000. The MBA majors will be at the top of that range. These fees are subject to change from one session to another and should be paid exclusively to the university via its website.</p>

<div class="overflow-x-auto my-4">
  <table class="w-full border-collapse border border-slate-200 text-left text-sm">
    <thead>
      <tr class="bg-purple-50 text-[#652a7c]">
        <th class="p-3 border border-slate-200 font-bold">Course Category</th>
        <th class="p-3 border border-slate-200 font-bold">Approximate Fee Range</th>
        <th class="p-3 border border-slate-200 font-bold">Payment Portal</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">Undergraduate (UG) Courses</td>
        <td class="p-3 border border-slate-200">₹7,000 – ₹12,000</td>
        <td class="p-3 border border-slate-200">Official DU SOL Portal (sol.du.ac.in)</td>
      </tr>
      <tr class="bg-slate-50/50">
        <td class="p-3 border border-slate-200 font-semibold">Postgraduate (PG) Courses</td>
        <td class="p-3 border border-slate-200">₹10,000 – ₹55,000</td>
        <td class="p-3 border border-slate-200">Official DU SOL Portal (sol.du.ac.in)</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">MBA Specialisations</td>
        <td class="p-3 border border-slate-200">Top of Range (~₹52,570)</td>
        <td class="p-3 border border-slate-200">Official DU SOL Portal (sol.du.ac.in)</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>How to Apply for DU SOL Admission 2026</h3>
<ol class="list-decimal pl-6 space-y-2 my-3">
  <li>Go to the official website of DU SOL and click on DU SOL Registration for the new registration.</li>
  <li>Provide all necessary information on the application form.</li>
  <li>Choose your programme and attach the doc.</li>
  <li>Go over the form thoroughly and send it.</li>
  <li>Please see your email for confirmation and next steps.</li>
</ol>
<p>Keep scanned copies of your marksheets and identity proof ready before you begin, since uploading clear documents avoids delays.</p>

<h3>Items Required for DU SOL Admission</h3>
<p>Though it varies by programme, you will generally require class 10 and 12 marksheets, graduation marksheets for PG courses, photo identity proof, a recent photograph, and scanned signature for the application process. If you intend to apply under a reserved-category benefit, you may need category certificates. Check the application portal list to be sure.</p>

<ul class="list-disc pl-6 space-y-2 my-3">
  <li>Class 10 marksheet &amp; certificate (for Date of Birth verification)</li>
  <li>Class 12 marksheet &amp; passing certificate (for UG admissions)</li>
  <li>Graduation marksheets &amp; degree certificate (for PG &amp; MBA admissions)</li>
  <li>Valid government photo identity proof (Aadhaar Card / Voter ID / Passport)</li>
  <li>Recent passport-size colour photograph</li>
  <li>Scanned signature on plain white paper</li>
  <li>Category / Caste Certificate (SC / ST / OBC / EWS / PwD, if applicable)</li>
</ul>

<h3>How to Complete DU SOL Admission Easily</h3>
<p>Do submit it before deadline, provide a valid email id &amp; mobile number and fill the information exactly similar as entered in marksheets. Upload clean scanned copies, save acknowledgment and do not pay fees to anyone else apart from the university.</p>

<h3>Support and Study Centres</h3>
<p>DU SOL offers study support, educational tools, materials and online resources, as well as regional and study centres across India where you can meet faculty and attend supplementary classes. During DU SOL Admission, help is available from the Student Service Center at ssc@du.ac.in or 011-29572513 and 011-29572514. Student Registration Division can be contacted at csrc@du.ac.in or 011-29571301 and 011-29571528.</p>

<div class="overflow-x-auto my-4">
  <table class="w-full border-collapse border border-slate-200 text-left text-sm">
    <thead>
      <tr class="bg-purple-50 text-[#652a7c]">
        <th class="p-3 border border-slate-200 font-bold">Contact Department</th>
        <th class="p-3 border border-slate-200 font-bold">Email</th>
        <th class="p-3 border border-slate-200 font-bold">Helpline Numbers</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">Student Service Center (SSC)</td>
        <td class="p-3 border border-slate-200"><code>ssc@du.ac.in</code></td>
        <td class="p-3 border border-slate-200">011-29572513, 011-29572514</td>
      </tr>
      <tr class="bg-slate-50/50">
        <td class="p-3 border border-slate-200 font-semibold">Student Registration Division (CSRC)</td>
        <td class="p-3 border border-slate-200"><code>csrc@du.ac.in</code></td>
        <td class="p-3 border border-slate-200">011-29571301, 011-29571528</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Check Your Application Status</h3>
<p>Once you complete the process, you will be able to view your DU SOL Admission status on the DU SOL admissions portal. The acknowledgment that you have got after completing the process also helps to track your application. In case you have issues, please contact the helplines above or visit the regional centre.</p>

<h3>Frequently Asked Questions</h3>
<div class="space-y-4 my-4">
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <h4 class="font-bold text-slate-900 mb-1">1. When is the final date for DU SOL Admission 2026?</h4>
    <p class="text-slate-700">The date listed for all programmes is <strong>31 October 2026</strong>. Check on the web page of the official website.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <h4 class="font-bold text-slate-900 mb-1">2. How to Apply For DU SOL Admission?</h4>
    <p class="text-slate-700">Register through the official portal, Fill the form, upload documents and proceed for submission.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <h4 class="font-bold text-slate-900 mb-1">3. What is the eligibility?</h4>
    <p class="text-slate-700">Generally 10+2 for UG &amp; Bachelor's degree for PG course.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <h4 class="font-bold text-slate-900 mb-1">4. How much are the fees?</h4>
    <p class="text-slate-700">Between approximately ₹7,000 to ₹12,000 for undergraduate and between approximately ₹10,000 to ₹55,000 for postgraduate programmes.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <h4 class="font-bold text-slate-900 mb-1">5. Is an entrance exam required?</h4>
    <p class="text-slate-700">Undergraduate selection is generally merit-based. Postgraduate may need CUET-PG scores.</p>
  </div>
</div>

<h3>Conclusion</h3>
<p>The date is near. Choose the programme that suits your goals, confirm eligibility, keep your documents ready, and apply through the official portal. Completing DU SOL Admission on time gives you access to flexible, affordable Delhi University education. Get free DU Sol course counseling if you need assistance.</p>`;

async function updateStudentZoneAdmission() {
  const commonData = {
    title: "DU SOL Admission 2026: Last Date, Eligibility, Fees and How to Apply",
    summary: "Check DU SOL Admission 2026 details: last date, eligibility, fees and how to apply online for UG and PG programmes at Delhi University SOL.",
    content: admissionHtmlContent,
    category: "Admissions 2026",
    externalLink: "https://sol.du.ac.in",
    quickSteps: [
      "Go to the official website of DU SOL and click on DU SOL Registration for the new registration.",
      "Provide all necessary information on the application form.",
      "Choose your programme and attach the doc.",
      "Go over the form thoroughly and send it.",
      "Please see your email for confirmation and next steps.",
    ],
    status: "published" as const,
    seoTitle: "DU SOL Admission 2026: Last Date, Eligibility & Fees",
    seoDescription: "Check DU SOL Admission 2026 details: last date, eligibility, fees and how to apply online for UG and PG programmes at Delhi University SOL.",
    updatedAt: new Date().toISOString(),
  };

  // 1. Update Student Zone doc 'admission' (accessed at /student-zone/admission)
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

  // 2. Update Student Zone doc 'du-sol-admission-2026' (accessed at /student-zone/du-sol-admission-2026)
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
  console.log("✅ Successfully updated studentZone 'du-sol-admission-2026' (/student-zone/du-sol-admission-2026)");

  // 3. Also update Blogs collection 'du-sol-admission-2026' (/blogs/du-sol-admission-2026)
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
  console.log("✅ Successfully updated blog 'du-sol-admission-2026' (/blogs/du-sol-admission-2026)");
}

updateStudentZoneAdmission().catch(console.error);
