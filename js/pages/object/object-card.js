document.addEventListener('DOMContentLoaded', () => {
  dividerHeader()
  dividerList()
  
  // Закрыть selected
  const Items = document.querySelectorAll('.custom-select-items');
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
  console.log(selectClass);
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

  // Выбрать элемент и закрыть select
  if(e.target.classList.contains("select_checkbox")) {
    let classToArr = e.target.classList[0];
    let checkboxes = document.getElementsByClassName(classToArr);
    classToArr = e.target.classList[0].split('-');
    classToArr.pop();
    const selected = document.querySelector('.' + classToArr.join('-'));
    let checkboxesChecked = [];

    for (var index = 0; index < checkboxes.length; index++) {
      if (checkboxes[index].checked) {
        checkboxesChecked.push(checkboxes[index].value);
        selected.innerHTML = checkboxesChecked.join(', ');
      }
    }

    if(checkboxesChecked.length < 1) {
      selected.innerHTML = 'Выбор';
    }
  }

  // Header menu
  if(e.target.classList.contains('header_pages-item')) {
    dividerHeader();
  }
});

// Header divider
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

// Swipers
const swiperSmall = new Swiper(".swiper-s1", {
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
const swiperBig = new Swiper(".swiper-b1", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-next1",
    prevEl: ".swiper-prev1",
  },
  thumbs: {
    swiper: swiperSmall,
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

const swiperSmall2 = new Swiper(".swiper-s2", {
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
const swiperBig2 = new Swiper(".swiper-b2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-next2",
    prevEl: ".swiper-prev2",
  },
  thumbs: {
    swiper: swiperSmall2,
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

const swiperSmall3 = new Swiper(".swiper-s3", {
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
const swiperBig3 = new Swiper(".swiper-b3", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-next3",
    prevEl: ".swiper-prev3",
  },
  thumbs: {
    swiper: swiperSmall3,
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

const swiperSmall4 = new Swiper(".swiper-s4", {
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
const swiperBig4 = new Swiper(".swiper-b4", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-next4",
    prevEl: ".swiper-prev4",
  },
  thumbs: {
    swiper: swiperSmall4,
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

const swiperModalS = new Swiper(".swiper-modal-s", {
  spaceBetween: 20,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    1200: {
        slidesPerView: 5,
    },
    300: {
        slidesPerView: 4,
    }
  }
});
const swiperModalB = new Swiper(".swiper-modal-b", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiperModalS,
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      loop: false
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true
    }
  }
});

// Modal Зафиксировать клиента
const fileName = document.querySelector('.modal-zaf-added');
window.addEventListener('DOMContentLoaded', () => {
  fileName.classList.add('d-none');
});
function updateFileProj() {
  const fileNameText = document.querySelector('.modal-zaf-added-name');
  if (document.getElementById('add-doc').files.length > 0) {
    fileName.classList.remove('d-none');
    fileNameText.innerHTML = document.getElementById('add-doc').files[0].name;
  };
};
function deleteFileProj() {
  const fileNameText = document.querySelector('.modal-zaf-added-name');
  if (document.getElementById('add-doc').files.length > 0) {
    console.log('Start')
    fileName.classList.add('d-none');
    fileNameText.innerHTML = '';
    const files = document.getElementById('add-doc').files;
    Object.keys(files).forEach(key => delete items[key]);
  };
};
