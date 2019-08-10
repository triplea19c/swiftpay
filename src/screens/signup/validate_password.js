import validation from './validation'
import validatejs from 'validate.js'

export default function validate(password, confirmpassword) {

  const result = validatejs({password, confirmpassword}, {confirmpassword: validation.confirmpassword})

  // If there is an error message, return it!
  if (result) {
    // Return only the field error message if there are multiple
    return result["confirmpassword"][0]
  }

  return null
}