import { Link } from "react-router-dom"

export default function EmptyState(){

return(

<div
className="glass"
style={{
padding:"50px",
textAlign:"center"
}}
>

<h2>No Projects Yet</h2>

<p style={{color:"#666"}}>
Submit your first construction project
</p>

<Link to="/submit-project">

<button className="primaryBtn">
Submit Project
</button>

</Link>

</div>

)

}