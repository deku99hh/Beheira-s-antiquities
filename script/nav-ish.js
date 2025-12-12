
// const arabicBTN = document.querySelector('.arabic');
// const englishBTN = document.querySelector('.english');
const body = document.body;

addEventListener('DOMContentLoaded',()=>{

  body.classList.remove('arabic', 'english');
  body.classList.add('arabic');


  body.classList.remove('dark', 'light');
  body.classList.add('light');


  // arabicBTN.addEventListener('click', () => {
  //   body.classList.remove('arabic', 'english');
  //   body.classList.add('arabic');
  // });
  // englishBTN.addEventListener('click', () => {
  //   body.classList.remove('arabic', 'english');
  //   body.classList.add('english');
  // });
});

function addarabic(){
  body.classList.remove('arabic', 'english');
  body.classList.add('arabic');
}
function addenglish(){
  body.classList.remove('arabic', 'english');
  body.classList.add('english');
}

function addlight(){
  body.classList.remove('dark', 'light');
  body.classList.add('light');
}
function adddark(){
  body.classList.remove('dark', 'light');
  body.classList.add('dark');
}