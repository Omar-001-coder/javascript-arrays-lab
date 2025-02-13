// Write your solution here!
const kittens=['Milo', 'Otis', 'Garfield'];


function destructivelyAppendKitten(name){
    kittens.push(name);
}

function destructivelyPrependKitten(name){
    kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
    kittens.pop();
}

function destructivelyRemoveFirstKitten(){
    kittens.shift();
}

function appendKitten(name){
  return kittens.concat(name);
}

function prependKitten(name){
  const newKitten=[name, ...kittens];
  return newKitten;
}
function removeLastKitten(){
  return kittens.slice(0,kittens.length-1);
}

function removeFirstKitten(){
  return kittens.slice(1,kittens.length);
}