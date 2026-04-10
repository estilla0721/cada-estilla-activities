function updateDashboard() {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const activities = JSON.parse(localStorage.getItem("activities")) || [];

  // Count employees by status
  let active=0, permanent=0, temporary=0, separated=0;
  employees.forEach(emp=>{
    if(emp.status==="Active") active++;
    if(emp.status==="Permanent") permanent++;
    if(emp.status==="Temporary") temporary++;
    if(emp.status==="Separated") separated++;
  });

  // Update dashboard numbers
  document.getElementById("activeCount").innerText = active;
  document.getElementById("permanentCount").innerText = permanent;
  document.getElementById("temporaryCount").innerText = temporary;
  document.getElementById("separatedCount").innerText = separated;

  // Update recent activities (last 5)
  const tbody = document.getElementById("activityTable");
  tbody.innerHTML = "";
  activities.slice(-5).reverse().forEach((act, i)=>{
    tbody.innerHTML += `
      <tr>
        <td>${i+1}</td>
        <td>${act.action}</td>
        <td>${act.name}</td>
        <td>${act.date}</td>
      </tr>`;
  });
}

// Initial load
updateDashboard();

// Optional: auto-refresh every 2 seconds so dashboard reflects changes instantly
setInterval(updateDashboard, 2000);

// Navbar highlight
const path = window.location.pathname.split("/").pop();
if(path === "dashboard.html") document.getElementById("nav-dashboard").classList.add("active-link");
if(path === "employee_list.html") document.getElementById("nav-employees").classList.add("active-link");

// Logout
document.getElementById("logoutBtn").addEventListener("click", e=>{
  e.preventDefault();
  if(confirm("Are you sure you want to log out?")) window.location.href="login.html";
});