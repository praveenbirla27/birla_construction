export default function StatsCards({projects}){

const completed =
projects.filter(p=>p.progress?.finishing).length

const inProgress =
projects.filter(p=>!p.progress?.finishing).length

return(

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
gap:"20px",
marginBottom:"30px"
}}
>

<div className="statCard">
<h3>Total Projects</h3>
<h1>{projects.length}</h1>
</div>

<div className="statCard">
<h3>Completed</h3>
<h1>{completed}</h1>
</div>

<div className="statCard">
<h3>In Progress</h3>
<h1>{inProgress}</h1>
</div>

</div>

)

}