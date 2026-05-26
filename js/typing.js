const text = 'Portfólio de Dados & BI';

const typingElement =
document.getElementById('typing-text');

let index = 0;

function typeText(){

  if(index < text.length){

    typingElement.innerHTML +=
    text.charAt(index);

    index++;

    setTimeout(typeText, 90);

  }

}

typeText();