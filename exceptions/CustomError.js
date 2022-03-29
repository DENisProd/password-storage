class CustomError extends Error {
    constructor(status, message, errors = []) {
        super(message)

        this.status = status
        this.errors = errors
    }

    static UnaithorizedError() {
        return new CustomError(401, "Пользователь не авторизован")
    }

    static BadRequest(message, errors = []) {
        return new CustomError(400, message, errors)
    }

    static UserExists() {
        return new CustomError(400, "Пользователь с такой почтой или псевдонимом существует")
    }

    static UserNotExists() {
        return new CustomError(404, "Пользователя с такой почтой не существует")
    }

    static ParamsIsEmpty() {
        return new CustomError(400, "Данные не заполнены")
    }
}

module.exports = CustomError