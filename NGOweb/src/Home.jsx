import React from "react";

function Home() {
  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto", textAlign: "center" }}>
      <h1>Welcome to HelpAge India</h1>

      <img
        src="https://www.aazad.com/images/story_images/original_403.png"
        alt="Helping Senior Citizens"
        style={{
          width: "100%",
          maxWidth: "500px",
          margin: "20px 0",
          borderRadius: "10px"
        }}
      />

      <p>
        We work to improve the lives of senior citizens across India with programs
        for healthcare, shelter, and community support.
      </p>

      <div id="partners" style={{ marginTop: "60px", textAlign: "left" }}>
        <h2>Our Partners</h2>
        <p>
          HelpAge India works with corporate partners, trusts, foundations,
          and individual donors to support healthcare, shelter, and elder welfare
          programs across India.
        </p>
        <ul>
          <li>Corporate CSR Partners</li>
          <li>Trusts & Foundations</li>
          <li>Individual & Community Supporters</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
