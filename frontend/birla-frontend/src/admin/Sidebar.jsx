import { FaHome, FaClipboardList, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "260px",
        height: "100vh",
        background: "linear-gradient(180deg,#111,#1c1c1c)",
        color: "white",
        padding: "30px 20px",
        position: "fixed",
        left: 0,
        top: 0
      }}
    >
      <h2 style={{ marginBottom: "50px", color: "#ff6b00" }}>
        Birla Admin
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
        
        <Link className="navItem" to="/admin">
          <FaHome /> Dashboard
        </Link>

        <Link className="navItem" to="/admin/requests">
          <FaClipboardList /> Client Requests
        </Link>

        <Link className="navItem" to="/">
          <FaGlobe /> Website
        </Link>

      </div>
    </div>
  );
}