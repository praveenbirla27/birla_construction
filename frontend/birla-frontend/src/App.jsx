import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import "./styles/global.css";
import SubmitProject from "./pages/SubmitProject";
import Dashboard from "./admin/Dashboard";
import Requests from "./admin/Requests";
import ClientDashboard from "./client/ClientDashboard";
import Chat from "./client/Chat";

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/submit-project" element={<SubmitProject/>}/>
<Route path="/admin" element={<Dashboard/>}/>
<Route path="/admin/requests" element={<Requests/>}/>
<Route path="/client/dashboard" element={<ClientDashboard/>}/>
<Route path="/chat" element={<Chat/>}/>

</Routes>

</BrowserRouter>

)

}

export default App
