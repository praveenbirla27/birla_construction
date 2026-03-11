import axios from "axios";
import {useState} from "react";

export default function AdminUpload(){

const [file,setFile] = useState(null);
const [category,setCategory] = useState("plan");

const uploadFile = async()=>{

const formData = new FormData();

data.append("requestId",id);
data.append("title",title);
data.append("fileType",fileType);
data.append("file",file);

await axios.post(
"http://localhost:8080/api/files/upload",
formData
);

alert("File uploaded");

};

return(

<div style={{padding:"40px"}}>

<h2>Upload Project File</h2>

<input
placeholder="Title (ex: Floor Plan)"
onChange={(e)=>setTitle(e.target.value)}
/>

<br/><br/>

<select onChange={(e)=>setFileType(e.target.value)}>

<option>floor-plan</option>
<option>3d-design</option>
<option>contract</option>
<option>cost-sheet</option>
<option>construction-photo</option>

</select>

<br/><br/>

<input type="file" onChange={(e)=>setFile(e.target.files[0])}/>

<br/><br/>

<button onClick={upload}>Upload</button>

</div>

);

}