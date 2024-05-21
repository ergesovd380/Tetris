document.addEventListener('DOMContentLoaded', () => {
  // Закрыть selected
  const Items = document.querySelectorAll('.custom-select-items');
  Items.forEach((e) => {
    e.classList.add('d-none')
  })

  const withWindow = window.innerWidth;
  if(withWindow < 768) {
    document.querySelector('.accordion-collapse').classList.add('collapse')
    document.querySelector('.swiper-small').classList.add('d-none');
  } else {
    document.querySelector('.accordion-collapse').classList.remove('collapse')
    if(document.querySelector('.swiper-small').classList.contains('d-none')) {
      document.querySelector('.swiper-small').classList.remove('d-none');
    }
  }

  dividerHeader()
  dividerList()
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
    dividerHeader();
  }
});

window.addEventListener('resize', () => {
  const withWindow = window.innerWidth;
  if(withWindow < 768) {
    document.querySelector('.swiper-small').classList.add('d-none');
  } else {
    if(document.querySelector('.swiper-small').classList.contains('d-none')) {
      document.querySelector('.swiper-small').classList.remove('d-none');
    }
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

function dividerList() {
  const dividers = document.querySelectorAll('.accordion-border');
  const list = [];
  const tile = [];

  for(let i=0; i<dividers.length; i++) {
    if(dividers[i].classList.contains('accordion-list')) {
      list.push(dividers[i]);
    } else {
      tile.push(dividers[i]);
    }
  }

  const lastChildList = list.length - 1;
  list[lastChildList].classList.remove('accordion-border');

  const lastChildTile = tile.length - 1;
  tile[lastChildTile].classList.remove('accordion-border');
}

const swiper = new Swiper(".swiper-small", {
  spaceBetween: 20,
  slidesPerView: 7,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    1200: {
        slidesPerView: 7,
    },
    300: {
        slidesPerView: 6,
    }
  }
});
const swiper2 = new Swiper(".swiper-big", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      loop: false
    },
    300: {
      slidesPerView: 1.2,
      spaceBetween: 20,
      loop: true
    }
  }
});
