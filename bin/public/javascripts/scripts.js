window.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".circle");
  const blurLayer = document.querySelector(".blur-layer");
  const whiteLayer = document.querySelector(".white-layer");
  // if (window.innerWidth < 768) {
  //   // Redirect to a page with a message or handle it in another way
  //   window.location.href = "https://example.com/desktop-required";
  // }
  if (window.innerWidth < 768) {
    // Show the popup
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popup").style.display = "block";
  }

  // Get the dimensions of the viewport
  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;

  // Set the dimensions of the blur layer
  blurLayer.style.width = `${viewportWidth}px`;
  blurLayer.style.height = `${viewportHeight}px`;

  // Set the dimensions of the white layer
  const whiteLayerWidth = 0.8 * viewportWidth; // 80% of viewport width
  const whiteLayerHeight = 0.8 * viewportHeight; // 80% of viewport height
  whiteLayer.style.width = `${whiteLayerWidth}px`;
  whiteLayer.style.height = `${whiteLayerHeight}px`;

  // Function to toggle the menu when the menu icon is clicked

  circles.forEach((circle) => {
    const maxX = blurLayer.offsetWidth - circle.offsetWidth - 800;
    const maxY = blurLayer.offsetHeight - circle.offsetHeight - 800;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // Random hex color
    let randomSize; // Random size between 50 and 150 pixels

    if (window.innerWidth <= 768) {
      // For mobile devices
      randomSize = Math.floor(Math.random() * 50) + 50; // Random size between 50 and 100 pixels
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
      // For tablet devices
      randomSize = Math.floor(Math.random() * 100) + 250; // Random size between 600 and 700 pixels
    } else {
      randomSize = Math.floor(Math.random() * 100) + 600; // Random size between 600 and 700 pixels
    }

    circle.style.width = `${randomSize}px`;
    circle.style.height = `${randomSize}px`;
    circle.style.left = `${randomX}px`;
    circle.style.top = `${randomY}px`;
    circle.style.backgroundColor = randomColor;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dashboard = document.getElementById("dashboard");
  const about = document.getElementById("about");
  const contact = document.getElementById("contact");
  const privacyPolicy = document.getElementById("privacyPolicy");

  if (dashboard) {
    dashboard.onclick = () => {
      window.location.href = "dashboard";
    };
  } else {
    console.error("Element with ID 'Dashboard' not found.");
  }
  if (about) {
    about.onclick = () => {
      window.location.href = "about";
    };
  } else {
    console.error("Element with ID 'About' not found.");
  }
  if (contact) {
    contact.onclick = () => {
      window.location.href = "contact";
    };
  } else {
    console.error("Element with ID 'contact' not found.");
  }
  if (privacyPolicy) {
    privacyPolicy.onclick = () => {
      window.location.href = "privacy_policy";
    };
  } else {
    console.error("Element with ID 'Privacy Policy' not found.");
  }
});

function copyEmailAddress() {
  var emailAddress = document.getElementById("emailAddress").innerText;
  navigator.clipboard
    .writeText(emailAddress)
    .then(() => {
      var copyButton = document.getElementsByClassName("button-copy")[0];
      copyButton.textContent = "Copied!";
      setTimeout(() => {
        copyButton.textContent = "Copy";
      }, 2000); // Reset back to "Copy" after 2 seconds
    })
    .catch((err) => console.error("Failed to copy: ", err));
}

function reloadAndCheck() {
  location.reload();
  checkDesktopMode();
}

function checkDesktopMode() {
  if (window.innerWidth >= 1024) {
    hidePopup();
  } else {
    alert("You are not in Desktop Mode!");
  }
}

function hidePopup() {
  var overlay = document.getElementById("overlay");
  if (overlay) overlay.style.display = "none";

  var popup = document.getElementById("popup");
  if (popup) popup.style.display = "none !important";
}

// Call the checkDesktopMode function when the page loads
window.onload = function () {
  checkDesktopMode();
};

function emailMe() {
  window.location.href = "mailto:Panwara925@gmail.com";
}

function whatsappMe() {
  var defaultMessage = "Hello! I need your help.";
  var phoneNumber = "7000649593";
  window.open(
    "https://api.whatsapp.com/send?phone=" +
      phoneNumber +
      "&text=" +
      encodeURIComponent(defaultMessage)
  );
}

function toggleMenu() {
  var menuList = document.getElementById("menuList");
  if (menuList.style.display === "block") {
    menuList.style.display = "none";
  } else {
    menuList.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Card data (you can replace this with your actual data)
  const cardData = [
    {
      imageSrc: "images/game_icons/app_logo.jpg",
      title: "Brick Breaker",
      description:
        "Hit a home run with knowledge as you step up to bat in this American Baseball quiz!",
      link: "https://play.google.com/store/apps/details?id=com.bros.brickbreaker",
    },
    {
      imageSrc: "images/game_icons/cricket-quiz.png",
      title: "Cricket Quiz",
      description:
        "Hit a home run with knowledge as you step up to bat in this American Baseball quiz!",
      link: "https://play.google.com/store/apps/details?id=com.ganesh.cricket_quiz",
    },
    {
      imageSrc: "images/game_icons/american_football_quiz.png",
      title: "American Football Quiz",
      description:
        "Gear up for gridiron greatness with our American Football Quiz!",
      link: "https://play.google.com/store/apps/details?id=com.ganeshpanwar.american_football_quiz",
    },
    {
      imageSrc: "images/game_icons/american-cartoon-quiz.png",
      title: "American Cartoon Quiz",
      description:
        "Enter the colorful world of animation with our American Cartoon Quiz!",
      link: "https://play.google.com/store/apps/details?id=com.ganesh.cartoon_quiz_game",
    },
    {
      imageSrc: "images/game_icons/animals-quiz-new.png",
      title: "Animals Quiz New",
      description: "Embark on a wild adventure with our Animals Quiz New!",
      link: "https://play.google.com/store/apps/details?id=com.ganesh.animals_quiz",
    },
    {
      imageSrc: "images/game_icons/basketball-quiz.png",
      title: "Basketball Quiz",
      description: "Shoot hoops of knowledge with our Basketball Quiz!",
      link: "https://play.google.com/store/apps/details?id=com.ganeshpanwar.basketball_quiz",
    },
    {
      imageSrc: "images/game_icons/car-brand-logo-quiz.png",
      title: "Car Brand Logo Quiz",
      description:
        "Rev your engines and identify iconic brands in our Car Brand Logo Quiz!",
      link: "https://play.google.com/store/apps/details?id=com.ganeshpanwar.carlogoquiz",
    },
    {
      imageSrc: "images/game_icons/cartoon-quiz.png",
      title: "Cartoon Quiz",
      description:
        "Bring your favorite characters to life with our Cartoon Quiz!",
      link: "https://play.google.com/store/apps/details?id=com.ganesh.cartoon_quiz",
    },
    {
      imageSrc: "images/game_icons/famous-people-quiz.png",
      title: "Famous People Quiz",
      description: "Rub shoulders with greatness in our Famous People Quiz!",
      link: "https://play.google.com/store/apps/details?id=com.ganesh.famous_people_quiz_pro",
    },
    {
      imageSrc: "images/game_icons/flags-quiz.png",
      title: "Flags Quiz",
      description: "Wave your knowledge high in our Flags Quiz!",
      link: "https://play.google.com/store/apps/details?id=com.ganesh.flags_quiz",
    },
    {
      imageSrc: "images/game_icons/football-quiz.png",
      title: "Football Quiz",
      description:
        "Score big with our Football Quiz and tackle gridiron trivia!",
      link: "https://play.google.com/store/apps/details?id=com.ganesh.football_quiz_2021",
    },
    {
      imageSrc: "images/game_icons/guess_the_movie_quiz.png",
      title: "Guess the Movie Quiz",
      description: "Unlock cinematic brilliance with our Guess the Movie Quiz!",
      link: "https://play.google.com/store/apps/details?id=com.ganesh.guess_the_movie_quiz",
    },
    {
      imageSrc: "images/game_icons/hollywood-celebrity-quiz.png",
      title: "Hollywood Celebrity Quiz",
      description:
        "Walk the red carpet of stardom with our Hollywood Celebrity Quiz!",
      link: "https://play.google.com/store/apps/details?id=com.ganesh.hollywood_celebrity_quiz",
    },
    {
      imageSrc: "images/game_icons/logo-quiz-2021.png",
      title: "Logo Quiz 2021",
      description: "Decode brand identities and logos in our Logo Quiz 2021!",
      link: "https://play.google.com/store/apps/details?id=com.ganesh.logoquiz2021",
    },
    {
      imageSrc: "images/game_icons/sports_quiz_game.png",
      title: "Sports Quiz Game",
      description:
        "Go for gold in our Sports Quiz Game, where champions are made!",
      link: "https://play.google.com/store/apps/details?id=com.ganesh.olympic_sports_quiz",
    },
    {
      imageSrc: "images/game_icons/us-state-quiz.png",
      title: "US State Quiz",
      description:
        "Explore the fifty stars of the nation in our US State Quiz!",
      link: "https://play.google.com/store/apps/details?id=com.ganesh.us_states_quiz",
    },
    // Add more card data as needed
  ];
  // Function to create a card element
  function createCard(imageSrc, title, description, link) {
    // Create card elements
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = imageSrc;
    image.classList.add("app_logo");
    image.alt = "";

    const titleElement = document.createElement("h2");
    titleElement.textContent = title;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = description;

    const downloadButton = document.createElement("a");
    downloadButton.href = link;
    downloadButton.target = "_blank"; // Open link in a new tab
    downloadButton.classList.add("button");
    downloadButton.textContent = "Download";

    card.appendChild(image);
    card.appendChild(titleElement);
    card.appendChild(descriptionElement);
    card.appendChild(downloadButton);

    // Append the card to the container
    const container = document.getElementById("cardContainer");
    container.appendChild(card);
  }

  // Function to create cards from cardData
  function createCards() {
    cardData.forEach((item) => {
      createCard(item.imageSrc, item.title, item.description, item.link);
    });
  }

  // Call the function to create cards
  createCards();
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollContent = document.querySelector(".scroll-content");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  const cardWidth = document.querySelector(".row").offsetWidth;

  let scrollPosition = 0;

  prevButton.addEventListener("click", function () {
    scrollPosition -= cardWidth;
    if (scrollPosition < 0) {
      scrollPosition = 0;
    }
    scrollContent.style.transform = `translateX(-${scrollPosition}px)`;
  });

  nextButton.addEventListener("click", function () {
    const maxScroll = scrollContent.scrollWidth - scrollContent.clientWidth;
    if (scrollPosition < maxScroll) {
      scrollPosition += cardWidth;
      if (scrollPosition > maxScroll) {
        scrollPosition = maxScroll;
      }
      scrollContent.style.transform = `translateX(-${scrollPosition}px)`;
    }
  });
});
