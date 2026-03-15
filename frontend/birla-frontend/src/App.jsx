import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import "./styles/global.css";
import "./styles/ui.css"
import SubmitProject from "./pages/SubmitProject";
import Dashboard from "./admin/Dashboard";
import Requests from "./admin/Requests";
import ClientDashboard from "./client/ClientDashboard";
import Chat from "./client/Chat";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* ADD THIS */
import AdminUpload from "./pages/AdminUpload";

function App(){

return(

<BrowserRouter>

<ToastContainer position="top-right" autoClose={2000} />

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/submit-project" element={<SubmitProject/>}/>

<Route path="/admin" element={<Dashboard/>}/>
<Route path="/admin/requests" element={<Requests/>}/>

{/* NEW ROUTE */}
<Route path="/admin/upload/:requestId" element={<AdminUpload/>}/>

<Route path="/client/dashboard" element={<ClientDashboard/>}/>
<Route path="/chat" element={<Chat/>}/>

</Routes>

</BrowserRouter>

)

}

export default App;
