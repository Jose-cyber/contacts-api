const yup = require('./userSchema');

const deleteContactsSchema = yup
    .object({
        id: yup.number().required().positive().integer(),
}).required();

module.exports = deleteContactsSchema;