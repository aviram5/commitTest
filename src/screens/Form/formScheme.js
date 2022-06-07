import * as yup from 'yup';

const phoneRegExp = /^[0-9]{7,12}$/;

const requireErr = fieldName => `${fieldName} is require`;
const invalidErr = fieldName => `${fieldName} is invalid`;
const maxSizeErr = (fieldName, size) =>
  `${fieldName} must be no more then ${size} long`;
const minSizeErr = (fieldName, size) =>
  `${fieldName} must be at least ${size} long`;

export default formSchema = yup.object({
  userName: yup
    .string()
    .required(requireErr('User Name'))
    .max(32, maxSizeErr('User Name', 32)),
  phoneNumber: yup
    .string()
    .required(requireErr('Phone Number'))
    .matches(phoneRegExp, invalidErr('Phone Number'))
    .max(10, maxSizeErr('Phone Number', 10)),
  password: yup
    .string()
    .required(requireErr('Password'))
    .min(6, minSizeErr('Password', 6))
    .max(12, maxSizeErr('Password', 12)),
  confirmPassword: yup
    .string()
    .required(requireErr('Password'))
    .min(6, minSizeErr('Password', 6))
    .max(12, maxSizeErr('Password', 12)),
});
