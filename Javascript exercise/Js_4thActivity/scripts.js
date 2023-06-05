var presidents = [
  {
    name: "Bongbong Marcos",
    details: "2022-Present",
  },
  {
    name: "Rodrigo Duterte",
    details: "2016-2012",
  },
  {
    name: "Benigno Aquino III",
    details: "2010-2016",
  },
  {
    name: "Gloria Macapagal Arroyo",
    details: "2001-2010",
  },
  {
    name: "Joseph Ejercito Estrada",
    details: "1998-2001",
  },
  {
    name: "Fidel V. Ramos",
    details: "1992-1998",
  },
  {
    name: "Corazon Aquino",
    details: "1986-1992",
  },
  {
    name: "Ferdinand Marcos",
    details: "1965-1986",
  },
  {
    name: "Diosdado Macapagal",
    details: "1961-1965",
  },
];

// Get the root container element
var rootContainer = document.getElementById("root");

var inputElement = document.createElement("img");
inputElement.setAttribute("style", "justify-content: center");

inputElement.type = "image";
inputElement.src = "logo.png";
rootContainer.appendChild(inputElement);

// Create a container for the cards
var cardContainer = document.createElement("div");
cardContainer.classList.add("container"); // Add the "container" class

// Append the card container to the root container
rootContainer.appendChild(cardContainer);

// Loop through the array of presidents
for (var i = 0; i < presidents.length; i++) {
  // Create a card element
  var card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("style", "width: calc(33% - 2rem)"); // Set the card width to fit in a 3x3 grid

  // Create a heading element for the president's name
  var nameHeading = document.createElement("h1");
  nameHeading.textContent = presidents[i].name;

  // Create a paragraph element for the president's details
  var detailsParagraph = document.createElement("p");
  detailsParagraph.setAttribute("style", "text-align: center");
  detailsParagraph.textContent = presidents[i].details;

  // Append the heading and paragraph elements to the card
  card.appendChild(nameHeading);
  card.appendChild(detailsParagraph);

  // Append the card to the card container
  cardContainer.appendChild(card);
}
