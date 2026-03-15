import { useState } from "react"
import { FaBell } from "react-icons/fa"

export default function NotificationBell(){

const [open,setOpen] = useState(false)

const notifications = [
"Admin uploaded blueprint",
"Project progress updated",
"New document added"
]

return(

<div style={{position:"relative"}}>

<FaBell
size={20}
style={{cursor:"pointer"}}
onClick={()=>setOpen(!open)}
/>

{open && (

<div style={{
position:"absolute",
top:"30px",
right:"0",
background:"white",
width:"250px",
boxShadow:"0 10px 30px rgba(0,0,0,0.1)",
borderRadius:"10px",
padding:"15px"
}}>

<h4>Notifications</h4>

{notifications.map((n,i)=>(

<p key={i} style={{fontSize:"14px"}}>
{n}
</p>

))}

</div>

)}

</div>

)

}