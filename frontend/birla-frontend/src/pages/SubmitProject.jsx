import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // for navigate to home after submiting 

export default function SubmitProject(){

const [form,setForm]=useState({
plotSize:"",
floors:"",
budget:"",
location:"",
mapEmbed:"",
description:""
});

const [files,setFiles]=useState({});
const [previewImages,setPreviewImages]=useState([]);

function handleChange(e){
setForm({...form,[e.target.name]:e.target.value});
}

function handleFile(e){

setFiles({...files,[e.target.name]:e.target.files});

if(e.target.name==="referenceImages"){

const previews = [];

for(let i=0;i<e.target.files.length;i++){
previews.push(URL.createObjectURL(e.target.files[i]));
}

setPreviewImages(previews);

}

}

async function submit(){

const data = new FormData();

Object.keys(form).forEach(k=>{
data.append(k,form[k]);
});

if(files.referenceImages){
for(let i=0;i<files.referenceImages.length;i++){
data.append("referenceImages",files.referenceImages[i]);
}
}

if(files.plotMap){
data.append("plotMap",files.plotMap[0]);
}

if(files.landDocument){
data.append("landDocument",files.landDocument[0]);
}

try{

await axios.post(
"http://localhost:8080/api/request/submit",
data,
{ headers:{ "Content-Type":"multipart/form-data" } }
);

toast.success("Project submitted successfully!");

setTimeout(()=>{
navigate("/client/dashboard");
},2000);

}catch(err){
console.log(err);
toast.error("Submission failed");
}

}

const estimatedCost = form.plotSize && form.floors
? form.plotSize * form.floors * 1800
: 0;

return(

<div>

<Navbar/>

<div style={{
padding:"120px 10%",
background:"#f4f6fb",
minHeight:"100vh"
}}>

<div style={{
maxWidth:"1000px",
margin:"auto",
background:"white",
padding:"40px",
borderRadius:"16px",
boxShadow:"0 20px 40px rgba(0,0,0,0.08)"
}}>

<h2 style={{textAlign:"center"}}>
Submit Construction Requirement
</h2>

{/* FORM GRID */}

<div style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"50px",
marginTop:"30px"
}}>

<div>
<label>Plot Size (sqft)</label>
<input name="plotSize" onChange={handleChange} style={input}/>
</div>

<div>
<label>Floors</label>
<input name="floors" onChange={handleChange} style={input}/>
</div>

<div>
<label>Budget</label>
<input name="budget" onChange={handleChange} style={input}/>
</div>

<div>
<label>Location</label>
<input name="location" onChange={handleChange} style={input}/>
</div>

</div>

{/* COST ESTIMATION */}

{estimatedCost>0 && (

<div style={{
marginTop:"25px",
padding:"20px",
background:"#fff4e8",
borderRadius:"10px"
}}>

Estimated Construction Cost:
<b style={{marginLeft:"10px"}}>
₹{estimatedCost.toLocaleString()}
</b>

</div>

)}

{/* MAP */}

<div style={{marginTop:"25px"}}>

<label>Google Map Embed Link</label>

<input
name="mapEmbed"
onChange={handleChange}
placeholder="Paste Google Map Embed URL"
style={input}
/>

{form.mapEmbed && (

<iframe
title="map"
src={form.mapEmbed}
width="100%"
height="250"
style={{border:0,marginTop:"10px"}}
/>

)}

</div>

{/* DESCRIPTION */}

<div style={{marginTop:"25px"}}>

<label>Project Description</label>

<textarea
name="description"
onChange={handleChange}
style={{...input,height:"120px"}}
/>

</div>

{/* IMAGE UPLOAD */}

<div style={{marginTop:"30px"}}>

<h3>Reference Images</h3>

<input
type="file"
name="referenceImages"
multiple
onChange={handleFile}
/>

<div style={{
display:"flex",
gap:"10px",
marginTop:"15px",
flexWrap:"wrap"
}}>

{previewImages.map((img,i)=>(

<img
key={i}
src={img}
style={{
width:"120px",
height:"90px",
objectFit:"cover",
borderRadius:"8px"
}}
/>

))}

</div>

</div>

{/* OTHER FILES */}

<div style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"20px",
marginTop:"25px"
}}>

<div>
<label>Plot Map</label>
<input type="file" name="plotMap" onChange={handleFile}/>
</div>

<div>
<label>Land Document</label>
<input type="file" name="landDocument" onChange={handleFile}/>
</div>

</div>

{/* SUBMIT */}

<div style={{marginTop:"40px",textAlign:"center"}}>

<button
onClick={submit}
className="submit-btn"
>
Submit Project
</button>

</div>

</div>

</div>

</div>

)

}

const input={
width:"100%",
padding:"12px",
borderRadius:"6px",
border:"1px solid #ddd",
marginTop:"6px"
};

