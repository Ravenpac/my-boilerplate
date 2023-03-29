import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Insira um e-mail válido')
    .required('Preencha os campos necessários'),
  password: yup.string().required('Preencha os campos necessários'),
});
