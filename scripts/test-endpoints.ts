async function testEndpoints() {
  const baseUrl = "http://localhost:3000";

  console.log("Testing endpoints on", baseUrl);

  // 1. Test Public Student Zone Page
  try {
    const res = await fetch(`${baseUrl}/student-zone`);
    console.log(`[Public] /student-zone -> Status: ${res.status}`);
  } catch (e: any) {
    console.log(`[Public] /student-zone -> Error: ${e.message}`);
  }

  // 2. Test Public Student Zone Detail Page
  try {
    const res = await fetch(`${baseUrl}/student-zone/admission`);
    console.log(`[Public] /student-zone/admission -> Status: ${res.status}`);
  } catch (e: any) {
    console.log(`[Public] /student-zone/admission -> Error: ${e.message}`);
  }

  // 3. Test Public Courses Page for MBA Specialization
  try {
    const res = await fetch(`${baseUrl}/courses/mba-information-technology`);
    console.log(`[Public] /courses/mba-information-technology -> Status: ${res.status}`);
  } catch (e: any) {
    console.log(`[Public] /courses/mba-information-technology -> Error: ${e.message}`);
  }

  // 4. Test Admin Login and authenticated API endpoints
  try {
    const loginRes = await fetch(`${baseUrl}/api/admin/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "admin@distanceeducation.com", password: "admin123" }),
    });
    console.log(`[Auth] /api/admin/auth/login -> Status: ${loginRes.status}`);
    const cookie = loginRes.headers.get("set-cookie") || "";

    if (loginRes.ok) {
      // Test MBA Specializations API
      const mbaRes = await fetch(`${baseUrl}/api/admin/programs?type=mba`, {
        headers: { Cookie: cookie },
      });
      const mbaData = await mbaRes.json();
      console.log(`[Admin API] /api/admin/programs?type=mba -> Status: ${mbaRes.status}, Count: ${mbaData.programs?.length}`);

      // Test Student Zone API
      const szRes = await fetch(`${baseUrl}/api/admin/student-zone`, {
        headers: { Cookie: cookie },
      });
      const szData = await szRes.json();
      console.log(`[Admin API] /api/admin/student-zone -> Status: ${szRes.status}, Count: ${szData.items?.length}`);

      // Test Admin MBA page
      const adminMbaPage = await fetch(`${baseUrl}/admin/mba-specializations`, {
        headers: { Cookie: cookie },
      });
      console.log(`[Admin Page] /admin/mba-specializations -> Status: ${adminMbaPage.status}`);

      // Test Admin Student Zone page
      const adminSzPage = await fetch(`${baseUrl}/admin/student-zone`, {
        headers: { Cookie: cookie },
      });
      console.log(`[Admin Page] /admin/student-zone -> Status: ${adminSzPage.status}`);

      // Test Admin Dashboard page
      const adminDashboard = await fetch(`${baseUrl}/admin/dashboard`, {
        headers: { Cookie: cookie },
      });
      console.log(`[Admin Page] /admin/dashboard -> Status: ${adminDashboard.status}`);
    }
  } catch (e: any) {
    console.log(`[Auth/Admin] Error: ${e.message}`);
  }
}

testEndpoints();
