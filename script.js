// ============================================================================
// CSC DIGITAL SEVA PORTAL — INTERACTIVE ENGINE
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Sticky Navbar shadow on scroll
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 16);
  }, { passive: true });

  // 2. Toast helper
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toastMsg");
  let toastTimer = null;

  function showToast(message) {
    toastMsg.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
  }

  // 3. Animated Counters in Hero
  const counters = document.querySelectorAll(".counter");
  const animateCounters = () => {
    counters.forEach((el) => {
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || "";
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 45));
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = `${current}${suffix}`;
      }, 24);
    });
  };
  animateCounters();

  // 4. 3D Interactive Tilt on Hero Console Card
  const tiltCard = document.getElementById("tiltDashboard");
  if (tiltCard) {
    tiltCard.addEventListener("mousemove", (e) => {
      const rect = tiltCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 10;
      const rotateX = (0.5 - (y / rect.height)) * 10;
      tiltCard.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
    });
    tiltCard.addEventListener("mouseleave", () => {
      tiltCard.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  }

  // Live Transaction Ticker rotation
  const tickerText = document.getElementById("liveTickerText");
  const tickerEvents = [
    "⚡ VLE Rajesh (Varanasi) issued Ayushman Card • 2s ago",
    "💳 DigiPay AEPS ₹5,000 withdrawal in Satara, MH • 4s ago",
    "📄 Instant e-PAN generated at CSC Thrissur, KL • 6s ago",
    "🌾 PM-KISAN e-KYC verified in Karnal, HR • 9s ago",
    "🎓 PMGDISHA Certificate awarded in Kamrup, AS • 12s ago"
  ];
  let tickerIndex = 0;
  setInterval(() => {
    tickerIndex = (tickerIndex + 1) % tickerEvents.length;
    if (tickerText) tickerText.textContent = tickerEvents[tickerIndex];
  }, 3500);

  // ==========================================================================
  // 5. SCROLL-DRIVEN EXPANDING PILL ACCORDION (MATCHING IMAGE 2)
  // ==========================================================================
  const scrollSection = document.getElementById("scroll-pillars");
  const expandPanels = Array.from(document.querySelectorAll(".expand-panel"));
  const scrollDots = Array.from(document.querySelectorAll(".scroll-dot"));
  const expandStepLabel = document.getElementById("expandStepLabel");
  let activeExpandIndex = 0;

  function setExpandedPanel(index) {
    if (index < 0 || index >= expandPanels.length) return;
    activeExpandIndex = index;
    expandPanels.forEach((panel, idx) => {
      panel.classList.toggle("active", idx === index);
    });
    scrollDots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === index);
    });
    if (expandStepLabel) {
      expandStepLabel.textContent = `0${index + 1} / 0${expandPanels.length}`;
    }
  }

  // Update active panel based on scroll progress inside .scroll-expand-section
  function handleScrollExpand() {
    if (!scrollSection) return;
    const rect = scrollSection.getBoundingClientRect();
    const totalScrollable = rect.height - window.innerHeight;
    if (totalScrollable <= 0) return;

    const scrolled = -rect.top;
    if (scrolled >= -80 && scrolled <= totalScrollable + 80) {
      const progress = Math.min(0.999, Math.max(0, scrolled / totalScrollable));
      const targetIndex = Math.floor(progress * expandPanels.length);
      if (targetIndex !== activeExpandIndex) {
        setExpandedPanel(targetIndex);
      }
    }
  }

  window.addEventListener("scroll", handleScrollExpand, { passive: true });

  // Also allow clicking any vertical pill or dot directly
  expandPanels.forEach((panel, idx) => {
    panel.addEventListener("click", (e) => {
      if (e.target.closest(".expand-arrow-btn")) return;
      setExpandedPanel(idx);
    });
  });

  scrollDots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      setExpandedPanel(idx);
      if (scrollSection) {
        const top = scrollSection.offsetTop + (idx / expandPanels.length) * (scrollSection.offsetHeight - window.innerHeight);
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });

  document.querySelectorAll(".expand-arrow-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const name = btn.dataset.launch || "CSC Digital Service";
      openModalWithService(name);
    });
  });

  // ==========================================================================
  // 6. CUSTOMER STORIES 5-CARD FANNED CAROUSEL (MATCHING IMAGE 1 TOP)
  // ==========================================================================
  const storiesData = [
    {
      title: "Green Gram Panchayat",
      sub: "100% paperless revenue & land mutation delivery across 140 mountain villages",
      metric: "★ 19,400+ e-District Certificates Issued • Kullu, HP"
    },
    {
      title: "Doorstep Micro-Banking",
      sub: "Bringing Aadhaar-enabled cash withdrawal and pension disbursal to rural elders",
      metric: "★ ₹4.8 Cr Monthly DigiPay Volume • Jodhpur, RJ"
    },
    {
      title: "Low Tide",
      sub: "Still water before the turn — 4,200 coastal families insured & connected via CSC",
      metric: "★ Verified Citizen Impact • 18 Mins Avg Turnaround"
    },
    {
      title: "Nari Shakti Digital Kendra",
      sub: "Women VLEs leading Tele-Law, Ayushman e-KYC, and digital literacy missions",
      metric: "★ 1.4 Lakh+ Active Women VLE Entrepreneurs"
    },
    {
      title: "Rural Coding & AI Hub",
      sub: "First-generation learners mastering Python, CAD, and financial literacy at CSC Academy",
      metric: "★ 6.2 Crore Citizens Certified under PMGDISHA"
    }
  ];

  const fanCards = Array.from(document.querySelectorAll(".fan-card"));
  const storyTitle = document.getElementById("storyTitle");
  const storySub = document.getElementById("storySub");
  const storyMetric = document.getElementById("storyMetric");
  const storyCaptionBox = document.getElementById("storyCaptionBox");
  let activeStoryIndex = 2; // Start on center card ("Low Tide") matching Image 1

  function updateFanCarousel(newIndex) {
    const total = fanCards.length;
    activeStoryIndex = ((newIndex % total) + total) % total;

    fanCards.forEach((card, i) => {
      // Calculate circular signed distance from activeStoryIndex in range [-2, 2]
      let diff = i - activeStoryIndex;
      if (diff > total / 2) diff -= total;
      if (diff < -total / 2) diff += total;

      if (diff >= -2 && diff <= 2) {
        card.setAttribute("data-offset", String(diff));
      } else {
        card.setAttribute("data-offset", "hidden");
      }
    });

    // Smooth caption transition
    if (storyCaptionBox) {
      storyCaptionBox.style.opacity = "0.25";
      storyCaptionBox.style.transform = "translateY(5px)";
      setTimeout(() => {
        const item = storiesData[activeStoryIndex];
        storyTitle.textContent = item.title;
        storySub.textContent = item.sub;
        storyMetric.textContent = item.metric;
        storyCaptionBox.style.opacity = "1";
        storyCaptionBox.style.transform = "translateY(0)";
      }, 150);
    }
  }

  updateFanCarousel(activeStoryIndex);

  document.getElementById("storyPrevBtn")?.addEventListener("click", () => {
    updateFanCarousel(activeStoryIndex - 1);
  });

  document.getElementById("storyNextBtn")?.addEventListener("click", () => {
    updateFanCarousel(activeStoryIndex + 1);
  });

  fanCards.forEach((card, idx) => {
    card.addEventListener("click", () => {
      if (idx !== activeStoryIndex) {
        updateFanCarousel(idx);
      } else {
        showToast(`Viewing full story: ${storiesData[idx].title}`);
      }
    });
  });

  // ==========================================================================
  // 7. SERVICE CATALOG & LIVE SEARCH (400+ CSC SERVICES SAMPLE)
  // ==========================================================================
  const allServices = [
    {
      title: "Aadhaar Demographic & Mobile Update",
      cat: "g2c",
      catLabel: "G2C & Identity",
      icon: "🪪",
      sla: "Instant Biometric",
      desc: "Update address, mobile number, email, and date of birth via UIDAI L1 biometric authentication."
    },
    {
      title: "Ayushman Bharat (PM-JAY) Golden Card",
      cat: "health",
      catLabel: "Health & Education",
      icon: "🏥",
      sla: "₹5 Lakh Cover",
      desc: "Check beneficiary eligibility, complete e-KYC, and download your cashless health insurance card."
    },
    {
      title: "DigiPay AEPS & Micro-ATM Banking",
      cat: "banking",
      catLabel: "Banking & Insurance",
      icon: "🏦",
      sla: "Zero Transaction Fee",
      desc: "Cash withdrawal, balance inquiry, mini statement, and Aadhaar-to-Aadhaar fund transfers."
    },
    {
      title: "Instant e-PAN Card Application (NSDL / UTI)",
      cat: "g2c",
      catLabel: "G2C & Identity",
      icon: "💳",
      sla: "48 Hrs e-PAN",
      desc: "Apply for a new PAN card or request corrections with paperless Aadhaar OTP / biometric e-KYC."
    },
    {
      title: "PM-KISAN Samman Nidhi e-KYC & Registration",
      cat: "g2c",
      catLabel: "G2C & Identity",
      icon: "🌾",
      sla: "₹6,000 / Year",
      desc: "Complete mandatory biometric e-KYC, land seeding verification, and installment status checks."
    },
    {
      title: "Bharat BillPay (BBPS) & Electricity Recharge",
      cat: "utility",
      catLabel: "Bills & Travel",
      icon: "⚡",
      sla: "Instant Receipt",
      desc: "Pay state electricity boards, piped gas, water, FASTag, and DTH bills with instant confirmation."
    },
    {
      title: "IRCTC Railway & Authorized Flight Booking",
      cat: "utility",
      catLabel: "Bills & Travel",
      icon: "🚆",
      sla: "Authorized Agent",
      desc: "Book confirmed/Tatkal train tickets, state transport buses, and domestic flights at CSC counters."
    },
    {
      title: "Pradhan Mantri Shram Yogi Maandhan (e-Shram)",
      cat: "banking",
      catLabel: "Banking & Insurance",
      icon: "🛡️",
      sla: "₹3,000/mo Pension",
      desc: "Universal UAN card registration and assured monthly pension enrollment for unorganized workers."
    },
    {
      title: "CSC Tele-Health & Tele-Law Consultation",
      cat: "health",
      catLabel: "Health & Education",
      icon: "⚖️",
      sla: "Free for Eligible",
      desc: "Book video consultations with AIIMS/Empaneled doctors or High Court legal aid panel lawyers."
    }
  ];

  const servicesGrid = document.getElementById("servicesGrid");
  const filterTabs = document.querySelectorAll(".filter-tab");

  function renderServices(category = "all") {
    if (!servicesGrid) return;
    const filtered = category === "all"
      ? allServices
      : allServices.filter((s) => s.cat === category);

    servicesGrid.innerHTML = filtered.map((item) => `
      <article class="service-card" data-service-name="${item.title}">
        <div>
          <div class="service-card-top">
            <div class="service-icon-box">${item.icon}</div>
            <span class="service-sla">${item.sla}</span>
          </div>
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
        </div>
        <div class="service-card-footer">
          <span>${item.catLabel}</span>
          <span>Launch Service →</span>
        </div>
      </article>
    `).join("");

    servicesGrid.querySelectorAll(".service-card").forEach((card) => {
      card.addEventListener("click", () => {
        openModalWithService(card.dataset.serviceName);
      });
    });
  }

  renderServices("all");

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      renderServices(tab.dataset.cat);
    });
  });

  // Hero Live Autocomplete Search + Ctrl+K Shortcut
  const heroSearchInput = document.getElementById("heroSearchInput");
  const searchDropdown = document.getElementById("searchDropdown");

  function updateSearchDropdown(query) {
    if (!searchDropdown) return;
    const q = query.trim().toLowerCase();
    if (!q) {
      searchDropdown.classList.remove("open");
      return;
    }
    const matches = allServices.filter(
      (s) => s.title.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q)
    );

    if (matches.length === 0) {
      searchDropdown.innerHTML = `
        <div class="search-result-item">
          <div class="search-result-meta">
            <span class="search-result-title">Apply for "${query}" via Universal e-District</span>
            <span class="search-result-cat">Press Enter to launch Digital Seva request</span>
          </div>
          <span style="color:#2563eb;font-weight:700;">Open →</span>
        </div>
      `;
    } else {
      searchDropdown.innerHTML = matches.map((m) => `
        <div class="search-result-item" data-service="${m.title}">
          <div class="search-result-meta">
            <span class="search-result-title">${m.icon} ${m.title}</span>
            <span class="search-result-cat">${m.catLabel} • ${m.sla}</span>
          </div>
          <span style="color:#2563eb;font-weight:700;">Launch →</span>
        </div>
      `).join("");
    }

    searchDropdown.classList.add("open");
    searchDropdown.querySelectorAll(".search-result-item").forEach((el) => {
      el.addEventListener("click", () => {
        const srv = el.dataset.service || query;
        searchDropdown.classList.remove("open");
        openModalWithService(srv);
      });
    });
  }

  heroSearchInput?.addEventListener("input", (e) => {
    updateSearchDropdown(e.target.value);
  });

  document.getElementById("heroSearchBtn")?.addEventListener("click", () => {
    const val = heroSearchInput?.value.trim() || "Aadhaar & e-District Portal";
    openModalWithService(val);
  });

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      heroSearchInput?.focus();
    }
    if (e.key === "Escape") {
      searchDropdown?.classList.remove("open");
      closeModal();
    }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".service-search-box")) {
      searchDropdown?.classList.remove("open");
    }
  });

  document.querySelectorAll(".tag-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const q = chip.dataset.query || chip.textContent;
      if (heroSearchInput) {
        heroSearchInput.value = q;
        updateSearchDropdown(q);
      }
    });
  });

  document.querySelectorAll(".quick-tile").forEach((tile) => {
    tile.addEventListener("click", () => {
      openModalWithService(tile.dataset.service);
    });
  });

  // ==========================================================================
  // 8. CSC CENTER PIN CODE LOCATOR
  // ==========================================================================
  const locatorForm = document.getElementById("locatorForm");
  const pincodeInput = document.getElementById("pincodeInput");
  const kendraName = document.getElementById("kendraName");
  const kendraAddress = document.getElementById("kendraAddress");

  locatorForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const pin = pincodeInput.value.trim() || "110001";
    kendraName.textContent = `CSC Digital Seva Kendra — Zone ${pin.toUpperCase()}`;
    kendraAddress.textContent = `Verified VLE Counter • Biometric Iris & Fingerprint L1 Ready • Queue Wait: ~4 mins`;
    showToast(`Located 3 active CSC Kendras near ${pin}!`);
  });

  // ==========================================================================
  // 9. MODAL & LANGUAGE SWITCHER
  // ==========================================================================
  const portalModal = document.getElementById("portalModal");
  const modalBadge = document.getElementById("modalBadge");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalInputLabel = document.getElementById("modalInputLabel");

  function openModalWithService(serviceName) {
    modalBadge.textContent = "Instant Service Gateway";
    modalTitle.textContent = serviceName;
    modalDesc.textContent = "Proceed online with Aadhaar OTP e-KYC or generate a token for your nearest CSC VLE counter.";
    modalInputLabel.textContent = "Citizen Aadhaar / Reference Number";
    portalModal.classList.add("open");
  }

  function closeModal() {
    portalModal?.classList.remove("open");
  }

  document.getElementById("openVleModalBtn")?.addEventListener("click", () => {
    modalBadge.textContent = "Digital Seva Connect";
    modalTitle.textContent = "VLE Operator Sign-In";
    modalDesc.textContent = "Enter your 12-digit CSC VLE ID to launch the unified Digital Seva transaction console.";
    modalInputLabel.textContent = "12-Digit CSC VLE ID";
    portalModal.classList.add("open");
  });

  document.getElementById("openTrackModalBtn")?.addEventListener("click", () => {
    modalBadge.textContent = "Real-Time Application Tracker";
    modalTitle.textContent = "Track Your Certificate / Card";
    modalDesc.textContent = "Enter your CSC Application Reference ID to inspect live verification status.";
    modalInputLabel.textContent = "Application Reference Number";
    portalModal.classList.add("open");
  });

  document.getElementById("footerVleReg")?.addEventListener("click", (e) => {
    e.preventDefault();
    openModalWithService("New VLE Registration (TEC Certificate)");
  });

  document.getElementById("closeModalBtn")?.addEventListener("click", closeModal);
  portalModal?.addEventListener("click", (e) => {
    if (e.target === portalModal) closeModal();
  });

  document.getElementById("modalForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    closeModal();
    showToast("OTP sent to your registered mobile number!");
  });

  // Bilingual Toggle (EN / Hindi)
  let isHindi = false;
  document.getElementById("langToggleBtn")?.addEventListener("click", () => {
    isHindi = !isHindi;
    const heroTitle = document.querySelector('[data-i18n="heroTitle"]');
    const heroDesc = document.querySelector('[data-i18n="heroDesc"]');
    if (isHindi) {
      heroTitle.innerHTML = `हर नागरिक सेवा,<br /><span class="gradient-span">एक एकीकृत डिजिटल सेवा पोर्टल।</span>`;
      heroDesc.textContent = "अपने नजदीकी कॉमन सर्विस सेंटर (CSC VLE) या ऑनलाइन माध्यम से 400+ सरकारी (G2C), बैंकिंग, आधार, आयुष्मान भारत और कौशल विकास सेवाओं का लाभ उठाएं।";
      showToast("भाषा बदली गई: हिंदी (Hindi)");
    } else {
      heroTitle.innerHTML = `Every Citizen Service,<br /><span class="gradient-span">One Unified Digital Portal.</span>`;
      heroDesc.textContent = "Access 400+ Government-to-Citizen (G2C), Banking, Aadhaar, Healthcare, Insurance, and Skill Development services seamlessly through your nearest Village Level Entrepreneur (VLE) or online.";
      showToast("Language switched to English");
    }
  });
});

