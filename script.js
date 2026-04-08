
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

function playNewsVideo(element) {
    const video = element.querySelector('video');
    
    // Check if video is paused
    if (video.paused) {
        video.play();
        element.classList.add('playing'); // Class add hogi toh button hatega
    } else {
        video.pause();
        element.classList.remove('playing'); // Class hategi toh button wapas aayega
    }
}

// Optional: Agar video apne aap khatam ho jaye, toh button wapas dikhao
document.querySelectorAll('.video-frame video').forEach(v => {
    v.onended = function() {
        this.parentElement.classList.remove('playing');
    };
});

function playP2PVideo(element) {
    const video = element.querySelector('video');
    
    if (video.paused) {
        // Baaki sabhi videos pause karne ke liye (taki ek sath do na chalein)
        document.querySelectorAll('video').forEach(v => {
            v.pause();
            v.parentElement.classList.remove('playing');
        });

        video.play();
        element.classList.add('playing');
    } else {
        video.pause();
        element.classList.remove('playing');
    }
}

// Video khatam hone par button wapas dikhane ke liye
document.querySelectorAll('.p2p-video-frame video').forEach(v => {
    v.onended = function() {
        this.parentElement.classList.remove('playing');
    };
});