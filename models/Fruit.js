const fruits = require("../fruits.json");

class Fruit {
  constructor({ genus, name, id, family, order, nutritions }) {
    this.genus = genus;
    this.name = name;
    this.id = id;
    this.family = family;
    this.order = order;
    this.nutritions = nutritions;
  }

  static showAll = () => {
    return fruits.map((fruit) => new Fruit(fruit[0]));
  };

  static show = (name) => {
    const fruit = fruits.filter((fruit) => fruit.name.toLowerCase() == name);
    if (fruit.length == 1) {
      return new Fruit(fruit[0]);
    } else {
      throw Error("The fruit doesn't exist");
    }
  };

  static create = (data) => {
    const newFruit = data;
    const fruit = fruits.find((fruit) => {
      fruit.name.toLowerCase() === newFruit.name.toLowerCase();
      if (fruit) {
        throw Error("Fruit already exists");
      } else {
        newFruit.id = fruits.length + 1;
        fruits.push(newFruit);

        return new Fruit(newFruit);
      }
    });
  };

  update(data) {
    const updatedFruit = fruits.find(
      (fruit) => fruit.name.toLowerCase() === this.name.toLowerCase()
    );
    if (updatedFruit) {
      updatedFruit.name = data.name;
      updatedFruit.family = data.family;
      return new Fruit(updatedFruit);
    } else {
      throw Error("Fruit doesn't exist");
    }
  }

  destroy() {
    const deletedFruit = fruits.find(
      (fruit) => fruit.name.toLowerCase() === this.name.toLowerCase()
    );
    if (deletedFruit) {
      const index = fruits.indexOf(deletedFruit);
      fruits.splice(index, 1);
    } else {
        throw Error("Fruit doesn't exist");
    }
  }
}

module.exports = Fruit;
