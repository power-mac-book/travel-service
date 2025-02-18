import React, { useState } from "react";

const DocumentsPage = () => {
  const [file, setFile] = useState(null);
  const [documentType, setDocumentType] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file || !documentType) {
      alert("Please select a file and document type.");
      return;
    }

    const token = localStorage.getItem("token"); // 🔹 Get token

    if (!token) {
      alert("User not authenticated. Please log in.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("documentType", documentType);

    try {
      const response = await fetch("http://localhost:5000/api/documents/upload", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`, // 🔹 Send token
        },
      });

      const data = await response.json();
      console.log("Response Data:", data); // 🔹 Debugging

      if (response.ok) {
        alert("Document uploaded successfully!");
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Upload failed. Check the console for details.");
    }
  };

  return (
    <div className="container">
      <h1>Documents Page</h1>

      <label>Choose Document Type:</label>
      <select value={documentType} onChange={(e) => setDocumentType(e.target.value)}>
        <option value="">Select Type</option>
        <option value="passport">Passport</option>
        <option value="visa">Visa</option>
        <option value="ticket">Ticket</option>
      </select>

      <input type="file" onChange={handleFileChange} />

      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default DocumentsPage;
