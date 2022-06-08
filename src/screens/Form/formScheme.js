import * as yup from 'yup';

const passwordRegex = new RegExp(
  '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))',
);

const phoneNumberRegex = new RegExp('^[0-9]+$');

const requireErr = fieldName => `${fieldName} is require`;
const maxSizeErr = (fieldName, size) =>
  `${fieldName} must be no more then ${size} long`;
const minSizeErr = (fieldName, size) =>
  `${fieldName} must be at least ${size} long`;

const invalidPassword =
  'Password must contain at least one from each: lowerCase, uperCase, number and spicel char';
const invalidPhoneNumber = 'Phone Nunmber can only contain numbers ';

export default formSchema = yup.object({
  userName: yup
    .string()
    .required(requireErr('User Name'))
    .max(32, maxSizeErr('User Name', 32)),
  phoneNumber: yup
    .string()
    .required(requireErr('Phone Number'))
    .matches(phoneNumberRegex, invalidPhoneNumber)
    .max(10, maxSizeErr('Phone Number', 10)),
  password: yup
    .string()
    .required(requireErr('Password'))
    .matches(passwordRegex, invalidPassword)
    .min(6, minSizeErr('Password', 6))
    .max(12, maxSizeErr('Password', 12)),
  confirmPassword: yup
    .string()
    .required(requireErr('Confirm Password'))
    .oneOf([yup.ref('password')], 'Your passwords do not match.'),
});
