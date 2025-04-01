import { useNavigate } from "react-router-dom";

function Navbar({ setShowPage }) {
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    setShowPage(true); // Update state to show homepage content
    navigate("/Homepage"); // Redirect to homepage
  };

  return (  
    <div style={{ width: "256px", height: "100vh", backgroundColor: "#dc2626", padding: "1rem" }}>
      <div style={{
        width: "100%",
        height: "48px",
        backgroundColor: "#b91c1c",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: "1.125rem"
      }}>
        Menu
      </div>
      <ul style={{ marginTop: "2.5rem" }}>
        <li style={{ marginBottom: "1rem" }}>
          <button
            onClick={handleDashboardClick} // Update state and navigate
            style={{
              display: "block",
              textAlign: "center",
              color: "white",
              fontWeight: "600",
              padding: "0.75rem",
              backgroundColor: "#ef4444",
              borderRadius: "0.5rem"
            }}
          >
            Dashboard
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;