import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Login(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const navigate = useNavigate();

async function handleLogin(){

try{

const res = await axios.post(
"http://localhost:8080/api/auth/login",
{email,password}
);

/* SAVE LOGIN DATA */
localStorage.setItem("token",res.data.token);
localStorage.setItem("userId",res.data.user._id);
localStorage.setItem("role",res.data.user.role);

/* REDIRECT BASED ON ROLE */

if(res.data.user.role === "admin"){
navigate("/admin");
}else{
navigate("/client/dashboard");
}

}catch(err){

alert("Login failed");

}

}

useEffect(()=>{

if(localStorage.getItem("token")){
window.location="/client/dashboard";
}

},[]);

return(

<div style={{
height:"100vh",
backgroundImage:"url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c)",
backgroundSize:"cover",
display:"flex",
justifyContent:"center",
alignItems:"center"
}}>

<div style={{
backdropFilter:"blur(10px)",
background:"rgba(255,255,255,0.15)",
padding:"40px",
borderRadius:"15px",
width:"350px",
color:"white"
}}>

<h2 style={{textAlign:"center"}}>Login</h2>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
style={{
width:"100%",
padding:"12px",
marginTop:"20px",
border:"none",
borderRadius:"5px"
}}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
style={{
width:"100%",
padding:"12px",
marginTop:"15px",
border:"none",
borderRadius:"5px"
}}
/>

<button
className="btn"
style={{width:"100%",marginTop:"20px"}}
onClick={handleLogin}
>
Login
</button>

<p style={{marginTop:"15px",textAlign:"center"}}>
Don't have account? <Link to="/register">Register</Link>
</p>

</div>

</div>

)

}
