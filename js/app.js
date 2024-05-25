const assignRoleOverlay = document.getElementById("assign-overlay");
const backdropOverlayElement = document.getElementById("backdrop");

const openAssignRoleBtn = document.getElementById("assign-btn");
const closeAssignRoleBtn = document.querySelector(".mclose");

openAssignRoleBtn.addEventListener("click", openAssignRole);
closeAssignRoleBtn.addEventListener("click", closeAssignRole);

backdropOverlayElement.addEventListener("click", () => {
  backdropOverlayElement.style.display = "none";
  assignRoleOverlay.style.display = "none";
});
