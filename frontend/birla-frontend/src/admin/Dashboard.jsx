import AdminLayout from "./AdminLayout";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
} from "recharts";

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

const chartData = [
{name:"Jan", value:12000},
{name:"Feb", value:18000},
{name:"Mar", value:15000},
{name:"Apr", value:22000},
{name:"May", value:28000},
{name:"Jun", value:32000}
];

const activity = [
"New project request submitted",
"Client uploaded blueprint",
"Admin approved project plan",
"Payment milestone completed",
"New client registered"
];

return (

<AdminLayout>

<h1 style={{marginBottom:"30px"}}>Dashboard</h1>

{/* Stats Cards */}

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
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
background:"rgba(255,255,255,0.7)",
backdropFilter:"blur(10px)",
padding:"25px",
borderRadius:"16px",
boxShadow:"0 10px 30px rgba(0,0,0,0.08)"
}}
>

<h4 style={{opacity:0.7}}>{card.title}</h4>
<h1 style={{color:"#ff6b00"}}>{card.value}</h1>

</motion.div>

))}

</div>


{/* Chart + Activity Section */}

<div style={{
display:"grid",
gridTemplateColumns:"2fr 1fr",
gap:"20px",
marginTop:"40px"
}}>


{/* Revenue Chart */}

<div style={{
background:"white",
padding:"25px",
borderRadius:"16px",
boxShadow:"0 10px 30px rgba(0,0,0,0.05)"
}}>

<h3 style={{marginBottom:"20px"}}>Revenue Growth</h3>

<ResponsiveContainer width="100%" height={250}>
<LineChart data={chartData}>
<XAxis dataKey="name"/>
<YAxis/>
<Tooltip/>
<Line
type="monotone"
dataKey="value"
stroke="#ff6b00"
strokeWidth={3}
/>
</LineChart>
</ResponsiveContainer>

</div>


{/* Activity Feed */}

<div style={{
background:"white",
padding:"25px",
borderRadius:"16px",
boxShadow:"0 10px 30px rgba(0,0,0,0.05)"
}}>

<h3 style={{marginBottom:"20px"}}>Recent Activity</h3>

<ul style={{listStyle:"none",padding:0}}>

{activity.map((a,i)=>(
<li key={i} style={{
padding:"10px 0",
borderBottom:"1px solid #eee",
fontSize:"14px"
}}>
• {a}
</li>
))}

</ul>

</div>

</div>

</AdminLayout>

)

}

