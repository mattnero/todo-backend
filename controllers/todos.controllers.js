const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getTodos = async (ctx) => {
    const todos = await prisma.todo.findMany()
    ctx.body = {data: todos}
    ctx.status = 200;
};

const addTodo = async (ctx) => {
    console.log(ctx.request.body)
    const todoNew = await prisma.todo.create({
        data: {
            id: ctx.request.body.id,
            title: ctx.request.body.title,
            complete: ctx.request.body.complete,
        },
      })
    ctx.body = {
        message: 'Todo created',
        data: todoNew,
    }
    ctx.status = 201;
};

const toggleTodo = async (ctx) => {
    console.log(ctx.request.body)
    const id = ctx.request.body.id
    const todoNew = await prisma.todo.update({
        where: { id },
        data: {
            complete: ctx.request.body.complete,
        },
      })
    ctx.body = {
        message: 'Todo updated',
        data: todoNew,
    }
    ctx.status = 201;
};

const deleteAll = async (ctx) => {
    console.log(ctx.request.body)
    const todoNew = await prisma.todo.deleteMany({
        
      })
    ctx.body = {
        message: 'Todos deleted',
        data: todoNew,
    }
    ctx.status = 201;
};


module.exports = {
    getTodos,
    addTodo,
    toggleTodo,
    deleteAll
};