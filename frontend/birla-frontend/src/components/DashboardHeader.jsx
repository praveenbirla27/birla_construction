import NotificationBell from "./NotificationBell"
export default function DashboardHeader(){

  return(

    <div
      style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:"40px"
      }}
    >

      <div>

        <h1 style={{margin:"0"}}>Dashboard</h1>

        <p style={{color:"#666", marginTop:"5px"}}>
          Track your construction projects
        </p>

      </div>

      <div
        className="glass"
        style={{
          padding:"10px 20px",
          fontWeight:"500"
        }}
      >
        Client
      </div>

    </div>

  )

}