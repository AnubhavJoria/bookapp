import { object, string, number } from 'yup';

export const  userSchema = object({
  name: string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').required().min(3),
  email: string().email().required(),
  book : string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').required().min(3),
  price : number().required().positive().integer()

});