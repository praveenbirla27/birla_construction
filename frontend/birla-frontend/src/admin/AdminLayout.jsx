import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex", background: "#f4f7fe", minHeight: "100vh" }}>
      
      <Sidebar />

      <div
        style={{
          marginLeft: "300px",
          padding: "30px",
          width: "100%"
        }}
      >
        <Navbar />

        {children}
      </div>

    </div>
  );
}