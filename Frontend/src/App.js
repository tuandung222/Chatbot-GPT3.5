import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Chat from './pages/Chat'
import Login from './pages/Login'
import Signup from './pages/Signup'
localStorage.setItem('successLogin', false)





function App() {
    let successLogin = localStorage.getItem('successLogin')
    let mainRoute;
    if (!successLogin) {
        mainRoute = <Route path="/" element={<Login></Login>}/>
    }
    else {
        mainRoute = <Route path="/" element={<Chat></Chat>}/>
    }
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {mainRoute}
                    <Route path="/chat" element={<Chat></Chat>} />
                    <Route path="/login" element={<Login></Login>} />
                    <Route path="/signup" element={<Signup></Signup>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
