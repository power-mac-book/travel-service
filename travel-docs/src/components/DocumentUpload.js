import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/documents'; // Backend API URL

const DocumentUpload = () => {
  const [file, setFile] = useState(null);
  const [documentType, setDocumentType] = useState('');
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetchDocuments();
  }, []);

  // Fetch uploaded documents
  const fetchDocuments = async () => {
    try {
      const token = localStorage.getItem('token'); // Get token from localStorage
      const response = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDocuments(response.data);
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  };

  // Handle file upload
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file || !documentType) return alert('Please select a file and document type.');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('documentType', documentType);

    try {
      const token = localStorage.getItem('token');
      await axios.post(`${API_URL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      alert('Document uploaded successfully!');
      setFile(null);
      setDocumentType('');
      fetchDocuments(); // Refresh the document list
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Failed to upload document');
    }
  };

  // Handle document delete
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert('Document deleted successfully!');
      fetchDocuments();
    } catch (error) {
      console.error('Delete failed:', error);
      alert('Failed to delete document');
    }
  };

  return (
    <div className="container">
      <h2>Upload Travel Document</h2>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
        <select value={documentType} onChange={(e) => setDocumentType(e.target.value)} required>
          <option value="">Select Document Type</option>
          <option value="passport">Passport</option>
          <option value="visa">Visa</option>
          <option value="ticket">Ticket</option>
        </select>
        <button type="submit">Upload</button>
      </form>

      <h3>Uploaded Documents</h3>
      <ul>
        {documents.map((doc) => (
          <li key={doc._id}>
            {doc.documentType} - <a href={`http://localhost:5000${doc.fileUrl}`} target="_blank" rel="noopener noreferrer">View</a>
            <button onClick={() => handleDelete(doc._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentUpload;
