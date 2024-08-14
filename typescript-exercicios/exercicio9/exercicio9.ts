class Animal {
  som(): string {
      return "O animal faz um som";
  }
}

class Cachorro extends Animal {
  som(): string {
      return "O cachorro late";
  }
}

class Gato extends Animal {
  som(): string {
      return "O gato mia";
  }
}

const cachorro = new Cachorro();
const gato = new Gato();

console.log(cachorro.som());
console.log(gato.som());
