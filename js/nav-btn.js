const btns = document.querySelectorAll('.buttons__portfolio');
const products = document.querySelectorAll('.product__item');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', e => {
    e.preventDefault();

    const value = e.target.dataset.value;
    console.log(value);
    products.forEach(product => {
      if (value == 'all') {
        product.style.display = 'block';
      } else {
        if (product.classList.contains(value)) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      }
    });
  });
}
