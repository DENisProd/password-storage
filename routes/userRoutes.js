const UserService = require("../services/UserService");
const {Logger} = require("../utills/Logger");

async function userRoutes (fastify, options) {


    fastify.get('/', async (request, reply) => {
        return { hello: 'world' }
    })

    fastify.get("/register", registerHandler)

    fastify.get("/login", loginHandler)
}

module.exports = userRoutes

async function registerHandler(req, rep) {
    try {
        const user = await UserService.register("ab", "", "", "")

        rep.type('application/json').code(201)
        return user

    }catch (e) {
        Logger.catchAndLog(e)
        rep.type('application/json').code(400)
        return { success: false, message: "Непредвиденная ошибка сервера" }
    }
}

async function loginHandler(req, rep) {
    const user = await UserService.login("", "")
    rep.type('application/json').code(202)
    return { success: true }
}