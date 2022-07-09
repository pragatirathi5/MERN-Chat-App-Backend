const mongoose = require ("mongoose");

const signupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: false
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        unique: false
    }

})

const Signdetail = new mongoose.model('Signdetails', signupSchema);
module.exports = Signdetail;