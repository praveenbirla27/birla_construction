import { FaHome, FaClipboardList, FaGlobe } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Sidebar() {

const location = useLocation();

const navItems = [
{ name:"Dashboard", icon:<FaHome/>, path:"/admin" },
{ name:"Client Requests", icon:<FaClipboardList/>, path:"/admin/requests" },
{ name:"Website", icon:<FaGlobe/>, path:"/" }
];

return (

<div
style={{
width:"260px",
height:"100vh",
background:"rgba(15,23,42,0.9)",
backdropFilter:"blur(10px)",
color:"white",
padding:"30px 20px",
position:"fixed",
left:0,
top:0,
borderRight:"1px solid rgba(255,255,255,0.08)"
}}
>

<h2 style={{
marginBottom:"50px",
color:"#ff6b00",
fontWeight:"700",
letterSpacing:"1px"
}}>
Birla Admin
</h2>


<div style={{
display:"flex",
flexDirection:"column",
gap:"12px"
}}>

{navItems.map((item,index)=>{

const active = location.pathname === item.path;

return(

<Link
key={index}
to={item.path}
style={{ textDecoration:"none" }}
>

<motion.div
whileHover={{x:6}}
style={{
display:"flex",
alignItems:"center",
gap:"12px",
padding:"14px 16px",
borderRadius:"10px",
fontSize:"15px",
background: active ? "rgba(255,107,0,0.15)" : "transparent",
color: active ? "#ff6b00" : "#e5e7eb",
transition:"0.2s"
}}
>

<span style={{fontSize:"16px"}}>
{item.icon}
</span>

<span>
{item.name}
</span>

</motion.div>

</Link>

)

})}

</div>

</div>

)
}