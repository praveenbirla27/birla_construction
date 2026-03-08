import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

export default function BeforeAfter(){

const projects=[
{
before:"https://images.unsplash.com/photo-1480074568708-e7b720bb3f09",
after:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
title:"Luxury Villa Renovation"
},
{
before:"https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
after:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
title:"Modern House Upgrade"
}
]

return(

<section style={{padding:"80px 10%"}}>

<h2 style={{textAlign:"center",fontSize:"40px"}}>
Before & <span className="primary">After</span>
</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(350px,1fr))",
gap:"40px",
marginTop:"50px"
}}>

{projects.map((p,i)=>(

<div key={i}>

<ReactCompareSlider
itemOne={<ReactCompareSliderImage src={p.before} alt="Before"/>}
itemTwo={<ReactCompareSliderImage src={p.after} alt="After"/>}
/>

<h3 style={{marginTop:"15px"}}>{p.title}</h3>

</div>

))}

</div>

</section>

)

}