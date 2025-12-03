const Joi = require('joi');

// Validator for User Registration/Creation
const validateUser = (data) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(3)
            .max(30)
            .trim()
            .required()
            .messages({
                'string.empty': 'Name is required',
                'string.min': 'Name must be at least 3 characters',
                'string.max': 'Name cannot exceed 30 characters'
            }),

        email: Joi.string()
            .email()
            .max(30)
            .required()
            .messages({
                'string.email': 'Please provide a valid email',
                'string.max': 'Email cannot exceed 30 characters'
            }),

        password: Joi.string()
            .min(6)
            .max(30)
            .required()
            .messages({
                'string.min': 'Password must be at least 6 characters',
                'string.max': 'Password cannot exceed 30 characters'
            }),

        isAdmin: Joi.boolean()
            .default(false)
    });

    return schema.validate(data);
};

// Validator for User Login (Subset of data)
const validateLogin = (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .email()
            .required()
            .messages({
                'string.email': 'Please provide a valid email',
                'any.required': 'Email is required'
            }),

        password: Joi.string()
            .required()
            .messages({
                'any.required': 'Password is required'
            })
    });

    return schema.validate(data);
};

module.exports = {
    validateUser,
    validateLogin
};