import axios from "axios";
import {useState} from "react";

export default function AdminUpload(){

const [file,setFile] = useState(null);
const [category,setCategory] = useState("plan");

const uploadFile = async()=>{

const formData = new FormData();

formData.append("file",file);
formData.append("category",category);
formData.append("projectId","123");

await axios.post(
"http://localhost:8080/api/files/upload",
formData
);

alert("File uploaded");

};

return(

<div>

<h2>Upload Project File</h2>

<select onChange={(e)=>setCategory(e.target.value)}>

<option value="plan">House Plan</option>
<option value="design">3D Design</option>
<option value="photo">Construction Photo</option>
<option value="bill">Bill</option>
<option value="contract">Contract</option>

</select>

<input
type="file"
onChange={(e)=>setFile(e.target.files[0])}
/>

<button onClick={uploadFile}>
Upload
</button>

</div>

);

}