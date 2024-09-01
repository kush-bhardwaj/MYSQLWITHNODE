const bcrypt = require('bcryptjs')
exports.genPassword = (password) => {
    const salCount = 10
    const salt = bcrypt.genSaltSync(salCount)
    return bcrypt.hashSync(password, salt)
}

exports.comparePassword = async(plainPassword, hashPassword) => {
    try {
        console.log("plain password = ", plainPassword)
        console.log("hass password - ", hashPassword)
        return await bcrypt.compareSync(plainPassword, hashPassword)
    } catch (err) {
        console.log(err)
    }
}