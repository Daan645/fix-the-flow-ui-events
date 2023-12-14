// color button 
// select the element with id colorChange
let colorChange = document.querySelector('#colorChange');
// add an eventlistener on click, in the brackets i tell what the button has to do when its clicked
colorChange.addEventListener('click', function (){
  console.log('Button clicked!'); // Log een bericht naar de console om te controleren of het event wordt gedetecteerd
  // Get the element with the id colorChange and changes the css to background-color red
  document.getElementById('colorChange').style.cssText = 'background-color: red;'
  console.log('Background color changed to red!'); // bevestiging voor het veranderen van de achtergrond
});

// plus one function
// voeg een eventListener toe aan het element cijfer. Ook wordt er een function toegekend. Je zegt dus eigenlijk voer de functie uit wanneer er op cijfer wordt geklikt door type click
let cijfer = 0;
let plusOne = document.querySelector('#plusOne');
plusOne.addEventListener('click', function () {
  // wanneer er op cijfer wordt geklikt tel je 1 op bij de variabele een
  cijfer++;
  // de waarde van cijfer wordt in de tekst van de knop geplaatst wanneer er is geklikt
    plusOne.innerText = cijfer;
  //laat waarde cijfer zien met console log
  console.log(cijfer);
});









let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}



