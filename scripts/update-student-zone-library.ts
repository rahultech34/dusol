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

export const libraryHtmlContent = `<h2>DU SOL Library: Access, Services and How Students Can Use It</h2>
<p>Books are not always enough. If it's a tough subject or an assignment requires something extra, a strong library can be a transformative help. And this is where the <strong>DU SOL Library</strong> takes the leap. The Library of the School of Open Learning caters to the educational and research needs of DU SOL students through provision of textbooks, reference books, periodicals, and learning aids; many of which can be seamlessly accessed online via the <strong>DU SOL Library Portal</strong>.</p>

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
        <td class="p-3 border border-slate-200 font-semibold">Facility Name</td>
        <td class="p-3 border border-slate-200">DU SOL Central &amp; Regional Study Centre Libraries</td>
      </tr>
      <tr class="bg-slate-50/50">
        <td class="p-3 border border-slate-200 font-semibold">Governing Body</td>
        <td class="p-3 border border-slate-200">School of Open Learning, University of Delhi (DU SOL)</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">Primary Locations</td>
        <td class="p-3 border border-slate-200">North Campus (5, Cavalry Lines) &amp; South Campus (Moti Bagh)</td>
      </tr>
      <tr class="bg-slate-50/50">
        <td class="p-3 border border-slate-200 font-semibold">Available Resources</td>
        <td class="p-3 border border-slate-200">Curriculum Textbooks, Reference Handbooks, Print Periodicals, E-Journals, OPAC</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">Entry Requirement</td>
        <td class="p-3 border border-slate-200">Valid DU SOL Student Identity Card (with barcode) &amp; Fee Receipt</td>
      </tr>
      <tr class="bg-slate-50/50">
        <td class="p-3 border border-slate-200 font-semibold">Digital Access Portal</td>
        <td class="p-3 border border-slate-200"><a href="https://sol.du.ac.in" target="_blank" rel="noopener noreferrer" class="text-[#652a7c] font-bold underline">sol.du.ac.in</a> / DULS Network</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>What Is DU SOL Library?</h3>
<p>The DU SOL Library is the dedicated academic library system for students of the School of Open Learning, University of Delhi. The primary objective of the DU SOL Library is to extend robust, open-access learning infrastructure to distance students beyond their standard study material booklets. The open learning library services encompass comprehensive reference works, curriculum textbooks, national and international journals, competitive magazines, and subscription e-Resources, in accordance with Delhi University Library System regulations.</p>

<h3>Services Offered by DU SOL Library</h3>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-[#652a7c] mb-1">Textbook &amp; Reference Lending</div>
    <p class="text-sm text-slate-600">Extensive collections of prescribed curriculum textbooks and reference literature for all UG and PG subjects.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-[#652a7c] mb-1">Journals &amp; Periodicals</div>
    <p class="text-sm text-slate-600">Leading academic research journals, weekly magazines, business digests, and national daily newspapers.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-[#652a7c] mb-1">E-Books &amp; Digital Databases</div>
    <p class="text-sm text-slate-600">Online e-content, digital repositories, research papers, and scholarly e-journals accessible through university portals.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-[#652a7c] mb-1">Spacious Reading Rooms</div>
    <p class="text-sm text-slate-600">Quiet, climate-controlled study halls offering a dedicated distraction-free environment for exam preparation.</p>
  </div>
</div>
<p><em>In addition to reading facilities, knowledgeable library staff provide reference assistance in locating rare editions, catalogued manuscripts, and archival syllabi.</em></p>

<h3>What Is DU SOL Library Portal?</h3>
<p>The DU SOL Library Portal is your 24/7 digital gateway to catalogue search (OPAC), digital databases, e-book archives, and official library circulars. Rather than commuting to the physical campus every time you need to check book availability, you can search the web catalogue, explore reserve holdings, identify call numbers, and read subscription journals right from home. For working professionals and outstation learners, the DU SOL Library Portal is often the most convenient and practical way to study.</p>

<h3>How to Access DU SOL Library Portal</h3>
<ol class="list-decimal pl-6 space-y-2 my-3">
  <li>Visit the official SOL website (<a href="https://sol.du.ac.in" target="_blank" rel="noopener noreferrer" class="text-[#652a7c] font-bold underline">sol.du.ac.in</a>) or navigate to the dedicated library section.</li>
  <li>Locate the <strong>Library Portal / E-Resources / Web OPAC</strong> navigation link.</li>
  <li>Sign in or register your account using your official SOL Roll Number, barcode, and registered date of birth.</li>
  <li>Search the catalogue by Title, Author, Keyword, ISBN, or Subject Paper Code.</li>
  <li>View shelf location details or open and download digital resources when open-access licensing permits.</li>
</ol>
<p>For direct access, portal instructions, and digital library guides, visit the <a href="/student-zone/library-portal" class="text-[#652a7c] font-bold underline">DU SOL Library Portal Guide</a>.</p>

<h3>Eligibility &amp; Membership for DU SOL Library</h3>
<p>Generally, all currently enrolled DU SOL students with a valid Student Identity Card are eligible to use the reading room facilities at both the North Campus and South Campus locations. Some borrowing privileges require a physical library membership card, which can be generated at the library counter upon submitting your active session fee receipt. Borrowing rules, loan durations, and renewal privileges may differ between undergraduate and postgraduate scholars. Confirm current timings and active library policies with the library counter staff before scheduling your visit.</p>

<h3>Advantages of Using the DU SOL Library</h3>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li><strong>Beyond Basic Study Notes:</strong> Explore diverse academic perspectives and detailed commentary not covered in standard study booklets.</li>
  <li><strong>Academic Project &amp; Assignment Depth:</strong> Source peer-reviewed citations, case precedents, and empirical data for assignments.</li>
  <li><strong>Quiet, Focused Atmosphere:</strong> Take advantage of quiet reading halls during intensive exam seasons.</li>
  <li><strong>Digital Resources from Anywhere:</strong> Access peer-reviewed academic content from home via the online portal.</li>
  <li><strong>Research &amp; Competitive Exam Edge:</strong> Access extensive collections for competitive examinations like UGC NET, civil services, and banking.</li>
</ul>

<h3>Tips for Utilizing the DU SOL Library Smartly</h3>
<p>One-time visits right before exams will not yield maximum results. Establish an organized habit:</p>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li><strong>Jot down themes in advance:</strong> List specific chapters and conceptual gaps before entering the library.</li>
  <li><strong>Use Web OPAC for rapid searches:</strong> Search call numbers and shelf bays ahead of time to minimize browsing delays.</li>
  <li><strong>Record bibliographic details:</strong> Keep a running record of author names, book titles, editions, and page numbers for accurate footnotes.</li>
  <li><strong>Consult reference librarians:</strong> Ask the library desk for expert recommendations on the most authoritative texts for your subject.</li>
  <li><strong>Integrate multiple sources:</strong> Combine your core SOL study booklet with one authoritative reference textbook for top exam scores.</li>
</ul>

<h3>Common Problems and Easy Fixes</h3>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li><strong>Portal Not Loading:</strong> Switch to a different browser (Chrome or Firefox) or clear your browser cache and cookies.</li>
  <li><strong>Login Credentials Rejected:</strong> Double check that your enrolment number matches the exact format printed on your SOL identity card.</li>
  <li><strong>Book Out of Stock:</strong> Inquire with library staff about reservation holds or ask for recommended alternative editions on the same subject.</li>
  <li><strong>Digital Database Access Denied:</strong> Ensure you are routed through the official university proxy or campus network when accessing restricted e-journal databases.</li>
</ul>

<h3>Advice for Distance Students</h3>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li>Always verify working hours and public holiday schedules before commuting.</li>
  <li>Keep your physical DU SOL Student ID card prominently displayed at all times on campus.</li>
  <li>Maintain a digital reference notebook on your smartphone or cloud drive.</li>
  <li>Check book due dates diligently and return or renew borrowed titles promptly to avoid overdue fines.</li>
</ul>

<h3>Digital Resources You Can Browse</h3>
<p>Online access to academic journals and digital databases has revolutionized remote learning. E-books allow keyword-searchable browsing in seconds, while scholarly journals deliver the latest research developments even before traditional textbooks are updated. Students also have access to open-source thesis repositories (Shodhganga), university question paper archives, and national e-libraries (National Digital Library of India - NDLI). When citing digital sources in your project assignments, always record the permanent DOI or URL to ensure rigorous academic referencing.</p>

<h3>Library Rules and Common Courtesy</h3>
<p>All visitors are requested to respect library etiquette to foster an inspiring environment for everyone:</p>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li>Keep mobile phones on silent or airplane mode within all reading halls.</li>
  <li>Strictly avoid eating or drinking near physical volumes and computing terminals.</li>
  <li>Handle all books with care; do not mark, highlight, or dog-ear pages.</li>
  <li>Return borrowed volumes on or before the due date stamped on the book slip.</li>
  <li>Maintain absolute silence and mutual respect during high-pressure examination periods.</li>
</ul>

<h3>Frequently Asked Questions</h3>
<div class="space-y-4 my-6">
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <h4 class="font-bold text-slate-900 mb-1">Who has access to the DU SOL Library?</h4>
    <p class="text-slate-700">All registered undergraduate and postgraduate students of DU SOL with an active student ID card can access the physical reading halls and library facilities.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <h4 class="font-bold text-slate-900 mb-1">Is the DU SOL Library Portal accessible from home?</h4>
    <p class="text-slate-700">Yes! Enrolled students can browse the Web OPAC catalogue, explore digital reading lists, and access select e-resources remotely through the official website.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <h4 class="font-bold text-slate-900 mb-1">Does DU SOL Library lend books for home reading?</h4>
    <p class="text-slate-700">Yes, enrolled students who obtain a library lending card can borrow specified textbooks for home reading as per university circulation limits.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <h4 class="font-bold text-slate-900 mb-1">Do I need to pay any extra fees to use the DU SOL Library?</h4>
    <p class="text-slate-700">No additional fee is charged for standard library reading and portal access, as library maintenance is covered under your regular annual university tuition charges.</p>
  </div>
</div>

<h3>Conclusion</h3>
<p>The DU SOL Library is a quiet yet potent catalyst for every distance learner. Whether you visit the physical reading rooms in North or South Campus or log into the DU SOL Library Portal from home, routine use will enrich your understanding, elevate your assignments, and empower your examination preparation. Keep your student ID handy, explore the digital catalogue, and unlock the wealth of knowledge available at Delhi University.</p>`;

async function updateLibrary() {
  const commonData = {
    title: "DU SOL Library: Access, Services and How Students Can Use It",
    summary: "Explore DU SOL Library services, learn how to use the DU SOL Library Portal and make the most of books and digital resources as an SOL student.",
    content: libraryHtmlContent,
    category: "Library Services",
    externalLink: "https://sol.du.ac.in",
    quickSteps: [
      "Visit the official SOL website (sol.du.ac.in) and navigate to the Library / E-Resources portal.",
      "Carry your active DU SOL Student ID Card and fee receipt for reading room access.",
      "Search the online Web OPAC catalogue by subject, author, title, or paper code.",
      "Access digital e-books, research journals, and previous question papers online.",
      "Follow library code of conduct and return borrowed volumes on time.",
    ],
    status: "published" as const,
    seoTitle: "DU SOL Library: Services, Portal and Access Guide",
    seoDescription: "Explore DU SOL Library services, learn how to use the DU SOL Library Portal and make the most of books and digital resources as an SOL student.",
    updatedAt: new Date().toISOString(),
  };

  // 1. Update Student Zone doc 'library-portal' (accessed at /student-zone/library-portal)
  const szRef = db.collection("studentZone").doc("library-portal");
  await szRef.set(
    {
      id: "library-portal",
      slug: "library-portal",
      createdAt: new Date().toISOString(),
      ...commonData,
    },
    { merge: true }
  );
  console.log("✅ Successfully updated studentZone 'library-portal' (/student-zone/library-portal)");

  // 2. Also publish in Blogs collection 'du-sol-library' (/blogs/du-sol-library)
  const blogRef = db.collection("blogs").doc("du-sol-library");
  await blogRef.set(
    {
      id: "du-sol-library",
      slug: "du-sol-library",
      title: commonData.title,
      excerpt: commonData.summary,
      content: commonData.content,
      category: "Campus & Student Life",
      tags: ["DU SOL Library", "DU SOL Library Portal", "Delhi University Library", "SOL E-Resources", "Distance Learning Library"],
      author: "DU SOL Editorial Team",
      status: "published",
      isPublished: true,
      seoTitle: commonData.seoTitle,
      seoDescription: commonData.seoDescription,
      seoKeywords: "DU SOL Library, DU SOL Library Portal, Delhi University SOL books, SOL e-library, DU SOL reading room",
      createdAt: new Date().toISOString(),
      publishedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    { merge: true }
  );
  console.log("✅ Successfully updated blog 'du-sol-library' (/blogs/du-sol-library)");
}

updateLibrary().catch(console.error);
