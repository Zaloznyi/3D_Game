document.addEventListener("DOMContentLoaded", function () {
  const toggleStepButtons = document.querySelectorAll(".toggle-step");
  toggleStepButtons.forEach((button) => {
    const dataStep = button.getAttribute("data-step");

    button.addEventListener("click", () => {
      const steps = document.querySelectorAll(".step");
      steps.forEach((step) => {
        step.classList.remove("active");
      });
      document.getElementById(`${dataStep}`).classList.add("active");
    });
  });

  function startGame() {
    alert("Game is starting!");
  }
});
