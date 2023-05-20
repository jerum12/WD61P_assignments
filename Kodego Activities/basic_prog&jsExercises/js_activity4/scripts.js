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

  
  for (let i = 0; i < presidents.length; i++){

   let divE = document.createElement('div');
    divE.setAttribute ('class', 'card');

   let h1E = document.createElement ('h1');
   divE.appendChild (h1E);
   h1E.classList.add ('card');
   h1E.textContent = presidents [i].name;
   
   let pE = document.createElement ('p');
   divE.appendChild (pE);
   pE.classList.add ('card');
   pE.textContent = presidents [i].details;
   pE.setAttribute ("style", "text-align:center");
   
   document.getElementById("root").appendChild(divE);

  } 
  
   







 

    
        
        
    

    