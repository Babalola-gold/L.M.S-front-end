import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { signUpSchema } from "../Schema/signUpSchema";
import { useState } from "react";
import Alert from '@mui/material/Alert';

const AdminSignup = () => {

    const navigate = useNavigate();
    const URL = "https://l-m-s-back-end.onrender.com/admin/register";
    // const [showPassword, setShowPassword] = useState(false);
    const [signingUp, setSigningUp] = useState(false); // State to track signup process

    // const togglePasswordVisibility = () => {
    //     setShowPassword(!showPassword);
    // };

    const { handleChange, handleSubmit, values, errors } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            setSigningUp(true);
            axios.post(URL, values)
                .then((response) => {
                    if (response.data.status == 200) {
                        setTimeout(() => {
                            navigate("/admin/login");
                        }, 3000);
                    } else {
                        navigate("/admin/signup");
                    }
                })
                .catch((error) => {
                    console.error("Signup failed:", error);
                })
                .finally(() => {
                    setTimeout(() => {
                        setSigningUp(false);
                    }, 3000);
                });
        }
    });

    return (
        <section className="flex justify-center  bg-gradient-to-r from-slate-900 to-slate-800 h-screen  ">
            <main className="lg:m-20 shadow-md bg-black    lg:rounded-lg px-4 py-2 w96 w-1/2">
                <h1 className="mt-5 font-bold text-center text-3xl text-white">Create Admin Account</h1>


                <div className="px-5">

                    {(errors.firstName || errors.lastName || errors.email || errors.password) && (
                        <Alert sx={{ width: "100%" }} severity="warning">
                            {errors.firstName || errors.lastName || errors.email || errors.password}
                        </Alert>
                    )}
                </div>

                <form onSubmit={handleSubmit} className="lg:p-5 p-5 ">
                    <input
                        type="text"
                        placeholder='First Name'
                        onChange={handleChange}
                        name="firstName"
                        value={values.firstName} className="w-full p-3 mb-3 rounded-md" />
                    <input type="text"
                        placeholder='Last Name'
                        onChange={handleChange}
                        name="lastName"
                        value={values.lastName} className="w-full p-3 mb-3 rounded-md" />
                    <input
                        type="email"
                        placeholder='Email address'
                        onChange={handleChange}
                        name="email"
                        value={values.email} className="w-full p-3 mb-3 rounded-md" />
                    <input
                        type="password"
                        placeholder='Password'
                        onChange={handleChange}
                        name="password"
                        value={values.password} className="w-full p-3 mb-3 rounded-md" />


                    <button type="submit" className="w-full p-3 mb-3 font-bold lg:bg-blue-500 text-white rounded-md" disabled={signingUp}>
                        {signingUp ? "Signing up..." : "Signup"}
                    </button>
                    <p className="text-center text-white">you already have an account? <Link to='/admin/login' className="text-gray-600 font-bold">Login</Link></p>
                </form>
            </main>
        </section>
    );
}

export default AdminSignup;





