import { Link, useNavigate } from "react-router-dom";

export default function ClientSidebar(){

  const navigate = useNavigate();

  function logout(){
    localStorage.clear();
    navigate("/");
  }

  return(

    <div style={{
      width:"240px",
      height:"100vh",
      background:"#111827",
      color:"white",
      padding:"30px",
      position:"fixed"
    }}>

      <h2 style={{marginBottom:"40px"}}>Client Panel</h2>

      <div style={{
        display:"flex",
        flexDirection:"column",
        gap:"20px"
      }}>

        <Link to="/client/dashboard" style={{color:"white"}}>Dashboard</Link>

        <Link to="/submit-project" style={{color:"white"}}>
          Submit Project
        </Link>

        <Link to="/projects" style={{color:"white"}}>
          My Projects
        </Link>

        <button
          onClick={logout}
          style={{
            marginTop:"40px",
            background:"#ef4444",
            border:"none",
            padding:"10px",
            color:"white",
            borderRadius:"6px"
          }}
        >
          Logout
        </button>

      </div>

    </div>
  );
}