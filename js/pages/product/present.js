const Items = document.querySelectorAll('.custom-select-items');

document.addEventListener('DOMContentLoaded', () => {
  dividerHeader();

  Items.forEach((e) => {
    e.classList.add('d-none');
  })
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

// Swipers
const swiperSmall1 = new Swiper(".swiper-s2", {
  spaceBetween: 20,
  slidesPerView: 7,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    1200: {
        slidesPerView: 9,
    },
    300: {
        slidesPerView: 7,
    }
  }
});
const swiperBig1 = new Swiper(".swiper-b2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-next2",
    prevEl: ".swiper-prev2",
  },
  thumbs: {
    swiper: swiperSmall1,
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

const ctx = document.getElementById('myChart').getContext('2d');
const xValues = ['12.12.2022', '12.04.2023', '03.10.2023', '03.02.2024', ''];
const yValues = [0, 5, 10, 40, 30, 80];
let fontSize = () => {
  const withWindow = window.innerWidth;
  if(withWindow < 421) {
    return 10;
  } else {
    return 12
  }
}
Chart.defaults.font.size = fontSize();
Chart.defaults.font.family = 'Inter Regular';
console.log(Chart.defaults)
new Chart(ctx, {
  type: "line",
  data: {
    labels: xValues,
    data: yValues,
    datasets: [{
      label: 'My First Dataset',
      data: yValues,
      fill: false,
      borderColor: '#FF6000',
      tension: 0.1
    }]
  },
  options: {
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        ticks: {
          // Include a dollar sign in the ticks
          callback: function(value, index, ticks) {
            return value + ' млн.₽';
          },
          align: 'center',
          padding: 10
        },
        border: {
          display: false
        },
        grid: {
          drawTicks: false,
        }
      },
      x: {
        ticks: {
          align: 'start',
          padding: 10
        },
        border: {
          display: false,
        },
        grid: {
          drawTicks: false,
        }
      },
    },
    ticks: {
      stepSize: 20,
    },
    responsive: true,
    maintainAspectRatio: false
  }
});