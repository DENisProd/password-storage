const CustomError = require("../exceptions/CustomError");
const {Logger} = require("../utills/Logger");
const User = require("../db/schemas/user");
const bcrypt = require("bcrypt");

class UserExists extends Error {
    constructor(status, message) {
        super();
    }
}


class UserService {

    async register (email, username, password, password2) {

            //throw CustomError.UserExists()
        const candidate = await User.findOne({email: email})
        if (candidate) throw CustomError.UserExists()

        const salt = bcrypt.genSaltSync(10)
        const user = new User({
            email: email,
            nickname: username,
            password: bcrypt.hashSync(password, salt)
        })

        await user.save();
        return {message: 'Вы успешно зарегистрировались', success: true}
        /*const candidate = await User.findOne({email: req.body.email});

        if (candidate)
            return send(reply, 400, {message: 'Пользователь существует'})
        else {
            const candidate2 = await User.findOne({nickname: req.body.nickname});
            if (candidate2)
                return send(reply, 400, {message: 'Пользователь существует'})

            // Нужно создать пользователя

            try {
                await user.save();
                send(reply, 201, {message: 'Вы успешно зарегистрировались', success: true})

            } catch (e) {
                send(reply, 400, {message: 'Ошибка: ' + e})
            }

        }*/
    }

    async login (email, password) {

    }

}

module.exports = new UserService()