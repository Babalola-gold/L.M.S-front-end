import * as yup from 'yup';

export const userVerifySchema = yup.object({
    otp: yup.string()
        .required('Please enter OTP')
        .matches(/^\d{6}$/, 'OTP must be exactly 6 digits')
});
