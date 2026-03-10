import { FaBell, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <div
      style={{
        height: "70px",
        background: "white",
        borderRadius: "12px",
        padding: "0 25px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
        marginBottom: "30px"
      }}
    >
      <h3>Admin Dashboard</h3>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <FaBell size={20} />
        <FaUserCircle size={25} />
      </div>
    </div>
  );
}