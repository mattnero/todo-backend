const { PrismaClient } = require('@prisma/client')
const Koa = require("koa");
const parser = require("koa-bodyparser");
const cors = require("@koa/cors");
const router = require("./router");
const Prisma = new PrismaClient();
const App = new Koa();
const port = 8000;

module.exports = Prisma;

App.use(parser())
  .use(cors())
  .use(router.routes())
  .listen(port, () => {
    console.log(`🚀 Server listening http://127.0.0.1:${port}/ 🚀`);
  });