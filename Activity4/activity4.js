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

  let imgLogo = document.createElement('img');
  imgLogo.setAttribute('src', 'logo.png');
  document.querySelector('#root').appendChild(imgLogo);

  let divContainer = document.createElement('div');
   divContainer.setAttribute('class', 'container');

  
  for (let i =0; i<presidents.length; i++){
  
    let divE = document.createElement('div');
    divE.setAttribute('class', 'card');

    let h1 = document.createElement('h1');
    divE.appendChild(h1);
    divE.setAttribute('class','card', 'card:hover','h1',);
    h1.innerHTML = presidents[i].name;

    let p1 = document.createElement('p');
    divE.appendChild(p1)
    p1.setAttribute('class', 'p',);
    p1.style.textAlign = 'center';
    p1.innerHTML = presidents[i].details;

    divContainer.appendChild(divE);

    }

 document.querySelector('#root').appendChild(divContainer);