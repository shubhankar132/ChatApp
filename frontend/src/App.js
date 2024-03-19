import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';
//
//import Signup from './components/Authentication/Signup'; // Import the Signup component

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/chats" element={<ChatPage />} />
        </Routes>
    </div>
  );
}

export default App;
