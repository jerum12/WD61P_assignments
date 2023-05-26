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
let a = document.querySelector(`#root`);
let image = document.createElement(`img`);
image.setAttribute(`src`, `logo.png`);
document.querySelector(`#root`).appendChild(image);

let div = document.createElement(`div`);
a.appendChild(div);
div.setAttribute(`class`, `container`);

// let card = document.createElement(`div`);
// div.appendChild(card);
// card.setAttribute(`class`, `card`);

// let presName = document.createElement(`h1`);
// card.appendChild(presName);
// presName.setAttribute(`class`, `card-title`);
// presName.innerHTML = presidents[i].name;

const list = () => {
  for (let i = 0; i < presidents.length; i++) {
    let card = document.createElement(`div`);
    div.appendChild(card);
    card.setAttribute(`class`, `card`);

    let presName = document.createElement(`h1`);
    card.appendChild(presName);
    presName.setAttribute(`class`, `card-title`);
    presName.innerHTML = presidents[i].name;

    let cardBody = document.createElement(`card-text`);
    card.appendChild(cardBody);
    cardBody.setAttribute(`class`, `card-body`);

    let presYears = document.createElement(`card-text`);
    card.appendChild(presYears);
    presYears.setAttribute(`class`, `card-text`);
    presYears.innerHTML = presidents[i].details;
  }
};
list();
