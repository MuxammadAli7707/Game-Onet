const elList = document.getElementById("list");

let game = []; 
for (let i = 0; i < 4; i++) {
  pokemons.forEach((item) => {
    game.push(item);
  })
}
let num = 60;
for (let i = 0; i < 500; i++) {
    const idx1 = Math.floor(Math.random() * num);
    const idx2 = Math.floor(Math.random() * num);

    const temp = game[idx1];
    game[idx1] = game[idx2];
    game[idx2] = temp;
} 

let x = 1;
let y = 1;
game.forEach((item) => {
  if(x > 10){
    x = 1;
    y++;
  }
  let li = document.createElement("li");
  li.className = "game__item";
  li.classList.add(`X-${x}`);
  li.classList.add(`Y-${y}`);
  li.classList.add(`id-${item.id}`)
  li.innerHTML = `
    
    <button id="btn" class="game__btn">
      <img class="game__img" id="${item.id}" src="${item.img}" alt="img">
    </button>
  `;
  elList.appendChild(li); 
  x++;
});

const elBtn = document.querySelectorAll("#btn");
elBtn.forEach(item => {
  item.addEventListener("click", ()=> {
    elBtn.forEach(el => {
      el.classList.remove("danger");
    });
    item.classList.add("danger");
  })
});

const elNum = document.getElementById("num");
const elItems = document.querySelectorAll('#btn');

let count = 1;

elItems.forEach(el =>{
  el.addEventListener('click', (e) =>{
    let one = e.target.id;
    elItems.forEach(item =>{
      item.addEventListener('click', (e)=>{
        let two = e.target.id;
        if(one === two){
          item.classList.add('removing');
          el.classList.add('removing');
          elNum.textContent = count++;
          console.log(elNum);
        }
        else if(one !== two) {
          item.classList.remove('removing');
        }
      });
    });
  });
});

document.getElementById('time').innerHTML = 03 + ":" + 1;
Timing();

function Timing() {
  let timer = document.getElementById('time').innerHTML;
  let mass = timer.split(/[:]+/);
  let min = mass[0];
  let sin = checkSecond((mass[1] - 1));
  if(sin == 59){min = min - 1}
  if(min < 0){
    alert("Game over");
    return
  }
  
  document.getElementById('time').innerHTML = min + ":" + sin;
  setTimeout(Timing, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec};
  if (sec < 0) {sec = "59"};
  return sec;
}

