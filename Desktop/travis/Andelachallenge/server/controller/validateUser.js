import Joi from 'joi';
const validateUser=(user)=>{
    const validation={
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required(),
        gender: Joi.string().required(),
        jobRole: Joi.string().required(),
        department: Joi.string().required(),
        address: Joi.string().required(),
        username:Joi.string().min(3).required(),
        password:Joi.string().min(8).required()
    };
    return Joi.validate(user, validation);
};
module.exports= validateUser;