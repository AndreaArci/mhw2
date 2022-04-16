function checked(event){
  const im = event.currentTarget;
  im.dataset.questionId;


  for(let i of images)
    if(im.dataset.questionId==i.dataset.questionId){
    const e=i.querySelector('.checkbox');
    e.src='images/unchecked.png';
    i.classList.remove('overlay');
    }


  const h=im.querySelector('.checkbox');
  h.src='images/checked.png';
  im.classList.add('overlay');


  if (im.dataset.questionId=="one") risposte.one = im.dataset.choiceId;
    else if(im.dataset.questionId=="two") risposte.two = im.dataset.choiceId;
    else if(im.dataset.questionId=="three") risposte.three = im.dataset.choiceId;


if(risposte.one!=null && risposte.two!=null && risposte.three!=null){
  for(let im of images) im.removeEventListener('click', checked);
  if(risposte.one==risposte.two || risposte.one==risposte.three) result=risposte.one;
    else if(risposte.two==risposte.three) result=risposte.three;
    else if(risposte.one!=risposte.two && risposte.one!=risposte.three && risposte.two!=risposte.three) result=risposte.one;


const newDesc = document.createTextNode(RESULTS_MAP[result].contents);

document.getElementById("DESCRIZIONE").appendChild(newDesc);

const newTit = document.createTextNode(RESULTS_MAP[result].title);

document.getElementById("TITOLO").appendChild(newTit);

const L= document.querySelector('.hidden');

L.classList.remove('hidden');
}}


let risposte = {
  one: null, 
  two: null,
  three: null
}

let result;


function ResetQuiz(event){

  const Q1= document.querySelector('#Esito');
  Q1.classList.add('hidden');


  for(let i of images){
    i.classList.remove('overlay');
    let chk=i.querySelector('.checkbox');
    chk.src='images/unchecked.png';
  }


  for(let ii of images) ii.addEventListener('click', checked);
    

  risposte.one=null;
  risposte.two=null;
  risposte.three=null;
}


const Q= document.querySelector('button');

Q.addEventListener('click', ResetQuiz);
 
const images =  document.querySelectorAll('.choice-grid div');

for(let im of images) im.addEventListener('click', checked);


