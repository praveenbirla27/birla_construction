import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function AdminUpload(){

const { requestId } = useParams();

const [file,setFile] = useState(null);
const [category,setCategory] = useState("floor-plan");

const uploadFile = async()=>{

const formData = new FormData();

formData.append("requestId",requestId);
formData.append("category",category);
formData.append("file",file);

await axios.post(
"http://localhost:8080/api/files/upload",
formData
);

alert("File uploaded");

};

return(

<div style={{padding:"40px"}}>

<h2>Upload Project File</h2>

<select onChange={(e)=>setCategory(e.target.value)}>

<option value="floor-plan">Floor Plan</option>
<option value="3d-design">3D Design</option>
<option value="contract">Contract</option>
<option value="cost-sheet">Cost Sheet</option>
<option value="construction-photo">Construction Photo</option>

</select>

<br/><br/>

<input
type="file"
onChange={(e)=>setFile(e.target.files[0])}
/>

<br/><br/>

<button onClick={uploadFile}>
Upload
</button>

</div>

);

}