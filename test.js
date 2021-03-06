const {string, object, mixed} = require('yup');

const data = {name: "Shop", category: "Idea", content: "Buy milk"};
const validate = (data) => {
    const userSchema = object({
        name: string().required(),
        category: mixed().oneOf(['Task', 'Idea', 'Random Thought']).required(),
        content: string().required()
    });
    return userSchema.validate(data, {strict: true});
}

validate(data)
    .then(res => console.log({data: res}))
    .catch(err => {
        console.error(err);
        console.log({data: null});
    });




  