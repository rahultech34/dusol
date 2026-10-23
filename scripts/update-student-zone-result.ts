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

export const resultHtmlContent = `<h2>DU SOL Result: How to Check, Download and Understand Your Marks</h2>
<p>The wait after exams can feel longer than the exams themselves. Once the papers are done, every student wants one thing: the <strong>DU SOL Result</strong>. Whether you're in an undergraduate (UG) or postgraduate (PG) course, knowing when and how to check your marks saves a lot of stress. This guide explains how to check your result, what to do after it, and how to track your DU SOL Result Status without confusion.</p>

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
        <td class="p-3 border border-slate-200 font-semibold">Document / Outcome</td>
        <td class="p-3 border border-slate-200">DU SOL Semester / Annual Examination Result &amp; Statement of Marks</td>
      </tr>
      <tr class="bg-slate-50/50">
        <td class="p-3 border border-slate-200 font-semibold">Issuing Authority</td>
        <td class="p-3 border border-slate-200">Examination Wing, University of Delhi &amp; School of Open Learning</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">Covered Courses</td>
        <td class="p-3 border border-slate-200">BA, B.Com, BBA, BMS, MA, M.Com, MBA, MLIS, etc.</td>
      </tr>
      <tr class="bg-slate-50/50">
        <td class="p-3 border border-slate-200 font-semibold">Declaration Cycles</td>
        <td class="p-3 border border-slate-200">Odd Semesters (Nov/Dec Exams) &amp; Even Semesters (May/June Exams)</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">Required Login Credentials</td>
        <td class="p-3 border border-slate-200">College Name ("School of Open Learning"), Exam Roll Number, Date of Birth</td>
      </tr>
      <tr class="bg-slate-50/50">
        <td class="p-3 border border-slate-200 font-semibold">Official Result Portals</td>
        <td class="p-3 border border-slate-200"><a href="https://sol.du.ac.in" target="_blank" rel="noopener noreferrer" class="text-[#652a7c] font-bold underline">sol.du.ac.in</a> / <a href="https://durslt.du.ac.in" target="_blank" rel="noopener noreferrer" class="text-[#652a7c] font-bold underline">durslt.du.ac.in</a></td>
      </tr>
    </tbody>
  </table>
</div>

<h3>What Is DU SOL Result?</h3>
<p>The DU SOL Result is the official evaluation statement of your performance in the semester or annual examinations conducted by the School of Open Learning, University of Delhi. It is published course-wise and semester-wise, indicating your passing status, paper-by-paper credits, letter grades, SGPA (Semester Grade Point Average), and CGPA (Cumulative Grade Point Average). The online result is your primary documentation needed to track academic progression, enroll in subsequent semesters, or apply for internships and higher education.</p>

<h3>How to Check DU SOL Result Online</h3>
<p>Follow these 6 simple steps to check and download your digital scorecard:</p>
<ol class="list-decimal pl-6 space-y-2 my-3">
  <li>Visit the official SOL result portal (<a href="https://sol.du.ac.in" target="_blank" rel="noopener noreferrer" class="text-[#652a7c] font-bold underline">sol.du.ac.in</a> or the Samarth examination portal).</li>
  <li>Navigate to the <strong>Examination</strong> or <strong>Marksheet / Result</strong> section.</li>
  <li>Select your College Name as <em>"School of Open Learning"</em> (or <em>"School of Open Learning - Male / Female"</em> if categorized).</li>
  <li>Enter your Examination Roll Number, Session, and Date of Birth as recorded on your admit card.</li>
  <li>Solve the image Captcha code and click on the <strong>Print Score Card / View Result</strong> button.</li>
  <li>Review your paper-wise grades on screen, download the PDF marksheet, and print multiple physical copies.</li>
</ol>
<p>For quick access and direct server links, visit the <a href="/student-zone/result" class="text-[#652a7c] font-bold underline">DU SOL Result &amp; Marksheet Portal</a>.</p>

<h3>Details Mentioned in the DU SOL Result</h3>
<p>Examine your digital scorecard thoroughly to confirm accuracy across all fields:</p>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li>Candidate's Full Name, Father's Name, and Mother's Name</li>
  <li>University Examination Roll Number &amp; SOL Enrolment Number</li>
  <li>Degree Program, Academic Year, and Semester Cycle</li>
  <li>Unique Paper Codes (UPC) and corresponding Subject Titles</li>
  <li>Credit points, Maximum Marks, and Grade Points scored per paper</li>
  <li>Semester Grade Point Average (SGPA) and Cumulative GPA (CGPA)</li>
  <li>Qualifying Remark: <strong>Passed</strong>, <strong>Essential Repeat (ER)</strong>, or <strong>Promoted</strong></li>
</ul>
<p><em>If any personal detail, missing subject, or typographical error appears on your scorecard, report it to the DU SOL examination branch promptly.</em></p>

<h3>Understanding DU SOL Result Status &amp; Common Remarks</h3>
<p>Many students search for DU SOL Result Status because marks might not appear immediately, or a specific abbreviation may appear in place of grades. Here is what they signify:</p>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-emerald-700 mb-1">Declared / Passed</div>
    <p class="text-sm text-slate-600">Your examination sheets are verified and grades are published. You have met minimum qualifying standards and are cleared for the semester.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-amber-700 mb-1">Awaited / In Process</div>
    <p class="text-sm text-slate-600">The evaluation for your specific department or paper is ongoing and will go live in an upcoming staggered release cycle.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-purple-700 mb-1">Withheld (WH / RA / AB)</div>
    <p class="text-sm text-slate-600">Marks are temporarily withheld due to administrative verification, attendance discrepancies, or missing assignment scores.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-rose-700 mb-1">Essential Repeat (ER) / Reappear</div>
    <p class="text-sm text-slate-600">You did not achieve minimum passing marks in that specific paper. You are promoted to the next semester but must reappear for that paper in the matching semester exam.</p>
  </div>
</div>

<h3>What to Do After the DU SOL Result</h3>
<p>Once your scorecard is accessible, take these proactive measures:</p>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li><strong>Save and Backup:</strong> Download the official PDF score card immediately and keep digital copies on Google Drive.</li>
  <li><strong>Grade Verification:</strong> Compare the marks obtained against your self-assessed estimates.</li>
  <li><strong>Rechecking / Revaluation:</strong> If you believe your papers were improperly scored, apply for Rechecking (retotalling) or Revaluation (fresh evaluation) within the strict 15-day application window announced by the university.</li>
  <li><strong>Reappear Strategy:</strong> If marked with an <em>Essential Repeat (ER)</em>, add the subject to your upcoming examination form and prepare alongside your new semester coursework.</li>
  <li><strong>Collect Official Marksheet:</strong> Ensure you obtain the verified digital or physical consolidated marksheet once released by the university.</li>
</ul>

<h3>Marksheet and Provisional Certificate</h3>
<p>The online web result is primarily for provisional notification. The digitally signed university marksheet with official QR code is issued subsequently through the Samarth student portal. Upon completing all semesters of your undergraduate or postgraduate course, you will also receive your <strong>Provisional Degree Certificate</strong>, which serves as authentic proof of graduation until the convocation ceremony.</p>

<h3>Common Problems While Checking DU SOL Result</h3>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li><strong>Website Not Loading:</strong> Severe server bottlenecks occur within the first 1-2 hours of announcement. Wait 30-60 minutes or use private/incognito browsing.</li>
  <li><strong>Roll Number Not Found:</strong> Double check that you are selecting <em>"School of Open Learning"</em> as the college name, and verify that you entered the examination roll number rather than the library card number.</li>
  <li><strong>Name or Marks Mismatch:</strong> If your internal assessment or theory marks are missing, submit a written query to the DU SOL Evaluation Centre with your admit card and fee receipt.</li>
  <li><strong>Result Not Shown:</strong> Remember that DU SOL declares results in batches by department; keep an eye on official notifications for your course.</li>
</ul>

<h3>Why Results Sometimes Take Time</h3>
<p>Distance education examinations at Delhi University cater to several hundred thousand students across diverse disciplines. Tens of thousands of subjective answer booklets must undergo physical scanning, double evaluation, moderation, internal assessment compilation, and database indexing. Consequently, result publications are staggered, with smaller postgraduate or honours courses often appearing before massive B.A. Programme batches. Don't worry if other streams are announced first; your result will appear as soon as your batch evaluation concludes.</p>

<h3>Tips for Students</h3>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li>Keep your examination roll number, admit card, and student portal credentials securely documented.</li>
  <li>Never share confidential student login passwords on unverified third-party websites or telegram bots claiming early result leaks.</li>
  <li>Always monitor authentic updates exclusively on the official domain: <a href="https://sol.du.ac.in" target="_blank" rel="noopener noreferrer" class="text-[#652a7c] font-bold underline">sol.du.ac.in</a>.</li>
  <li>Begin your preparation for the next semester right away without waiting for marksheet issuance.</li>
</ul>

<h3>Frequently Asked Questions</h3>
<div class="space-y-4 my-6">
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <h4 class="font-bold text-slate-900 mb-1">When will the DU SOL Result be declared?</h4>
    <p class="text-slate-700">Results are typically announced 4 to 8 weeks following the conclusion of semester examinations. Odd semester results roll out between February and April, while even semester results appear between July and September.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <h4 class="font-bold text-slate-900 mb-1">Can I check DU SOL Result Status with my roll number?</h4>
    <p class="text-slate-700">Yes. You need your official Examination Roll Number, College Name ("School of Open Learning"), and Date of Birth to access your scorecard.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <h4 class="font-bold text-slate-900 mb-1">Is the online DU SOL Result final?</h4>
    <p class="text-slate-700">The online result serves as immediate provisional notification. The digitally signed statement of marks downloaded via the Samarth student portal represents the official university record.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <h4 class="font-bold text-slate-900 mb-1">What if I am not happy with my DU SOL Result?</h4>
    <p class="text-slate-700">You can apply online for rechecking (retotalling of marks) or revaluation (re-evaluation by another examiner) within 15 days of result declaration by paying the university prescribed fees.</p>
  </div>
</div>

<h3>Conclusion</h3>
<p>Your DU SOL Result represents an important milestone toward your degree and professional career. Access your scorecard exclusively via the official university server, preserve multiple digital and physical copies, and monitor your DU SOL Result Status if your batch is awaiting moderation. Stay calm, plan your academic timeline, and proceed with confidence into your next semester.</p>`;

async function updateResult() {
  const commonData = {
    title: "DU SOL Result: How to Check, Download and Understand Your Marks",
    summary: "Check your DU SOL Result online, understand DU SOL Result Status and learn what to do next with this simple School of Open Learning result guide.",
    content: resultHtmlContent,
    category: "Examination Result",
    externalLink: "https://sol.du.ac.in",
    quickSteps: [
      "Open the official DU SOL result portal (sol.du.ac.in or durslt.du.ac.in).",
      "Select 'School of Open Learning' as your college name.",
      "Enter your Examination Roll Number and Date of Birth exactly as on your admit card.",
      "Solve the security captcha and click 'Print Score Card'.",
      "Save your digital scorecard PDF and check your SGPA / CGPA grades.",
    ],
    status: "published" as const,
    seoTitle: "DU SOL Result: Check Online, Status and Marksheet",
    seoDescription: "Check your DU SOL Result online, understand DU SOL Result Status and learn what to do next with this simple School of Open Learning result guide.",
    updatedAt: new Date().toISOString(),
  };

  // 1. Update Student Zone doc 'result' (accessed at /student-zone/result)
  const szRef = db.collection("studentZone").doc("result");
  await szRef.set(
    {
      id: "result",
      slug: "result",
      createdAt: new Date().toISOString(),
      ...commonData,
    },
    { merge: true }
  );
  console.log("✅ Successfully updated studentZone 'result' (/student-zone/result)");

  // 2. Also publish in Blogs collection 'du-sol-result' (/blogs/du-sol-result)
  const blogRef = db.collection("blogs").doc("du-sol-result");
  await blogRef.set(
    {
      id: "du-sol-result",
      slug: "du-sol-result",
      title: commonData.title,
      excerpt: commonData.summary,
      content: commonData.content,
      category: "Examinations",
      tags: ["DU SOL Result", "DU SOL Scorecard", "Delhi University Marksheet", "SOL Result Status", "DU SOL Revaluation"],
      author: "DU SOL Editorial Team",
      status: "published",
      isPublished: true,
      seoTitle: commonData.seoTitle,
      seoDescription: commonData.seoDescription,
      seoKeywords: "DU SOL Result, DU SOL Result Status, Check DU SOL Result, School of Open Learning Marksheet, DU SOL Score Card",
      createdAt: new Date().toISOString(),
      publishedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    { merge: true }
  );
  console.log("✅ Successfully updated blog 'du-sol-result' (/blogs/du-sol-result)");
}

updateResult().catch(console.error);
