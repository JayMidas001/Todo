const express = require('express')
const cors = require(`cors`)
const morgan = require(`morgan`)
require('./config/dbConfig.js')
const appRouter = require(`./router/appRouter.js`)
const todoRouter = require(`./router/todoRouter.js`)
const port = process.env.port || 5545
require(`dotenv`).config()
const app = express();
app.use(cors({origin:'*'}))
app.use(morgan("dev"))
app.use(express.json())


app.use('/api/v1/user', appRouter)
app.use('/api/v1/user', todoRouter)

app.listen(port, () => {
    console.log(`server running on PORT: ${port}`);
})