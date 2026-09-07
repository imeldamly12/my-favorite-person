/* ========================================
   OPEN HEART
======================================== */

function scrollToStory() {

    document.getElementById("story").scrollIntoView({
        behavior: "smooth"
    });

    // Putar musik

    const bgMusic =
        document.getElementById("bgMusic");

    const musicButton =
        document.getElementById("musicButton");


    bgMusic.play();

    musicButton.innerHTML = "🔊";

    musicButton.classList.add("playing");

}



/* ========================================
   VIDEO POPUP
======================================== */

function openVideo(video) {

    const modal =
        document.getElementById("videoModal");

    const popupVideo =
        document.getElementById("popupVideo");


    // Ambil sumber video

    const source =
        video.querySelector("source");


    // Masukkan video ke popup

    popupVideo.src = source.src;


    // Tampilkan popup

    modal.classList.add("active");


    // Mulai dari awal

    popupVideo.currentTime = 0;


    // Putar video

    popupVideo.play();

}



/* ========================================
   CLOSE VIDEO
======================================== */

function closeVideo() {

    const modal =
        document.getElementById("videoModal");

    const popupVideo =
        document.getElementById("popupVideo");


    // Hentikan video

    popupVideo.pause();


    // Hapus sumber

    popupVideo.src = "";


    // Tutup popup

    modal.classList.remove("active");

}



/* ========================================
   CLOSE DENGAN KLIK AREA GELAP
======================================== */

document
    .getElementById("videoModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeVideo();

        }

    });



/* ========================================
   CLOSE DENGAN TOMBOL ESC
======================================== */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeVideo();

    }

});