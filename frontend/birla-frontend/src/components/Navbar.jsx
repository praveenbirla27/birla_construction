import { Link } from "react-router-dom";

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
zIndex:100
}}>

<h2 className="primary">Birla Construction</h2>

<div style={{display:"flex",gap:"25px"}}>

<Link to="/">Home</Link>
<Link to="/projects">Projects</Link>
<Link to="/services">Services</Link>
<Link to="/login">Login</Link>

</div>

</div>

)
}