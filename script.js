// --------------------- loading animation --------------------- //

function initLoadingAnimation() {
  // Check if we're on the homepage by looking for the home hero container
  const homeHeroContainer = document.querySelector(
    ".container--680.is--home-hero"
  );
  const isHomepage = homeHeroContainer !== null;

  // Get elements
  const mainWrapper = document.querySelector(".main-wrapper");
  const staggerElements = document.querySelectorAll(
    '[animation="loading-stagger"]'
  );
  const loadingElements = document.querySelectorAll('[animation="loading"]');
  const circleWrapper = document.querySelectorAll(".circle-wrapper");
  const reactComponent = document.querySelectorAll(".react-component");
  const circlePulse = document.querySelectorAll(".circle-pulse");

  // If NOT homepage, show everything immediately without animation
  if (!isHomepage) {
    // Set everything to final state immediately
    if (mainWrapper) {
      gsap.set(mainWrapper, { opacity: 1 });
    }
    gsap.set(staggerElements, { opacity: 1, filter: "blur(0rem)" });
    gsap.set(loadingElements, { opacity: 1 });
    gsap.set(circleWrapper, { opacity: 1, scale: 1 });
    gsap.set(reactComponent, { opacity: 1, y: "0rem" });
    gsap.set(circlePulse, { opacity: 1, y: 0, scale: 1 });
    return; // Exit early, no animation on non-homepage
  }

  // HOMEPAGE ONLY: Run full animation with blur effect
  // Helper function to split text into words
  function splitTextIntoWords(element) {
    const text = element.textContent;
    const words = text.split(/(\s+)/); // Split by spaces but keep the spaces
    element.innerHTML = "";

    const wordSpans = [];
    words.forEach((word) => {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.style.whiteSpace = "pre"; // Preserve spaces
      span.textContent = word;
      element.appendChild(span);

      // Only track non-space spans for animation
      if (word.trim() !== "") {
        wordSpans.push(span);
      }
    });

    return wordSpans;
  }

  // Split all stagger elements into words
  let allWords = [];
  staggerElements.forEach((element) => {
    const words = splitTextIntoWords(element);
    allWords = allWords.concat(words);
  });

  // Set initial states
  if (mainWrapper) {
    gsap.set(mainWrapper, { opacity: 0 });
  }

  gsap.set(allWords, { opacity: 0, filter: "blur(1rem)" });
  gsap.set(loadingElements, { opacity: 0 });
  gsap.set(circleWrapper, { opacity: 0, scale: 0.8 });
  if (homeHeroContainer) {
    gsap.set(homeHeroContainer, { y: "3rem" });
  }
  gsap.set(reactComponent, { opacity: 0, y: "1rem" });
  gsap.set(circlePulse, { opacity: 1, y: 0, scale: 1 });

  // Create timeline
  const tl = gsap.timeline();

  // 1. Fade in main wrapper
  if (mainWrapper) {
    tl.to(
      mainWrapper,
      {
        opacity: 1,
        duration: 0.6,
        ease: "power4.out",
      },
      0
    ); // Start at 0s
  }

  // 2. Stagger words with blur effect (starts after main wrapper)
  tl.to(
    allWords,
    {
      opacity: 1,
      filter: "blur(0rem)",
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
    },
    0.6
  ); // Start at 0.6s (after main wrapper)

  // 3. Fade in loading elements (0.5s after stagger starts)
  tl.to(
    loadingElements,
    {
      opacity: 1,
      duration: 2,
      stagger: 0.1,
      ease: "power4.out",
    },
    1.1 // Start at 1.1s (0.6s wrapper + 0.5s delay)
  );

  // 4. Animate circle wrapper (1s after stagger starts)
  tl.to(
    circleWrapper,
    {
      opacity: 1,
      scale: 1,
      duration: 2,
      ease: "back.out(1.2)",
    },
    1.6 // Start at 1.6s (0.6s wrapper + 1s delay)
  );

  // 5. Animate home hero container (same time as circles)
  if (homeHeroContainer) {
    tl.to(
      homeHeroContainer,
      {
        y: "0rem",
        duration: 2,
        ease: "power4.out",
      },
      1.6 // Same time as circles
    );
  }

  // 6. Animate react component (same time as circles)
  tl.to(
    reactComponent,
    {
      opacity: 1,
      y: "0rem",
      duration: 2,
      ease: "power4.out",
    },
    1.6 // Same time as circles
  );

  // 7. Animate circle pulse - only child(1) on load
  if (circlePulse.length > 0) {
    tl.to(
      circlePulse[0], // Target only the first pulse
      {
        opacity: 0,
        y: "-17.5rem",
        scale: 1.5,
        duration: 4,
        ease: "power4.out",
      },
      2.1 // Same time as circles
    );
  }
}

// --------------------- circle pulse on card change --------------------- //

function initCardChangePulse() {
  const circlePulse = document.querySelectorAll(".circle-pulse");

  if (circlePulse.length < 2) return; // Need at least 2 pulse elements

  // Track which pulse to animate next (starts at 1 because child(1) animated on load)
  let currentPulseIndex = 1; // 0 = child(1), 1 = child(2)

  // Listen for card change events from React component
  window.addEventListener("beside-card-change", (event) => {
    // Get interval duration from event detail (default to 5 if not provided)
    const interval = event.detail?.interval || 5;

    // Determine which pulse to animate and which to reset
    const animatingPulse = circlePulse[currentPulseIndex];
    const resettingPulse = circlePulse[currentPulseIndex === 0 ? 1 : 0];

    // Animate the current pulse (pulse out)
    gsap.to(animatingPulse, {
      opacity: 0,
      y: "-17.5rem",
      scale: 1.5,
      duration: 4,
      ease: "power4.out",
    });

    // Reset the other pulse
    // 1. Instantly reset scale and y (no animation)
    gsap.set(resettingPulse, {
      scale: 1,
      y: 0,
    });

    // 2. Fade opacity from 0 to 1 linearly over the full interval
    gsap.to(resettingPulse, {
      opacity: 1,
      duration: interval, // Full interval duration
      ease: "none", // Linear, no easing
    });

    // Toggle to the other pulse for next card change
    currentPulseIndex = currentPulseIndex === 0 ? 1 : 0;
  });
}

// Initialize Loading Animation
document.addEventListener("DOMContentLoaded", () => {
  initLoadingAnimation();
  initCardChangePulse();
});
