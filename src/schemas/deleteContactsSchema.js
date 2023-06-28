const yup = require('./userSchema');

const deleteContactsSchema = yup
    .object({
        id: yup.number().required()
}).required();

module.exports = deleteContactsSchema;