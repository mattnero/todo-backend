const Router = require("koa-router");
const router = new Router();
const { getTodos, addTodo, toggleTodo, deleteAll } = require("./controllers/todos.controllers");

router.get("/fetch_todos", getTodos);
router.post("/add_todo", addTodo);
router.post("/toggle_todo", toggleTodo);
router.get("/delete", deleteAll);

module.exports = router;