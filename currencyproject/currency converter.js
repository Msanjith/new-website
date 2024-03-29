/*let select = document.querySelectorAll('.currency')
let btn = document.getElementById('btn')
let input = document.getElementById('input')
const loader = document.getElementById('loader'); 
    
fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(res=>displayDropDown(res))

function displayDropDown(res){
  //convert object to array for looping
  let curr = Object.entries(res)
  for(let i=0;i<curr.length;i++){
    let opt = `<option value="${curr[i][0]}">${curr[i][0]}</option>`
    select[0].innerHTML += opt
    select[1].innerHTML += opt
  }
}
//this function joining the all data
 btn.addEventListener('click',()=>{
  
  let curr1 = select[0].value
  let curr2 = select[1].value
  let inputVal = input.value
  if(curr1===curr2)
    alert("Choose different currencies")
  else
    convert(curr1,curr2,inputVal)

    
});


//this function convert the cuurnecy
function convert(curr1,curr2,inputVal){
  const host = 'api.frankfurter.app';
  loader.style.display = 'block';
  fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) => {
    
    loader.style.display = 'none'; 
        document.getElementById('result').value = Object.values(data.rates)[0]
    
    
  });
  
}*/
let select = document.querySelectorAll('.currency');
let input = document.getElementById('input');
const loader = document.getElementById('loader'); 

fetch('https://api.frankfurter.app/currencies')
.then(res => res.json())
.then(res => displayDropDown(res));

function displayDropDown(res){
  //convert object to array for looping
  let curr = Object.entries(res);
  for(let i = 0; i < curr.length; i++){
    let opt = `<option value="${curr[i][0]}">${curr[i][0]}</option>`;
    select[0].innerHTML += opt;
    select[1].innerHTML += opt;
  }
}

input.addEventListener('input', () => {
  convert();
});

function convert(){
  let curr1 = select[0].value;
  let curr2 = select[1].value;
  let inputVal = input.value;
  if(curr1 === curr2){
    alert("Choose different currencies");
    return;
  }
  loader.style.display = 'block';
  const host = 'api.frankfurter.app';
  fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) => {
    loader.style.display = 'none'; 
    document.getElementById('result').value = Object.values(data.rates)[0];
  });
}