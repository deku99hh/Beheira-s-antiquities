let theme = localStorage.getItem('theme')||'light';
let lang = localStorage.getItem('lang')||'arabic';
console.log(theme);
console.log(lang);

// if(localStorage.getItem('theme')){
//   console.log('dark');
// }else{
//   console.log('no');
// };

const body = document.body;

addEventListener('DOMContentLoaded',()=>{

  body.classList.remove('arabic', 'english');
  body.classList.add(lang);


  body.classList.remove('dark', 'light', 'lightc');
  body.classList.add(theme);
});

function addarabic(){
  body.classList.remove('arabic', 'english');
  body.classList.add('arabic');
  localStorage.setItem('lang', 'arabic');
}
function addenglish(){
  body.classList.remove('arabic', 'english');
  body.classList.add('english');
  localStorage.setItem('lang', 'english');

}

function addlight(){
  body.classList.remove('dark', 'light');
  body.classList.add('light');
  localStorage.setItem('theme', 'light');
}
function adddark(){
  body.classList.remove('dark', 'light');
  body.classList.add('dark');
  localStorage.setItem('theme', 'dark');
}