const express = require('express')
require('./config/dbConfig.js')
const appRouter = require(`./router/appRouter.js`)
const todoRouter = require(`./router/todoRouter.js`)
const port = process.env.port || 5545

const app = express();
app.use(express.json())

app.use('/api/v1/user', appRouter)
app.use('/api/v1/user', todoRouter)

app.listen(port, () => {
    console.log(`server running on PORT: ${port}`);
})