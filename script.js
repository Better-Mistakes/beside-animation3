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

  // 7. Animate circle pulse - only .is--1 on load
  const circlePulse1 = document.querySelector(".circle-pulse.is--1");
  if (circlePulse1) {
    tl.to(
      circlePulse1,
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
  const circlePulse1 = document.querySelector(".circle-pulse.is--1");
  const circlePulse2 = document.querySelector(".circle-pulse.is--2");

  if (!circlePulse1 || !circlePulse2) return; // Need both pulse elements

  // Set initial states - is--2 should be ready and visible
  gsap.set(circlePulse2, {
    opacity: 1,
    y: 0,
    scale: 1,
  });

  // Track which pulse to animate next (starts with is--2 because is--1 animated on load)
  let animateIs2Next = true;

  // Listen for card change events from React component
  window.addEventListener("beside-card-change", (event) => {
    // Determine which pulse to animate and which to reset
    const animatingPulse = animateIs2Next ? circlePulse2 : circlePulse1;
    const resettingPulse = animateIs2Next ? circlePulse1 : circlePulse2;

    // Kill any existing animations on both pulses to prevent stacking
    gsap.killTweensOf([animatingPulse, resettingPulse]);

    // Animate the current pulse OUT (4s)
    gsap.to(animatingPulse, {
      opacity: 0,
      y: "-17.5rem",
      scale: 1.5,
      duration: 4,
      ease: "power4.out",
    });

    // Animate the other pulse IN (4s)
    // 1. Instantly reset scale and y (no animation)
    gsap.set(resettingPulse, {
      scale: 1,
      y: 0,
    });

    // 2. Fade opacity from 0 to 1 over 4 seconds (same duration as pulse out)
    gsap.to(resettingPulse, {
      opacity: 1,
      duration: 4, // Match the pulse out duration
      ease: "none", // Linear, no easing
    });

    // Toggle to the other pulse for next card change
    animateIs2Next = !animateIs2Next;
  });
}

// --------------------- heading sync on card change --------------------- //

function initHeadingSync() {
  const headings = document.querySelectorAll(".heading-style-64-hero");

  if (headings.length === 0) return; // No headings to sync

  // Set initial state - only first heading visible, rest hidden and blurred
  headings.forEach((heading, index) => {
    if (index === 0) {
      gsap.set(heading, { opacity: 1, filter: "blur(0rem)" });
    } else {
      gsap.set(heading, { opacity: 0, filter: "blur(1rem)" });
    }
  });

  // Track current visible heading (starts at 0 for page load, then 1 for first card)
  let currentHeadingIndex = 0;
  let isFirstCardChange = true;

  // Listen for card change events from React component
  window.addEventListener("beside-card-change", () => {
    const currentHeading = headings[currentHeadingIndex];

    // Calculate next heading index
    // First card change: go from heading 1 (index 0) to heading 2 (index 1)
    // Subsequent changes: cycle through headings 2-10 (indices 1-9)
    let nextHeadingIndex;
    if (isFirstCardChange) {
      nextHeadingIndex = 1; // Go to heading 2
      isFirstCardChange = false;
    } else {
      // Cycle through indices 1-9 (headings 2-10)
      nextHeadingIndex = currentHeadingIndex + 1;
      if (nextHeadingIndex > 9) {
        nextHeadingIndex = 1; // Loop back to heading 2 (index 1)
      }
    }

    const nextHeading = headings[nextHeadingIndex];

    // Fade out current heading
    gsap.to(currentHeading, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    });

    // Fade in next heading with blur effect
    gsap.to(nextHeading, {
      opacity: 1,
      filter: "blur(0rem)",
      duration: 0.5,
      ease: "power2.out",
      delay: 0.2, // Slight delay after current fades out
    });

    // Update current heading index
    currentHeadingIndex = nextHeadingIndex;
  });
}

// Initialize Loading Animation
document.addEventListener("DOMContentLoaded", () => {
  initLoadingAnimation();
  initCardChangePulse();
  initHeadingSync();
});
