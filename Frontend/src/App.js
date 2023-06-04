import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Chat from './pages/Chat'
import Login from './pages/Login'
import Signup from './pages/Signup'
function App() {
  return (
	<div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login></Login>} />
            <Route path="/chat" element={<Chat></Chat>} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/signup" element={<Signup></Signup>} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
