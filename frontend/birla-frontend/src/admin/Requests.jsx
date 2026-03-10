import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";

export default function Requests(){

const [requests,setRequests] = useState([]);

useEffect(()=>{
axios.get("http://localhost:5000/api/request")
.then(res=>setRequests(res.data));
},[]);

const updateProgress = async(id,progress)=>{

await axios.put(`http://localhost:5000/api/request/progress/${id}`,progress);

alert("Progress Updated");

};

return(

<AdminLayout>

<h1>Client Requests</h1>

{requests.map(r=>(

<div key={r._id}
style={{
background:"white",
padding:"25px",
marginTop:"20px",
borderRadius:"12px",
boxShadow:"0 10px 25px rgba(0,0,0,0.05)"
}}>

<h3>{r.location}</h3>
<p>Budget: ₹{r.budget}</p>

<h4>Update Progress</h4>

<label>
<input
type="checkbox"
defaultChecked={r.progress.foundation}
onChange={(e)=>updateProgress(r._id,{
...r.progress,
foundation:e.target.checked
})}
/>
Foundation
</label>

<br/>

<label>
<input
type="checkbox"
defaultChecked={r.progress.structure}
onChange={(e)=>updateProgress(r._id,{
...r.progress,
structure:e.target.checked
})}
/>
Structure
</label>

<br/>

<label>
<input
type="checkbox"
defaultChecked={r.progress.plastering}
onChange={(e)=>updateProgress(r._id,{
...r.progress,
plastering:e.target.checked
})}
/>
Plastering
</label>

<br/>

<label>
<input
type="checkbox"
defaultChecked={r.progress.finishing}
onChange={(e)=>updateProgress(r._id,{
...r.progress,
finishing:e.target.checked
})}
/>
Finishing
</label>

</div>

))}

<button
style={{
background:"#ff6b00",
color:"white",
border:"none",
padding:"8px 16px",
borderRadius:"6px",
cursor:"pointer"
}}
>
Upload Project Files
</button>

</AdminLayout>

);

}