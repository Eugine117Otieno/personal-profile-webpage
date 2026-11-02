
// Personal information
const myName = "Eugine Rolex";

// Favourite activities array
const favoriteActivities = [
    "Coding and creating websites",
    "Learning computer skills",
    "Playing games",
    "Exploring technology"
];


// Display favourite activities
const activitiesList =
    document.getElementById("activities-list");

favoriteActivities.forEach(function(activity) {

    const listItem = document.createElement("li");

    listItem.textContent = activity;

    activitiesList.appendChild(listItem);

});


// FEATURE 1: SHOW MORE ABOUT ME

const moreButton =
    document.getElementById("more-button");

const moreInfo =
    document.getElementById("more-info");

function toggleMoreInfo() {

    if (moreInfo.hidden) {

        moreInfo.hidden = false;

        moreButton.textContent =
            "Hide More About Me";

    } else {

        moreInfo.hidden = true;

        moreButton.textContent =
            "Show More About Me";

    }

}

moreButton.addEventListener("click", toggleMoreInfo);


// FEATURE 2: CHANGE BACKGROUND

const backgroundButton =
    document.getElementById("background-button");

let blueBackground = true;

function changeBackground() {

    if (blueBackground) {

        document.body.style.backgroundColor =
            "lightblue";

    } else {

        document.body.style.backgroundColor =
            "purple";

    }

    blueBackground = !blueBackground;

}

backgroundButton.addEventListener(
    "click",
    changeBackground
);


// FEATURE 3: GREET ME!

const greetButton =
    document.getElementById("greet-button");

const greeting =
    document.getElementById("greeting");

function greetVisitor() {

    const visitorName =
        prompt("What is your name?");

    if (visitorName && visitorName.trim() !== "") {

        greeting.textContent =
            "Hello, " + visitorName.trim() +
            "! Welcome to " + myName + "'s profile.";

    } else {

        greeting.textContent =
            "Hello there! Welcome to my profile.";

    }

}

greetButton.addEventListener(
    "click",
    greetVisitor
);


// BONUS: CHANGE TEXT COLOUR

const textButton =
    document.getElementById("text-button");

const nameHeading =
    document.getElementById("name-heading");

const headingColours = [
    "red",
    "green",
    "blue",
    "orange",
    "purple"
];

let colourIndex = 0;

function changeTextColour() {

    nameHeading.style.color =
        headingColours[colourIndex];

    colourIndex =
        (colourIndex + 1) % headingColours.length;

}

textButton.addEventListener(
    "click",
    changeTextColour
);
