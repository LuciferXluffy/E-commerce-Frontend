import "./App.css";
import Login from "./component/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Register from "./component/Register";
import Card from "./component/Card";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
     
      <BrowserRouter>
       <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
         <Footer />
      </BrowserRouter>
     
    </>
  );
}

export default App;
