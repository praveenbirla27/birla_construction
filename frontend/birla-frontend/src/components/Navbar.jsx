import { Link } from "react-router-dom";
import logo from "../assets/logo.png";  

export default function Navbar(){
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
<div style={{display:"flex",gap:"25px"}}>

<Link to="/">Home</Link>
<Link to="/submit-project">Submit Project</Link>
<Link to="/projects"> My Projects</Link>
<Link to="/login">Login</Link>

</div>

</div>

)
}