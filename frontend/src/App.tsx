import React from "react";

function App() {
  const [message, setMessage] = React.useState("Loading...");

  React.useEffect(() => {
    fetch("http://localhost:3001")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Backend not responding"));
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#000",
        color: "#00FF88",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "6rem",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      {message}
    </div>
  );
}

export default App;
