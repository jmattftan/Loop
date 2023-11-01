VANTA.WAVES({
  el: "#wave",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x313131,
});

VANTA.WAVES({
  el: "#wave-body",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x313131,
});

const text = `Our goal at Loop is to enhance the college experience for students
  by providing innovative and accessible software and hardware
  solutions that empower them to excel academically, foster
  creativity, and simplify their lives. We are dedicated to developing
  and delivering products that directly support college students'
  unique needs and challenges, ensuring they have the tools they need
  to thrive in a digital world. We aim to become the trusted partner
  for college students, committed to enriching their educational and
  personal journeys through tailored, forward-thinking technology
  solutions.`;

const textElement = document.getElementById("typing-text");
const cursorElement = document.getElementById("cursor");
let charIndex = 0;
const delay = 1000; // Delay in milliseconds (2 seconds)

function type() {
  if (charIndex < text.length) {
    textElement.innerHTML += text.charAt(charIndex);
    charIndex++;
    setTimeout(type, 40); // Adjust the typing speed (lower value for faster typing)
  } else {
    cursorElement.style.display = "none";
  }
}

// Start the typing animation after the specified delay
setTimeout(type, delay);

const buttons = {
  loop: document.getElementById("loop_button"),
  goal: document.getElementById("goal_button"),
  specializations: document.getElementById("specializations_button"),
  aboutus: document.getElementById("aboutus_button"),
  contactus: document.getElementById("contactus_button"),
};

const contents = {
  loop: document.getElementById("content_loop"),
  goal: document.getElementById("content_goal"),
  specializations: document.getElementById("content_specializations"),
  aboutus: document.getElementById("content_aboutus"),
  contactus: document.getElementById("content_contactus"),
};

const resetAnimationsAndHideAll = () => {
  for (const content of Object.values(contents)) {
    content.style.animation = "none";
    content.style.display = "none";
  }
};

const showContentWithAnimation = (contentId) => {
  resetAnimationsAndHideAll();
  contents[contentId].style.display = "block";
  contents[contentId].style.animation = "slideUp 1s ease";
};

buttons.loop.addEventListener("click", () => showContentWithAnimation("loop"));
buttons.goal.addEventListener("click", () => showContentWithAnimation("goal"));
buttons.specializations.addEventListener("click", () =>
  showContentWithAnimation("specializations")
);
buttons.aboutus.addEventListener("click", () =>
  showContentWithAnimation("aboutus")
);
buttons.contactus.addEventListener("click", () =>
  showContentWithAnimation("contactus")
);
