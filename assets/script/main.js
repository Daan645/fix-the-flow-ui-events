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

// doubleclickcheck function
// click
// selecteer het element doucleclickCheck
let doubleclickCheck = document.querySelector('#doubleclickCheck');
//voeg een event listener toe die een functie activeert wanneer er wordt geklikt
doubleclickCheck.addEventListener('click', function (){
  // verander de tekst van het element met id doubleclickCheck naar je moet 2 keer klikken!
  doubleclickCheck.innerText = "Je moet 2 keer klikken!"
  // Verander de achtergrond kleur naar rood
  document.getElementById('doubleclickCheck').style.cssText = 'background-color: red';
  // laat de tekst single click zien als er een keer op het a element is geklikt
  console.log('single click');
});

// dubbelklik
//voeg een event listener toe die een functie activeert wanneer er wordt gedubbelklikt
doubleclickCheck.addEventListener('dblclick', function (){
  // verander de tekst van het element met id doubleclickCheck naar goedzo! als er gedubbeklikt wordt
 doubleclickCheck.innerText = "Goedzo!"
  // Verander de achtergrond kleur naar rood
    document.getElementById('doubleclickCheck').style.cssText = 'background-color: green';
  // laat de tekst single click zien als er een keer op het a element is geklikt
  console.log('doubleclick');
});








let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}



