simplyCountdown(".simply-countdown", {
    year: 2030, // required
    month: 11, // required
    day: 1, // required
    hours: 8, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: {
      //words displayed into the countdown
      days: { singular: "Hari", plural: "Hari" },
      hours: { singular: "Jam", plural: "Jam" },
      minutes: { singular: "Menit", plural: "Menit" },
      seconds: { singular: "Detik", plural: "Detik" },
    },
    plural: true, //use plurals
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: "simply-countdown-inline", //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: false,
    onEnd: function () {
      // your code
      return;
    },
    refresh: 1000, //default refresh every 1s
    sectionClass: "simply-section", //section css class
    amountClass: "simply-amount", // amount css class
    wordClass: "simply-word", // word css class
    zeroPad: false,
    countUp: false, // enable count up if set to true
  });



const stickyTop = document.querySelector('.sticky-top');
const offcanvas = document.querySelector('.offcanvas');

offcanvas.addEventListener('show.bs.offcanvas', function() {
    stickyTop.style.overflow = 'visible';
});

offcanvas.addEventListener('hidden.bs.offcanvas', function() {
    stickyTop.style.overflow = 'hidden';
});



const rootElement = document.querySelector(":root");
function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  }

  rootElement.style.scrollBehavior = 'auto';
}
  function enableScroll() {
    window.onscroll = function () {}
      rootElement.style.scrollBehavior = 'smooth';
      // localStorage.setItem('opened', 'true');
      playAudio();
  }

  function playAudio() {
    const song = document.querySelector('#song');
    song.play()
  }

// if(!localStorage.getItem('opened')) {
  // disableScroll();
// }
disableScroll();



window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Konfirmasi kehadiran berhasil!");
    })
  });
});