import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function HeroSlider(){

const slides=[
{
img:"https://images.unsplash.com/photo-1503387762-592deb58ef4e",
title:"Build Your Dream Home"
},
{
img:"https://images.unsplash.com/photo-1487958449943-2429e8be8625",
title:"Modern Architecture"
},
{
img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
title:"Luxury Construction"
}
]

return(

<div style={{height:"100vh"}}>

<Swiper autoplay={{delay:3000}} loop={true}>

{slides.map((s,i)=>(
<SwiperSlide key={i}>

<div style={{
height:"100vh",
backgroundImage:`url(${s.img})`,
backgroundSize:"cover",
backgroundPosition:"center",
display:"flex",
alignItems:"center",
justifyContent:"center",
flexDirection:"column",
color:"white"
}}>

<h1 style={{fontSize:"60px"}}>{s.title}</h1>

<button className="btn">
Start Your Project
</button>

</div>

</SwiperSlide>
))}

</Swiper>

</div>

)
}