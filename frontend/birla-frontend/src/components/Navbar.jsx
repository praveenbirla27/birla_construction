import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar(){

const navigate = useNavigate();

const token = localStorage.getItem("token");
const role = localStorage.getItem("role");

function logout(){

localStorage.removeItem("token");
localStorage.removeItem("role");
localStorage.removeItem("userId");

navigate("/");
window.location.reload();

}

return(

<div style={{
position:"fixed",
top:0,
width:"100%",
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"15px 40px",
background:"rgba(255,255,255,0.9)",
backdropFilter:"blur(8px)",
zIndex:100
}}>

{/* Logo + Name */}
<div style={{
display:"flex",
alignItems:"center",
gap:"10px"
}}>

<img
className="logoimg"
src={logo}
alt="Birla Construction"
style={{
width:"50px",
height:"50px",
objectFit:"contain"
}}
/>

<h2 className="primary" style={{margin:0}}>
Birla Consultant & Construction
</h2>

</div>


{/* Navigation */}
<div style={{display:"flex",gap:"25px",alignItems:"center",marginRight:"50px"}}>

<Link to="/">Home</Link>

{token && role === "client" && (
<Link to="/submit-project">Submit Project</Link>
)}

{token && role === "client" && (
<Link to="/client/dashboard">My Projects</Link>
)}

{token && role === "admin" && (
<Link to="/admin">Admin Dashboard</Link>
)}

{/* If NOT logged in */}
{!token && (
<>
<Link to="/login">Login</Link>
<Link to="/register">Register</Link>
</>
)}

{/* If logged in */}
{token && (
<button
onClick={logout}
style={{
border:"none",
background:"#ff6b00",
color:"white",
padding:"8px 16px",
borderRadius:"6px",
cursor:"pointer"
}}
>
Logout
</button>
)}

</div>

</div>

)

}
