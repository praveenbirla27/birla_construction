import { useState } from "react";

export default function Register(){

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [phone,setPhone]=useState("");
const [password,setPassword]=useState("");

return(

<div style={{
height:"100vh",
backgroundImage:"url(https://images.unsplash.com/photo-1487958449943-2429e8be8625)",
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

<h2 style={{textAlign:"center"}}>Register</h2>

<input
type="text"
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
style={{width:"100%",padding:"12px",marginTop:"15px",borderRadius:"5px"}}
/>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
style={{width:"100%",padding:"12px",marginTop:"15px",borderRadius:"5px"}}
/>

<input
type="text"
placeholder="Phone"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
style={{width:"100%",padding:"12px",marginTop:"15px",borderRadius:"5px"}}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
style={{width:"100%",padding:"12px",marginTop:"15px",borderRadius:"5px"}}
/>

<button className="btn" style={{width:"100%",marginTop:"20px"}}>
Register
</button>

</div>

</div>

)

}