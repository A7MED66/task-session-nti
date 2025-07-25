const backToTop = document.getElementById("backToTop");

window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    backToTop.classList.remove("d-none");
  } else {
    backToTop.classList.add("d-none");
  }
};

backToTop.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  navText: [
    '<i class="fas fa-arrow-left custom-arrow bg-primary rounded-start-pill"></i>',
    '<i class="fas fa-arrow-right custom-arrow bg-primary rounded-end-pill "></i>',
  ],

  responsive: {
    0: { items: 1 },
    768: { items: 2 },
    992: { items: 3 },
  },
});

function startCounter(counter) {
  const target = +counter.getAttribute("data-target");
  const speed = 100;

  const updateCount = () => {
    const current = +counter.innerText;
    const increment = Math.ceil(target / speed);

    if (current < target) {
      counter.innerText = current + increment;
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
}

const counters = document.querySelectorAll(".counter");
const options = {
  threshold: 0.6,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, options);

counters.forEach((counter) => {
  observer.observe(counter);
});

const filterLinks = document.querySelectorAll(".filter-link");
const projectItems = document.querySelectorAll(".project-item");

(() => {
  "use strict";

  const form = document.querySelector(".needs-validation");

  form.addEventListener(
    "submit",
    function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    },
    false
  );
})();
