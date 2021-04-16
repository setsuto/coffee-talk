
const tabDatas = document.querySelectorAll('.tab__list .tab__item .tab__link');
const tabContents = document.querySelectorAll('.tab__content');

// forEach for-of
tabDatas.forEach( clickedLabel => {
  clickedLabel.addEventListener('click', e => {
    e.preventDefault();

    tabDatas.forEach(label => {
      label.classList.remove('active');
    });
    
    clickedLabel.classList.add('active');

    tabContents.forEach(content => {
      content.classList.remove('active');
    });

  document.getElementById(clickedLabel.dataset.id).classList.add('active');

  })
});
