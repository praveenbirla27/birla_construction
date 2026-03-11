import AdminLayout from "./AdminLayout";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {


const [stats,setStats] = useState({
clients:0,
projects:0,
pending:0,
revenue:0
});

const navigate = useNavigate();

useEffect(()=>{
if(localStorage.getItem("role") !== "admin"){
navigate("/");
}
},[]);

useEffect(()=>{

axios.get("http://localhost:8080/api/request")
.then(res=>{

const requests = res.data;

const totalProjects = requests.length;

const pending = requests.filter(r=>r.status==="pending").length;

const revenue = requests.reduce((sum,r)=>{
const num = parseInt(r.budget);
return sum + (isNaN(num)?0:num);
},0);

setStats({
clients: totalProjects, 
projects: totalProjects,
pending: pending,
revenue: revenue
});

});

},[]);


const cards = [
{title:"Clients", value:stats.clients},
{title:"Active Projects", value:stats.projects},
{title:"Pending Requests", value:stats.pending},
{title:"Revenue", value:`₹${stats.revenue}`}
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
whileHover={{scale:1.05}}
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

