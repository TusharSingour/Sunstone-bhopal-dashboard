
  function toggleSidebar() {
    const sidebar = document.getElementById("mySidebar");

    if (sidebar.classList.contains("active")) {
      sidebar.classList.remove("active");
    } else {
      sidebar.classList.add("active");
    }
  }

function playReel(wrapper) {
  const video = wrapper.querySelector("video");
  const overlay = wrapper.querySelector(".play-overlay");

  if (video.paused) {
    video.play();
    overlay.style.opacity = "0";
  } else {
    video.pause();
    overlay.style.opacity = "1";
  }
}

