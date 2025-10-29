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

  // 7. Animate circle pulse (same time as circles)
  tl.to(
    circlePulse,
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

// --------------------- circle pulse on card change --------------------- //

function initCardChangePulse() {
  const circlePulse = document.querySelectorAll(".circle-pulse");

  if (circlePulse.length === 0) return; // Exit if no pulse elements found

  // Listen for card change events from React component
  window.addEventListener("beside-card-change", () => {
    // Play the pulse animation
    gsap.to(circlePulse, {
      opacity: 0,
      y: "-17.5rem",
      scale: 1.5,
      duration: 4,
      ease: "power4.out",
      onComplete: () => {
        // Instantly reset to initial state (no animation)
        gsap.set(circlePulse, {
          opacity: 1,
          y: 0,
          scale: 1,
        });
      },
    });
  });
}

// Initialize Loading Animation
document.addEventListener("DOMContentLoaded", () => {
  initLoadingAnimation();
  initCardChangePulse();
});

// --------------------- hover text buttons --------------------- //

function initButtonCharacterStagger() {
  const offsetIncrement = 0; // Transition offset increment in seconds
  const buttons = document.querySelectorAll("[data-button-animate-chars]");

  buttons.forEach((button) => {
    const text = button.textContent; // Get the button's text content
    button.innerHTML = ""; // Clear the original content

    [...text].forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.transitionDelay = `${index * offsetIncrement}s`;

      // Handle spaces explicitly
      if (char === " ") {
        span.style.whiteSpace = "pre"; // Preserve space width
      }

      button.appendChild(span);
    });
  });
}

// Initialize Button Character Stagger Animation
document.addEventListener("DOMContentLoaded", () => {
  initButtonCharacterStagger();
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the trigger element
  const trigger = document.querySelector(".efficient--protector-trigger");

  if (trigger) {
    trigger.addEventListener("click", function () {
      // Get all elements that need the class toggled
      const elements = [
        document.querySelector(".efficient--protector-trigger"),
        document.querySelector(".circle"),
        document.querySelector(".efficient--img-1"),
        document.querySelector(".efficient--img-2"),
        document.querySelector(".overflow--active"),
        ...document.querySelectorAll(".efficient--trigger"), // Get ALL efficient--trigger elements
      ];

      // Toggle the is--active class on each element
      elements.forEach((element) => {
        if (element) {
          element.classList.toggle("is--active");
        }
      });
    });
  }

  // Initialize Swiper with fade effect for Awards slider
  const awardsSwiper = new Swiper(".is--awards-slider", {
    // Enable fade effect
    effect: "fade",

    // Fade effect settings
    fadeEffect: {
      crossFade: true,
    },

    // Autoplay settings
    autoplay: {
      delay: 5000, // 5 seconds between slides
      disableOnInteraction: false, // Continue autoplay after user interaction
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Pagination dots
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Loop through slides
    loop: true,

    // Speed of transition
    speed: 1000, // 1 second fade transition

    // Allow touch/drag navigation
    allowTouchMove: true,

    // Keyboard navigation
    keyboard: {
      enabled: true,
    },

    // Callbacks
    on: {
      slideChange: function () {
        console.log("Awards slide changed to:", this.activeIndex);
      },
    },
  });

  // Optional: Pause autoplay on hover
  const awardsContainer = document.querySelector(".is--awards-slider");
  if (awardsContainer) {
    awardsContainer.addEventListener("mouseenter", () => {
      awardsSwiper.autoplay.stop();
    });

    awardsContainer.addEventListener("mouseleave", () => {
      awardsSwiper.autoplay.start();
    });
  }

  // Initialize Academy Swiper for mobile only (below 992px)
  const academySwiper = new Swiper(".is--academy-slider", {
    // Show 1 slide per view
    slidesPerView: 1,

    // Gap between slides
    spaceBetween: 16, // 1rem = 16px

    // Only enable on mobile screens
    breakpoints: {
      // Below 992px - enable swiper
      0: {
        enabled: true,
        slidesPerView: 1,
        spaceBetween: 16,
      },
      // 992px and above - disable swiper
      992: {
        enabled: false,
      },
    },

    // Navigation arrows - unique to academy slider
    navigation: {
      nextEl: ".is--academy-slider .swiper-button-next",
      prevEl: ".is--academy-slider .swiper-button-prev",
    },

    // Pagination dots - unique to academy slider
    pagination: {
      el: ".is--academy-slider .swiper-pagination",
      clickable: true,
    },

    // Allow touch/drag navigation
    allowTouchMove: true,

    // Speed of transition
    speed: 300,

    // Callbacks
    on: {
      slideChange: function () {
        console.log("Academy slide changed to:", this.activeIndex);
      },
    },
  });

  // Initialize Insights Swiper for mobile only (below 992px)
  const insightsSwiper = new Swiper(".is--insights-slider", {
    // Show 1 slide per view
    slidesPerView: 1,

    // Gap between slides
    spaceBetween: 16, // 1rem = 16px

    // Only enable on mobile screens
    breakpoints: {
      // Below 992px - enable swiper
      0: {
        enabled: true,
        slidesPerView: 1,
        spaceBetween: 16,
      },
      // 992px and above - disable swiper
      992: {
        enabled: false,
      },
    },

    // Navigation arrows - unique to insights slider
    navigation: {
      nextEl: ".is--insights-slider .swiper-button-next",
      prevEl: ".is--insights-slider .swiper-button-prev",
    },

    // Pagination dots - unique to insights slider
    pagination: {
      el: ".is--insights-slider .swiper-pagination",
      clickable: true,
    },

    // Allow touch/drag navigation
    allowTouchMove: true,

    // Speed of transition
    speed: 300,

    // Callbacks
    on: {
      slideChange: function () {
        console.log("Insights slide changed to:", this.activeIndex);
      },
    },
  });

  // Initialize Problem Swiper with responsive settings
  const problemSliderElement = document.querySelector(".is--problem-slider");

  if (problemSliderElement) {
    console.log("Problem slider element found:", problemSliderElement);

    const problemSwiper = new Swiper(".is--problem-slider", {
      // Default settings for mobile
      slidesPerView: 1,
      spaceBetween: 16, // 1rem = 16px
      slidesPerGroup: 1, // Move by 1 slide

      // Responsive breakpoints
      breakpoints: {
        // Mobile: below 992px
        0: {
          slidesPerView: 1,
          spaceBetween: 16,
          slidesPerGroup: 1,
        },
        // Desktop: 992px and above
        992: {
          slidesPerView: 3,
          spaceBetween: 16,
          slidesPerGroup: 1, // Move by 1 slide at a time
        },
      },

      // Navigation arrows - unique to problem slider
      navigation: {
        nextEl: ".is--problem-slider .swiper-button-next",
        prevEl: ".is--problem-slider .swiper-button-prev",
      },

      // Pagination dots - unique to problem slider
      pagination: {
        el: ".is--problem-slider .swiper-pagination",
        clickable: true,
      },

      // Allow touch/drag navigation
      allowTouchMove: true,

      // Speed of transition
      speed: 300,

      // Callbacks
      on: {
        init: function () {
          console.log("Problem Swiper initialized successfully");
        },
        slideChange: function () {
          console.log("Problem slide changed to:", this.activeIndex);
        },
        breakpoint: function (swiper, breakpointParams) {
          console.log("Problem Swiper breakpoint changed:", breakpointParams);
        },
      },
    });

    console.log("Problem Swiper instance:", problemSwiper);
  } else {
    console.error("Problem slider element not found!");
  }

  // Efficient Trigger Hover Functionality
  $(".efficient--trigger").on("mouseenter", function () {
    // Get the number from the trigger's class (e.g., "is--1", "is--2", etc.)
    const triggerClasses = $(this).attr("class").split(" ");
    const numberClass = triggerClasses.find((cls) => cls.startsWith("is--"));

    if (numberClass) {
      // Hide all content elements first
      $(".efficient--trigger-content").css("opacity", "0");

      // Show the corresponding content element
      $(`.efficient--trigger-content.${numberClass}`).css("opacity", "1");

      console.log(
        `Hovered ${numberClass}, showing content with ${numberClass}`
      );
    }
  });

  $(".efficient--trigger").on("mouseleave", function () {
    // Hide all content elements when mouse leaves
    $(".efficient--trigger-content").css("opacity", "0");
    console.log("Mouse left trigger, hiding all content");
  });
});

// ------------------------- navbar black ------------------------- //

document.addEventListener("DOMContentLoaded", () => {
  // Select all triggers
  const triggers = document.querySelectorAll('[animation="navbarblack"]');
  const navbar = document.querySelector(".navbar");

  if (triggers.length && navbar) {
    triggers.forEach((trigger) => {
      ScrollTrigger.create({
        trigger: trigger,
        start: "top 2rem", // when the trigger hits 2rem from top
        toggleClass: { targets: navbar, className: "is--black" },
        // markers: true, // uncomment for debugging
      });
    });
  }
});

// ------------------------- navbar scrolled ------------------------- //

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");

  if (navbar) {
    let lastScrollTop = 0;
    const scrollThreshold = 50; // Pixels to scroll before adding class

    window.addEventListener("scroll", () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > scrollThreshold) {
        navbar.classList.add("is--scrolled");
      } else {
        navbar.classList.remove("is--scrolled");
      }

      lastScrollTop = scrollTop;
    });
  }
});

// ------------------------- hero section circle animations ------------------------- //

// COMMENTED OUT - Hero circle animations disabled
/*
// Helper function to generate random whole numbers
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to animate a circle div with random blur values
function animateCircle(circle, circleIndex, isFirstTime = false) {
  const randomBlur = getRandomValue(1, 10); // Random blur between 1 and 10 rem
  const randomDuration = getRandomValue(5, 8); // Random duration

  console.log(
    `Circle ${circleIndex}: blur=${randomBlur}rem, duration=${randomDuration}s`
  );

  // Animate blur smoothly
  gsap.to(circle, {
    filter: `blur(${randomBlur}rem)`,
    duration: randomDuration,
    ease: "power1.inOut",
    onComplete: function () {
      console.log(`Circle ${circleIndex} animation complete, restarting...`);
      // Start next animation with new random values
      animateCircle(circle, circleIndex, false);
    },
  });
}

// Initialize animations for all circles
function initCircleAnimations() {
  console.log("Initializing circle animations...");

  // Select all circle divs (circle1, circle2, circle3, circle4, etc.)
  const circles = document.querySelectorAll('[class*="circle"]');

  if (circles.length === 0) {
    console.warn("No circle elements found");
    return;
  }

  // Wait 5 seconds before starting animations
  setTimeout(() => {
    console.log("Starting circle animations after 5 second delay");

    // Start animations for each circle with slight offsets
    circles.forEach((circle, index) => {
      if (!circle) {
        console.warn(`Circle ${index + 1} is undefined`);
        return;
      }

      setTimeout(() => {
        console.log(`Starting animation for circle ${index + 1}`, circle);
        animateCircle(circle, index + 1, true); // Pass true for first time
      }, index * 100); // 100ms offset between each circle
    });
  }, 5000); // 5 second delay before starting
}

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  initCircleAnimations();
});
*/

// ------------------------- navbar white ------------------------- //

document.addEventListener("DOMContentLoaded", () => {
  // Select all triggers
  const triggers = document.querySelectorAll('[animation="navbarwhite"]');
  const navbar = document.querySelector(".navbar");

  if (triggers.length && navbar) {
    triggers.forEach((trigger) => {
      ScrollTrigger.create({
        trigger: trigger,
        start: "top 2rem", // when the trigger hits 2rem from top
        toggleClass: { targets: navbar, className: "is--white" },
        // markers: true, // uncomment for debugging
      });
    });
  }
});

// ------------------------- mobile menu ------------------------- //

document.addEventListener("DOMContentLoaded", () => {
  const menuTrigger = document.querySelector(".menu--trigger");
  const menuToOpen = document.querySelector(".menu--to-open");
  const menuToClose = document.querySelector(".menu--to-close");
  const navbarMenu = document.querySelector(".navbar--menu");
  const navbar = document.querySelector(".navbar");

  let isMenuOpen = false;

  console.log("Mobile menu elements found:");
  console.log("Menu trigger:", menuTrigger);
  console.log("Menu to open:", menuToOpen);
  console.log("Menu to close:", menuToClose);
  console.log("Navbar menu:", navbarMenu);
  console.log("Navbar:", navbar);

  // Only initialize mobile menu functionality on screens below 992px
  function initMobileMenu() {
    if (window.innerWidth >= 992) return;

    // Set initial state only on mobile
    if (menuToOpen) {
      gsap.set(menuToOpen, { y: 0, opacity: 1 });
    }
    if (menuToClose) {
      gsap.set(menuToClose, { y: "1rem", opacity: 0 });
    }
    if (navbarMenu) {
      gsap.set(navbarMenu, { x: "100vw" });
    }
  }

  // Initialize on load
  initMobileMenu();

  function openMenu() {
    if (isMenuOpen) return;

    console.log("Opening mobile menu");
    isMenuOpen = true;

    // Lock body scroll
    document.body.style.overflow = "hidden";

    // Animate menu trigger icons
    if (menuToOpen) {
      gsap.to(menuToOpen, {
        y: "-1rem",
        opacity: 0,
        duration: 0.3,
        ease: "power4.out",
      });
    }

    if (menuToClose) {
      gsap.to(menuToClose, {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power4.out",
      });
    }

    // Show navbar menu
    if (navbarMenu) {
      gsap.set(navbarMenu, { display: "flex" });
      gsap.to(navbarMenu, {
        x: "0vw",
        duration: 0.4,
        ease: "power4.out",
      });
    }

    // Animate navbar stagger elements
    const navbarStaggerElements = document.querySelectorAll(
      '[animation="navbarstagger"]'
    );
    console.log("Navbar stagger elements found:", navbarStaggerElements.length);
    if (navbarStaggerElements.length > 0) {
      console.log("Animating navbar stagger elements:", navbarStaggerElements);
      gsap.set(navbarStaggerElements, { opacity: 0 });
      gsap.to(navbarStaggerElements, {
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.2, // Start after menu slides in
      });
    } else {
      console.log(
        "No navbar stagger elements found with [animation='navbarstagger']"
      );
    }

    // Change navbar font color
    if (navbar) {
      gsap.to(navbar, {
        color: "#1A1A1A",
        duration: 0.3,
        ease: "power4.out",
      });
    }
  }

  function closeMenu() {
    if (!isMenuOpen) return;

    console.log("Closing mobile menu");
    isMenuOpen = false;

    // Unlock body scroll
    document.body.style.overflow = "";

    // Animate menu trigger icons back
    if (menuToOpen) {
      gsap.to(menuToOpen, {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power4.out",
      });
    }

    if (menuToClose) {
      gsap.to(menuToClose, {
        y: "1rem",
        opacity: 0,
        duration: 0.3,
        ease: "power4.out",
      });
    }

    // Animate navbar stagger elements out
    const navbarStaggerElements = document.querySelectorAll(
      '[animation="navbarstagger"]'
    );
    console.log(
      "Closing - navbar stagger elements found:",
      navbarStaggerElements.length
    );
    if (navbarStaggerElements.length > 0) {
      gsap.to(navbarStaggerElements, {
        opacity: 0,
        duration: 0.2,
        stagger: 0.05,
        ease: "power2.in",
      });
    }

    // Hide navbar menu
    if (navbarMenu) {
      gsap.to(navbarMenu, {
        x: "100vw",
        duration: 0.4,
        ease: "power2.in",
        delay: 0.1, // Slight delay to let stagger elements fade out first
        onComplete: () => {
          gsap.set(navbarMenu, { display: "none" });
        },
      });
    }

    // Reset navbar font color
    if (navbar) {
      gsap.to(navbar, {
        color: "",
        duration: 0.3,
        ease: "power4.out",
      });
    }
  }

  function toggleMenu() {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // Add click event to menu trigger (only on mobile)
  if (menuTrigger) {
    menuTrigger.addEventListener("click", (e) => {
      if (window.innerWidth >= 992) return; // Only work on mobile
      e.preventDefault();
      e.stopPropagation();
      toggleMenu();
    });
  }

  // Close menu when clicking outside (only on mobile)
  document.addEventListener("click", (e) => {
    if (
      window.innerWidth < 992 &&
      isMenuOpen &&
      navbarMenu &&
      !navbarMenu.contains(e.target) &&
      !menuTrigger.contains(e.target)
    ) {
      closeMenu();
    }
  });

  // Close menu on escape key (only on mobile)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isMenuOpen && window.innerWidth < 992) {
      closeMenu();
    }
  });

  // Handle window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) {
      // Switching to desktop - reset menu state and let CSS handle it
      if (isMenuOpen) {
        closeMenu();
      }
      // Ensure body scroll is unlocked on desktop
      document.body.style.overflow = "";
      // Reset all GSAP transforms to let CSS take over
      if (navbarMenu) {
        gsap.set(navbarMenu, { clearProps: "all" });
      }
      if (menuToOpen) {
        gsap.set(menuToOpen, { clearProps: "all" });
      }
      if (menuToClose) {
        gsap.set(menuToClose, { clearProps: "all" });
      }
      if (navbar) {
        gsap.set(navbar, { clearProps: "color" });
      }
    } else {
      // Switching to mobile - re-initialize mobile menu state
      initMobileMenu();
    }
  });
});

// ------------------------- customer stories slider ------------------------- //

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Customer Stories Swiper - disabled on screens below 992px
  const customerStoriesSwiper = new Swiper(".is--customerstories-slider", {
    // Default settings for mobile (disabled)
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 24,
    enabled: false, // Disabled by default

    // Responsive breakpoints
    breakpoints: {
      // Mobile: below 992px - disabled
      0: {
        enabled: false,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 24,
      },
      // Desktop: 992px and above - enabled
      992: {
        enabled: true,
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 48, // 48px on desktop
      },
    },

    // Navigation arrows - unique to customer stories slider
    navigation: {
      nextEl: ".is--customerstories-slider .swiper-button-next",
      prevEl: ".is--customerstories-slider .swiper-button-prev",
    },

    // Pagination dots - unique to customer stories slider
    pagination: {
      el: ".is--customerstories-slider .swiper-pagination",
      clickable: true,
    },

    // Allow touch/drag navigation
    allowTouchMove: true,

    // Speed of transition
    speed: 300,

    // Callbacks
    on: {
      init: function () {
        console.log("Customer Stories Swiper initialized successfully");
      },
      slideChange: function () {
        console.log("Customer Stories slide changed to:", this.activeIndex);
      },
      breakpoint: function (swiper, breakpointParams) {
        console.log(
          "Customer Stories Swiper breakpoint changed:",
          breakpointParams
        );
      },
    },
  });

  // Handle window resize for customer stories slider
  window.addEventListener("resize", () => {
    if (customerStoriesSwiper) {
      customerStoriesSwiper.update();
    }
  });
});

// ------------------------- testimonials slider ------------------------- //

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Testimonials Swiper - only works on screens above 992px
  const testimonialsSwiper = new Swiper(".is--testimonials-slider", {
    // Default settings for mobile (disabled)
    slidesPerView: 1,
    spaceBetween: 16,
    slidesPerGroup: 1,
    enabled: false, // Disabled by default

    // Responsive breakpoints
    breakpoints: {
      // Mobile: below 992px - disabled
      0: {
        enabled: false,
        slidesPerView: 1,
        spaceBetween: 16,
        slidesPerGroup: 1,
      },
      // Desktop: 992px and above - enabled with 2 slides showing
      992: {
        enabled: true,
        slidesPerView: 2,
        spaceBetween: 32, // 32px on desktop
        slidesPerGroup: 1, // Move by 1 slide at a time
      },
    },

    // Navigation arrows - unique to testimonials slider
    navigation: {
      nextEl: ".is--testimonials-slider .swiper-button-next",
      prevEl: ".is--testimonials-slider .swiper-button-prev",
    },

    // Pagination dots - unique to testimonials slider
    pagination: {
      el: ".is--testimonials-slider .swiper-pagination",
      clickable: true,
    },

    // Allow touch/drag navigation
    allowTouchMove: true,

    // Speed of transition
    speed: 300,

    // Callbacks
    on: {
      init: function () {
        console.log("Testimonials Swiper initialized successfully");
      },
      slideChange: function () {
        console.log("Testimonials slide changed to:", this.activeIndex);
      },
      breakpoint: function (swiper, breakpointParams) {
        console.log(
          "Testimonials Swiper breakpoint changed:",
          breakpointParams
        );
      },
    },
  });

  // Handle window resize for testimonials slider
  window.addEventListener("resize", () => {
    if (testimonialsSwiper) {
      testimonialsSwiper.update();
    }
  });
});
