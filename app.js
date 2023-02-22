const header = document.querySelector('.navbar');
const sectionOne = document.querySelector('.content');

const sectionOneOptions = {
  rootMargin: "-400px 0px 0px 0px"
};

const sectionOneObserver= new IntersectionObserver(function(
  entries, 
  sectionOneObserver
) {
   entries.forEach( entry => {
     if(!entry.isIntersecting){
      header.classList.add("nav-scrolled");
     }else{
      header.classList.remove("nav-scrolled")
     }
   })
},
 sectionOneOptions);

 sectionOneObserver.observe(sectionOne);

//For back to top button
const buttonWay = document.getElementById('myBtn');

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
  if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500 ){
    buttonWay.style.display = "block";
  } else{
    buttonWay.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; //For safari
  document.documentElement.scrollTop = 0; //For Chrome, opera mini and Firefox
}


//For text animation
const text = document.querySelector('.fancy');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = ""

for(let i=0; i < splitText.length; i++){
    text.innerHTML += "<span>"+ splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char === splitText.length){
        complete();
        return;
    }
}
function complete(){
    clearInterval(timer);
    timer = null;
};


const checkBox = document.getElementById('showDrop');
const dropMenu = document.getElementById('dropdown');

checkBox.addEventListener('click', () => {
  document.getElementById('dropdown').style.display = "block";
});


const radioone = document.querySelector('.radio-2');
const radioTwo = document.querySelector('.radio-3');

function myFunction() {
  if(radio.addEventListener('click')){
    document.querySelector('.number').style.display = "none";
  }else{
    document.querySelector('number').style.display = "flex";
  }
  
}

window.addEventListener("load", function(){
  setTimeout(
    function open(event){
      document.querySelector(".preloader").style.display = "none";
    },
    3500
  )
});
