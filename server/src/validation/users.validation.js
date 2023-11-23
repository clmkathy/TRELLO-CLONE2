const Joi = require('joi')

const userValidationSchema = Joi.object({
  username: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required(),
  boards: Joi.array().items(Joi.string().hex().length(24)).default([]),
})

const validateUser = async (req, res, next) => {
  const { error } = userValidationSchema.validate(req.body)
  if (error) {
    return res.status(400).json(`ValidationError:${error.details[0].message}`)
  }
  next()
}

module.exports={validateUser}