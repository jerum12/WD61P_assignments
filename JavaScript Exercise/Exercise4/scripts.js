var presidents = [
  {
    name: 'Bongbong Marcos',
    details: '2022-Present',
  },
  {
    name: 'Rodrigo Duterte',
    details: '2016-2012',
  },
  {
    name: 'Benigno Aquino III',
    details: '2010-2016',
  },
  {
    name: 'Gloria Macapagal Arroyo',
    details: '2001-2010',
  },
  {
    name: 'Joseph Ejercito Estrada',
    details: '1998-2001',
  },
  {
    name: 'Fidel V. Ramos',
    details: '1992-1998',
  },
  {
    name: 'Corazon Aquino',
    details: '1986-1992',
  },
  {
    name: 'Ferdinand Marcos',
    details: '1965-1986',
  },
  {
    name: 'Diosdado Macapagal',
    details: '1961-1965',
  },
];


/* MY CODE STARTS HERE */

let rootDiv = document.querySelector("#root");

/* CREATE LOGO */
const createLogo = () => {
  const imgLogo = document.createElement("img");
  imgLogo.src = "logo.png";
  imgLogo.style.width = "120px";

  rootDiv.appendChild(imgLogo);
}

/* CREATE CONTAINER FOR CARDS */
const createCardContainer = () => {
  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("container");

  /* CREATE CARDS */
  const newCard = (presidentList) => {

    for (let v in presidentList) {
      const card = document.createElement("div");
      card.classList.add("card");
      cardsContainer.appendChild(card);

      /* CREATE AND ADD PRESIDENT NAME */
      let presidentName = document.createElement("h1");
      presidentName.classList.add("fs-5");
      presidentName.innerHTML = presidentList[v].name;
      card.appendChild(presidentName);

      /* CREATE AND ADD DATES */
      let dates = document.createElement("p");
      dates.classList.add("text-center");
      dates.innerHTML = presidentList[v].details + "...";
      card.appendChild(dates);
    }

  }

  newCard(presidents);
  rootDiv.appendChild(cardsContainer);
}

createLogo();
createCardContainer();