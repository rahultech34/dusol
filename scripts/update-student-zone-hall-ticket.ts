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

export const hallTicketHtmlContent = `<h2>DU SOL Hall Ticket: How to Download, Details and Important Instructions</h2>
<p>An exam itself is stressful enough without having to worry about your papers. So the first thing you need before you hit the exam hall is your <strong>DU SOL Hall Ticket</strong>. Because if you don't have it on the day of your exam you might not even be able to give your paper. DU SOL students often have questions like where do I find it, when does it release and what if it is wrong. We've answered all of that in simple steps so you won't have to worry and can focus on studying.</p>

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
        <td class="p-3 border border-slate-200 font-semibold">Document Name</td>
        <td class="p-3 border border-slate-200">DU SOL Hall Ticket / Examination Admit Card</td>
      </tr>
      <tr class="bg-slate-50/50">
        <td class="p-3 border border-slate-200 font-semibold">Issuing Authority</td>
        <td class="p-3 border border-slate-200">School of Open Learning, University of Delhi (DU SOL)</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">Applicable Courses</td>
        <td class="p-3 border border-slate-200">All UG &amp; PG Programmes (BA, B.Com, BBA, BMS, MA, M.Com, MBA, etc.)</td>
      </tr>
      <tr class="bg-slate-50/50">
        <td class="p-3 border border-slate-200 font-semibold">Release Timeline</td>
        <td class="p-3 border border-slate-200">7 to 10 days prior to commencement of semester/annual exams</td>
      </tr>
      <tr>
        <td class="p-3 border border-slate-200 font-semibold">Login Credentials Needed</td>
        <td class="p-3 border border-slate-200">SOL Roll Number, Date of Birth (DD/MM/YYYY), Student Name</td>
      </tr>
      <tr class="bg-slate-50/50">
        <td class="p-3 border border-slate-200 font-semibold">Official Download Portal</td>
        <td class="p-3 border border-slate-200"><a href="https://sol.du.ac.in" target="_blank" rel="noopener noreferrer" class="text-[#652a7c] font-bold underline">sol.du.ac.in</a></td>
      </tr>
    </tbody>
  </table>
</div>

<h3>What Is DU SOL Hall Ticket?</h3>
<p>The DU SOL Hall Ticket or admit card is an official document of the School of Open Learning, University of Delhi that states the participation of a candidate in the examination. The Hall Ticket verifies a student's candidature and consists of essential personal information, exam timetable, and examination centre address. You need to keep it safely for all the semester or yearly exams, as it is a mandatory document.</p>

<h3>Why Is the Delhi University SOL Hall Ticket Important?</h3>
<p>The invigilator verifies the DU SOL Hall Ticket at the entry gate, while you also need to present a government photo ID that matches the details mentioned in the Hall Ticket. It specifies your exact exam date, time, and venue, helping you reach the exam centre without any last-moment hassle. If there is any mistake or if you do not carry it, you might not be allowed to take the exam.</p>

<p><strong>Key benefits of the hall ticket:</strong></p>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li><strong>Proves your identity and registration:</strong> Authenticates your enrollment with Delhi University.</li>
  <li><strong>Shows your exam date, time and centre:</strong> Gives exact schedule details for every enrolled paper.</li>
  <li><strong>Avoids confusion on exam day:</strong> Eliminates doubt regarding shifts, timings, and allocated venues.</li>
  <li><strong>Works as a reference for exam rules:</strong> Lists critical code-of-conduct guidelines and prohibited items.</li>
</ul>

<h3>Details Mentioned on the DU SOL Hall Ticket</h3>
<p>Check every line as soon as you download it. A typical DU SOL Hall Ticket includes:</p>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li>Student name and photograph</li>
  <li>SOL Roll number and university enrolment details</li>
  <li>Course name and semester or academic year</li>
  <li>Subject names, paper codes, with exam dates and reporting timings</li>
  <li>Allocated exam centre name, centre code, and complete address</li>
  <li>Instructions and guidelines for candidates</li>
</ul>
<p><em>If any detail looks wrong or mismatched, contact the SOL examination branch right away instead of waiting for exam day.</em></p>

<h3>How to Download DU SOL Hall Ticket</h3>
<p>Follow these simple steps to download your admit card online:</p>
<ol class="list-decimal pl-6 space-y-2 my-3">
  <li>Visit the official SOL website of the University of Delhi (<a href="https://sol.du.ac.in" target="_blank" rel="noopener noreferrer" class="text-[#652a7c] font-bold underline">sol.du.ac.in</a>).</li>
  <li>Open the examination or admit card / hall ticket section on the homepage or student dashboard.</li>
  <li>Log in with the details asked, such as your SOL roll number, student name, and date of birth.</li>
  <li>Select your course and active semester or academic year.</li>
  <li>Check your details on screen carefully, ensuring your subjects and personal data are correct.</li>
  <li>Download the PDF and take a clear, high-resolution printout.</li>
</ol>
<p>For direct access, portal links, and latest circulars, visit the <a href="/student-zone/hall-ticket" class="text-[#652a7c] font-bold underline">DU SOL Hall Ticket Portal Guide</a>.</p>

<h3>Documents to Carry on Exam Day</h3>
<p>Make sure you have all mandatory documents packed before leaving for the examination centre:</p>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li><strong>Printed copy of your hall ticket:</strong> A clean physical printout (color or crisp black &amp; white).</li>
  <li><strong>Valid photo ID card:</strong> Your official DU SOL student identity card, Aadhaar Card, Voter ID, or Passport.</li>
  <li><strong>Basic stationery:</strong> Blue/black ballpoint pens, pencils, and permitted instruments allowed by exam rules.</li>
  <li><strong>Spare photographs:</strong> A spare passport-size photograph, if the instructions on your hall ticket require it.</li>
</ul>

<h3>What If You Can't Download the DU SOL Hall Ticket?</h3>
<p>It happens. Maybe the site's slow, your login fails, or your admit card has not been generated yet. Don't panic. Try these troubleshooting steps:</p>
<ul class="list-disc pl-6 space-y-2 my-3">
  <li><strong>Wait a few hours and try again:</strong> Examination portals experience heavy traffic spikes right after hall tickets are released.</li>
  <li><strong>Use another browser or clear the cache:</strong> Chrome Incognito or Mozilla Firefox often resolves cached session errors.</li>
  <li><strong>Double-check your credentials:</strong> Re-verify your roll number, course selection, and date of birth format.</li>
  <li><strong>Confirm fee submission:</strong> Ensure that your examination form and requisite exam fees were submitted and acknowledged.</li>
  <li><strong>Contact the SOL examination branch:</strong> Visit the North or South regional campus help desk with your fee receipt and registration proof.</li>
</ul>
<p>Most problems stem from typographical entry errors or pending examination fee confirmations, so verify those first. If your exam date is approaching fast, reach out to the university office immediately.</p>

<h3>Important Instructions for Exam Day</h3>
<p>Arrive at the centre well in time (at least 45 to 60 minutes before the scheduled reporting time) with your DU SOL Hall Ticket and photo ID. Carry your Hall Ticket with you and follow the guidelines written on the sheet. Ensure that you do not bring mobile phones, smartwatches, calculators, or other electronic gadgets into the exam hall unless explicitly permitted. Read all instructions on the admit card thoroughly, as rules may vary between theory and practical papers.</p>

<h3>Tips to Avoid Last-Minute Trouble</h3>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-[#652a7c] mb-1">Download Promptly</div>
    <p class="text-sm text-slate-600">Download your hall ticket as soon as the official notification is issued to avoid last-minute server congestion.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-[#652a7c] mb-1">Backup Digitally</div>
    <p class="text-sm text-slate-600">Save a digital PDF copy on your phone, Google Drive, and email for instant access anytime.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-[#652a7c] mb-1">Print Two Copies</div>
    <p class="text-sm text-slate-600">Always print at least two hard copies so you have a spare if one gets damaged or misplaced.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <div class="font-bold text-[#652a7c] mb-1">Recon the Centre</div>
    <p class="text-sm text-slate-600">Locate the exam centre venue a day in advance to plan your travel route and avoid transit delays.</p>
  </div>
</div>
<p>A little preparation makes exam day far calmer. Treat your Delhi University SOL Hall Ticket the way you'd treat a flight ticket: check it early, verify every detail, and never leave downloading for the morning of the exam.</p>

<h3>Frequently Asked Questions</h3>
<div class="space-y-4 my-6">
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <h4 class="font-bold text-slate-900 mb-1">When is the DU SOL Hall Ticket released?</h4>
    <p class="text-slate-700">It usually comes out a few days or weeks before the exams commence (typically 7 to 10 days in advance). Always watch the official notifications on sol.du.ac.in.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <h4 class="font-bold text-slate-900 mb-1">Can I take the exam without the DU SOL Hall Ticket?</h4>
    <p class="text-slate-700">In most cases, absolutely no. You must present the physical hall ticket along with a valid government photo ID card to enter the examination hall.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <h4 class="font-bold text-slate-900 mb-1">Is the Delhi University SOL Hall Ticket free to download?</h4>
    <p class="text-slate-700">Yes, downloading the admit card from the official DU SOL website is completely free. Beware of unauthorized third-party sites asking for fees.</p>
  </div>
  <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
    <h4 class="font-bold text-slate-900 mb-1">What if my details are wrong on the hall ticket?</h4>
    <p class="text-slate-700">Contact the DU SOL examination branch immediately with your fee receipt, admission acknowledgment, and identity proof so discrepancies can be corrected before your exam starts.</p>
  </div>
</div>

<h3>Conclusion</h3>
<p>Your DU SOL Hall Ticket is a small card that holds enormous significance. Download it in advance, verify all personal and subject details, and bring a clean printout along with your identity card on exam day. If anything seems incorrect, resolve it early with the university helpline or examination branch. Stay relaxed, prepare well, and walk into your examination hall with confidence.</p>`;

async function updateHallTicket() {
  const commonData = {
    title: "DU SOL Hall Ticket: How to Download, Details and Important Instructions",
    summary: "Learn how to download the DU SOL Hall Ticket, check details, fix errors and prepare for exam day with this simple Delhi University SOL Hall Ticket guide.",
    content: hallTicketHtmlContent,
    category: "Hall Ticket",
    externalLink: "https://sol.du.ac.in",
    quickSteps: [
      "Visit the official SOL website (sol.du.ac.in) and navigate to the Examination / Hall Ticket portal.",
      "Enter your DU SOL Roll Number, Date of Birth, and registered Student Name.",
      "Select your degree course and semester or annual examination cycle.",
      "Carefully check your subject list, examination dates, and allocated exam centre.",
      "Download the PDF admit card and take at least 2 clear printouts for exam day.",
    ],
    status: "published" as const,
    seoTitle: "DU SOL Hall Ticket: Download Steps and Details",
    seoDescription: "Learn how to download the DU SOL Hall Ticket, check details, fix errors and prepare for exam day with this simple Delhi University SOL Hall Ticket guide.",
    updatedAt: new Date().toISOString(),
  };

  // 1. Update Student Zone doc 'hall-ticket' (accessed at /student-zone/hall-ticket)
  const szRef = db.collection("studentZone").doc("hall-ticket");
  await szRef.set(
    {
      id: "hall-ticket",
      slug: "hall-ticket",
      createdAt: new Date().toISOString(),
      ...commonData,
    },
    { merge: true }
  );
  console.log("✅ Successfully updated studentZone 'hall-ticket' (/student-zone/hall-ticket)");

  // 2. Also publish in Blogs collection 'du-sol-hall-ticket' (/blogs/du-sol-hall-ticket)
  const blogRef = db.collection("blogs").doc("du-sol-hall-ticket");
  await blogRef.set(
    {
      id: "du-sol-hall-ticket",
      slug: "du-sol-hall-ticket",
      title: commonData.title,
      excerpt: commonData.summary,
      content: commonData.content,
      category: "Examinations",
      tags: ["DU SOL Hall Ticket", "DU SOL Admit Card", "Delhi University", "SOL Exam", "Admit Card Download"],
      author: "DU SOL Editorial Team",
      status: "published",
      isPublished: true,
      seoTitle: commonData.seoTitle,
      seoDescription: commonData.seoDescription,
      seoKeywords: "DU SOL Hall Ticket, DU SOL Admit Card, Download DU SOL Hall Ticket, Delhi University SOL Exam, SOL Admit Card 2026",
      createdAt: new Date().toISOString(),
      publishedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    { merge: true }
  );
  console.log("✅ Successfully updated blog 'du-sol-hall-ticket' (/blogs/du-sol-hall-ticket)");
}

updateHallTicket().catch(console.error);
