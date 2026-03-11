import { useEffect,useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8080");

export default function Chat(){

const [message,setMessage] = useState("");
const [messages,setMessages] = useState([]);

useEffect(()=>{

socket.on("receiveMessage",(data)=>{

setMessages(prev=>[...prev,data]);

});

},[]);

const sendMessage = ()=>{

socket.emit("sendMessage",{text:message});

setMessages(prev=>[...prev,{text:message}]);

setMessage("");

};

return(

<div style={{padding:"30px"}}>

<h2>Consultant Chat</h2>

<div style={{
height:"400px",
border:"1px solid #ddd",
padding:"15px",
overflowY:"auto",
marginBottom:"20px"
}}>

{messages.map((msg,i)=>(

<div key={i} style={{
background:"#dcf8c6",
padding:"10px",
borderRadius:"10px",
marginBottom:"10px",
width:"fit-content"
}}>

{msg.text}

</div>

))}

</div>

<input
value={message}
onChange={(e)=>setMessage(e.target.value)}
placeholder="Type message..."
style={{padding:"10px",width:"70%"}}
/>

<button
onClick={sendMessage}
style={{
padding:"10px 20px",
marginLeft:"10px",
background:"#ff6b00",
color:"white",
border:"none"
}}
>
Send
</button>

</div>

);

}