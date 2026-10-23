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

export const coursesFeesHtmlContent = `<h2>DUSOL Courses Fees List 2026: UG and PG Fees, Registration Charges</h2>
<p>Planning a Delhi University degree on a budget? Knowing the DUSOL Courses Fees before you apply helps you plan your finances with confidence. The School of Open Learning offers affordable undergraduate and postgraduate programmes for students who cannot attend regular college. This guide explains the DUSOL Courses Fees List for the 2026 session, including course fees, registration charges, and payment tips.</p>

<h3>DUSOL Course Fees - An Overview</h3>
<p>DU SOL courses in subjects such as Arts, Commerce, and Management. The fee structure of the DU Sol courses range from subject to subject and varies based on the specialization and the level of the course. DU SOL Courses Fees – The DU SOL courses fees are quite reasonable when compared to many other universities.</p>
<p>All prospective students who seek admission should check the DUSOL Courses Fees in advance. This includes school leavers comparing BA, BCom, and BMS, graduates choosing between MA and MCom, and working professionals who must budget for the full programme. Families supporting a student can also use these figures to plan yearly payments and avoid last-minute stress during the application window.</p>

<div class="overflow-x-auto my-6">
  <table class="w-full border-collapse border border-slate-200 text-left text-sm">
    <thead>
      <tr class="bg-purple-50 text-[#652a7c]">
        <th class="p-3 border border-slate-200 font-bold">Key Particular</th>
        <th class="p-3 border border-slate-200 font-bold">Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">University</td>
        <td class="p-3 border border-slate-200">School of Open Learning, University of Delhi (DU SOL)</td>
      </tr>
      <tr class="bg-slate-50/50">
        <td class="p-3 border border-slate-200 font-semibold">Academic Session</td>
        <td class="p-3 border border-slate-200">2026-27 (January &amp; July Intakes)</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">UG Fee Range</td>
        <td class="p-3 border border-slate-200">₹10,000 to ₹21,120 per year</td>
      </tr>
      <tr class="bg-slate-50/50">
        <td class="p-3 border border-slate-200 font-semibold">PG Fee Range</td>
        <td class="p-3 border border-slate-200">₹9,070 to ₹9,970 per year (MA / M.Com)</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">Registration Charges</td>
        <td class="p-3 border border-slate-200">₹500 (General/OBC/EWS) | ₹300 (SC/ST)</td>
      </tr>
      <tr class="bg-slate-50/50">
        <td class="p-3 border border-slate-200 font-semibold">Official Payment Portal</td>
        <td class="p-3 border border-slate-200"><a href="https://sol.du.ac.in" target="_blank" rel="noopener noreferrer" class="text-[#652a7c] font-bold underline">sol.du.ac.in</a></td>
      </tr>
    </tbody>
  </table>
</div>

<h3>UG DUSOL Courses Fees 2026</h3>
<p>The undergraduate programmes are suitable for students who have passed 10+2. Find the annual fee for each programme in the table below.</p>

<div class="overflow-x-auto my-6">
  <table class="w-full border-collapse border border-slate-200 text-left text-sm">
    <thead>
      <tr class="bg-purple-50 text-[#652a7c]">
        <th class="p-3 border border-slate-200 font-bold">Course</th>
        <th class="p-3 border border-slate-200 font-bold">Duration</th>
        <th class="p-3 border border-slate-200 font-bold">Fee (per year)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">BA Programme</td>
        <td class="p-3 border border-slate-200">3 Years</td>
        <td class="p-3 border border-slate-200 font-bold text-[#652a7c]">₹10,120</td>
      </tr>
      <tr class="bg-slate-50/50">
        <td class="p-3 border border-slate-200 font-semibold">BA (Hons) English</td>
        <td class="p-3 border border-slate-200">3 Years</td>
        <td class="p-3 border border-slate-200 font-bold text-[#652a7c]">₹10,620</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">BA (Hons) Political Science</td>
        <td class="p-3 border border-slate-200">3 Years</td>
        <td class="p-3 border border-slate-200 font-bold text-[#652a7c]">₹10,620</td>
      </tr>
      <tr class="bg-slate-50/50">
        <td class="p-3 border border-slate-200 font-semibold">BA (Hons) Economics</td>
        <td class="p-3 border border-slate-200">3 Years</td>
        <td class="p-3 border border-slate-200 font-bold text-[#652a7c]">₹10,620</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">BCom Programme</td>
        <td class="p-3 border border-slate-200">3 Years</td>
        <td class="p-3 border border-slate-200 font-bold text-[#652a7c]">₹10,000</td>
      </tr>
      <tr class="bg-slate-50/50">
        <td class="p-3 border border-slate-200 font-semibold">BCom (Hons)</td>
        <td class="p-3 border border-slate-200">3 Years</td>
        <td class="p-3 border border-slate-200 font-bold text-[#652a7c]">₹10,620</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">BBA (FIA)</td>
        <td class="p-3 border border-slate-200">3 Years</td>
        <td class="p-3 border border-slate-200 font-bold text-[#652a7c]">₹21,120</td>
      </tr>
      <tr class="bg-slate-50/50">
        <td class="p-3 border border-slate-200 font-semibold">BMS</td>
        <td class="p-3 border border-slate-200">3 Years</td>
        <td class="p-3 border border-slate-200 font-bold text-[#652a7c]">₹21,120</td>
      </tr>
    </tbody>
  </table>
</div>
<p><em>BBA and BMS cost more than BA and BCom, so compare programmes before you decide.</em></p>

<h3>PG DUSOL Courses Fees 2026</h3>
<p>Postgraduate courses are meant for graduates who want to continue higher studies. The listed fees are:</p>

<div class="overflow-x-auto my-6">
  <table class="w-full border-collapse border border-slate-200 text-left text-sm">
    <thead>
      <tr class="bg-purple-50 text-[#652a7c]">
        <th class="p-3 border border-slate-200 font-bold">Course</th>
        <th class="p-3 border border-slate-200 font-bold">Duration</th>
        <th class="p-3 border border-slate-200 font-bold">Fee (per year)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">MA Hindi</td>
        <td class="p-3 border border-slate-200">2 Years</td>
        <td class="p-3 border border-slate-200 font-bold text-[#652a7c]">₹9,070</td>
      </tr>
      <tr class="bg-slate-50/50">
        <td class="p-3 border border-slate-200 font-semibold">MA History</td>
        <td class="p-3 border border-slate-200">2 Years</td>
        <td class="p-3 border border-slate-200 font-bold text-[#652a7c]">₹9,070</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">MA Political Science</td>
        <td class="p-3 border border-slate-200">2 Years</td>
        <td class="p-3 border border-slate-200 font-bold text-[#652a7c]">₹9,070</td>
      </tr>
      <tr class="bg-slate-50/50">
        <td class="p-3 border border-slate-200 font-semibold">MCom</td>
        <td class="p-3 border border-slate-200">2 Years</td>
        <td class="p-3 border border-slate-200 font-bold text-[#652a7c]">₹9,970</td>
      </tr>
    </tbody>
  </table>
</div>
<p><em>Fees for MBA, MLIS, and other postgraduate programmes appear on their own programme pages, so check those before applying.</em></p>

<h3>UG &amp; PG Fees at a Glance</h3>
<p>Now, if you compare the Course fees of DUSOL Courses fees from top to bottom, here is the trend. And, the thing is the majority of UG Courses is costing around 10,000 to 10,620 whereas BBA and BMS would be costing 21,120. And, PG Courses that are shown here as of the list are a little bit cheap which is around 9,070 to 9,970.</p>

<h3>Registration Fees</h3>
<p>In addition to the course fees, a registration fee is payable at the time of applying:</p>

<div class="overflow-x-auto my-6">
  <table class="w-full border-collapse border border-slate-200 text-left text-sm">
    <thead>
      <tr class="bg-purple-50 text-[#652a7c]">
        <th class="p-3 border border-slate-200 font-bold">Category</th>
        <th class="p-3 border border-slate-200 font-bold">Registration Fee</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">General / OBC / EWS</td>
        <td class="p-3 border border-slate-200 font-bold text-[#652a7c]">₹500</td>
      </tr>
      <tr class="bg-slate-50/50">
        <td class="p-3 border border-slate-200 font-semibold">SC / ST</td>
        <td class="p-3 border border-slate-200 font-bold text-[#652a7c]">₹300</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Why DU SOL Fee Is Low</h3>
<p>The DUSOL Courses Fees are kept affordable due to various reasons. No class is held daily and most of the study material is digital which means learners are free of hostel, travel and relocation expenses. Students can also earn and study, which reduces the overall cost of a degree.</p>

<h3>What Does the Fee Include?</h3>
<p>The COURSES Fees of DUSOL include tuition fees, examination, study material and university charges, and there are few indirect Charges to be paid, still check with the university regarding the particular items that are payable like examination fees for each paper.</p>

<h3>Do the Fees Change Every Year?</h3>
<p>DUSOL Courses Fees might be updated according to the university updates on the annual basis. A figure that applied last session might be revised this session, so treat any list, including this one, as a guide and confirm the final amount on the official website.</p>

<h3>How to Pay</h3>
<p><strong>DUSOL Courses Fees – Category wise final payment amount:</strong> Before submission of DUSOL Courses Fees, candidates should verify the final amount to be paid according to their category. The DUSOL Courses Fees are available to pay online at <a href="https://sol.du.ac.in" target="_blank" rel="noopener noreferrer" class="text-[#652a7c] font-bold underline">sol.du.ac.in</a> website. Make payment directly to the university and never transfer money to agents or any third parties.</p>

<h3>Budgeting Tips for Planning</h3>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li>Compare the DUSOL Courses Fees List of two or three programmes before choosing.</li>
  <li>Include registration and examination fees in the annual course fees.</li>
  <li>Check the official website for revised fees every session.</li>
  <li>Set aside some savings for books, internet and travel to exam centres.</li>
</ul>

<h3>Frequently Asked Questions</h3>
<div class="space-y-4 my-6">
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <h4 class="font-bold text-slate-900 mb-1">1. What are the DUSOL Courses Fees for 2026?</h4>
    <p class="text-slate-700">UG level is as cheap as about ₹10,000 to ₹21,120 annually and the PG courses mentioned above are ₹9,070 to ₹9,970.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <h4 class="font-bold text-slate-900 mb-1">2. What is the most expensive course?</h4>
    <p class="text-slate-700">BBA (FIA) and BMS are the highest priced UG courses at ₹21,120 per year.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <h4 class="font-bold text-slate-900 mb-1">3. What is the registration fee?</h4>
    <p class="text-slate-700">₹500 for General/OBC/EWS candidates, and ₹300 for SC/ST candidates.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <h4 class="font-bold text-slate-900 mb-1">4. Where can I check the latest DUSOL Courses Fees List?</h4>
    <p class="text-slate-700">This is based on the official DU SOL website as fees are subject to change every session.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <h4 class="font-bold text-slate-900 mb-1">5. Is online payment of fees allowed?</h4>
    <p class="text-slate-700">Yes, via the official admission portal. Only pay to the university.</p>
  </div>
</div>

<h3>Conclusion</h3>
<p>The DUSOL Courses Fees provide an affordable option for those aspiring to obtain a Delhi University education with students from all over India. With the DUSOL Courses Fees view, you can use the DUSOL Courses Fees List to compare programs, budget, and confidently apply. Charges are subject to change so check the official site for the most recent rates prior to submitting an application. Get free counseling if you are unsure about a course.</p>`;

async function updateCoursesFees() {
  const commonData = {
    title: "DUSOL Courses Fees List 2026: UG and PG Fees, Registration Charges",
    summary: "Check the DUSOL Courses Fees List 2026: UG and PG course fees, registration charges and payment tips for Delhi University School of Open Learning.",
    content: coursesFeesHtmlContent,
    category: "Course Fees",
    externalLink: "https://sol.du.ac.in",
    quickSteps: [
      "Compare the DUSOL Courses Fees List of two or three programmes before choosing.",
      "Check the official portal (sol.du.ac.in) for active session registration charges.",
      "Log in to the student portal and review category-wise fee details before payment.",
      "Pay the fee directly through the official university payment gateway.",
      "Download and save the official fee receipt and payment acknowledgment.",
    ],
    status: "published" as const,
    seoTitle: "DUSOL Courses Fees List 2026: UG & PG Fees",
    seoDescription: "Check the DUSOL Courses Fees List 2026: UG and PG course fees, registration charges and payment tips for Delhi University School of Open Learning.",
    updatedAt: new Date().toISOString(),
  };

  // 1. Update Student Zone doc 'courses-fees' (accessed at /student-zone/courses-fees)
  const szRef = db.collection("studentZone").doc("courses-fees");
  await szRef.set(
    {
      id: "courses-fees",
      slug: "courses-fees",
      createdAt: new Date().toISOString(),
      ...commonData,
    },
    { merge: true }
  );
  console.log("✅ Successfully updated studentZone 'courses-fees' (/student-zone/courses-fees)");

  // 2. Also update Blogs collection 'dusol-courses-fees-list-2026' (/blogs/dusol-courses-fees-list-2026)
  const blogRef = db.collection("blogs").doc("dusol-courses-fees-list-2026");
  await blogRef.set(
    {
      id: "dusol-courses-fees-list-2026",
      slug: "dusol-courses-fees-list-2026",
      title: commonData.title,
      excerpt: commonData.summary,
      content: commonData.content,
      category: "Course Fees",
      tags: ["DU SOL Fees", "DUSOL Courses Fees", "UG Fees", "PG Fees", "BBA Fees", "BMS Fees", "Delhi University"],
      author: "DU SOL Editorial Team",
      status: "published",
      isPublished: true,
      seoTitle: commonData.seoTitle,
      seoDescription: commonData.seoDescription,
      seoKeywords: "DUSOL Courses Fees List 2026, DU SOL fees, UG fees, PG fees, BA fees, BCom fees, BBA fees, registration fee DU SOL",
      createdAt: new Date().toISOString(),
      publishedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    { merge: true }
  );
  console.log("✅ Successfully updated blog 'dusol-courses-fees-list-2026' (/blogs/dusol-courses-fees-list-2026)");
}

updateCoursesFees().catch(console.error);
