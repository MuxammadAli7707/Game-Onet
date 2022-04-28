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
// let arr = [];

// for(let i = 0; i < 8; i++){
//   for(let j = 0; j < 12; j++){
//     arr.push({
//       y: i, 
//       x: j,
//       isBusy: false
//     });
//   }
// }

// let x = 0;
// let y = 0;

// arr.forEach(_ => {
//   if(x > 11){
//     x = 0;
//     y++;
//   }
//   let elItem = document.createElement("li");

//   elItem.className = `game__item y-${y} x-${x}`;

//   elList.appendChild(elItem);
//   x++;
// })

// let elArr = [];

// for (let i = 0; i < 4; i++) {
//   pokemons.forEach((item) => {
//     elArr.push(item);
//   })
// }

// for (let i = 0; i < 100; i++) {
//   let idx1 = Math.floor(Math.random() * 60);
//   let idx2 = Math.floor(Math.random() * 60);

//   let temp = elArr[idx1];
//   elArr[idx1] = elArr[idx2];
//   elArr[idx2] = temp;
// }

// let elItems = document.querySelectorAll(".game__item");

// let j = 0;
// arr.forEach(item => {
//   if(item.y != 0 && item.x != 0 && item.y != 7 && item.x != 11){
//     item.isBusy = true;
//     for(let i = 0; i < elItems.length; i++){
//       if(elItems[i].classList.contains(`y-${item.y}`) && elItems[i].classList.contains(`x-${item.x}`)){
//         elItems[i].classList.add(`${elArr[j].id}`)
//         elItems[i].innerHTML = `
//           <img src="${elArr[j].img}">
//         `;
//         break;
//       }
//     }  
//     j++;
//     if(j == 100){
//       j = 0;
//     }
//   } else{
//     for(let i = 0; i < elItems.length; i++){
//       if(elItems[i].classList.contains(`y-${item.y}`) && elItems[i].classList.contains(`x-${item.x}`)){
//         elItems[i].style.opacity = "0";
//         elItems[i].style.cursor = "default";
//         break;
//       }
//     } 
//   }
// });

// let yArray = [];
// let xArray = [];
// let elIdArr = [];
// let elLis = [];

// elItems.forEach(item => {
//   item.addEventListener("click", () => {
//     elItems.forEach(color => {
//       if(!(color.id.includes("through"))){
//         color.style.background = "#f8f6d8";
//       }
//     });
//     if(!(item.id.includes("through"))){
//       item.style.background = "red";
//     }
//     if(yArray.length > 1 && xArray.length > 1 && elIdArr.length > 1 && elLis.length > 1){
//       yArray.length = 0;
//       xArray.length = 0;
//       elIdArr.length = 0;
//       elLis.length = 0;
//     }
//     let y = item.classList[1].slice(-1);
//     let x = item.classList[2].slice(-1);
//     let id = item.classList[3];
//     arr.forEach(value => {
//       if(value.y == y && value.x == x){
//         yArray.push(y);
//         xArray.push(x);
//         elIdArr.push(id);
//         elLis.push(item);
//       }
//     });
//     if(yArray.length > 0 && xArray.length > 0){
//       if(yArray[0] == yArray[1] || xArray[0] == xArray[1]){
//         if(elIdArr[0] == elIdArr[1]){
//           if(elLis[0].className != elLis[1].className){
//             elLis.forEach(element => {
//               element.innerHTML = "";
//               element.id = "through";
//               element.style.background = "#1c1f41";
//             })
//           }
//         }
//       }
//     }
//   });
// }); 