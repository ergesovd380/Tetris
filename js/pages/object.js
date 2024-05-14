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
// Срок сдачи
const deadlineSelected = document.querySelector('.deadline-selected');
const deadlineItems = document.querySelector('.deadline-items');
deadlineSelected.addEventListener('click', ()=>{
  if(deadlineItems.classList.contains('d-none')) {
    deadlineItems.classList.remove('d-none');
    deadlineItems.classList.add('d-block');
  } else {
    deadlineItems.classList.remove('d-block');
    deadlineItems.classList.add('d-none');
  }
})
// Тип помещения
const typeSelected = document.querySelector('.type-selected');
const typeItems = document.querySelector('.type-items');
typeSelected.addEventListener('click', ()=>{
  if(typeItems.classList.contains('d-none')) {
    typeItems.classList.remove('d-none');
    typeItems.classList.add('d-block');
  } else {
    typeItems.classList.remove('d-block');
    typeItems.classList.add('d-none');
  }
})
// Количество комнат
const quantitySelected = document.querySelector('.quantity-selected');
const quantityItems = document.querySelector('.quantity-items');
quantitySelected.addEventListener('click', ()=>{
  if(quantityItems.classList.contains('d-none')) {
    quantityItems.classList.remove('d-none');
    quantityItems.classList.add('d-block');
  } else {
    quantityItems.classList.remove('d-block');
    quantityItems.classList.add('d-none');
  }
})
// Банк
const bankSelected = document.querySelector('.bank-selected');
const bankItems = document.querySelector('.bank-items');
bankSelected.addEventListener('click', ()=>{
  if(bankItems.classList.contains('d-none')) {
    bankItems.classList.remove('d-none');
    bankItems.classList.add('d-block');
  } else {
    bankItems.classList.remove('d-block');
    bankItems.classList.add('d-none');
  }
})
// Срок передачи
const termSelected = document.querySelector('.term-selected');
const termItems = document.querySelector('.term-items');
termSelected.addEventListener('click', ()=>{
  if(termItems.classList.contains('d-none')) {
    termItems.classList.remove('d-none');
    termItems.classList.add('d-block');
  } else {
    termItems.classList.remove('d-block');
    termItems.classList.add('d-none');
  }
})
// Отделка
const finishSelected = document.querySelector('.finish-selected');
const finishItems = document.querySelector('.finish-items');
finishSelected.addEventListener('click', ()=>{
  if(finishItems.classList.contains('d-none')) {
    finishItems.classList.remove('d-none');
    finishItems.classList.add('d-block');
  } else {
    finishItems.classList.remove('d-block');
    finishItems.classList.add('d-none');
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
  // Срок сдачи
  if (e.target.classList.contains("deadline-item")) {
    let item = e.target.innerText;
    deadlineSelected.innerHTML = item;
    deadlineItems.classList.remove('d-block');
    deadlineItems.classList.add('d-none');
  }
  // Тип помещения
  if (e.target.classList.contains("type-item")) {
    let item = e.target.innerText;
    typeSelected.innerHTML = item;
    typeItems.classList.remove('d-block');
    typeItems.classList.add('d-none');
  }
  // Количество комнат
  if (e.target.classList.contains("quantity-item")) {
    let item = e.target.innerText;
    quantitySelected.innerHTML = item;
    quantityItems.classList.remove('d-block');
    quantityItems.classList.add('d-none');
  }
  // Банк
  if (e.target.classList.contains("bank-item")) {
    let item = e.target.innerText;
    bankSelected.innerHTML = item;
    bankItems.classList.remove('d-block');
    bankItems.classList.add('d-none');
  }
  // Срок передачи
  if (e.target.classList.contains("term-item")) {
    let item = e.target.innerText;
    termSelected.innerHTML = item;
    termItems.classList.remove('d-block');
    termItems.classList.add('d-none');
  }
  // Отделка
  if (e.target.classList.contains("finish-item")) {
    let item = e.target.innerText;
    finishSelected.innerHTML = item;
    finishItems.classList.remove('d-block');
    finishItems.classList.add('d-none');
  }
});

