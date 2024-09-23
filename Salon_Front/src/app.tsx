import { Register } from "./Content/auth/RegisterPage"
import { NavbarAdmin } from "./Content/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './index.css'
export const App = () => {

    return (
        <div className="App">
            <BrowserRouter>
                <div className="App-header">
                    <Routes>
                        <Route path="/" element={<NavbarAdmin />}></Route>
                    </Routes>
                </div>
                <div className="App-main">
                    <Routes>
                        <Route path="/auth/register" element={<Register />}></Route>
                    </Routes>
                </div>

            </BrowserRouter>
        </div>
    )
}