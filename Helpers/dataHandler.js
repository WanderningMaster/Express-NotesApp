const {string, object, mixed} = require('yup');

module.exports.validate = (data) => {
    const userSchema = object({
        name: string().required(),
        category: mixed().oneOf(['Task', 'Idea', 'Random Thought']).required(),
        content: string().required()
    });
    return userSchema.validate(data, {strict: true});
}