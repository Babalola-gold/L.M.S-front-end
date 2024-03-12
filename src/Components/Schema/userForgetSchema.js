import * as yup from 'yup';

export const userForgetSchema = yup.object({
    email: yup.string().required('Email is required').email('Email is invalid'),
   
});