import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Profile from "./Pages/Profile"
import SignIn from "./Pages/SignIn"
import SignOut from "./Pages/Signout"
import SignUp from "./Pages/SignUp"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-out" element={<SignOut/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>


    </Routes>
    </BrowserRouter>
  )
}
