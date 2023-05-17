let display = document.getElementById('displayText');
let buttons = Array.from(document.getElementsByTagName('button'));

 buttons.map( button => {
     button.addEventListener('click', (e) => {
         switch (e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '←':
                display.innerText = display.innerText.slice(0,-1);
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                    } catch {
                        display.innerText = 'Undefined';
                    }
                break;
            default:
                display.innerText += e.target.innerText;
         }
     })
 })