jQuery(document).ready(function ($) {
    // Performance-optimized animation timing
    var isMobile = window.innerWidth <= 768;
    var animationDelay = isMobile ? 1500 : 2500,
        barAnimationDelay = isMobile ? 2000 : 3800,
        barWaiting = barAnimationDelay - (isMobile ? 1500 : 3000),
        lettersDelay = isMobile ? 30 : 50,
        typeLettersDelay = isMobile ? 100 : 150,
        selectionDuration = isMobile ? 300 : 500,
        typeAnimationDelay = selectionDuration + (isMobile ? 400 : 800),
        revealDuration = isMobile ? 400 : 600,
        revealAnimationDelay = isMobile ? 800 : 1500;

    // Initialize core functionality
    try {
        initHeadline();
        initSmoothScrolling();
        initNavbarEffects();
        
        // Only initialize expensive features on desktop
        if (!isMobile) {
            initCounters();
            initParallaxEffects();
        }
        
        initLoadingScreen();
    } catch (error) {
        console.log("Initialization error:", error);
        // Force hide loading screen if there's an error
        hideLoadingScreen();
    }

    function hideLoadingScreen() {
        var loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
    }
  
    function initHeadline() {
      //insert <i> element for each letter of a changing word
      singleLetters($(".cd-headline.letters").find("b"));
      //initialise headline animation
      animateHeadline($(".cd-headline"));
    }
  
    function singleLetters($words) {
      $words.each(function () {
        var word = $(this),
          letters = word.text().split(""),
          selected = word.hasClass("is-visible");
        for (i in letters) {
          if (word.parents(".rotate-2").length > 0)
            letters[i] = "<em>" + letters[i] + "</em>";
          letters[i] = selected
            ? '<i class="in">' + letters[i] + "</i>"
            : "<i>" + letters[i] + "</i>";
        }
        var newLetters = letters.join("");
        word.html(newLetters).css("opacity", 1);
      });
    }
  
    function animateHeadline($headlines) {
      var duration = animationDelay;
      $headlines.each(function () {
        var headline = $(this);
  
        //trigger animation
        setTimeout(function () {
          hideWord(headline.find(".is-visible").eq(0));
        }, duration);
      });
    }
  
    function hideWord($word) {
      var nextWord = takeNext($word);
  
      if ($word.parents(".cd-headline").hasClass("type")) {
        var parentSpan = $word.parent(".cd-words-wrapper");
        parentSpan.addClass("selected").removeClass("waiting");
        setTimeout(function () {
          parentSpan.removeClass("selected");
          $word
            .removeClass("is-visible")
            .addClass("is-hidden")
            .children("i")
            .removeClass("in")
            .addClass("out");
        }, selectionDuration);
        setTimeout(function () {
          showWord(nextWord, typeLettersDelay);
        }, typeAnimationDelay);
      } else if ($word.parents(".cd-headline").hasClass("letters")) {
        var bool =
          $word.children("i").length >= nextWord.children("i").length
            ? true
            : false;
        hideLetter($word.find("i").eq(0), $word, bool, lettersDelay);
        showLetter(nextWord.find("i").eq(0), nextWord, bool, lettersDelay);
      } else if ($word.parents(".cd-headline").hasClass("clip")) {
        $word
          .parents(".cd-words-wrapper")
          .animate({ width: "2px" }, revealDuration, function () {
            switchWord($word, nextWord);
            showWord(nextWord);
          });
      } else if ($word.parents(".cd-headline").hasClass("loading-bar")) {
        $word.parents(".cd-words-wrapper").removeClass("is-loading");
        switchWord($word, nextWord);
        setTimeout(function () {
          hideWord(nextWord);
        }, barAnimationDelay);
        setTimeout(function () {
          $word.parents(".cd-words-wrapper").addClass("is-loading");
        }, barWaiting);
      } else {
        switchWord($word, nextWord);
        setTimeout(function () {
          hideWord(nextWord);
        }, animationDelay);
      }
    }
  
    function showWord($word, $duration) {
      if ($word.parents(".cd-headline").hasClass("type")) {
        showLetter($word.find("i").eq(0), $word, false, $duration);
        $word.addClass("is-visible").removeClass("is-hidden");
      } else if ($word.parents(".cd-headline").hasClass("clip")) {
        $word
          .parents(".cd-words-wrapper")
          .animate({ width: $word.width() + 10 }, revealDuration, function () {
            setTimeout(function () {
              hideWord($word);
            }, revealAnimationDelay);
          });
      }
    }
  
    function hideLetter($letter, $word, $bool, $duration) {
      $letter.removeClass("in").addClass("out");
  
      if (!$letter.is(":last-child")) {
        setTimeout(function () {
          hideLetter($letter.next(), $word, $bool, $duration);
        }, $duration);
      } else if ($bool) {
        setTimeout(function () {
          hideWord(takeNext($word));
        }, animationDelay);
      }
  
      if ($letter.is(":last-child") && $("html").hasClass("no-csstransitions")) {
        var nextWord = takeNext($word);
        switchWord($word, nextWord);
      }
    }
  
    function showLetter($letter, $word, $bool, $duration) {
      $letter.addClass("in").removeClass("out");
  
      if (!$letter.is(":last-child")) {
        setTimeout(function () {
          showLetter($letter.next(), $word, $bool, $duration);
        }, $duration);
      } else {
        if ($word.parents(".cd-headline").hasClass("type")) {
          setTimeout(function () {
            $word.parents(".cd-words-wrapper").addClass("waiting");
          }, 200);
        }
        if (!$bool) {
          setTimeout(function () {
            hideWord($word);
          }, animationDelay);
        }
      }
    }
  
    function takeNext($word) {
      return !$word.is(":last-child")
        ? $word.next()
        : $word.parent().children().eq(0);
    }
  
    function takePrev($word) {
      return !$word.is(":first-child")
        ? $word.prev()
        : $word.parent().children().last();
    }
  
    function switchWord($oldWord, $newWord) {
      $oldWord.removeClass("is-visible").addClass("is-hidden");
      $newWord.removeClass("is-hidden").addClass("is-visible");
    }
  });
  
  // Tilt Effect
  
  let el = document.getElementById("tilt");
  
  const height = el.clientHeight;
  const width = el.clientWidth;
  
  el.addEventListener("mousemove", handleMove);
  
  function handleMove(e) {
    const xVal = e.layerX;
    const yVal = e.layerY;
  
    const yRotation = 20 * ((xVal - width / 2) / width);
  
    const xRotation = -20 * ((yVal - height / 2) / height);
  
    const string =
      "perspective(500px) scale(1.1) rotateX(" +
      xRotation +
      "deg) rotateY(" +
      yRotation +
      "deg)";
  
    el.style.transform = string;
  }
  
  el.addEventListener("mouseout", function () {
    el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
  });
  
  el.addEventListener("mousedown", function () {
    el.style.transform = "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
  });
  
  el.addEventListener("mouseup", function () {
    el.style.transform = "perspective(500px) scale(0.5) rotateX(0) rotateY(0)";
  });

  // Smooth Scrolling for navigation links
  function initSmoothScrolling() {
    $('a[href^="#"]:not(.project-nav .nav-link), .smooth-scroll').on('click', function(e) {
      e.preventDefault();
      
      var target = $(this.getAttribute('href'));
      if(target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 80
        }, 600, 'easeInOutExpo');
      }
    });

    // Fix project tab switching
    $('.project-nav .nav-link').on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      // Remove active class from all tabs
      $('.project-nav .nav-link').removeClass('active');
      $('.tab-pane').removeClass('show active');
      
      // Add active class to clicked tab
      $(this).addClass('active');
      
      // Show corresponding tab content
      var targetTab = $(this).attr('href');
      $(targetTab).addClass('show active');
      
      // Don't scroll to top
      return false;
    });
  }

  // Navbar effects on scroll
  function initNavbarEffects() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.navbar').addClass('scrolled');
      } else {
        $('.navbar').removeClass('scrolled');
      }
    });

    // Active nav link highlighting
    $(window).scroll(function() {
      var scrollDistance = $(window).scrollTop();
      
      $('section').each(function(i) {
        if ($(this).position().top <= scrollDistance + 100) {
          $('.nav-link.active').removeClass('active');
          $('.nav-link').eq(i).addClass('active');
        }
      });
    }).scroll();
  }

  // Animated counters
  function initCounters() {
    $('.stat-number').each(function() {
      var $this = $(this);
      var countTo = $this.attr('data-count');
      
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            $({ countNum: $this.text() }).animate({
              countNum: countTo
            }, {
              duration: 2000,
              easing: 'swing',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum + '+');
              }
            });
            observer.unobserve(entry.target);
          }
        });
      });
      
      observer.observe($this[0]);
    });
  }

  // Parallax effects
  function initParallaxEffects() {
    $(window).scroll(function() {
      var scrolled = $(window).scrollTop();
      var parallax = $('.hero-particles');
      var speed = scrolled * 0.5;
      
      parallax.css('transform', 'translateY(' + speed + 'px)');
    });
  }

  // Initialize skill bars animation
  function initSkillBars() {
    $('.skill-bar').each(function() {
      var $this = $(this);
      var width = $this.data('width');
      
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            setTimeout(function() {
              $this.css('width', width);
            }, 500);
            observer.unobserve(entry.target);
          }
        });
      });
      
      observer.observe($this[0]);
    });
  }

  // Call skill bars initialization
  initSkillBars();

  // Loading screen functionality - Simplified
  function initLoadingScreen() {
    // Hide loading screen after a shorter delay
    setTimeout(function() {
      var loadingScreen = document.getElementById('loading-screen');
      if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 0.5s ease';
        setTimeout(function() {
          loadingScreen.style.display = 'none';
        }, 500);
      }
    }, 1000); // Reduced from 2000ms to 1000ms
    
    // Fallback - ensure loading screen is removed
    window.addEventListener('load', function() {
      setTimeout(function() {
        var loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen && loadingScreen.style.display !== 'none') {
          loadingScreen.style.display = 'none';
        }
      }, 1500);
    });
  }

  // Add easing function for smooth scroll
  jQuery.easing.easeInOutExpo = function (x, t, b, c, d) {
    if (t == 0) return b;
    if (t == d) return b + c;
    if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  };
  

  