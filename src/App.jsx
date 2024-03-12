import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Layout/Home'
import Layout from './Components/Layout/Layout'
import About from './Components/About'
import Notfound from './Components/Layout/Notfound'
import AdminLogin from './Components/Admin/AdminLogin'
import AdminSignup from './Components/Admin/AdminSignup'
import { ToastContainer } from 'react-toastify'
import AdminDashBoard from './Components/Admin/AdminDashBoard'
import AdminForgot from './Components/Admin/AdminForgot'
import AdminInputOTP from './Components/Admin/AdminInputOTP'
import AdminLayout from './Components/Admin/AdminLayout'
import AdminCreateNewPass from './Components/Admin/AdminCreateNewPass'
import UserSignUp from './Components/User/UserSignUp'
import UserLogin from './Components/User/UserLogin'
import UserDashboard from './Components/User/UserDashboard'
import CreateNewPassword from './Components/User/CreateNewPassword'
import UserLayout from './Components/User/UserLayout'
import ForgetPassword from './Components/User/ForgetPassword'
import UserInputOTP from './Components/User/UserInputOTP'
import Career from './Components/Layout/Career'





function App() {
  return (
    <>
      <ToastContainer position='top-center' theme='dark' />
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          

        </Route>

        <Route path="/user/signup" element={<UserSignUp />} />
        <Route path="/user/login" element={<UserLogin/>} />
        <Route path="/user/forgot" element={<ForgetPassword/>}/>
        <Route path="/user/verifyotp" element={<UserInputOTP/>}/>
        <Route path='/user/createpassword' element={<CreateNewPassword/>}/>

         <Route path="/user" element={<UserLayout/>}>
          <Route path="/user" element={<Navigate to="/user/dashboard" />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />
          {/* <Route path="/user/profile" element={<UserProfile  />} /> */}
        </Route>


        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/forgot" element={<AdminForgot />} />
        <Route path="/admin/forgot" element={<AdminDashBoard />} />
        <Route path="/admin/verifyotp" element={<AdminInputOTP />} />
        <Route path="/admin/createpassword" element={<AdminCreateNewPass />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
          <Route path="/admin/dashboard" element={<AdminDashBoard />} />
        </Route>


      </Routes>
    </>
  )
}

export default App
