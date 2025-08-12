const Fruit = require("../models/Fruit");

const index = async (req, res) => {
  try {
    const fruits = await Fruit.showAll();
    res.status(200).send(fruits);
  } catch (error) {
    res.status(500).send({ error: "Server error" });
  }
};

const show = async (req, res) => {
  const name = await req.params.name.toLowerCase();
  try {
    const fruit = Fruit.show(name);
    res.status(200).send(fruit);
  } catch (error) {
    res.status(404).send({ error: error });
  }
};

const create = async (req, res) => {
  try {
    const newFruit = await Fruit.create(req.body);
    res.status(201).send(newFruit);
  } catch (error) {
    res.status(409).send({ error: error.message });
  }
};

const update = async (req, res) => {
  const name = req.params.name.toLowerCase();
  try {
    const fruit = await Fruit.show(name);
    const result = await fruit.update(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const destroy = async (req, res) => {
  const name = req.params.name.toLowerCase();
  try {
    const fruit = await Fruit.show();
    const result = await fruit.destroy();
    res.sendStatus(204)
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

module.exports = { index, show, create, update, destroy };
