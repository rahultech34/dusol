import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import fs from "fs";
import path from "path";

const keyPath = path.join(process.cwd(), "firebase-key.json");
if (!fs.existsSync(keyPath)) {
  console.error("firebase-key.json not found!");
  process.exit(1);
}

const serviceAccount = JSON.parse(fs.readFileSync(keyPath, "utf8"));
if (getApps().length === 0) {
  initializeApp({ credential: cert(serviceAccount) });
}

const db = getFirestore();

async function seedMBAAndStudentZone() {
  console.log("🌱 Seeding MBA Specializations and Student Zone data into Firebase...");

  // 1. MBA Specializations (9 items from navbar)
  const mbaSpecializations = [
    {
      id: "mba-information-technology",
      name: "MBA in Information Technology",
      slug: "mba-information-technology",
      type: "mba",
      degree: "Master of Business Administration (MBA - IT)",
      duration: "2 Years (4 Semesters)",
      overview: "Comprehensive distance MBA specialization focusing on enterprise IT management, cybersecurity policies, cloud strategy, and software architectures.",
      description: "The MBA in Information Technology from DU SOL prepares future CTOs, IT consultants, and product leads with skills in emerging digital technologies, systems analysis, and enterprise IT governance.",
      eligibility: "Bachelor's degree in any discipline with a minimum of 50% aggregate marks from a recognized university.",
      admissionProcess: "Direct online application through the official DU SOL admission portal based on graduation merit.",
      curriculum: [
        { semesterOrYear: "Semester 1", subjects: ["Management Principles", "Managerial Economics", "Accounting for Managers", "IT for Business Decisions"] },
        { semesterOrYear: "Semester 2", subjects: ["Marketing Management", "Human Resource Strategy", "Operations & Supply Chain", "Database Management Systems"] },
        { semesterOrYear: "Semester 3", subjects: ["Cloud Computing & Big Data", "Cybersecurity & IT Law", "Enterprise Resource Planning", "Software Project Management"] },
        { semesterOrYear: "Semester 4", subjects: ["Strategic IT Management", "Digital Transformation", "Capstone IT Business Project", "Business Intelligence & AI"] },
      ],
      fees: [
        { title: "First Year Annual Tuition Fee", amount: "₹47,500", note: "Includes study material and online LMS portal" },
        { title: "Second Year Annual Fee", amount: "₹47,500", note: "Includes examination and degree processing fee" },
      ],
      careerOpportunities: ["IT Project Manager", "Chief Technology Officer", "Systems Business Analyst", "Cloud Strategy Consultant"],
      featuredImage: "",
      status: "published",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "mba-business-analytics",
      name: "MBA in Business Analytics",
      slug: "mba-business-analytics",
      type: "mba",
      degree: "Master of Business Administration (Business Analytics)",
      duration: "2 Years (4 Semesters)",
      overview: "Specialized executive MBA covering predictive modeling, Python/R statistical analysis, data visualization, and evidence-driven managerial decisions.",
      description: "Equipping management professionals with predictive analytical tools, big data frameworks, and decision sciences for high-growth corporate strategy.",
      eligibility: "Graduation with mathematics, statistics, engineering, or commerce background preferred with at least 50% marks.",
      admissionProcess: "Merit-based admission registration on DU SOL portal.",
      curriculum: [
        { semesterOrYear: "Semester 1", subjects: ["Business Statistics", "Data Warehousing", "Managerial Economics", "Organizational Dynamics"] },
        { semesterOrYear: "Semester 2", subjects: ["Data Mining & Machine Learning", "Financial Analytics", "Marketing Analytics", "Python for Decision Makers"] },
        { semesterOrYear: "Semester 3", subjects: ["Predictive Analytics", "Data Visualization (Tableau/PowerBI)", "Supply Chain Analytics", "HR Analytics"] },
        { semesterOrYear: "Semester 4", subjects: ["Strategic Data Leadership", "AI in Business Strategy", "Industry Analytical Capstone", "Ethical Governance in Big Data"] },
      ],
      fees: [
        { title: "First Year Annual Fee", amount: "₹49,000", note: "Includes virtual lab and analytics datasets" },
        { title: "Second Year Annual Fee", amount: "₹49,000", note: "Includes capstone supervision and examination" },
      ],
      careerOpportunities: ["Senior Business Analyst", "Data Analytics Manager", "Market Intelligence Consultant", "Strategy & Analytics Director"],
      featuredImage: "",
      status: "published",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "mba-hospital-administration",
      name: "MBA in Hospital Administration Management",
      slug: "mba-hospital-administration",
      type: "mba",
      degree: "Master of Business Administration (Hospital Admin)",
      duration: "2 Years (4 Semesters)",
      overview: "Healthcare management specialization preparing professionals for clinical operations, healthcare policy, hospital accreditation, and patient safety systems.",
      description: "Designed for healthcare professionals, doctors, nurses, and hospital managers looking to lead healthcare institutions and multispeciality hospital chains.",
      eligibility: "Graduation in any discipline, MBBS, BDS, B.Pharm, B.Sc Nursing, or Allied Health with 50% aggregate.",
      admissionProcess: "Online application and document verification via DU SOL.",
      curriculum: [
        { semesterOrYear: "Semester 1", subjects: ["Health Systems Overview", "Hospital Organization", "Health Economics", "Bio-Ethics & Medical Law"] },
        { semesterOrYear: "Semester 2", subjects: ["Quality in Healthcare (NABH/JCI)", "Clinical Services Management", "Epidemiology", "Hospital Finance"] },
        { semesterOrYear: "Semester 3", subjects: ["Health Information Systems", "Healthcare Supply Chain", "Disaster Management in Hospitals", "Public Health Policy"] },
        { semesterOrYear: "Semester 4", subjects: ["Strategic Hospital Management", "Hospital Capstone Project", "Patient Safety Auditing", "Telemedicine Strategy"] },
      ],
      fees: [
        { title: "First Year Fee", amount: "₹48,000", note: "Tuition and clinical case study modules" },
        { title: "Second Year Fee", amount: "₹48,000", note: "Includes viva voce and degree fee" },
      ],
      careerOpportunities: ["Hospital Superintendent", "Healthcare Operations Manager", "Quality Assurance Lead", "Health Insurance Executive"],
      featuredImage: "",
      status: "published",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "mba-international-trade",
      name: "MBA in International Trade Management",
      slug: "mba-international-trade",
      type: "mba",
      degree: "Master of Business Administration (International Trade)",
      duration: "2 Years (4 Semesters)",
      overview: "Global commerce specialization in export-import financing, customs regulations, cross-border logistics, and international trade treaties.",
      description: "Comprehensive education covering WTO frameworks, currency risk hedging, international shipping, and multi-country market entry strategies.",
      eligibility: "Recognized Bachelor degree with minimum 50% aggregate marks.",
      admissionProcess: "Direct registration on DU SOL portal.",
      curriculum: [
        { semesterOrYear: "Semester 1", subjects: ["Global Business Environment", "International Trade Policies", "Cross-Cultural Management", "Economics of Globalization"] },
        { semesterOrYear: "Semester 2", subjects: ["Export Import Documentation", "International Finance & Forex", "Global Marketing Strategy", "Customs & Freight Handling"] },
        { semesterOrYear: "Semester 3", subjects: ["International Commercial Law", "Global Supply Networks", "Trade Risk Hedging", "Emerging Markets"] },
        { semesterOrYear: "Semester 4", subjects: ["International Business Negotiations", "Foreign Trade Policy of India", "Trade Dissertation Project", "WTO Regulations"] },
      ],
      fees: [
        { title: "First Year Fee", amount: "₹46,500", note: "Full academic curriculum & materials" },
        { title: "Second Year Fee", amount: "₹46,500", note: "Second year registration & exams" },
      ],
      careerOpportunities: ["International Trade Manager", "Exim Logistics Head", "Global Supply Chain Specialist", "Trade Finance Consultant"],
      featuredImage: "",
      status: "published",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "mba-rural-management",
      name: "MBA in Rural Management",
      slug: "mba-rural-management",
      type: "mba",
      degree: "Master of Business Administration (Rural Management)",
      duration: "2 Years (4 Semesters)",
      overview: "Specialization tailored for leadership in agribusiness, microfinance institutions, cooperatives, rural banking, and rural development NGOs.",
      description: "Focused on rural marketing, agricultural supply chains, micro-credit governance, and sustainable village economy ecosystems.",
      eligibility: "Any recognized Bachelor degree with 50% marks.",
      admissionProcess: "Direct merit-based admission on DU SOL portal.",
      curriculum: [
        { semesterOrYear: "Semester 1", subjects: ["Rural Society & Economy", "Principles of Management", "Agri-Business Overview", "Rural Financial Systems"] },
        { semesterOrYear: "Semester 2", subjects: ["Rural Marketing Strategies", "Microfinance Management", "Cooperative Governance", "Commodity Trading"] },
        { semesterOrYear: "Semester 3", subjects: ["Rural Development Policies", "Agri-Supply Chain Logistics", "Livelihood Promotion", "Social Entrepreneurship"] },
        { semesterOrYear: "Semester 4", subjects: ["Rural Project Planning", "Capstone Rural Field Study", "CSR in Rural India", "Sustainable Development"] },
      ],
      fees: [
        { title: "First Year Fee", amount: "₹45,000", note: "Complete academic materials" },
        { title: "Second Year Fee", amount: "₹45,000", note: "Second year tuition and degree fee" },
      ],
      careerOpportunities: ["NABARD / RRB Banking Officer", "Agri-Business Manager", "Rural Development Consultant", "CSR Program Director"],
      featuredImage: "",
      status: "published",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "mba-retail-management",
      name: "MBA in Retail Management",
      slug: "mba-retail-management",
      type: "mba",
      degree: "Master of Business Administration (Retail Management)",
      duration: "2 Years (4 Semesters)",
      overview: "Focusing on omni-channel retail operations, visual merchandising, category management, consumer behavior, and e-commerce supply chains.",
      description: "Prepares managers for multi-brand retail chains, supermarket operations, fast-fashion retail, and rapid e-commerce expansion.",
      eligibility: "Bachelor's degree in any discipline with at least 50% aggregate marks.",
      admissionProcess: "Online application and document submission at DU SOL.",
      curriculum: [
        { semesterOrYear: "Semester 1", subjects: ["Retail Concepts & Environment", "Customer Relationship Management", "Managerial Economics", "Retail Accounting"] },
        { semesterOrYear: "Semester 2", subjects: ["Visual Merchandising & Store Design", "Category Management", "Supply Chain in Retail", "Retail Marketing"] },
        { semesterOrYear: "Semester 3", subjects: ["E-Commerce & Digital Retailing", "Retail Buyer Behavior", "Mall Management", "Pricing & Promotion Tactics"] },
        { semesterOrYear: "Semester 4", subjects: ["Omni-Channel Strategy", "Retail Analytics", "Capstone Retail Project", "Store Operations Audit"] },
      ],
      fees: [
        { title: "First Year Fee", amount: "₹46,000", note: "Includes study material and portal" },
        { title: "Second Year Fee", amount: "₹46,000", note: "Tuition and exam fees" },
      ],
      careerOpportunities: ["Retail Store Operations Manager", "Category Manager", "Merchandising Head", "E-Commerce Logistics Lead"],
      featuredImage: "",
      status: "published",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "mba-business-management",
      name: "MBA in Business Management",
      slug: "mba-business-management",
      type: "mba",
      degree: "Master of Business Administration (Business Management)",
      duration: "2 Years (4 Semesters)",
      overview: "Versatile corporate MBA program designed for leadership across general management, corporate governance, operational excellence, and strategy.",
      description: "A foundational all-round program preparing graduates to take executive roles across diverse industries, venture-backed startups, and consulting firms.",
      eligibility: "Graduate degree from a UGC-recognized university with at least 50% marks.",
      admissionProcess: "Merit based online admission through DU SOL.",
      curriculum: [
        { semesterOrYear: "Semester 1", subjects: ["Principles of Management", "Corporate Finance", "Organizational Behavior", "Business Communication"] },
        { semesterOrYear: "Semester 2", subjects: ["Strategic Management", "Operations Research", "Marketing Strategy", "Business Law & Ethics"] },
        { semesterOrYear: "Semester 3", subjects: ["International Business", "Project Portfolio Management", "Leadership in Crisis", "Digital Enterprise"] },
        { semesterOrYear: "Semester 4", subjects: ["Corporate Governance", "Mergers & Acquisitions", "Strategic Capstone Research", "Change Management"] },
      ],
      fees: [
        { title: "First Year Fee", amount: "₹47,500", note: "Annual fee with comprehensive materials" },
        { title: "Second Year Fee", amount: "₹47,500", note: "Second year tuition and convocation" },
      ],
      careerOpportunities: ["Operations Director", "Management Consultant", "General Business Manager", "Strategy Associate"],
      featuredImage: "",
      status: "published",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "mba-project-management",
      name: "MBA in Project Management",
      slug: "mba-project-management",
      type: "mba",
      degree: "Master of Business Administration (Project Management)",
      duration: "2 Years (4 Semesters)",
      overview: "Specialized in Agile/Scrum frameworks, project risk hedging, resource scheduling, critical path method, and cross-functional project governance.",
      description: "Ideal for engineers, team leads, construction managers, and consultants wanting to master PMI-aligned project management methodologies.",
      eligibility: "Bachelor's degree with 50% marks.",
      admissionProcess: "Online merit registration on DU SOL portal.",
      curriculum: [
        { semesterOrYear: "Semester 1", subjects: ["Project Management Fundamentals", "Financial Modeling", "Business Statistics", "Contract Management"] },
        { semesterOrYear: "Semester 2", subjects: ["Agile & Lean Methodologies", "Project Costing & Budgeting", "Quality Assurance", "Risk Management"] },
        { semesterOrYear: "Semester 3", subjects: ["Advanced Scheduling (CPM/PERT)", "Resource Optimization", "Procurement Management", "Stakeholder Engagement"] },
        { semesterOrYear: "Semester 4", subjects: ["Program & Portfolio Management", "PMO Setup & Governance", "Capstone Project Simulation", "Strategic Project Leadership"] },
      ],
      fees: [
        { title: "First Year Fee", amount: "₹48,500", note: "Annual academic tuition" },
        { title: "Second Year Fee", amount: "₹48,500", note: "Second year tuition and examinations" },
      ],
      careerOpportunities: ["Senior Project Manager", "PMO Lead", "Scrum Master", "Infrastructure Project Consultant"],
      featuredImage: "",
      status: "published",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "mba-marketing-management",
      name: "MBA in Marketing Management",
      slug: "mba-marketing-management",
      type: "mba",
      degree: "Master of Business Administration (Marketing)",
      duration: "2 Years (4 Semesters)",
      overview: "Specialized in digital marketing, brand management, performance marketing, consumer psychology, market research, and PR strategy.",
      description: "Prepares marketing directors, brand managers, and growth hackers with modern marketing strategies in digital and offline media.",
      eligibility: "Graduate degree with minimum 50% aggregate marks.",
      admissionProcess: "Direct online registration at DU SOL portal.",
      curriculum: [
        { semesterOrYear: "Semester 1", subjects: ["Marketing Concepts & Practice", "Consumer Behavior", "Business Communication", "Managerial Economics"] },
        { semesterOrYear: "Semester 2", subjects: ["Digital Marketing & SEO", "Brand Strategy", "Integrated Marketing Communications", "Sales & Distribution"] },
        { semesterOrYear: "Semester 3", subjects: ["Marketing Analytics", "Product Management", "Service Marketing", "International Marketing"] },
        { semesterOrYear: "Semester 4", subjects: ["Strategic Marketing Management", "Performance Marketing & Growth", "Capstone Marketing Campaign", "PR & Corporate Communications"] },
      ],
      fees: [
        { title: "First Year Fee", amount: "₹47,500", note: "Annual academic fee" },
        { title: "Second Year Fee", amount: "₹47,500", note: "Examination & degree processing fee" },
      ],
      careerOpportunities: ["Brand Manager", "Chief Marketing Officer (CMO)", "Performance Marketing Lead", "Market Research Director"],
      featuredImage: "",
      status: "published",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  for (const prog of mbaSpecializations) {
    await db.collection("mbaSpecializations").doc(prog.id).set(prog, { merge: true });
    console.log(`✅ Seeded MBA Specialization: ${prog.name}`);
  }

  // 2. Student Zone Resources (8 items from navbar)
  const studentZoneItems = [
    {
      id: "admission",
      title: "DUSOL Admission 2026 Portal & Guidance",
      slug: "admission",
      category: "Admissions",
      summary: "Complete step-by-step guide to DU SOL UG and PG online admission process, eligibility criteria, required documents, and application link.",
      externalLink: "https://sol.du.ac.in",
      quickSteps: [
        "Visit the official DU SOL admission portal at sol.du.ac.in.",
        "Click on 'New Registration' and provide your email and active mobile number.",
        "Select your desired UG or PG course and fill in 10th/12th/Graduation academic marks.",
        "Upload scanned passport size photograph, signature, and educational certificates.",
        "Pay the online annual course fee via Net Banking / UPI / Debit Card and download your Fee Receipt & Provisional Identity Card.",
      ],
      content: `<h2>DU SOL Admission 2026 Process & Important Guidelines</h2>
<p>The School of Open Learning (SOL), University of Delhi, opens online applications for Undergraduate (UG) and Postgraduate (PG) admissions for the 2026 academic year. Under the National Education Policy (NEP 2020), DU SOL offers 4-year undergraduate degree options with multiple exit/entry points.</p>
<h3>Key Highlights for 2026 Admissions:</h3>
<ul>
  <li><strong>No CUET Required:</strong> UG admissions in DU SOL do NOT require CUET (Common University Entrance Test). Admissions are granted directly on class 12th merit.</li>
  <li><strong>UGC-DEB Approved:</strong> Degrees awarded by DU SOL are identical in equivalence and value to regular Delhi University colleges.</li>
  <li><strong>Flexible Learning:</strong> Attend optional weekend academic counseling sessions at designated University study centres across Delhi NCR.</li>
</ul>
<h3>Documents Checklist:</h3>
<ul>
  <li>Class 10th and 12th passing certificates & marksheets</li>
  <li>Graduation Marksheet (for PG and MBA applicants)</li>
  <li>Scanned signature and recent passport photo</li>
  <li>Valid government Photo ID (Aadhaar Card, Passport, Voter ID)</li>
  <li>Caste / EWS / PwD Certificate (if applicable)</li>
</ul>`,
      status: "published",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "courses-fees",
      title: "DUSOL Courses & Annual Fee Structure 2026",
      slug: "courses-fees",
      category: "Course Fees",
      externalLink: "https://sol.du.ac.in",
      quickSteps: [
        "Check your course eligibility and fee chart in the official prospectus.",
        "Log in to the student portal with your SOL Roll No. and barcode.",
        "Navigate to 'Fee Details & Examination Registration' section.",
        "Complete the online payment and keep the official transaction receipt safe.",
      ],
      content: `<h2>DU SOL Annual Fee Structure Breakdown</h2>
<p>DU SOL provides quality higher education at an affordable fee structure. The annual tuition fee includes study material in printed/digital format, university development charges, and examination registration fees.</p>
<h3>UG Programs Fee Chart (Annual):</h3>
<table border="1" cellpadding="8" style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr style="background-color: #f3e8ff;">
      <th>Course Name</th>
      <th>Duration</th>
      <th>Approx. Annual Fee</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>BA Programme</td><td>3-4 Years</td><td>₹7,820 / year</td></tr>
    <tr><td>B.Com / B.Com (Hons)</td><td>3-4 Years</td><td>₹8,320 / year</td></tr>
    <tr><td>BBA / BMS</td><td>3-4 Years</td><td>₹15,200 / year</td></tr>
    <tr><td>BA (Hons) Political Science / English</td><td>3-4 Years</td><td>₹8,320 / year</td></tr>
    <tr><td>BLIS (Library Science)</td><td>1 Year</td><td>₹9,020 / year</td></tr>
  </tbody>
</table>
<br/>
<h3>PG & MBA Programs Fee Chart (Annual):</h3>
<table border="1" cellpadding="8" style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr style="background-color: #f3e8ff;">
      <th>Course Name</th>
      <th>Duration</th>
      <th>Approx. Annual Fee</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>MA (Hindi, History, Pol Science, Sanskrit)</td><td>2 Years</td><td>₹10,280 / year</td></tr>
    <tr><td>M.Com</td><td>2 Years</td><td>₹11,280 / year</td></tr>
    <tr><td>MBA (All Specializations)</td><td>2 Years</td><td>₹47,500 / year</td></tr>
    <tr><td>MLIS (Master of Library Science)</td><td>1 Year</td><td>₹10,020 / year</td></tr>
  </tbody>
</table>`,
      status: "published",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "hall-ticket",
      title: "DUSOL Hall Ticket & Examination Admit Card",
      slug: "hall-ticket",
      category: "Exams & Hall Ticket",
      externalLink: "https://sol.du.ac.in",
      quickSteps: [
        "Go to the official DU SOL website sol.du.ac.in.",
        "Click on the 'Download Hall Ticket / Admit Card' link under Announcements.",
        "Enter your SOL Roll Number (e.g. 23-1-xx-xxxxxx) and Student Barcode.",
        "Verify your personal details, exam dates, subject codes, and designated exam center.",
        "Print out 2 physical hard copies of the hall ticket along with your DU SOL ID card.",
      ],
      content: `<h2>DU SOL Hall Ticket Download Instructions</h2>
<p>The Examination Branch of the University of Delhi releases the DU SOL Admit Card / Hall Ticket approximately 7 to 10 days before the commencement of semester theory examinations. Students must carry their printed hall ticket along with a valid Government Photo ID (Aadhaar/Voter Card) and their DU SOL Student Identity Card to enter the examination center.</p>
<h3>Details Mentioned on Hall Ticket:</h3>
<ul>
  <li>Candidate's Full Name & Father's Name</li>
  <li>DU SOL Roll Number & Examination Roll Number</li>
  <li>Center Code & Complete Address of Allocated Examination College</li>
  <li>Subject Codes, Paper Titles, and Exact Examination Shift (Morning/Evening)</li>
  <li>Important Examination Code of Conduct & COVID/Disciplinary Rules</li>
</ul>`,
      status: "published",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "study-material",
      title: "DU SOL Study Material & E-Books Download",
      slug: "study-material",
      category: "Study Material",
      externalLink: "https://sol.du.ac.in",
      quickSteps: [
        "Navigate to sol.du.ac.in/content/study-materials.",
        "Select your academic stream (CBCS/LOCF or NEP 2020 UGCF).",
        "Choose your course and current semester number.",
        "Click on the subject title to download the official PDF e-book directly to your device.",
      ],
      content: `<h2>DU SOL High-Quality Study Material & Books</h2>
<p>Delhi University School of Open Learning provides comprehensive study materials authored by prominent University of Delhi faculty members. Students can either collect hardbound printed books from designated distribution centres (North/South Campus) or access free high-resolution PDF e-books 24/7 on the online portal.</p>
<h3>Study Material Distribution Centers:</h3>
<ul>
  <li><strong>North Campus Centre:</strong> 5, Cavalry Lane, Delhi University, Delhi - 110007.</li>
  <li><strong>South Study Centre:</strong> South Moti Bagh, New Delhi - 110021.</li>
  <li><strong>West Study Centre:</strong> Keshav Puram, Delhi - 110035.</li>
  <li><strong>East Study Centre:</strong> Tahirpur, Delhi - 110095.</li>
</ul>`,
      status: "published",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "result",
      title: "DUSOL Examination Result & Marksheet Portal",
      slug: "result",
      category: "Results & Marks",
      externalLink: "https://sol.du.ac.in",
      quickSteps: [
        "Open the DU SOL Exam Results Portal at sol.du.ac.in/results.",
        "Select your College Name: 'School of Open Learning'.",
        "Select Examination Session (e.g. May-June or Nov-Dec).",
        "Enter your DU Exam Roll Number and Date of Birth.",
        "Click 'Print Score Card' to generate your official digitized statement of marks.",
      ],
      content: `<h2>How to Check DU SOL Semester Examination Results</h2>
<p>Results for semester exams are published by the Delhi University Examination Branch within 45 to 60 days following the conclusion of examinations. Students can check their semester-wise CGPA, SGPA, and individual subject grades online.</p>
<h3>Understanding Result Status Codes:</h3>
<ul>
  <li><strong>P:</strong> Passed the examination successfully.</li>
  <li><strong>ER:</strong> Essential Repeat. Student must reappear in that particular subject during the next qualifying semester.</li>
  <li><strong>AB:</strong> Absent for the theory or internal examination.</li>
  <li><strong>RA:</strong> Result Awaited / under evaluation.</li>
</ul>`,
      status: "published",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "library-portal",
      title: "DU SOL Library Portal & Online E-Resources",
      slug: "library-portal",
      category: "Student Portals",
      externalLink: "https://sol.du.ac.in",
      quickSteps: [
        "Access the SOL Library gateway through sol.du.ac.in/library.",
        "Enter your Library ID card credentials or Roll Number.",
        "Search across thousands of journals, research dissertations, and DELNET databases.",
        "Read online or borrow hard-copy academic texts from the North Campus central library.",
      ],
      content: `<h2>DU SOL Library & E-Resource Access</h2>
<p>The DU SOL library system holds one of the largest specialized distance education collections in Asia, with over 3,00,000 volumes of books, reference works, journals, and thesis dissertations across disciplines.</p>
<h3>Digital Resources Available:</h3>
<ul>
  <li>National Digital Library of India (NDLI) integration</li>
  <li>JSTOR, Springer, and EBSCO academic databases access</li>
  <li>Open-access research papers and past 10 years solved university examination papers</li>
  <li>Fully air-conditioned reading halls at the North Campus main university campus</li>
</ul>`,
      status: "published",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "assignment-status",
      title: "DU SOL Assignment & Internal Assessment Portal",
      slug: "assignment-status",
      category: "Assignments & Practical",
      externalLink: "https://sol.du.ac.in",
      quickSteps: [
        "Log in to the DU SOL LMS portal with your student credentials.",
        "Go to the 'Continuous Assessment / Assignment Submission' tab.",
        "Check your uploaded assignment scores, submission receipts, and feedback.",
      ],
      content: `<h2>Internal Assessment & Assignment Submission Guidelines</h2>
<p>Under the NEP 2020 curriculum, internal assessments (IA) and continuous evaluations constitute 25% to 30% of your total semester grade. Submissions are hosted securely on the centralized DU SOL Pragati LMS portal.</p>
<h3>Important IA Tips:</h3>
<ul>
  <li>Ensure all MCQs and assignments are submitted before the announced deadline.</li>
  <li>Take a screenshot of the final submission confirmation screen for your records.</li>
  <li>Students who miss their internal assessments will receive an ER in continuous evaluation, affecting their final CGPA.</li>
</ul>`,
      status: "published",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "alternative-universities",
      title: "DUSOL Alternative Distance & Online Universities",
      slug: "alternative-universities",
      category: "General Guidance",
      externalLink: "https://sol.du.ac.in",
      quickSteps: [
        "Compare UGC-DEB recognized alternative central and state universities.",
        "Review fee structures, online examination mode, and placement support.",
        "Speak with an academic counselor for personalized admission comparison.",
      ],
      content: `<h2>Top Alternatives to DU SOL for Distance & Online Learning</h2>
<p>If you are looking for 100% online degrees with live faculty classes, proctored online examinations from home, or diverse specialized programs, several other accredited universities offer high-value degrees recognized by the UGC-DEB and AICTE.</p>
<h3>Top Recommended Universities:</h3>
<ul>
  <li><strong>IGNOU (Indira Gandhi National Open University):</strong> Central university offering hundreds of diplomas, degrees, and certificate programs across India.</li>
  <li><strong>Jamia Millia Islamia (CDOE):</strong> Prominent central university in Delhi offering accredited distance BA, B.Com, and MA courses.</li>
  <li><strong>Chandigarh University Online:</strong> NAAC A+ accredited online degrees with virtual classrooms and job placement drives.</li>
  <li><strong>Amity University Online:</strong> Premier private university with global recognition and extensive MBA specializations.</li>
  <li><strong>Manipal University Online:</strong> High-ranking university known for BCA, MCA, BBA, and MBA programs with modern learning portals.</li>
</ul>`,
      status: "published",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  for (const item of studentZoneItems) {
    await db.collection("studentZone").doc(item.id).set(item, { merge: true });
    console.log(`✅ Seeded Student Zone item: ${item.title}`);
  }

  console.log("🎉 Successfully seeded all MBA Specializations and Student Zone items!");
}

seedMBAAndStudentZone().catch((err) => {
  console.error("❌ Seeding failed:", err);
  process.exit(1);
});
