let mybutton = document.getElementById("scrollToTopBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
mybutton.addEventListener('click', topFunction);






let khrashiTimer = 0;
let onof=0;

let khrashi = document.querySelector('#khrashi img');

khrashi.addEventListener('click',()=>{
  khrashiTimer=khrashiTimer+1;
  console.log(khrashiTimer);

  if(onof==0){
    onof=1;
    setTimeout(() => {
    if(khrashiTimer>=5){
      khrashiTimer=0;
      console.log('botato!');
      khrashiTheMan();
    }else{
      khrashiTimer=0;
    }
    onof=0;
  }, 2000)

  }
});

console.log(khrashi);

function khrashiTheMan(){
  let khrashikhrashiTheMan = document.getElementById('khrashikhrashiTheMan');
  khrashikhrashiTheMan.classList.add('animation');
  setTimeout(()=>{
    khrashikhrashiTheMan.classList.remove('animation');
  },3000)

};

// 0000000000000000000000

let rashedTimer = 0;
let onofR=0;

let aboabdellah = document.querySelector('#abo-abdellah img');

aboabdellah.addEventListener('click',()=>{
  rashedTimer=rashedTimer+1;
  console.log(rashedTimer);

  if(onofR==0){
    onofR=1;
    setTimeout(() => {
    if(rashedTimer>=5){
      rashedTimer=0;
      console.log('botato!');
      RashedTheMan();
    }else{
      rashedTimer=0;
    }
    onofR=0;
  }, 2000)

  }
});

console.log(aboabdellah);

function RashedTheMan(){
  let RashedRashedTheMan = document.getElementById('me');
  RashedRashedTheMan.classList.add('animation');
  setTimeout(()=>{
    RashedRashedTheMan.classList.remove('animation');
  },3000)

};



const arabicBTN = document.querySelector('.arabic');
const englishBTN = document.querySelector('.english');
const body = document.body;

addEventListener('DOMContentLoaded',()=>{

  body.classList.remove('arabic', 'english');
  body.classList.add('arabic');


  arabicBTN.addEventListener('click', () => {
    body.classList.remove('arabic', 'english');
    body.classList.add('arabic');
  });
  englishBTN.addEventListener('click', () => {
    body.classList.remove('arabic', 'english');
    body.classList.add('english');
  });
});
