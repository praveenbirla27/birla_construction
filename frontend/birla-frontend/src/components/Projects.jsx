export default function Projects(){

const projects=[
{
img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
title:"Luxury Villa"
},
{
img:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
title:"Modern House"
},
{
img:"https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
title:"Apartment Building"
},
{
img:"https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
title:"Contemporary Home"
}
]

return(

<section style={{padding:"80px 10%",background:"#f9f9f9"}}>

<h2 style={{textAlign:"center",fontSize:"40px"}}>
Featured <span className="primary">Projects</span>
</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
gap:"30px",
marginTop:"50px"
}}>

{projects.map((p,i)=>(

<div key={i} style={{
position:"relative",
overflow:"hidden",
borderRadius:"10px",
cursor:"pointer"
}}>

<img
src={p.img}
style={{
width:"100%",
height:"300px",
objectFit:"cover",
transition:"0.5s"
}}
/>

<div style={{
position:"absolute",
bottom:"0",
width:"100%",
background:"rgba(0,0,0,0.6)",
color:"white",
padding:"15px"
}}>

<h3>{p.title}</h3>

</div>

</div>

))}

</div>

</section>

)

}
