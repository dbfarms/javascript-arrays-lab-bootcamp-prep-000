const app = "I don't do much."

function destructivelyAppendKitten(kittens) {
  kittens.push("Ralph")
}

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyPrependKitten(kittens) {
  kittens.unshift("test")
}

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveLastKitten(kittens) {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}
