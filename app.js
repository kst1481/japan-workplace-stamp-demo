document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("stamp-form");
  const positionSelect = document.getElementById("position");
  const employeeNameInput = document.getElementById("employeeName");
  const departmentInput = document.getElementById("department");
  const employeeIdInput = document.getElementById("employeeId");
  const sealStyleSelect = document.getElementById("sealStyle");
  const stamp = document.getElementById("stamp");
  const rotationLabel = document.getElementById("rotationLabel");

  const previewName = document.getElementById("previewName");
  const previewPosition = document.getElementById("previewPosition");
  const previewDepartment = document.getElementById("previewDepartment");
  const previewId = document.getElementById("previewId");

  const rotationByPosition = {
    President: -30,
    "Executive Director": -24,
    "General Manager": -18,
    Director: -15,
    Manager: -12,
    "Senior Staff": -7,
    Staff: -3,
  };

  function updateSealPreview() {
    const name = employeeNameInput.value.trim() || "Employee Name";
    const position = positionSelect.value;
    const department = departmentInput.value.trim() || "Department";
    const employeeId = employeeIdInput.value.trim() || "ID";
    const sealStyle = sealStyleSelect.value;

    const angle = rotationByPosition[position] ?? -6;
    stamp.style.setProperty("--seal-rotation", `${angle}deg`);
    rotationLabel.textContent = `${angle}°`;

    previewName.textContent = name;
    previewPosition.textContent = position;
    previewDepartment.textContent = department;
    previewId.textContent = employeeId;

    stamp.classList.remove("seal-official", "seal-compact", "seal-traditional");
    stamp.classList.add(`seal-${sealStyle}`);
  }

  positionSelect.addEventListener("change", updateSealPreview);
  employeeNameInput.addEventListener("input", updateSealPreview);
  departmentInput.addEventListener("input", updateSealPreview);
  employeeIdInput.addEventListener("input", updateSealPreview);
  sealStyleSelect.addEventListener("change", updateSealPreview);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    updateSealPreview();
  });

  document.getElementById("sampleBtn").addEventListener("click", () => {
    employeeNameInput.value = "Mori Akira";
    positionSelect.value = "General Manager";
    departmentInput.value = "Sales";
    employeeIdInput.value = "SL-118";
    sealStyleSelect.value = "official";
    updateSealPreview();
  });

  updateSealPreview();
});
