import AdminLayout from "./AdminLayout";
import { motion } from "framer-motion";

export default function Dashboard() {

const cards = [
{title:"Clients", value:"24"},
{title:"Active Projects", value:"10"},
{title:"Pending Requests", value:"5"},
{title:"Revenue", value:"₹3.2L"}
];

return (

<AdminLayout>

<h1 style={{marginBottom:"30px"}}>Dashboard</h1>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
gap:"20px"
}}>

{cards.map((card,index)=>(
<motion.div
key={index}
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{delay:index*0.1}}
style={{
background:"white",
padding:"25px",
borderRadius:"15px",
boxShadow:"0 10px 30px rgba(0,0,0,0.05)"
}}
>

<h3>{card.title}</h3>
<h1 style={{color:"#ff6b00"}}>{card.value}</h1>

</motion.div>
))}

</div>

</AdminLayout>

)

}