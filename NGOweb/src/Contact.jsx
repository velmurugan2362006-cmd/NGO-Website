import React, { useState } from "react";
function Contact() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill all details!");
      return;
    }
    const newContact = { name, email };
    if (editingIndex !== null) {
      const updatedContacts = [...contacts];
      updatedContacts[editingIndex] = newContact;
      setContacts(updatedContacts);
      setEditingIndex(null);
    } else {
      setContacts([...contacts, newContact]);
    }
    setName("");
    setEmail("");
  };
  const handleEdit = (index) => {
    setName(contacts[index].name);
    setEmail(contacts[index].email);
    setEditingIndex(index);
  };
  const handleDelete = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage:
          "url('https://www.iso9001northcarolina.com/wp-content/uploads/2021/04/Contact-ISO-9001-north-carolina-690x450.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ padding: "20px", maxWidth: "600px", width: "90%", backgroundColor: "rgba(255,255,255,0.9)", borderRadius: "8px" }}>
        <h1>Contact Us</h1>

        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: "8px", width: "100%", marginBottom: "10px", backgroundColor: "white" }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: "8px", width: "100%", marginBottom: "10px", backgroundColor: "white" }}
          />
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#2a9d8f",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {editingIndex !== null ? "Update Contact" : "Add Contact"}
          </button>
        </form>
        <h2>Contact List</h2>
        {contacts.length === 0 ? (
          <p>No contacts yet.</p>
        ) : (
          <ul style={{ padding: 0, listStyle: "none" }}>
            {contacts.map((c, i) => (
              <li
                key={i}
                style={{
                  background: "#f0f0f0",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                }}
              >
                <strong>{c.name}</strong> - {c.email}
                <div style={{ marginTop: "5px" }}>
                  <button
                    onClick={() => handleEdit(i)}
                    style={{
                      marginRight: "10px",
                      backgroundColor: "#077227ff",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      padding: "5px 10px",
                    }}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(i)}
                    style={{
                      backgroundColor: "#d1330cff",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      padding: "5px 10px",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default Contact;
