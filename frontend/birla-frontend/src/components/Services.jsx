import { FaHardHat, FaDraftingCompass, FaHome, FaTools } from "react-icons/fa";

export default function Services(){

const services=[
{
icon:<FaHardHat size={40}/>,
title:"House Construction",
desc:"Complete residential construction services from foundation to finishing."
},
{
icon:<FaDraftingCompass size={40}/>,
title:"Architectural Planning",
desc:"Modern and optimized house plans designed by experts."
},
{
icon:<FaHome size={40}/>,
title:"Interior Design",
desc:"Luxury interior designs for modern lifestyle."
},
{
icon:<FaTools size={40}/>,
title:"Consultation",
desc:"Professional consultation for construction planning and budgeting."
}
]

return(

<section style={{padding:"80px 10%"}}>

<h2 style={{textAlign:"center",fontSize:"40px"}}>
Our <span className="primary">Services</span>
</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"40px",
marginTop:"50px"
}}>

{services.map((s,i)=>(
<div key={i} style={{
background:"#fff",
padding:"30px",
borderRadius:"10px",
boxShadow:"0 5px 20px rgba(0,0,0,0.1)",
textAlign:"center"
}}>

<div className="primary">{s.icon}</div>

<h3>{s.title}</h3>

<p>{s.desc}</p>

</div>
))}

</div>

</section>

)

}