// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//   .then((res) => {
//     console.log('response waiting to parse', res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log('data parsed', data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const fetchBitcoin = async () => {
//   try {
//     const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

//Axios works both front and back end

axios
  .get('https://api.cryptonator.com/api/ticker/btc-usd')
  .then((res) => {
    console.log(res.data.ticker.price);
  })
  .catch((err) => {
    console.log(err);
  });

//sync func with axios

const getBtcPrice = async () => {
  try {
    const res = await axios.get(
      'https://api.cryptonator.com/api/ticker/btc-usd'
    );
    console.log(res.data.ticker.price);
  } catch (err) {
    console.log(err);
  }
};

const jokes = document.querySelector('#jokes');
const btn = document.querySelector('button');

// const getDadJoke = async () => {
//   try {
//     const config = { headers: { Accept: 'application/json' } };
//     const res = await axios.get('https://icanhazdadjoke.com/', config);
//     console.log(res.data.joke);
//     const newLi = document.createElement('LI');
//     newLi.append(res.data.joke);
//     jokes.append(newLi);
//   } catch (err) {
//     console.log(err);
//   }
// };

// btn.addEventListener('click', getDadJoke);

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: 'application/json' } };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
  } catch (err) {
    console.log(err);
  }
};

const addDadJoke = async () => {
  try {
    const jokeText = await getDadJoke();
    const newLi = document.createElement('LI');
    newLi.append(jokeText);
    jokes.append(newLi);
  } catch (err) {
    console.log(err);
  }
};

btn.addEventListener('click', addDadJoke);
