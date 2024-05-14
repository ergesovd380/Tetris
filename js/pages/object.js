const Items = document.querySelectorAll('.custom-select-items');

document.addEventListener('DOMContentLoaded', () => {
  Items.forEach((e) => {
    e.classList.add('d-none')
  })
})

// Номер
const numberSelected = document.querySelector('.number-selected');
const numberItems = document.querySelector('.number-items');
numberSelected.addEventListener('click', ()=>{
  if(numberItems.classList.contains('d-none')) {
    numberItems.classList.remove('d-none');
    numberItems.classList.add('d-block');
  } else {
    numberItems.classList.remove('d-block');
    numberItems.classList.add('d-none');
  }
})
// Корпус
const korpusSelected = document.querySelector('.korpus-selected');
const korpusItems = document.querySelector('.korpus-items');
korpusSelected.addEventListener('click', ()=>{
  if(korpusItems.classList.contains('d-none')) {
    korpusItems.classList.remove('d-none');
    korpusItems.classList.add('d-block');
  } else {
    korpusItems.classList.remove('d-block');
    korpusItems.classList.add('d-none');
  }
})
// Способ оплаты
const waySelected = document.querySelector('.way-selected');
const wayItems = document.querySelector('.way-items');
waySelected.addEventListener('click', ()=>{
  if(wayItems.classList.contains('d-none')) {
    wayItems.classList.remove('d-none');
    wayItems.classList.add('d-block');
  } else {
    wayItems.classList.remove('d-block');
    wayItems.classList.add('d-none');
  }
})
// Этажность
const floorSelected = document.querySelector('.floor-selected');
const floorItems = document.querySelector('.floor-items');
floorSelected.addEventListener('click', ()=>{
  if(floorItems.classList.contains('d-none')) {
    floorItems.classList.remove('d-none');
    floorItems.classList.add('d-block');
  } else {
    floorItems.classList.remove('d-block');
    floorItems.classList.add('d-none');
  }
})

document.addEventListener("click", function(e) {
  // Номер
  if (e.target.classList.contains("number-item")) {
    let item = e.target.innerText;
    numberSelected.innerHTML = item;
    numberItems.classList.remove('d-block');
    numberItems.classList.add('d-none');
  }
  // Корпус
  if (e.target.classList.contains("korpus-item")) {
    let item = e.target.innerText;
    korpusSelected.innerHTML = item;
    korpusItems.classList.remove('d-block');
    korpusItems.classList.add('d-none');
  }
  // Способ оплаты
  if (e.target.classList.contains("way-item")) {
    let item = e.target.innerText;
    waySelected.innerHTML = item;
    wayItems.classList.remove('d-block');
    wayItems.classList.add('d-none');
  }
  // Этажность
  if (e.target.classList.contains("floor-item")) {
    let item = e.target.innerText;
    floorSelected.innerHTML = item;
    floorItems.classList.remove('d-block');
    floorItems.classList.add('d-none');
  }
});
