const Items = document.querySelectorAll('.custom-select-items');

// Закрыть selected
document.addEventListener('DOMContentLoaded', () => {
  dividerHeader()

  Items.forEach((e) => {
    e.classList.add('d-none')
  })

  const withWindow = window.innerWidth;
  if(withWindow < 768) {
    document.querySelector('.accordion-collapse').classList.add('collapse')
  } else {
    document.querySelector('.accordion-collapse').classList.remove('collapse')
  }
})

document.addEventListener("click", function(e) {
  // Открыть и закрыть select
  const item = e.target.classList[2];
  const selectClass = '.' + item + '-items';
  const selectItems = document.querySelector(selectClass);
  if(selectItems) {
    if(selectItems.classList.contains('d-none')) {
      selectItems.classList.remove('d-none');
      selectItems.classList.add('d-block');
    } else {
      selectItems.classList.remove('d-block');
      selectItems.classList.add('d-none');
    }
  }

  // // Выбрать элемент и закрыть select
  if(e.target.classList.contains("custom-select-item")) {
    const itemText = e.target.innerText;
    let classToArr = e.target.classList[1].split('-');
    classToArr.pop();
    const selected = document.querySelector('.' + classToArr.join('-'));
    const items = document.querySelector('.' + e.target.classList[1] + 's');
    selected.innerHTML = itemText;
    items.classList.remove('d-block');
    items.classList.add('d-none');
  }

  // Header menu
  if(e.target.classList.contains('header_pages-item')) {
    console.log('Работает');
    dividerHeader();
  }
});

window.addEventListener('resize', () => {
  const withWindow = window.innerWidth;
  if(withWindow < 768) {
    document.querySelector('.accordion-collapse').classList.add('collapse')
  } else {
    document.querySelector('.accordion-collapse').classList.remove('collapse')
  }
})

function dividerHeader() {
  const item1 = document.querySelector('.header_pages-item1');
  const item2 = document.querySelector('.header_pages-item2');
  const item3 = document.querySelector('.header_pages-item3');
  const item4 = document.querySelector('.header_pages-item4');
  const item5 = document.querySelector('.header_pages-item5');
  const item6 = document.querySelector('.header_pages-item6'); 
  dividers = [
    document.querySelector('.header_divider1'), 
    document.querySelector('.header_divider2'), 
    document.querySelector('.header_divider3'), 
    document.querySelector('.header_divider4'),
    document.querySelector('.header_divider5')
  ]

  for(let i = 0; i < dividers.length; ++i) {
    dividers[i].classList.remove('d-none')
  }

  if(item1.classList.contains('active')) {
    document.querySelector('.header_divider1').classList.add('d-none');
    return;
  }

  if(item2.classList.contains('active')) {
    document.querySelector('.header_divider1').classList.add('d-none');
    document.querySelector('.header_divider2').classList.add('d-none');
    return;
  }

  if(item3.classList.contains('active')) {
    document.querySelector('.header_divider2').classList.add('d-none');
    document.querySelector('.header_divider3').classList.add('d-none');
    return;
  }

  if(item4.classList.contains('active')) {
    document.querySelector('.header_divider3').classList.add('d-none');
    document.querySelector('.header_divider4').classList.add('d-none');
    return;
  }

  if(item5.classList.contains('active')) {
    document.querySelector('.header_divider4').classList.add('d-none');
    document.querySelector('.header_divider5').classList.add('d-none');
    return;
  }

  if(item6.classList.contains('active')) {
    document.querySelector('.header_divider5').classList.add('d-none');
    return;
  }
}
