import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import "./styles/global.css";
import SubmitProject from "./pages/SubmitProject";

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/submit-project" element={<SubmitProject/>}/>

</Routes>

</BrowserRouter>

)

}

export default App
