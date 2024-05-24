document.addEventListener('DOMContentLoaded', () => {
  dividerHeader()
})

document.addEventListener("click", function(e) {
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
const swiperSmall1 = new Swiper(".swiper-s2", {
  spaceBetween: 20,
  slidesPerView: 7,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    1200: {
        slidesPerView: 6,
    },
    300: {
        slidesPerView: 5,
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
// debugger;
Chart.defaults.font.size = 12;

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
          }
        }
      }
    },
    ticks: {
      stepSize: 20,
    },
    responsive: true,
    maintainAspectRatio: false
  }
});
