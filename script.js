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

  // Set initial states - IMPORTANT: Set these immediately to prevent flash
  if (mainWrapper) {
    gsap.set(mainWrapper, { opacity: 0, visibility: "visible" });
  }

  gsap.set(allWords, { opacity: 0, filter: "blur(1rem)" });
  gsap.set(loadingElements, { opacity: 0 });
  gsap.set(circleWrapper, { opacity: 0, scale: 0.8 });
  if (homeHeroContainer) {
    gsap.set(homeHeroContainer, { opacity: 1, y: "1rem" }); // Opacity stays 1, only Y animates
  }
  gsap.set(reactComponent, { opacity: 0, y: "1rem" });
  gsap.set(circlePulse, { opacity: 1, y: 0, scale: 1 });

  // Create timeline with a small delay to ensure initial states are applied
  const tl = gsap.timeline({ delay: 0.1 });

  // 1. Fade in main wrapper with longer duration for more visible effect
  if (mainWrapper) {
    tl.to(
      mainWrapper,
      {
        opacity: 1,
        duration: 0.8,
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

  // Track if card-load event has fired
  let cardLoadEventFired = false;

  // Wait for card to load before animating homeHeroContainer, reactComponent, and circlePulse1
  window.addEventListener("beside-card-load", () => {
    cardLoadEventFired = true;

    // 5. Animate home hero container Y position immediately when card appears
    if (homeHeroContainer) {
      gsap.to(homeHeroContainer, {
        y: "0rem",
        duration: 0.8,
        ease: "power4.out",
        delay: 0, // No delay - sync with card appearance
      });
    }

    // 6. Animate react component immediately when card loads
    gsap.to(reactComponent, {
      opacity: 1,
      y: "0rem",
      duration: 0.8,
      ease: "power4.out",
      delay: 0, // No delay - sync with card appearance
    });

    // 7. Animate circle pulse immediately when card loads
    const circlePulse1 = document.querySelector(".circle-pulse.is--1");
    if (circlePulse1) {
      gsap.to(circlePulse1, {
        opacity: 0,
        y: "-17.5rem",
        scale: 1.5,
        duration: 4,
        ease: "power4.out",
        delay: 0, // No delay - sync with card appearance
      });
    }
  });

  // FALLBACK: If card-load event doesn't fire within 3 seconds, animate anyway
  setTimeout(() => {
    if (!cardLoadEventFired) {
      console.log(
        "Card load event timeout - animating home hero container as fallback"
      );

      // 5. Animate home hero container Y position only (fallback)
      if (homeHeroContainer) {
        gsap.to(homeHeroContainer, {
          y: "0rem",
          duration: 0.8,
          ease: "power4.out",
          delay: 0, // No delay - sync with card appearance
        });
      }

      // 6. Animate react component (fallback)
      gsap.to(reactComponent, {
        opacity: 1,
        y: "0rem",
        duration: 0.8,
        ease: "power4.out",
        delay: 0, // No delay - sync with card appearance
      });

      // 7. Animate circle pulse - only .is--1 (fallback)
      const circlePulse1 = document.querySelector(".circle-pulse.is--1");
      if (circlePulse1) {
        gsap.to(circlePulse1, {
          opacity: 0,
          y: "-17.5rem",
          scale: 1.5,
          duration: 4,
          ease: "power4.out",
          delay: 0, // No delay - sync with card appearance
        });
      }
    }
  }, 3000); // 3 second timeout
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

    // Animate the current pulse OUT (4s) - synced with new card fade in
    gsap.to(animatingPulse, {
      opacity: 0,
      y: "-17.5rem",
      scale: 1.5,
      duration: 4,
      ease: "power4.out",
    });

    // Animate the other pulse IN (4s) - synced with new card fade in
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
  // Select headings in proper order
  const loadingStaggerHeading = document.querySelector(
    '.heading-style-64-hero[animation="loading-stagger"]'
  );
  const allHeadings = document.querySelectorAll(".heading-style-64-hero");
  const h1wrapper = document.querySelector(".h1wrapper");

  if (!loadingStaggerHeading || !h1wrapper || allHeadings.length < 3) {
    console.warn("Required heading elements not found");
    return;
  }

  // Find the sibling heading (second .heading-style-64-hero outside h1wrapper)
  let siblingHeading = null;
  allHeadings.forEach((heading) => {
    if (
      heading !== loadingStaggerHeading &&
      !h1wrapper.contains(heading) &&
      !siblingHeading
    ) {
      siblingHeading = heading;
    }
  });

  // Get all headings inside h1wrapper
  const h1wrapperHeadings = h1wrapper.querySelectorAll(
    ".heading-style-64-hero"
  );

  if (!siblingHeading || h1wrapperHeadings.length === 0) {
    console.warn("Sibling heading or h1wrapper headings not found");
    return;
  }

  console.log("Heading sync initialized:");
  console.log("- Loading stagger heading:", loadingStaggerHeading);
  console.log("- Sibling heading:", siblingHeading);
  console.log("- H1wrapper headings:", h1wrapperHeadings.length);

  // Set initial states
  gsap.set(loadingStaggerHeading, { opacity: 1, filter: "blur(0rem)" });
  gsap.set(siblingHeading, { opacity: 0, filter: "blur(1rem)" });

  // Position h1wrapper as relative container
  gsap.set(h1wrapper, {
    position: "relative",
    width: "auto",
    height: "auto",
  });

  // Position all h1wrapper headings absolutely and hide them
  gsap.set(h1wrapperHeadings, {
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0,
    filter: "blur(1rem)",
    whiteSpace: "nowrap", // Keep text on one line
  });

  // Track current visible heading inside h1wrapper (starts at 0)
  let currentH1WrapperIndex = 0;

  // Track if card has loaded
  let cardHasLoaded = false;

  // Helper function to ensure only one heading is visible at a time
  function enforceOneHeadingVisible() {
    if (!cardHasLoaded) return; // Don't enforce before card loads

    console.log(
      "Enforcing one heading visible - index:",
      currentH1WrapperIndex
    );

    // Kill all ongoing heading animations
    gsap.killTweensOf(h1wrapperHeadings);

    // Hide all h1wrapper headings except the current one
    h1wrapperHeadings.forEach((heading, index) => {
      if (index === currentH1WrapperIndex) {
        // Ensure current heading is visible
        gsap.set(heading, {
          opacity: 1,
          filter: "blur(0rem)",
          visibility: "visible",
        });
      } else {
        // Ensure all other headings are hidden
        gsap.set(heading, {
          opacity: 0,
          filter: "blur(1rem)",
          visibility: "visible",
        });
      }
    });
  }

  // Handle page visibility changes (tab switching)
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && cardHasLoaded) {
      // Page became visible - enforce clean state
      console.log("Page became visible - cleaning up headings");
      enforceOneHeadingVisible();
    }
  });

  // Listen for card LOAD event (when card first appears)
  window.addEventListener("beside-card-load", () => {
    console.log("Card loaded - transitioning headings");
    cardHasLoaded = true;

    const firstH1WrapperHeading = h1wrapperHeadings[0];

    // Kill any ongoing animations first
    gsap.killTweensOf([
      loadingStaggerHeading,
      siblingHeading,
      firstH1WrapperHeading,
    ]);

    // Temporarily make heading visible to measure (keep opacity 0, remove blur)
    gsap.set(firstH1WrapperHeading, {
      opacity: 0,
      filter: "blur(0rem)",
      visibility: "visible",
    });

    // Get dimensions of first h1wrapper heading for initial wrapper size
    const headingRect = firstH1WrapperHeading.getBoundingClientRect();

    console.log("First heading dimensions:", {
      width: headingRect.width,
      height: headingRect.height,
    });

    // Set h1wrapper dimensions - 100% width on mobile, calculated on desktop
    const isMobile = window.innerWidth < 992;
    gsap.set(h1wrapper, {
      width: isMobile ? "100%" : headingRect.width + "px",
      height: headingRect.height + "px",
    });

    // Fade out loading stagger heading
    gsap.to(loadingStaggerHeading, {
      opacity: 0,
      duration: 0.8,
      ease: "power4.out",
    });

    // Fade in sibling heading
    gsap.to(siblingHeading, {
      opacity: 1,
      filter: "blur(0rem)",
      duration: 0.8,
      ease: "power4.out",
    });

    // Fade in first h1wrapper heading
    gsap.to(firstH1WrapperHeading, {
      opacity: 1,
      filter: "blur(0rem)",
      duration: 0.8,
      ease: "power4.out",
    });

    currentH1WrapperIndex = 0;
  });

  // Listen for card CHANGE events (subsequent card changes)
  window.addEventListener("beside-card-change", () => {
    console.log("Card changed - swapping h1wrapper headings");

    const currentHeading = h1wrapperHeadings[currentH1WrapperIndex];

    // Calculate next heading index - cycle through h1wrapper headings
    let nextHeadingIndex = currentH1WrapperIndex + 1;
    if (nextHeadingIndex >= h1wrapperHeadings.length) {
      nextHeadingIndex = 0; // Loop back to first h1wrapper heading
    }

    const nextHeading = h1wrapperHeadings[nextHeadingIndex];

    // Kill all ongoing animations on h1wrapper headings
    gsap.killTweensOf(h1wrapperHeadings);

    // Ensure all OTHER headings (except current and next) are hidden
    h1wrapperHeadings.forEach((heading, index) => {
      if (index !== currentH1WrapperIndex && index !== nextHeadingIndex) {
        gsap.set(heading, {
          opacity: 0,
          filter: "blur(1rem)",
        });
      }
    });

    // Temporarily make next heading visible (opacity 0) to measure it
    gsap.set(nextHeading, {
      opacity: 0,
      filter: "blur(0rem)",
      visibility: "visible",
    });
    const nextHeadingRect = nextHeading.getBoundingClientRect();

    console.log("Next heading dimensions:", {
      width: nextHeadingRect.width,
      height: nextHeadingRect.height,
    });

    // Animate h1wrapper dimensions - 100% width on mobile, calculated on desktop
    const isMobile = window.innerWidth < 992;
    gsap.to(h1wrapper, {
      width: isMobile ? "100%" : nextHeadingRect.width + "px",
      height: nextHeadingRect.height + "px",
      duration: 0.5,
      ease: "power2.out",
    });

    // Fade out current heading with blur - synced with new card fade in
    gsap.to(currentHeading, {
      opacity: 0,
      filter: "blur(1rem)",
      duration: 0.3,
      ease: "power2.out",
    });

    // Fade in next heading with deblur - synced with new card fade in
    gsap.to(nextHeading, {
      opacity: 1,
      filter: "blur(0rem)",
      duration: 0.5,
      ease: "power2.out",
      delay: 0.2, // Slight delay after current fades out
    });

    // Update current heading index
    currentH1WrapperIndex = nextHeadingIndex;
  });

  // Handle window resize - recalculate h1wrapper dimensions
  let resizeTimeout;
  window.addEventListener("resize", () => {
    // Debounce resize events to avoid too many calculations
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      // Only recalculate if we have a visible heading in h1wrapper
      if (
        currentH1WrapperIndex >= 0 &&
        h1wrapperHeadings[currentH1WrapperIndex]
      ) {
        const currentHeading = h1wrapperHeadings[currentH1WrapperIndex];
        const headingRect = currentHeading.getBoundingClientRect();
        const isMobile = window.innerWidth < 992;

        console.log("Window resized - recalculating h1wrapper dimensions:", {
          width: isMobile ? "100%" : headingRect.width,
          height: headingRect.height,
          isMobile: isMobile,
        });

        // Update h1wrapper dimensions - 100% width on mobile, calculated on desktop
        gsap.to(h1wrapper, {
          width: isMobile ? "100%" : headingRect.width + "px",
          height: headingRect.height + "px",
          duration: 0.3,
          ease: "power2.out",
        });
      }
    }, 150); // Wait 150ms after last resize event
  });
}

// Initialize Loading Animation
document.addEventListener("DOMContentLoaded", () => {
  initLoadingAnimation();
  initCardChangePulse();
  initHeadingSync();
});
