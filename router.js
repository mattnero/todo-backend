const Router = require("koa-router");
const router = new Router();
const { getTodos, addTodo } = require("./controllers/todos.controllers");

router.get("/fetch_todos", getTodos);
router.post("/add_todo", addTodo);

module.exports = router;