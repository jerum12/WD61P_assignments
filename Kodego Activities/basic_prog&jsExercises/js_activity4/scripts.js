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

   

   const img = document.createElement("img");
   img.src = "logo.png";
   img.setAttribute("style", "margin-top: 10px;");

   document.getElementById("root").appendChild(img);
   img.setAttribute("style", "text-align:center");


  var body = document.getElementById('root');
  
  const presidentBody = document.querySelector('#root');

  const presidentDiv =  document.createElement('div');
  presidentBody.appendChild(presidentDiv);
  presidentDiv.setAttribute('class', 'container');


  const presidentCards = () => {
    for (i = 0 ; i < presidents.length ; i++){ 
      const presidentCard =  document.createElement('div');
      presidentDiv.appendChild(presidentCard);
      presidentCard.setAttribute('class', 'card');

      const CardPresident = document.createElement('h1');
      presidentCard.appendChild(CardPresident);
      CardPresident.setAttribute('class','card-title');
      CardPresident.style.padding = '10px'
      CardPresident.innerHTML = presidents[i].name;

      const YearCard = document.createElement('div');
      presidentCard.appendChild(YearCard);
      YearCard.setAttribute('class','card-body');

      const YearCardValue = document.createElement('p');
      YearCard.appendChild(YearCardValue);
      YearCardValue.style.textAlign = 'center';
      YearCardValue.style.padding = '0px'
      YearCardValue.innerHTML = presidents[i].details;
      }
    }
  presidentCards();
  