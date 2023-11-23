const Joi = require('joi')

const boardsValidationSchema = Joi.object({
  title: Joi.string().min(3).max(50).required(),
  description: Joi.string()
    .pattern(/^[a-zA-Z0-9\s]*$/)
    .required(),
  members: Joi.array().items(Joi.string().pattern(/^[0-9a-fA-F]{24}$/)),
  lists: Joi.array().items(Joi.string().hex().length(24)).default([]),
})

const validateBoard = (req, res, next) => {
  const { error } = boardsValidationSchema.validate(req.body)
  if (error) {
    return res.status(400).json({ error: error.details[0].message })
  }
 
  next()
}

module.exports = { validateBoard }
