fetch('https://api.cryptonator.com/api/ticker/btc-usd')
  .then((res) => {
    console.log('response waiting to parse', res);
    return res.json();
  })
  .then((data) => {
    console.log('data parsed', data);
  })
  .catch((err) => {
    console.log(err);
  });
