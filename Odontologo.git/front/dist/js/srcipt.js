const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close");
    const actionButtons = document.querySelectorAll(".action-btn");

    actionButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        modal.style.display = "block";
      });
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });