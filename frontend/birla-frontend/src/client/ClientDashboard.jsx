import { useEffect,useState } from "react";
import axios from "axios";

export default function ClientDashboard(){

const [projects,setProjects] = useState([]);

const userId = localStorage.getItem("userId");

useEffect(()=>{

axios.get(`http://localhost:8080/api/client/myprojects/${userId}`)
.then(res=>setProjects(res.data));

},[]);

return(

<div style={{padding:"40px"}}>

<h1>My Project</h1>

{projects.map(project=>(

<div key={project._id}
style={{
background:"white",
padding:"30px",
borderRadius:"15px",
marginTop:"20px",
boxShadow:"0 10px 30px rgba(0,0,0,0.05)"
}}>

<h3>{project.location}</h3>
<p>Budget: ₹{project.budget}</p>

<h4>Progress</h4>

<ul>

<li>Foundation: {project.progress.foundation ? "✔ Completed":"⏳ Pending"}</li>

<li>Structure: {project.progress.structure ? "✔ Completed":"⏳ Pending"}</li>

<li>Plastering: {project.progress.plastering ? "✔ Completed":"⏳ Pending"}</li>

<li>Finishing: {project.progress.finishing ? "✔ Completed":"⏳ Pending"}</li>

</ul>

{project.mapEmbed && (

<iframe
src={project.mapEmbed}
width="100%"
height="300"
style={{border:0}}
/>

)}

<h3>Project Documents</h3>

{project.documents?.map(doc=>(
<div
key={doc.file}
style={{
background:"#fff",
padding:"15px",
marginTop:"10px",
borderRadius:"10px",
display:"flex",
justifyContent:"space-between"
}}
>

<span>{doc.name}</span>

<a
href={`http://localhost:8080/${doc.file}`}
target="_blank"
>
Download
</a>

</div>
))}

</div>

))}

</div>

)

}