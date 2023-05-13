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

var body = document.getElementById('root');

//show logo
const img = document.createElement('img');
img.src = 'logo.png';
img.width = 95;
img.height = 95;
img.classList.add('mt-1');
img.classList.add('mb-2');
body.appendChild(img);

//presidents and duration of service
var cardContainer = document.createElement('div');
cardContainer.classList.add('container');

//loop
var presLength = presidents.length;
for (let i=0; i<presLength; i++) 
  {
  //border
  var element = document.createElement('div');
  element.classList.add('card');
  element.classList.add('mb-2');
  cardContainer.appendChild(element);
  
  //contents
    //president names
    var presName = document.createElement('h1');
    presName.innerHTML = presidents[i].name;
    presName.classList.add('h5');
    element.appendChild(presName);

    //dates
    var dates = document.createElement('p');
    dates.innerHTML = presidents[i].details;
    dates.classList.add('text-center');
    element.appendChild(dates);
  }
body.appendChild(cardContainer);
