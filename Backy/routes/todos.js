const route = require("express").Router();
const ToDo = require("../models/todo");

route.get("/", async (req, res) => {
  const allToDos = await ToDo.find({});
  const katarina = allToDos.map(el => {
    return {
      id: el["_id"],
      content: el["content"]
    };
  });
  res.status(200).json(katarina);
});

route.post("/", async (req, res) => {
  const data = req.body.content;
  const toDo = new ToDo({ content: data });
  toDo.save().then(
    async () => {
      const allToDos = await ToDo.find({});
      const katarina = allToDos.map(el => {
        return {
          id: el["_id"],
          content: el["content"]
        };
      });
      res.status(200).json(katarina);
    },
    reason => {
      res.status(400).json({ error: reason });
    }
  );
});

route.delete("/", async (req, res) => {
  const id = req.body.id;
  ToDo.deleteOne({ _id: id }).then(
    () => {
      res.status(200).json({ alberto: "mamamia data has been deleted" });
    },
    reason => {
      res.status(404).json({ error: reason });
    }
  );
});

module.exports = route;
