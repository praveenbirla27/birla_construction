import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

export default function AdminLayout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "linear-gradient(135deg,#0f172a,#1e293b,#020617)",
        color: "white"
      }}
    >
      
      <Sidebar />

      <div
        style={{
          marginLeft: "260px",
          padding: "30px",
          width: "100%"
        }}
      >
        <Navbar />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            marginTop: "20px",
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
          }}
        >
          {children}
        </motion.div>

      </div>

    </div>
  );
}