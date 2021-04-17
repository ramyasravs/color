//colors array
let colors=['blue','yellow','black','pink','green','red'];

//get button
let button=document.getElementById('button');

//add event listener
button.addEventListener('click',function(){
 //randomizer
 var randomcolor=colors[Math.floor(Math.random()*colors.length)]
 //get contaiiner
 let container=document.getElementById('container');
 container.style.background=randomcolor;
})