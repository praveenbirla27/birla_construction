import { useEffect,useState } from "react"
import axios from "axios"
import { useNavigate,Link } from "react-router-dom"
import DashboardHeader from "../components/DashboardHeader"
import StatsCards from "../components/StatsCards"
import EmptyState from "../components/EmptyState"

export default function ClientDashboard(){

const [projects,setProjects] = useState([])
const [files,setFiles] = useState({})
const navigate = useNavigate()

const userId = localStorage.getItem("userId")

useEffect(()=>{

if(localStorage.getItem("role") !== "client"){
navigate("/")
}

loadProjects()

},[])


async function loadProjects(){

try{

const res = await axios.get(
`http://localhost:8080/api/client/myprojects/${userId}`
)

setProjects(res.data)

const fileData = {}

for(const project of res.data){

const f = await axios.get(
`http://localhost:8080/api/files/${project._id}`
)

fileData[project._id] = f.data

}

setFiles(fileData)

}catch(err){
console.log(err)
}

}


return(

<div style={{display:"flex"}}>

{/* SIDEBAR */}

<div style={{
width:"220px",
height:"100vh",
background:"#111827",
color:"white",
padding:"30px"
}}>

<h2 style={{marginBottom:"40px"}}>Client Panel</h2>

<div style={{display:"flex",flexDirection:"column",gap:"20px"}}>

<Link to="/client/dashboard" style={{color:"white"}}>Dashboard</Link>
<Link to="/submit-project" style={{color:"white"}}>Submit Project</Link>
<Link to="/projects" style={{color:"white"}}>My Projects</Link>

<button
style={{
marginTop:"40px",
padding:"10px",
background:"#ef4444",
border:"none",
color:"white",
borderRadius:"6px"
}}
onClick={()=>{
localStorage.clear()
navigate("/")
}}
>
Logout
</button>

</div>

</div>



{/* MAIN AREA */}

<div style={{
flex:1,
padding:"40px",
background:"#f9fafb",
minHeight:"100vh"
}}>

<h1>Welcome 👋</h1>
<p style={{color:"#666",marginBottom:"30px"}}>
Track your construction progress
</p>


{/* STATS */}

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
gap:"20px",
marginBottom:"40px"
}}>

<div className="clientcard">
<h3>Total Projects</h3>
<h1>{projects.length}</h1>
</div>

<div className="clientcard">
<h3>Completed</h3>
<h1>
{projects.filter(p=>p.progress?.finishing).length}
</h1>
</div>

<div className="clientcard">
<h3>In Progress</h3>
<h1>
{projects.filter(p=>!p.progress?.finishing).length}
</h1>
</div>

</div>



{/* EMPTY STATE */}

{projects.length === 0 && (

<div className="empty">

<h3>No Projects Yet</h3>

<p>Submit your first project to start construction</p>

<Link to="/submit-project">

<button className="clientbtn">
Submit Project
</button>

</Link>

</div>

)}



{/* PROJECT CARDS */}

{projects.map(project=>(

<div key={project._id} className="projectCard">

<h2>{project.location}</h2>

<p>Budget: ₹{project.budget}</p>


{/* Timeline */}

<h4>Construction Timeline</h4>

<div className="timeline">

<div className={project.progress?.foundation ? "done":"step"}>
Foundation
</div>

<div className={project.progress?.structure ? "done":"step"}>
Structure
</div>

<div className={project.progress?.plastering ? "done":"step"}>
Plastering
</div>

<div className={project.progress?.finishing ? "done":"step"}>
Finishing
</div>

</div>



{/* MAP */}

{project.mapEmbed && (

<iframe
src={project.mapEmbed}
width="100%"
height="250"
style={{border:0,marginTop:"20px"}}
/>

)}



{/* FILES */}

<h3 style={{marginTop:"20px"}}>Documents</h3>

{files[project._id]?.map(file=>(

<div key={file._id} className="file">

<span>{file.category}</span>

<a
href={`http://localhost:8080/uploads/${file.fileUrl}`}
target="_blank"
>
View
</a>

<div style={{padding:"40px"}}>

<DashboardHeader />

<StatsCards projects={projects} />

{projects.length === 0 && <EmptyState />}

</div>

</div>

))}

</div>

))}

</div>

</div>

)

}