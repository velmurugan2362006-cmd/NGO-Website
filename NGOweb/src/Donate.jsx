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
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage:
          "url('https://newslivetv.com/wp-content/uploads/2020/12/HELP-AGE-INDIA-770x578.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "30px",
          maxWidth: "500px",
          width: "90%",
          background: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(10px)",
          borderRadius: "12px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          textAlign: "center",
        }}
      >
        <h1>Donate to HelpAge India</h1>
        <p>
          Support elders across India by contributing to healthcare, shelter,
          and care programs.
        </p>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter donation amount"
          style={{
            padding: "10px",
            width: "100%",
            marginBottom: "15px",
            fontSize: "16px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={handleDonate}
          style={{
            padding: "10px 20px",
            backgroundColor: "#1a73e8",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Donate Now
        </button>
      </div>
    </div>
  );
}

export default DonateWithAmount;
