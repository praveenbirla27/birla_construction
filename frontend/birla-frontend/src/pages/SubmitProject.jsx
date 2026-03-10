import { useState } from "react";
import axios from "axios";

export default function SubmitProject(){

const [form,setForm]=useState({
plotSize:"",
floors:"",
budget:"",
location:"",
description:""
});

const [files,setFiles]=useState({});

function handleChange(e){
setForm({...form,[e.target.name]:e.target.value});
}

function handleFile(e){
setFiles({...files,[e.target.name]:e.target.files});
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

await axios.post("http://localhost:5000/api/request/submit",data);

alert("Request Submitted");

}

return(

<div style={{padding:"80px 10%"}}>

<h2>Submit House Requirement</h2>

<input name="plotSize" placeholder="Plot Size" onChange={handleChange}/>
<input name="floors" placeholder="Floors" onChange={handleChange}/>
<input name="budget" placeholder="Budget" onChange={handleChange}/>
<input name="location" placeholder="Location" onChange={handleChange}/>

<textarea name="description" placeholder="Describe your requirements" onChange={handleChange}/>

<p>Reference Images</p>
<input type="file" name="referenceImages" multiple onChange={handleFile}/>

<p>Plot Map</p>
<input type="file" name="plotMap" onChange={handleFile}/>

<p>Land Document (optional)</p>
<input type="file" name="landDocument" onChange={handleFile}/>

<button className="btn" onClick={submit}>
Submit
</button>

</div>

)

}