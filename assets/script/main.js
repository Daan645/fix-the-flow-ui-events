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

// grow function
// selecteer het element mouseoverGrow
let mouseoverGrow = document.querySelector('#mouseoverGrow');
// voer de functie uit warneer er over het a element wordt gehoverd
mouseoverGrow.addEventListener('mouseover', function (){
   // voeg grow selector toe die de animatie triggerd vanuit de css
   mouseoverGrow.classList.add('grow'); 
   console.log('hovered');
});
// wanneer er geanimeerd is voer deze functie uit
mouseoverGrow.addEventListener('animationend', function () {
    // Verwijder de 'grow'-klasse wanneer de animatie eindigt
    mouseoverGrow.classList.remove('grow'); 
});

// down function
// selecteer het element met id down
let down = document.querySelector('#down');
// voeg een eventlistener toe en voer checkeypressed uit wanner down key is gedrukt staat standaard op false
document.addEventListener("keydown", checkKeyPressed, false);
// functie checkkeypressed
function checkKeyPressed(e) {
    // als de keycode gelijkstaat aan 40 (code voor down key) voor dan onderstaand uit
    if (e.keyCode === 40) {
        // koppel de class down aan het element down en toggle deze (zet aan)
        down.classList.toggle('down');
        // laat in het console een bericht zien als de down key is ingedrukt
        console.log('im pressed');
    }
}

// zigzag function
// selecteer het element met id zigzag
let zigzag = document.querySelector('#zigzag');
// voeg een eventlistener toe op het element met id zigzag die een functie uitvoerd wanner er is geklikt
zigzag.addEventListener('click', function () {
    // Toggle (voer uit) de class zigzag (mijn animatie)
    zigzag.classList.toggle('zigzag');
    // zeg wanner je geklikt bent
    console.log("clicked");
});

// dissapear function
// selecteer het element met id dissapear
let dissapear = document.querySelector('#dissapear');
// voeg een eventlistener toe op het element met id dissapear die een functie uitvoert wanner er is geklikt
dissapear.addEventListener('mouseover', function () {
    // Toggle (voer uit) de class dissapear (mijn animatie)
    dissapear.classList.toggle('dissapear');
    // zeg wanner je gehovert bent
    console.log("mouseover");
});

// shake function
// selecteer het element met id shake
let shake = document.querySelector('#shake');
// voeg een eventlistener toe op het element met id shake die een functie uitvoert wanneer er is geklikt
shake.addEventListener('click', function (){
   //  toggle de animatie class op het element met het id shake
   shake.classList.toggle('shake')
    // laat in het console bericht zien wanneer er op het a element is geklikt
    console.log('ik ben geklikt');
});

// spin function
// selecteer het element met id spin
let spin = document.querySelector('#spin');
// voeg een eventlistener toe op het element met id spin die een functie uitvoert wanneer er is geklikt
spin.addEventListener('mouseover', function (){
    //  toggle de animatie class op het element met het id spin
    spin.classList.toggle('spin')
    // laat in het console bericht zien wanneer er op het a element is gehoverd
    console.log('ik ben gehovert');
});

// rainbow function
// selecteer het element met id rainbow
let rainbow = document.querySelector('#rainbow');
// voeg een eventlistener toe op het element met id rainbow die een functie uitvoert wanneer er is geklikt
rainbow.addEventListener('click', function (){
    //  toggle de animatie class op het element met het id rainbow
    rainbow.classList.toggle('rainbow')
    // laat in het console bericht zien wanneer er op het a element is geklikt
    console.log('ik ben geklikt');
});












let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}



