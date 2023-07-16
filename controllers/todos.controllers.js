const { PrismaClient } = require('@prisma/client')

const getTodos = async (ctx) => {
    const todos = await prisma.todo.findMany()
    ctx.body = {data: todos}
    ctx.status = 200;
};

const addTodo = async (ctx) => {
    const todo = await prisma.todo.create({
        data: {
            id: ctx.request.body.id,
            title: ctx.request.body.title,
            complete: ctx.request.body.complete,
        },
      })
    ctx.body = {
        message: 'Todo created',
        data: todo,
    }
    ctx.status = 201;
};

module.exports = {
    getTodos,
    addTodo
};