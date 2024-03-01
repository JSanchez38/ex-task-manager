const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minLength: [8, 'Password needs at least 8 characters']
        },
    },
    { timestamps: true }
)

//presave para cifrar contraseña
userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.hash(this.password, 10)
        .then((hash) => {
            this.password = hash
            next()
        })
        .catch(next)
    } else {
        next()
    }
})

//método para checkear la contraseña
userSchema.methods.checkPassword = function (passwordToCheck) {
    return bcrypt.compare(passwordToCheck, this.password)
}

const User = mongoose.model('User', userSchema)
module.exports = User