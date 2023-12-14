// color button 
let colorChange = document.querySelector('#colorChange');
// add an eventlistener on click, in the brackets i tell what the button has to do when its clicked
colorChange.addEventListener('click', function (){
  document.getElementById('colorChange').style.cssText = 'background-color: red;'

});








let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}



