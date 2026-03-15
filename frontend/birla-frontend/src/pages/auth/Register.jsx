import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register(){

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [phone,setPhone]=useState("");
const [password,setPassword]=useState("");
const [role,setRole]=useState("client");

const [loading,setLoading] = useState(false);
const [message,setMessage] = useState("");
const [error,setError] = useState("");

const navigate = useNavigate();

async function handleRegister(){

setLoading(true);
setError("");
setMessage("");

try{

await axios.post("http://localhost:8080/api/auth/register",{
name,
email,
phone,
password,
role
});

setMessage("Registration successful! Redirecting to login...");

setTimeout(()=>{
navigate("/login");
},2000);

}catch(err){

setError("Registration failed. Try again.");

}

setLoading(false);

}

return(

<div style={{
height:"100vh",
backgroundImage:"url(https://images.unsplash.com/photo-1487958449943-2429e8be8625)",
backgroundSize:"cover",
backgroundPosition:"center",
display:"flex",
justifyContent:"center",
alignItems:"center"
}}>

<div style={{
backdropFilter:"blur(12px)",
background:"rgba(255,255,255,0.18)",
padding:"45px",
borderRadius:"18px",
width:"370px",
color:"white",
boxShadow:"0 10px 40px rgba(0,0,0,0.25)"
}}>

<h2 style={{textAlign:"center",marginBottom:"20px"}}>
Create Account
</h2>

<input
type="text"
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
style={inputStyle}
/>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
style={inputStyle}
/>

<input
type="text"
placeholder="Phone"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
style={inputStyle}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
style={inputStyle}
/>

<button
onClick={handleRegister}
disabled={loading}
style={{
width:"100%",
marginTop:"20px",
padding:"12px",
border:"none",
borderRadius:"8px",
background: loading ? "#aaa" : "#ff6b00",
color:"white",
fontWeight:"bold",
cursor:"pointer",
transition:"0.3s"
}}
>
{loading ? "Creating account..." : "Register"}
</button>

{message && (
<p style={{
color:"#00ff9c",
marginTop:"15px",
textAlign:"center"
}}>
{message}
</p>
)}

{error && (
<p style={{
color:"#ff4d4d",
marginTop:"15px",
textAlign:"center"
}}>
{error}
</p>
)}

<p style={{marginTop:"18px",textAlign:"center"}}>
Already have account?{" "}
<Link to="/login" style={{color:"#fff",fontWeight:"bold"}}>
Login
</Link>
</p>

</div>

</div>

)

}

const inputStyle = {
width:"100%",
padding:"12px",
marginTop:"15px",
border:"none",
borderRadius:"8px",
outline:"none",
fontSize:"14px"
};

