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

   var div = document.getElementById("root");
   div.appendChild(img);
   div.setAttribute("style", "text-align:center");

   const root = document.getElementById("root");

for (let i = 0; i < presidents.length; i++){
   console.log(presidents[i])

   const root = document.querySelector('#root');

   const div = document.createElement('div');
  //  const name = document.createElement('h4');
   const details = document.createElement('h6');
   div.classList = 'card'
   div.innerHTML = '<div class="card fs-4 col-4">' + `${presidents [i].name}` + '</div>';
   div.details = '<div class="card fs-6 col-4">' + `${presidents [i].details}` + '</div>';
  //  name.innerText = `${presidents [i].name}`
   details.innerText =`${presidents [i].details}`

  //  div.appendChild(name)
   div.appendChild(details)
   root.appendChild(div)

}






 

    
        
        
    

    