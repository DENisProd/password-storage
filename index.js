const {Logger, messageType} = require("./utills/Logger");
const userRoutes = require('./routes/userRoutes')
const CustomError = require("./exceptions/CustomError");

const app = require('fastify')({logger: true})

require('dotenv').config()

app.register(require('fastify-cors'), {})
app.register(require('fastify-jwt'), {
    secret: process.env.SECRET_KEY
})

app.decorate("authenticate", async (request, reply) => {
    try {
        await request.jwtVerify()
    } catch (err) {
        reply.send(err)
    }
})

app.register(userRoutes, { prefix: '/api/user' })
/*app.register(function (err, req, reply) {
    console.log(err)
    if (err instanceof CustomError) {
        reply.type('application/json').code(err.status)
        return { success: false, message: err.message }
    }

    reply.type('application/json').code(500)
    return { message: "Непредвиденная ошибка" }
    
})*/

const start = async() => {
    try {
        await app.listen(process.env.PORT)
        Logger.log("Server is started", messageType.MESSAGE_SERVER)
    } catch (error) {
        app.log.error(error)
        process.exit(1)
    }
}

start()