import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { GlobalContext } from '../../context/GlobablState';
import { Button, Input, Select, Box } from '@chakra-ui/react';

const Documentation = () => {
  const { fetchDocs } = useContext(GlobalContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newDoc, setNewDoc] = useState({ title: '', content: '', folder: '' });
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState('all');

  useEffect(() => {
    // Fetch documents and folders
    fetchDocs().catch((err) => setError(err)).finally(() => setLoading(false));
    axios.get('http://localhost:3001/folders').then((res) => setFolders(res.data));
  }, []);

  const handleAddDoc = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/docs', newDoc);
      fetchDocs();  // Refresh the docs list
    } catch (err) {
      console.error('Error uploading document:', err);
    }
  };

  const handleFilterChange = (e) => {
    setSelectedFolder(e.target.value);
  };

  const filteredDocs = selectedFolder === 'all' 
    ? fetchDocs 
    : fetchDocs.filter((doc) => doc.folder === selectedFolder);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading documentation: {error.message}</p>;

  return (
    <Box>
      <h1>Manage Documentation</h1>

      {/* Document Upload Form */}
      <form onSubmit={handleAddDoc}>
        <Input 
          placeholder="Document Title" 
          value={newDoc.title} 
          onChange={(e) => setNewDoc({ ...newDoc, title: e.target.value })} 
        />
        <Input 
          placeholder="Document Content" 
          value={newDoc.content} 
          onChange={(e) => setNewDoc({ ...newDoc, content: e.target.value })} 
        />
        <Select 
          placeholder="Select Folder" 
          value={newDoc.folder} 
          onChange={(e) => setNewDoc({ ...newDoc, folder: e.target.value })}
        >
          {folders.map((folder) => (
            <option key={folder.id} value={folder.name}>
              {folder.name}
            </option>
          ))}
        </Select>
        <Button type="submit" colorScheme="blue" mt={2}>Upload Document</Button>
      </form>

      {/* Filter by Folder */}
      <Select placeholder="Filter by Folder" onChange={handleFilterChange} mt={4}>
        <option value="all">All</option>
        {folders.map((folder) => (
          <option key={folder.id} value={folder.name}>
            {folder.name}
          </option>
        ))}
      </Select>

      {/* Filtered Document List */}
      <ul>
        {filteredDocs.map((doc) => (
          <li key={doc.id}>
            <h2>{doc.title}</h2>
            <p>{doc.content}</p>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Documentation;