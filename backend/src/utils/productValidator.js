const Joi = require('joi');

const validateProduct = (data) => {
    const schema = Joi.object({
        name: Joi.string()
            .trim()
            .min(3)
            .max(100)
            .required()
            .messages({
                'string.empty': 'Product name cannot be empty',
                'string.min': 'Product name must be at least 3 characters',
            }),

        description: Joi.string()
            .min(3)
            .max(100)
            .required(),

        price: Joi.number()
            .min(0)
            .required()
            .messages({
                'number.min': 'Price cannot be negative'
            }),

        category: Joi.string()
            .trim()
            .min(3)
            .max(100)
            .required(),

        countInStock: Joi.number()
            .integer() 
            .min(0)
            .required()
            .messages({
                'number.base': 'Stock must be a number',
                'number.integer': 'Stock must be a whole number'
            }),

        imageUrl: Joi.string()
            .uri() 
            .min(3)
            .max(100)
            .required()
            .messages({
                'string.uri': 'Image URL must be a valid link'
            })
    });

    return schema.validate(data);
};

module.exports = validateProduct ;