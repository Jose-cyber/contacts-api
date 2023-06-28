const yup = require('./userSchema');

const registerContactSchema = yup
    .object({
        name: yup.string().min(8).max(32).required(),
        email: yup.string().email().required(),
        telephone: yup.number().required(),
        message: yup.string().min(8).max(255).required()
}).required();

module.exports = registerContactSchema;