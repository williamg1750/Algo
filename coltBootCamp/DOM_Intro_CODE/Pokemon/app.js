// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

let container = document.querySelector('#container');

// const newImg = document.createElement('img');
// newImg.src =
//   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';

// container.append(newImg);

for (let i = 1; i <= 151; i++) {
  const pokemon = document.createElement('div');
  pokemon.classList.add('pokemon');
  const label = document.createElement('span');
  label.innerText = i;
  const newImg = document.createElement('img');
  newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  pokemon.append(newImg);
  pokemon.append(label);
  container.append(pokemon);
}
