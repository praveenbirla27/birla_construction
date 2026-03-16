import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {

return (

<div
style={{
height:"70px",
background:"rgba(255,255,255,0.08)",
backdropFilter:"blur(12px)",
borderRadius:"16px",
padding:"0 25px",
display:"flex",
alignItems:"center",
justifyContent:"space-between",
boxShadow:"0 10px 30px rgba(0,0,0,0.2)",
marginBottom:"30px",
border:"1px solid rgba(255,255,255,0.08)"
}}
>

<h3 style={{fontWeight:"600"}}>
Admin Dashboard
</h3>


{/* SEARCH BAR */}

<div
style={{
display:"flex",
alignItems:"center",
background:"rgba(255,255,255,0.1)",
padding:"8px 12px",
borderRadius:"10px",
gap:"8px",
width:"250px"
}}
>

<FaSearch style={{opacity:0.7}}/>

<input
placeholder="Search..."
style={{
border:"none",
outline:"none",
background:"transparent",
color:"white",
width:"100%"
}}
/>

</div>


{/* RIGHT SIDE */}

<div style={{
display:"flex",
gap:"20px",
alignItems:"center"
}}>


<motion.div whileHover={{scale:1.1}} style={{position:"relative"}}>

<FaBell size={20}/>

<span
style={{
position:"absolute",
top:"-6px",
right:"-6px",
background:"#ff6b00",
color:"white",
fontSize:"10px",
padding:"2px 6px",
borderRadius:"20px"
}}
>
3
</span>

</motion.div>


<motion.div
whileHover={{scale:1.1}}
style={{
display:"flex",
alignItems:"center",
gap:"8px",
cursor:"pointer"
}}
>

<FaUserCircle size={28}/>

<span style={{fontSize:"14px"}}>
Admin
</span>

</motion.div>


</div>

</div>

)
}