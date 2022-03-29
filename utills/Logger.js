const CustomError = require("../exceptions/CustomError");
const consoleColors = {
    red: '\x1b[31m%s\x1b[0m',
    green: '\x1b[32m%s\x1b[0m',
    yellow: '\x1b[33m%s\x1b[0m',
    blue: '\x1b[34m%s\x1b[0m',
    magenta: '\x1b[35m%s\x1b[0m',
    cyan: '\x1b[36m%s\x1b[0m'
}

const messageType = {
    MESSAGE_SUCCESS: 1,
    MESSAGE_WARNING: 2,
    MESSAGE_ERROR: 3,
    MESSAGE_SERVER: 4
}


class Logger {

    static log(text, textType) {
        let type = "";
        let color;
        switch (textType) {
            case messageType.MESSAGE_SUCCESS:
                type=   "[OK]     "
                color = consoleColors.green
                break
            case messageType.MESSAGE_WARNING:
                type =  "[WARN]   "
                color = consoleColors.yellow
                break
            case messageType.MESSAGE_ERROR:
                type =  "[ERROR]  "
                color = consoleColors.red
                break
            case messageType.MESSAGE_SERVER:
                type =  "[SERVER] "
                color = consoleColors.magenta
                break
            default:
                type = ""
                color = ""
        }
        console.log(color, type+text)
    }

    static catchAndLog (error) {
        if (error instanceof CustomError) {
            this.log(error.message, messageType.MESSAGE_ERROR)
        } else {
            this.log(error.message, messageType.MESSAGE_ERROR)
        }
    }

}

module.exports = {
    Logger,
    consoleColors,
    messageType
}