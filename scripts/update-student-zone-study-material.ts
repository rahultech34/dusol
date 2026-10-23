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

export const studyMaterialHtmlContent = `<h2>DU SOL Study Material: Where to Find It and How to Use It Well</h2>
<p>If you're studying through the School of Open Learning, your books are your classroom. There's no daily lecture to fall back on, so good reading material matters a lot. That's why <strong>DU SOL Study Material</strong> is one of the most searched topics among SOL students. Where do you get it? Is it enough to pass? And what else can help? This guide answers those questions and shows you how to use DU SOL Resources the smart way.</p>

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
        <td class="p-3 border border-slate-200 font-semibold">Resource Type</td>
        <td class="p-3 border border-slate-200">Official Syllabus, E-Books, Unit Lessons, Audio/Video Lectures</td>
      </tr>
      <tr class="bg-slate-50/50">
        <td class="p-3 border border-slate-200 font-semibold">Issuing Authority</td>
        <td class="p-3 border border-slate-200">School of Open Learning, University of Delhi (DU SOL)</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">Available Formats</td>
        <td class="p-3 border border-slate-200">Free PDF e-books online, optional printed booklets at regional centres</td>
      </tr>
      <tr class="bg-slate-50/50">
        <td class="p-3 border border-slate-200 font-semibold">Medium of Instruction</td>
        <td class="p-3 border border-slate-200">English &amp; Hindi (bilingual for major Arts/Commerce courses)</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">Access Cost</td>
        <td class="p-3 border border-slate-200"><span class="text-emerald-700 font-bold">100% Free</span> for all enrolled students</td>
      </tr>
      <tr class="bg-slate-50/50">
        <td class="p-3 border border-slate-200 font-semibold">Official Download Portal</td>
        <td class="p-3 border border-slate-200"><a href="https://sol.du.ac.in" target="_blank" rel="noopener noreferrer" class="text-[#652a7c] font-bold underline">sol.du.ac.in</a></td>
      </tr>
    </tbody>
  </table>
</div>

<h3>What Is DU SOL Study Material?</h3>
<p>DU SOL Study Material is the curriculum learning content prepared by the School of Open Learning, University of Delhi, specifically for its distance students. It's organized by course, semester or year, and individual paper codes. The content covers each unit of the syllabus in simple, accessible language, often complete with illustrative examples, self-assessment questions, and practice exercises. SOL publishes it as free e-content on its official website, and printed hard copies have historically been distributed to students choosing print delivery during registration.</p>

<h3>Types of DU SOL Resources</h3>
<p>Study material is only one part of the learning journey. DU SOL Resources include several supplementary academic tools that work seamlessly together:</p>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-[#652a7c] mb-1">E-Books &amp; PDF Lessons</div>
    <p class="text-sm text-slate-600">Chapter-wise PDF downloads covering every syllabus unit, accessible 24/7 on mobile, tablet, or laptop.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-[#652a7c] mb-1">Video Lectures &amp; Recordings</div>
    <p class="text-sm text-slate-600">Recorded sessions and audio explanations delivered by DU faculty for difficult concepts.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-[#652a7c] mb-1">Previous Year Question Papers</div>
    <p class="text-sm text-slate-600">Past 5-10 years question papers showcasing repeated patterns and marking weightage.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-[#652a7c] mb-1">Contact Classes &amp; Counselling</div>
    <p class="text-sm text-slate-600">Weekend Personal Contact Programmes (PCP) conducted at designated study centres across Delhi.</p>
  </div>
</div>

<h3>How to Download DU SOL Study Material</h3>
<p>Follow these quick steps to download your study material directly from the official portal:</p>
<ol class="list-decimal pl-6 space-y-2 my-3">
  <li>Visit the official SOL website of the University of Delhi (<a href="https://sol.du.ac.in" target="_blank" rel="noopener noreferrer" class="text-[#652a7c] font-bold underline">sol.du.ac.in</a>).</li>
  <li>Open the <strong>Study Material</strong> or <strong>e-Content (CBCS / UGCF)</strong> section on the homepage.</li>
  <li>Choose your degree programme (Undergraduate or Postgraduate) and select your course.</li>
  <li>Select your specific semester or academic year and the desired paper/subject.</li>
  <li>Download the chapter-wise or full-book PDF and save it securely on your device.</li>
</ol>
<p>For direct access, syllabus catalogues, and download links, visit the <a href="/student-zone/study-material" class="text-[#652a7c] font-bold underline">DU SOL Study Material Portal Guide</a>.</p>

<h3>Why DU SOL Study Material Matters for Exams</h3>
<p>Examination question papers are formulated directly from the university's prescribed syllabus, and the official SOL material is authored by the same faculty and academic committees. That's why preparation from DU SOL Study Material is the single safest bet to score top marks in your semester exams. Studying it unit-by-unit ensures you understand the concepts exactly in the style DU examiners evaluate, learning the exact academic terminology, case references, and definitions that university evaluators reward.</p>

<h3>How to Use DU SOL Resources Effectively</h3>
<p>Having hundreds of pages of material isn't the same as studying effectively. Try this structured approach:</p>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li><strong>Make a weekly study plan, unit by unit:</strong> Break down large syllabi into weekly manageable milestones.</li>
  <li><strong>Read first, then write short notes:</strong> Summarize core themes in your own words for rapid last-minute revision.</li>
  <li><strong>Solve previous year papers after each unit:</strong> Validate your comprehension with real questions from past exam sessions.</li>
  <li><strong>Revise with summary sheets or flashcards:</strong> Keep key formulas, dates, constitutional articles, or business laws readily accessible.</li>
  <li><strong>Ask teachers or peers when you get stuck:</strong> Utilize weekend PCP contact sessions or online student study groups.</li>
</ul>
<p><em>Small, regular study sessions beat last-week cramming every single time.</em></p>

<h3>Common Problems and Easy Fixes</h3>
<p>Students occasionally encounter technical hiccups when accessing online files:</p>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li><strong>Link not opening:</strong> Try another modern browser (Chrome / Edge / Firefox) or open via Incognito mode.</li>
  <li><strong>Old edition downloaded:</strong> Verify the academic session and syllabus scheme (e.g. NEP UGCF 2022+ vs legacy CBCS) printed on the front cover.</li>
  <li><strong>Material not matching your paper:</strong> Confirm your exact course code and chosen elective specialization in your student dashboard.</li>
  <li><strong>Slow download speeds:</strong> Server load can be high during exam season; switch to a stable connection or download during off-peak morning hours.</li>
</ul>
<p>If problems persist, contact the SOL help desk or visit the North/South study centre for physical collection. Many students also leverage video lecture recordings to clear challenging topics rapidly.</p>

<h3>Tips to Get the Most from DU SOL Study Material</h3>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li><strong>Download everything early:</strong> Save all unit PDFs for your upcoming semester right at the beginning of classes.</li>
  <li><strong>Organize folders:</strong> Create dedicated folders categorized by subject code so you never scramble for files.</li>
  <li><strong>Annotate &amp; highlight:</strong> Use PDF highlighter tools to mark keywords, statutory sections, and summary tables.</li>
  <li><strong>Monitor official notices:</strong> Check the SOL notification board periodically for revised syllabus units and errata sheets.</li>
</ul>

<h3>Do You Need Extra Books?</h3>
<p>For the vast majority of papers, the SOL study material provides comprehensive coverage sufficient to secure high grades. However, supplemental reading can add value if you desire deeper analytical insight or are concurrently preparing for competitive exams like UPSC, UGC NET, or CAT.</p>
<p>Use standard reference textbooks only for specific modules you find difficult. Do not overwhelm yourself by purchasing expensive books on day one. Evaluate what you need after your first read-through of the official SOL content.</p>

<h3>How Often Is the Content Updated?</h3>
<p>Delhi University periodically updates its curricula to align with updated academic frameworks. Always make sure the documents you download reflect your current admission batch and unique paper code. If you saved files from a prior year, spend two minutes comparing the unit index on the official portal to ensure no new modules or case studies have been introduced.</p>

<h3>Frequently Asked Questions</h3>
<div class="space-y-4 my-6">
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <h4 class="font-bold text-slate-900 mb-1">Is DU SOL Study Material free?</h4>
    <p class="text-slate-700">Yes! SOL provides its e-study material 100% free of charge to all enrolled students via its official website. Always avoid unauthorized portals asking for payment.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <h4 class="font-bold text-slate-900 mb-1">Is DU SOL Study Material available in Hindi?</h4>
    <p class="text-slate-700">Yes. Most BA, B.Com, and MA humanities and social science courses provide separate Hindi and English medium PDFs. Check the e-content section for language toggles.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <h4 class="font-bold text-slate-900 mb-1">Where can I find DU SOL Resources like past papers?</h4>
    <p class="text-slate-700">Visit the examination and e-content archive on sol.du.ac.in, or consult university library portals and peer study networks for past question papers.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <h4 class="font-bold text-slate-900 mb-1">Can I study only from the DU SOL Study Material?</h4>
    <p class="text-slate-700">For most university examinations, yes. The official material is directly aligned with the syllabus. Pairing it with past 5-year question papers ensures complete preparation.</p>
  </div>
</div>

<h3>Conclusion</h3>
<p>Good preparation begins with the right content. Download your DU SOL Study Material early, organize your digital files by subject, and pair unit readings with past papers and revision notes. Staying consistent with regular study habits ensures semester exams feel manageable, straightforward, and rewarding.</p>`;

async function updateStudyMaterial() {
  const commonData = {
    title: "DU SOL Study Material: Where to Find It and How to Use It Well",
    summary: "Find and download DU SOL Study Material, explore DU SOL Resources and learn simple ways to prepare for your School of Open Learning exams.",
    content: studyMaterialHtmlContent,
    category: "Study Material",
    externalLink: "https://sol.du.ac.in",
    quickSteps: [
      "Visit the official SOL website (sol.du.ac.in) and click on the Study Material / e-Content section.",
      "Select your degree level (Undergraduate or Postgraduate) and pick your course.",
      "Choose your semester / academic year and corresponding paper code.",
      "Download unit-wise or full book PDFs to your computer or mobile device.",
      "Review sample exercises and past exam papers for complete syllabus readiness.",
    ],
    status: "published" as const,
    seoTitle: "DU SOL Study Material: Download and Study Guide",
    seoDescription: "Find and download DU SOL Study Material, explore DU SOL Resources and learn simple ways to prepare for your School of Open Learning exams.",
    updatedAt: new Date().toISOString(),
  };

  // 1. Update Student Zone doc 'study-material' (accessed at /student-zone/study-material)
  const szRef = db.collection("studentZone").doc("study-material");
  await szRef.set(
    {
      id: "study-material",
      slug: "study-material",
      createdAt: new Date().toISOString(),
      ...commonData,
    },
    { merge: true }
  );
  console.log("✅ Successfully updated studentZone 'study-material' (/student-zone/study-material)");

  // 2. Also publish in Blogs collection 'du-sol-study-material' (/blogs/du-sol-study-material)
  const blogRef = db.collection("blogs").doc("du-sol-study-material");
  await blogRef.set(
    {
      id: "du-sol-study-material",
      slug: "du-sol-study-material",
      title: commonData.title,
      excerpt: commonData.summary,
      content: commonData.content,
      category: "Study Resources",
      tags: ["DU SOL Study Material", "DU SOL Books", "Delhi University SOL", "SOL E-Content", "Study Guide"],
      author: "DU SOL Editorial Team",
      status: "published",
      isPublished: true,
      seoTitle: commonData.seoTitle,
      seoDescription: commonData.seoDescription,
      seoKeywords: "DU SOL Study Material, DU SOL Resources, Download DU SOL books, SOL e-content, Delhi University distance study material",
      createdAt: new Date().toISOString(),
      publishedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    { merge: true }
  );
  console.log("✅ Successfully updated blog 'du-sol-study-material' (/blogs/du-sol-study-material)");
}

updateStudyMaterial().catch(console.error);
