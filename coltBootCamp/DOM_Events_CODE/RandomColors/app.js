// let btn = document.querySelector('button');
// let h1 = document.querySelector('h1');
// let body = document.querySelector('body');
// btn.addEventListener('click', () => {
//   let r = Math.floor(Math.random() * 255);
//   let g = Math.floor(Math.random() * 255);
//   let b = Math.floor(Math.random() * 255);
//   body.style.backgroundColor = `rgb(${r},${g},${b})`;
//   h1.innerText = `rgb(${r},${g},${b})`;
// });

// const tweetForm = document.querySelector('#tweetForm');
// tweetForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   const username = document.querySelectorAll('input')[0].value;
//   const tweet = document.querySelectorAll('input')[1].value;
//   const tweets = document.querySelector('#tweets');
//   tweets.append(`${username} : ${tweet}`);
// });
const form = document.querySelector('form');
form.addEventListener('sumbit', (evt) => {
  evt.preventDefault();
  const ulList = document.querySelector('#list');
  const li = document.createElement('li');
  const qty = document.querySelector('#qty').value;
  const product = document.querySelector('#product').value;
  li.innerText = `${qty} ${product}`;
  // li.innerText = `${form.elements.qty.value} ${form.elements.product.value}`;
  ulList.append(li);
});
