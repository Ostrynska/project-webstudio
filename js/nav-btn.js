const products = document.querySelectorAll('.product__item');
const btns = document.querySelectorAll('.buttons__portfolio');
const selectedBtns = new Set();

function filter(category, items) {
  items.forEach(item => {
    const isItemfilter = !item.classList.contains(category);
    const isShowAll = category.toLowerCase() === 'all';
    if (isItemfilter && !isShowAll) {
      item.classList.add('hide');
    } else {
      item.classList.remove('hide');
    }
  });
}

function app() {
  btns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      if (e.target.nodeName !== 'BUTTON') {
        return;
      }

      const btn = e.target;
      const isActive = btn.classList.contains('buttons__portfolio--current');

      const currentCategoty = btn.dataset.filter;
      if (isActive) {
        selectedBtns.delete(currentCategoty);
      } else {
        selectedBtns.add(currentCategoty);
      }

      if (selectedBtns) {
        btns[0].classList.remove('buttons__portfolio--current');
      }

      filter(currentCategoty, products);
    });
  });
}

app();
