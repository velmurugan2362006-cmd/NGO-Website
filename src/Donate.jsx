import React, { useState } from "react";
function DonateWithAmount() {
  const [amount, setAmount] = useState("");
  const handleDonate = () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid donation amount!");
      return;
    }
    alert(`Thank you for donating ${amount}!`);
    setAmount("");
  };
  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h1>Donate to HelpAge India</h1>
      <p>Support elders across India by contributing to healthcare, shelter, and care programs.</p>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter donation amount"
        style={{ padding: "8px", width: "100%", marginBottom: "15px", fontSize: "16px" }}
      />
      <button
        onClick={handleDonate}
        style={{
          padding: "10px 20px",
          backgroundColor: "#2a9d8f",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Donate Now
      </button>
    </div>
  );
}

export default DonateWithAmount;
