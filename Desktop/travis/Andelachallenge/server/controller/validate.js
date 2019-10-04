import Joi from 'joi';
const validateArticle= (article) => {
    const validation = {
        title:Joi.string().min(3).required(),
        content:Joi.string().min(8).required()
    };

    return Joi.validate(article, validation);
};
module.exports=validateArticle;