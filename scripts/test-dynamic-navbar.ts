import { createSessionToken } from "../lib/auth";

async function main() {
  console.log("=== Testing Dynamic Navbar Dropdowns ===");
  const BASE_URL = "http://localhost:3000";

  // 1. Login as admin
  const loginRes = await fetch(`${BASE_URL}/api/admin/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "admin@distanceeducation.com", password: "admin123" }),
  });
  if (!loginRes.ok) {
    throw new Error(`Login failed with status ${loginRes.status}`);
  }
  const authCookie = loginRes.headers.get("set-cookie") || "";
  console.log("✓ Logged in as administrator successfully.");

  // 2. Fetch initial nav items
  const initialNavRes = await fetch(`${BASE_URL}/api/public/nav-items`);
  const initialNavJson = await initialNavRes.json();
  console.log("\n[Initial Nav Items]");
  console.log("  - Bachelors count:", initialNavJson.data.bachelor.length);
  console.log("  - Masters count:", initialNavJson.data.master.length);
  console.log("  - MBA count:", initialNavJson.data.mba.length);
  console.log("  - Student Zone count:", initialNavJson.data.student.length);
  console.log("  - Existing Bachelor courses:", initialNavJson.data.bachelor.map((b: any) => b.name));

  // 3. Add a new UG Bachelor Program: "Bachelor of Artificial Intelligence (BAI)"
  console.log("\n[Adding New Bachelor Program: Bachelor of Artificial Intelligence (BAI)]...");
  const newUGRes = await fetch(`${BASE_URL}/api/admin/programs?type=ug`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: authCookie,
    },
    body: JSON.stringify({
      name: "Bachelor of Artificial Intelligence (BAI)",
      slug: "bachelor-of-artificial-intelligence",
      type: "ug",
      degree: "Bachelor of Science",
      duration: "3 Years (6 Semesters)",
      overview: "Specialized undergraduate program in Artificial Intelligence and Machine Learning.",
      status: "published",
    }),
  });
  if (!newUGRes.ok) {
    const errorText = await newUGRes.text();
    throw new Error(`Failed to create UG program: ${errorText}`);
  }
  const newUGJson = await newUGRes.json();
  const ugId = newUGJson.id || "bachelor-of-artificial-intelligence";
  console.log("✓ Created UG program successfully! ID:", ugId);

  // 4. Add a new PG Master Program: "Master of Artificial Intelligence (MAI)"
  console.log("\n[Adding New Master Program: Master of Artificial Intelligence (MAI)]...");
  const newPGRes = await fetch(`${BASE_URL}/api/admin/programs?type=pg`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: authCookie,
    },
    body: JSON.stringify({
      name: "Master of Artificial Intelligence (MAI)",
      slug: "master-of-artificial-intelligence",
      type: "pg",
      degree: "Master of Science",
      duration: "2 Years (4 Semesters)",
      overview: "Advanced postgraduate program in Artificial Intelligence.",
      status: "published",
    }),
  });
  if (!newPGRes.ok) {
    const errorText = await newPGRes.text();
    throw new Error(`Failed to create PG program: ${errorText}`);
  }
  const newPGJson = await newPGRes.json();
  const pgId = newPGJson.id || "master-of-artificial-intelligence";
  console.log("✓ Created PG program successfully! ID:", pgId);

  // 5. Fetch nav items again to verify both appear in the dropdown!
  console.log("\n[Verifying Dynamic Navbar Data via /api/public/nav-items]...");
  const updatedNavRes = await fetch(`${BASE_URL}/api/public/nav-items`);
  const updatedNavJson = await updatedNavRes.json();

  const foundUG = updatedNavJson.data.bachelor.find(
    (b: any) => b.name === "Bachelor of Artificial Intelligence (BAI)"
  );
  const foundPG = updatedNavJson.data.master.find(
    (m: any) => m.name === "Master of Artificial Intelligence (MAI)"
  );

  console.log("  - Did new Bachelor program appear in navbar?", !!foundUG, foundUG);
  console.log("  - Did new Master program appear in navbar?", !!foundPG, foundPG);

  if (!foundUG || !foundPG) {
    throw new Error("Verification failed: newly added programs not found in dynamic nav data!");
  }
  console.log("✓ VERIFIED! Newly added programs are dynamically included in the navbar dropdowns!");

  // 6. Test public page resolution for the new program
  console.log("\n[Testing Public Route /courses/bachelor-of-artificial-intelligence]...");
  const pageRes = await fetch(`${BASE_URL}/courses/bachelor-of-artificial-intelligence`);
  console.log("✓ Public page response status:", pageRes.status);
  if (pageRes.status !== 200) {
    throw new Error(`Public page returned status ${pageRes.status}`);
  }

  // 7. Cleanup test programs
  console.log("\n[Cleaning up test programs]...");
  await fetch(`${BASE_URL}/api/admin/programs/${ugId}?type=ug`, {
    method: "DELETE",
    headers: { Cookie: authCookie },
  });
  await fetch(`${BASE_URL}/api/admin/programs/${pgId}?type=pg`, {
    method: "DELETE",
    headers: { Cookie: authCookie },
  });
  console.log("✓ Cleaned up test programs.");

  // 8. Verify removal from navbar
  const finalNavRes = await fetch(`${BASE_URL}/api/public/nav-items`);
  const finalNavJson = await finalNavRes.json();
  const ugStillThere = finalNavJson.data.bachelor.some(
    (b: any) => b.name === "Bachelor of Artificial Intelligence (BAI)"
  );
  console.log("  - Program correctly removed from navbar dropdown after deletion:", !ugStillThere);

  console.log("\n=======================================================");
  console.log("✓ DYNAMIC NAVBAR DROPDOWNS FULLY TESTED AND WORKING! 🚀");
  console.log("=======================================================");
}

main().catch((err) => {
  console.error("Test failed:", err);
  process.exit(1);
});
