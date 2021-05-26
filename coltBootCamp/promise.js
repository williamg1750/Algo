const fakePromise = (fakeurl) => {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    setTimeout(() => {
      if (random < 0.7) {
        resolve('here is your fake data');
      } else {
        reject('timed out');
      }
    }, 3000);
  });
};

fakePromise('/bhickens')
  .then((data) => {
    console.log('Done with request');
    console.log('data is:', data);
  })
  .catch((err) => {
    console.log('error has occured');
    console.log(err);
  });
