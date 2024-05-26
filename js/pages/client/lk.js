const fileName = document.querySelector('.client-lk-added');
const fileNameModal = document.querySelector('.modal-zaf-added');
document.addEventListener('DOMContentLoaded', () => {
  dividerHeader()

  fileName.classList.add('d-none');
  fileNameModal.classList.add('d-none');
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

function updateFileProj() {
  const fileNameText = document.querySelector('.client-lk-added-name');
  if (document.getElementById('add-doc').files.length > 0) {
    fileName.classList.remove('d-none');
    fileNameText.innerHTML = document.getElementById('add-doc').files[0].name;
  };
};
function deleteFileProj() {
  const fileNameText = document.querySelector('.client-lk-added-name');
  if (document.getElementById('add-doc').files.length > 0) {
    console.log('Start')
    fileName.classList.add('d-none');
    fileNameText.innerHTML = '';
    const files = document.getElementById('add-doc').files;
    Object.keys(files).forEach(key => delete items[key]);
  };
};

function updateFileProjModal() {
  const fileNameText = document.querySelector('.modal-zaf-added-name');
  if (document.getElementById('add-doc-modal').files.length > 0) {
    fileNameModal.classList.remove('d-none');
    fileNameText.innerHTML = document.getElementById('add-doc-modal').files[0].name;
  };
};
function deleteFileProjModal() {
  const fileNameText = document.querySelector('.modal-zaf-added-name');
  if (document.getElementById('add-doc-modal').files.length > 0) {
    console.log('Start')
    fileNameModal.classList.add('d-none');
    fileNameText.innerHTML = '';
    const files = document.getElementById('add-doc-modal').files;
    Object.keys(files).forEach(key => delete items[key]);
  };
};