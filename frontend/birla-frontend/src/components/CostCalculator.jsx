import { useState } from "react";

export default function CostCalculator(){

const [area,setArea]=useState("");
const [type,setType]=useState("basic");
const [cost,setCost]=useState(null);

const rates={
basic:1500,
standard:2000,
luxury:3000
}

function calculateCost(){

if(!area) return;

const result = area * rates[type];
setCost(result);

}

return(

<section style={{padding:"80px 10%"}}>

<h2 style={{textAlign:"center",fontSize:"40px"}}>
Construction <span className="primary">Cost Calculator</span>
</h2>

<div style={{
maxWidth:"600px",
margin:"40px auto",
background:"#fff",
padding:"30px",
borderRadius:"10px",
boxShadow:"0 5px 20px rgba(0,0,0,0.1)"
}}>

<label>Plot Area (sq ft)</label>

<input
type="number"
placeholder="Enter area"
value={area}
onChange={(e)=>setArea(e.target.value)}
style={{
width:"100%",
padding:"12px",
marginTop:"10px",
marginBottom:"20px"
}}
/>

<label>Construction Type</label>

<select
value={type}
onChange={(e)=>setType(e.target.value)}
style={{
width:"100%",
padding:"12px",
marginTop:"10px",
marginBottom:"20px"
}}
>

<option value="basic">Basic (₹1500/sqft)</option>
<option value="standard">Standard (₹2000/sqft)</option>
<option value="luxury">Luxury (₹3000/sqft)</option>

</select>

<button className="btn" onClick={calculateCost}>
Calculate Cost
</button>

{cost && (

<div style={{marginTop:"20px"}}>

<h3>
Estimated Cost: ₹{cost.toLocaleString()}
</h3>

</div>

)}

</div>

</section>

)

}